import leven from 'leven';

let DICTIONARY = [];
let MODULE;
let $LOGS;

function clearLogs() {
    $LOGS.innerText = '';
}
function log(...rest) {
    $LOGS.innerText += rest.join(' ') + '\n';
}

function round2(x) {
    return (x*100|0)/100 + 'ms';
}

class JsDict {
    constructor() {
        this.entries = [];
        this.results = [];
        this.last_read = 0;
    }

    static new() { return new JsDict(); }

    insert(name) { this.entries.push(name); }

    compare(input, threshold) {
        this.results = [];
        this.last_read = 0;
        for (let name of this.entries) {
            if (input === name) {
                return 0;
            }
            if (leven(input, name) <= threshold) {
                this.results.push(name);
            }
        }
        return this.results.length;
    }

    next() {
        return this.results[this.last_read++];
    }
}

function initDict(dict) {
    for (let word of DICTIONARY) {
        dict.insert(word);
    }
}

function benchmarkOne(name, dict) {
    initDict(dict);

    const LIMIT = 10;

    let result = null;
    let i = 0;
    let time = 0;

    for (let word of DICTIONARY) {
        // Exact match.
        let before = performance.now();
        result = dict.compare(word, 1);
        time += performance.now() - before;

        // One-letter off (positive bias).
        let otherWord = word + 't';
        before = performance.now();
        result = dict.compare(otherWord, 1);
        time += performance.now() - before;

        // One-letter off (negative bias).
        otherWord = word.slice(0, word.length - 2);
        before = performance.now();
        result = dict.compare(otherWord, 1);
        time += performance.now() - before;

        if (i++ > LIMIT)
            break;
    }

    log(name, 'compare:', round2(time));
    return result;
}

function benchmark() {
    clearLogs();

    benchmarkOne("js", JsDict.new());

    let wasmDict = MODULE.Dict.new();
    benchmarkOne("wasm", wasmDict);
    wasmDict.free();
}

import("./levenshtein.js").then(m => {
    MODULE = m;
    return fetch('dictionary.txt');
}).then(response => {
    return response.text();
}).then(asTxt => {
    DICTIONARY = asTxt.split('\n');

    let $ = document.querySelector.bind(document);
    let $input = $('#input');
    let $result = $('#result');
    let $numAnswers = $('#numAnswers');
    $LOGS = $('#logs');

    let prevModeIsJS = true;
    let dict = JsDict.new();
    initDict(dict);
    log('started using JS');

    let $switch = $('#switch');
    $switch.onclick = () => {
        if (prevModeIsJS) {
            log('started using wasm');
            dict = MODULE.Dict.new();
            $switch.innerText = 'switch to JS';
        } else {
            log('started using JS');
            dict.free();
            dict = JsDict.new();
            $switch.innerText = 'switch to wasm';
        }
        prevModeIsJS = !prevModeIsJS;
        initDict(dict);
        cb();
    }

    $('#benchmark').onclick = benchmark;
    $('#clearlogs').onclick = clearLogs;

    let cb = () => {
        let input = $input.value.trim();
        if (!input.length) {
            $numAnswers.innerText = '';
            return;
        }

        let before = performance.now();
        let numResp = dict.compare(input, 2);
        log('time to perform comparisons for ', input.length, ' chars:', round2(performance.now() - before));
        if (!numResp) {
            $numAnswers.innerText = '';
            $result.innerHTML = '';
            return;
        }

        if (numResp === 1) {
            $numAnswers.innerText = `Did you mean ${dict.next()}?`;
            $result.innerHTML = '';
        } else {
            $numAnswers.innerText = `Did you mean one of these ${numResp} word${numResp === 1?'':'s'}?`;
            let markup = '';
            for (let i = 0; i < numResp; i++) {
                markup += `<li>${dict.next()}</li>`;
            }
            $result.innerHTML = markup;
        }
    };

    let fire = null;
    $input.onkeyup = () => {
        if (fire !== null) {
            return;
        }
        fire = setTimeout(() => {
            cb();
            fire = null;
        }, 100);
    };
});
