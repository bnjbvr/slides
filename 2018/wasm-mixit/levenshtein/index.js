import leven from 'leven';

let DICTIONARY = [];

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
            if (Math.abs(input.length - name.length) < threshold) {
                continue;
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

function benchmark(name, dict) {
    let before = performance.now();
    initDict(dict);
    console.log(name, 'insert:', performance.now() - before);

    let result = null;
    let LIMIT = 1000;
    let i = 0;
    before = performance.now();
    for (let word of DICTIONARY) {
        result = dict.compare(word, 1);
        if (i++ > LIMIT)
            break;
    }
    console.log(name, 'compare:', performance.now() - before);
    return result;
}

let module;
import("./levenshtein.js").then(m => {
    module = m;
    return fetch('dictionary.txt');
}).then(response => {
    return response.text();
}).then(asTxt => {
    DICTIONARY = asTxt.split('\n');

    //benchmark('javascript', JsDict.new());
    //benchmark('wasm', module.Dict.new());

    let $ = document.querySelector.bind(document);
    let $input = $('#input');
    let $result = $('#result');
    let $numAnswers = $('#numAnswers');

    let prevModeIsJS = true;
    let dict = JsDict.new();
    initDict(dict);

    let $switch = $('#switch');
    $switch.onclick = () => {
        if (prevModeIsJS) {
            dict = module.Dict.new();
            $switch.innerText = 'switch to JS';
        } else {
            dict.free();
            dict = JsDict.new();
            $switch.innerText = 'switch to wasm';
        }
        initDict(dict);
    }

    let cb = () => {
        let input = $input.value;

        let before = performance.now();
        let numResp = dict.compare(input, 1);
        console.log(numResp, 'time to compare:', performance.now() - before);
        if (!numResp) {
            $numAnswers.innerText = '';
            $result.innerHTML = '';
            return;
        }

        $numAnswers.innerText = `Did you mean one of these ${numResp} word${numResp === 1?'':'s'}`;

        let markup = '';
        for (let i = 0; i < numResp; i++) {
            markup += `<li>${dict.next()}</li>`;
        }
        $result.innerHTML = markup;
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
