/* tslint:disable */
import * as wasm from './example_generate_bg';

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_alert_23462ca7787c3d46(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    alert(varg0);
}

const __wbg_log_da9afe694a124269_target = console.log;

export function __wbg_log_da9afe694a124269(arg0) {
    __wbg_log_da9afe694a124269_target(arg0);
}

let cachedTextEncoder = new TextEncoder('utf-8');

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}
/**
* @param {string} arg0
* @returns {void}
*/
export function greet(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
    try {
        return wasm.greet(ptr0, len0);

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

