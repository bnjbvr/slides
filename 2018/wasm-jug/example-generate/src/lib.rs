extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
fn alert(s: &str);
#[wasm_bindgen(js_namespace = console, js_name = log)]
fn console_log(x: u32);
}

#[wasm_bindgen]
pub fn greet(s: &str) {
    console_log(42);
    let hello_s = format!("Hello, {}!", s);
    alert(&hello_s);
}
