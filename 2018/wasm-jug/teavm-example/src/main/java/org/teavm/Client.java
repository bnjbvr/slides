package org.teavm;

import org.teavm.interop.Import;
import org.teavm.interop.Export;

public class Client {
    @Import(name="get_rhs")
    private static native int get_rhs();

    @Export(name="add_java")
    public static int add_java(int a) {
        return a + get_rhs();
    }

    public static void main(String[] args) {
    }
}
