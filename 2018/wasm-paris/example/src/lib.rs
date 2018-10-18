extern {
    fn console_log(x: u32);
}

#[no_mangle]
pub extern fn add_one(a: u32) -> u32 {
    unsafe { console_log(a) };
    a + 1
}
