
                /* tslint:disable */
                import * as wasm from './levenshtein_bg';
                

                
                const TextEncoder = typeof window === 'object' && window.TextEncoder
                    ? window.TextEncoder
                    : require('util').TextEncoder;
            
            let cachedEncoder = new TextEncoder('utf-8');
        
            let cachedUint8Memory = null;
            function getUint8Memory() {
                if (cachedUint8Memory === null ||
                    cachedUint8Memory.buffer !== wasm.memory.buffer)
                    cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
                return cachedUint8Memory;
            }
        
            function passStringToWasm(arg) {
                
                const buf = cachedEncoder.encode(arg);
                const ptr = wasm.__wbindgen_malloc(buf.length);
                getUint8Memory().set(buf, ptr);
                return [ptr, buf.length];
            }
        
            let cachedUint32Memory = null;
            function getUint32Memory() {
                if (cachedUint32Memory === null ||
                    cachedUint32Memory.buffer !== wasm.memory.buffer)
                    cachedUint32Memory = new Uint32Array(wasm.memory.buffer);
                return cachedUint32Memory;
            }
        
            let cachedGlobalArgumentPtr = null;
            function globalArgumentPtr() {
                if (cachedGlobalArgumentPtr === null)
                    cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
                return cachedGlobalArgumentPtr;
            }
        
            function setGlobalArgument(arg, i) {
                const idx = globalArgumentPtr() / 4 + i;
                getUint32Memory()[idx] = arg;
            }
        
                const TextDecoder = typeof window === 'object' && window.TextDecoder
                    ? window.TextDecoder
                    : require('util').TextDecoder;
            
            let cachedDecoder = new TextDecoder('utf-8');
        
            function getStringFromWasm(ptr, len) {
                return cachedDecoder.decode(getUint8Memory().slice(ptr, ptr + len));
            }
        
            function getGlobalArgument(arg) {
                const idx = globalArgumentPtr() / 4 + arg;
                return getUint32Memory()[idx];
            }
        export class Dict {

                    constructor(ptr) {
                        this.ptr = ptr;
                    }
                
                free() {
                    const ptr = this.ptr;
                    this.ptr = 0;
                    wasm.__wbg_dict_free(ptr);
                }
            static new () {
        const ret = wasm.dict_new();
                return new Dict(ret);
                            
            }
insert (arg0) {
        const [ptr0, len0] = passStringToWasm(arg0);
                                setGlobalArgument(len0, 0);
                            try {
                    const ret = wasm.dict_insert(this.ptr, ptr0);
                    return ret;
                } finally {
                    
wasm.__wbindgen_free(ptr0, len0 * 1);

                }
            }
compare (arg0, arg1) {
        const [ptr0, len0] = passStringToWasm(arg0);
                                setGlobalArgument(len0, 0);
                            try {
                    const ret = wasm.dict_compare(this.ptr, ptr0, arg1);
                    return ret;
                } finally {
                    
wasm.__wbindgen_free(ptr0, len0 * 1);

                }
            }
next () {
        const ret = wasm.dict_next(this.ptr);
                
                            const len = getGlobalArgument(0);
                            const realRet = getStringFromWasm(ret, len);
                            wasm.__wbindgen_free(ret, len * 1);
                            return realRet;
                        
            }
}
export function __wbindgen_throw (ptr, len) {
                        throw new Error(getStringFromWasm(ptr, len));
                    }

                