var seen = new Set();

var wasmImports = {
  env: {
    print_dom: function print_dom (key, value) {
        if (!seen.has(key)) {
            log(`fibo(${key}) = ${value}`);
            seen.add(key);
        }
    }
  }
};

WebAssembly.compile(wasmCode)
.then(module => WebAssembly.instantiate(module, wasmImports))
.then(instance => {
    let final = instance.exports.fibo(30);
    log(`final result = ${final}`);
})
