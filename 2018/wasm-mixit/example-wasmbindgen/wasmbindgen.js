
                /* tslint:disable */
                import * as wasm from './wasmbindgen_bg';
                

                
                const TextDecoder = typeof window === 'object' && window.TextDecoder
                    ? window.TextDecoder
                    : require('util').TextDecoder;
            
            let cachedDecoder = new TextDecoder('utf-8');
        
            let cachedUint8Memory = null;
            function getUint8Memory() {
                if (cachedUint8Memory === null ||
                    cachedUint8Memory.buffer !== wasm.memory.buffer)
                    cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
                return cachedUint8Memory;
            }
        
            function getStringFromWasm(ptr, len) {
                return cachedDecoder.decode(getUint8Memory().slice(ptr, ptr + len));
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
        
            function getGlobalArgument(arg) {
                const idx = globalArgumentPtr() / 4 + arg;
                return getUint32Memory()[idx];
            }
        export function __wbg_f_alert_alert_n (arg0) {

                                let len0 = getGlobalArgument(0);
                                let v0 = getStringFromWasm(arg0, len0);
                            alert(v0)
}

                const TextEncoder = typeof window === 'object' && window.TextEncoder
                    ? window.TextEncoder
                    : require('util').TextEncoder;
            
            let cachedEncoder = new TextEncoder('utf-8');
        
            function passStringToWasm(arg) {
                
                const buf = cachedEncoder.encode(arg);
                const ptr = wasm.__wbindgen_malloc(buf.length);
                getUint8Memory().set(buf, ptr);
                return [ptr, buf.length];
            }
        
            function setGlobalArgument(arg, i) {
                const idx = globalArgumentPtr() / 4 + i;
                getUint32Memory()[idx] = arg;
            }
        export function hello_world  (arg0) {
        const [ptr0, len0] = passStringToWasm(arg0);
                                setGlobalArgument(len0, 0);
                            try {
                    const ret = wasm.hello_world(ptr0);
                    return ret;
                } finally {
                    
wasm.__wbindgen_free(ptr0, len0 * 1);

                }
            }

export class HelloFactory {

                    constructor(ptr) {
                        this.ptr = ptr;
                    }
                
                free() {
                    const ptr = this.ptr;
                    this.ptr = 0;
                    wasm.__wbg_hellofactory_free(ptr);
                }
            static new (arg0) {
        const [ptr0, len0] = passStringToWasm(arg0);
                                setGlobalArgument(len0, 0);
                            const ret = wasm.hellofactory_new(ptr0);
                return new HelloFactory(ret);
                            
            }
say_hello () {
        const ret = wasm.hellofactory_say_hello(this.ptr);
                return ret;
            }
}
export function __wbindgen_throw (ptr, len) {
                        throw new Error(getStringFromWasm(ptr, len));
                    }

                