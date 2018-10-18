/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./levenshtein_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			promises.push(installedWasmModuleData ||
/******/ 				(installedWasmModules[wasmModuleId] = fetch(__webpack_require__.p + "" + {"./levenshtein_bg.wasm":"067dafa7b7834edfaaab"}[wasmModuleId] + ".module.wasm").then(function(response) {
/******/ 					if(WebAssembly.compileStreaming) {
/******/ 						return WebAssembly.compileStreaming(response);
/******/ 					} else {
/******/ 						return response.arrayBuffer().then(function(bytes) { return WebAssembly.compile(bytes); });
/******/ 					}
/******/ 				}).then(function(module) { __webpack_require__.w[wasmModuleId] = module; }))
/******/ 			);
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var leven__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leven */ \"./node_modules/leven/index.js\");\n/* harmony import */ var leven__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leven__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet DICTIONARY = [];\nlet MODULE;\nlet $LOGS;\n\nfunction clearLogs() {\n    $LOGS.innerText = '';\n}\nfunction log(...rest) {\n    $LOGS.innerText += rest.join(' ') + '\\n';\n}\n\nfunction round2(x) {\n    return (x*100|0)/100 + 'ms';\n}\n\nclass JsDict {\n    constructor() {\n        this.entries = [];\n        this.results = [];\n        this.last_read = 0;\n    }\n\n    static new() { return new JsDict(); }\n\n    insert(name) { this.entries.push(name); }\n\n    compare(input, threshold) {\n        this.results = [];\n        this.last_read = 0;\n        for (let name of this.entries) {\n            if (input === name) {\n                return 0;\n            }\n            if (leven__WEBPACK_IMPORTED_MODULE_0___default()(input, name) <= threshold) {\n                this.results.push(name);\n            }\n        }\n        return this.results.length;\n    }\n\n    next() {\n        return this.results[this.last_read++];\n    }\n}\n\nfunction initDict(dict) {\n    for (let word of DICTIONARY) {\n        dict.insert(word);\n    }\n}\n\nfunction benchmarkOne(name, dict) {\n    initDict(dict);\n\n    const LIMIT = 10;\n\n    let result = null;\n    let i = 0;\n    let time = 0;\n\n    for (let word of DICTIONARY) {\n        // Exact match.\n        let before = performance.now();\n        result = dict.compare(word, 1);\n        time += performance.now() - before;\n\n        // One-letter off (positive bias).\n        let otherWord = word + 't';\n        before = performance.now();\n        result = dict.compare(otherWord, 1);\n        time += performance.now() - before;\n\n        // One-letter off (negative bias).\n        otherWord = word.slice(0, word.length - 2);\n        before = performance.now();\n        result = dict.compare(otherWord, 1);\n        time += performance.now() - before;\n\n        if (i++ > LIMIT)\n            break;\n    }\n\n    log(name, 'compare:', round2(time));\n    return result;\n}\n\nfunction benchmark() {\n    clearLogs();\n\n    benchmarkOne(\"js\", JsDict.new());\n\n    let wasmDict = MODULE.Dict.new();\n    benchmarkOne(\"wasm\", wasmDict);\n    wasmDict.free();\n}\n\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./levenshtein.js */ \"./levenshtein.js\")).then(m => {\n    MODULE = m;\n    return fetch('dictionary.txt');\n}).then(response => {\n    return response.text();\n}).then(asTxt => {\n    DICTIONARY = asTxt.split('\\n');\n\n    let $ = document.querySelector.bind(document);\n    let $input = $('#input');\n    let $result = $('#result');\n    let $numAnswers = $('#numAnswers');\n    $LOGS = $('#logs');\n\n    let prevModeIsJS = true;\n    let dict = JsDict.new();\n    initDict(dict);\n    log('started using JS');\n\n    let $switch = $('#switch');\n    $switch.onclick = () => {\n        if (prevModeIsJS) {\n            log('started using wasm');\n            dict = MODULE.Dict.new();\n            $switch.innerText = 'switch to JS';\n        } else {\n            log('started using JS');\n            dict.free();\n            dict = JsDict.new();\n            $switch.innerText = 'switch to wasm';\n        }\n        prevModeIsJS = !prevModeIsJS;\n        initDict(dict);\n        cb();\n    }\n\n    $('#benchmark').onclick = benchmark;\n    $('#clearlogs').onclick = clearLogs;\n\n    let cb = () => {\n        let input = $input.value.trim();\n        if (!input.length) {\n            $numAnswers.innerText = '';\n            return;\n        }\n\n        let before = performance.now();\n        let numResp = dict.compare(input, 2);\n        log('time to perform comparisons for ', input.length, ' chars:', round2(performance.now() - before));\n        if (!numResp) {\n            $numAnswers.innerText = '';\n            $result.innerHTML = '';\n            return;\n        }\n\n        if (numResp === 1) {\n            $numAnswers.innerText = `Did you mean ${dict.next()}?`;\n            $result.innerHTML = '';\n        } else {\n            $numAnswers.innerText = `Did you mean one of these ${numResp} word${numResp === 1?'':'s'}?`;\n            let markup = '';\n            for (let i = 0; i < numResp; i++) {\n                markup += `<li>${dict.next()}</li>`;\n            }\n            $result.innerHTML = markup;\n        }\n    };\n\n    let fire = null;\n    $input.onkeyup = () => {\n        if (fire !== null) {\n            return;\n        }\n        fire = setTimeout(() => {\n            cb();\n            fire = null;\n        }, 100);\n    };\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/leven/index.js":
/*!*************************************!*\
  !*** ./node_modules/leven/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable no-nested-ternary */\n\nvar arr = [];\nvar charCodeCache = [];\n\nmodule.exports = function (a, b) {\n\tif (a === b) {\n\t\treturn 0;\n\t}\n\n\tvar swap = a;\n\n\t// Swapping the strings if `a` is longer than `b` so we know which one is the\n\t// shortest & which one is the longest\n\tif (a.length > b.length) {\n\t\ta = b;\n\t\tb = swap;\n\t}\n\n\tvar aLen = a.length;\n\tvar bLen = b.length;\n\n\tif (aLen === 0) {\n\t\treturn bLen;\n\t}\n\n\tif (bLen === 0) {\n\t\treturn aLen;\n\t}\n\n\t// Performing suffix trimming:\n\t// We can linearly drop suffix common to both strings since they\n\t// don't increase distance at all\n\t// Note: `~-` is the bitwise way to perform a `- 1` operation\n\twhile (aLen > 0 && (a.charCodeAt(~-aLen) === b.charCodeAt(~-bLen))) {\n\t\taLen--;\n\t\tbLen--;\n\t}\n\n\tif (aLen === 0) {\n\t\treturn bLen;\n\t}\n\n\t// Performing prefix trimming\n\t// We can linearly drop prefix common to both strings since they\n\t// don't increase distance at all\n\tvar start = 0;\n\n\twhile (start < aLen && (a.charCodeAt(start) === b.charCodeAt(start))) {\n\t\tstart++;\n\t}\n\n\taLen -= start;\n\tbLen -= start;\n\n\tif (aLen === 0) {\n\t\treturn bLen;\n\t}\n\n\tvar bCharCode;\n\tvar ret;\n\tvar tmp;\n\tvar tmp2;\n\tvar i = 0;\n\tvar j = 0;\n\n\twhile (i < aLen) {\n\t\tcharCodeCache[start + i] = a.charCodeAt(start + i);\n\t\tarr[i] = ++i;\n\t}\n\n\twhile (j < bLen) {\n\t\tbCharCode = b.charCodeAt(start + j);\n\t\ttmp = j++;\n\t\tret = j;\n\n\t\tfor (i = 0; i < aLen; i++) {\n\t\t\ttmp2 = bCharCode === charCodeCache[start + i] ? tmp : tmp + 1;\n\t\t\ttmp = arr[i];\n\t\t\tret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;\n\t\t}\n\t}\n\n\treturn ret;\n};\n\n\n//# sourceURL=webpack:///./node_modules/leven/index.js?");

/***/ })

/******/ });