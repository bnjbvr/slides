let dictionary = [];

import("./levenshtein.js").then(module => {
    let $ = document.querySelector.bind(document);
    let $input = $('#input');
    let $result = $('#result');
    let $numAnswers = $('#numAnswers');

    let dict = module.Dict.new();

    (async function() {
        let response = await fetch('dictionary.txt');
        let asTxt = await response.text();
        for (let w of asTxt.split('\n')) {
            dict.insert(w);
        }
    })();

    let cb = () => {
        let input = $input.value;

        let numResp = dict.compare(input, 1);
        $numAnswers.innerText = `${numResp} answers`;

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
