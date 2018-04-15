all:
	cargo +nightly build --target wasm32-unknown-unknown --release
	wasm-bindgen target/wasm32-unknown-unknown/release/wasmbindgen.wasm --out-dir .
