#[no_mangle]
pub extern fn add_one(a: u32) -> u32 {
    a + 1
}

static mut MEMORY: &'static mut [u8] = &mut [0; 1024];

#[no_mangle]
pub extern fn fill_mem(index: usize, val: u8) {
    unsafe {
        MEMORY[index] = val;
    }
}

extern {
    fn console(index: usize);
}

#[no_mangle]
pub extern fn hello_world(index: usize, len: usize) {
    // Reconstruct string from memory.
    let addr = unsafe { &MEMORY[index] };
    let as_slice = unsafe { ::std::slice::from_raw_parts(addr as *const u8, len) };
    let as_string = unsafe { ::std::str::from_utf8_unchecked(as_slice) };

    // Business code.
    let formatted = format!("Hello, {}", as_string);

    // Put new string back into memory.
    let mut i: usize = 0;
    for byte in formatted.bytes() {
        unsafe { MEMORY[len + i] = byte };
        i += 1;
    }

    // Business code again.
    unsafe { console(len) };
}
