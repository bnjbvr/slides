#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(msg: &str);
}

#[wasm_bindgen]
pub extern fn hello_world(name: &str) {
    let formatted = format!("Hello, {}", name);
    alert(&formatted);
}

#[wasm_bindgen]
pub struct HelloFactory {
    name: String
}
#[wasm_bindgen]
impl HelloFactory {
    pub fn new(name: String) -> HelloFactory {
        HelloFactory { name: name }
    }
    pub fn say_hello(&self) {
        alert(&format!("Hello, {}", self.name));
    }
}
