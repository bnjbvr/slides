(module
  (type $type0 (func (result i32)))
  (type $type1 (func (param i32) (result i32)))
  (type $type2 (func (param i32)))
  (type $type3 (func))

  ;; function #0
  (func $get_rhs (import "" "get_rhs") (type $type0))

  ;; function #1
  (func $add_java (export "add_java") (type $type1)
    (local i32 i32)
    (block i32
      (set_local 2
        (call $otbw_WasmRuntime_allocStack
          (i32.const 0)))
      (i32.store align=4
        (get_local 2)
        (i32.const 0))
      ;; org/teavm/Client.java:12
      (set_local 1
        (call $get_rhs))
      ;; org/teavm/Client.java:12
      (set_local 0
        (if i32
          ;; org/teavm/Client.java:12
          (i32.eq
            (i32.load align=4
              (get_local 2))
            (i32.const 0))
          (then
            (i32.add
              (get_local 0)
              (get_local 1)))
          (else
            (i32.const 0))))
      (i32.store align=4
        (i32.const 884)
        (i32.sub
          (get_local 2)
          (i32.const 4)))
      ;; org/teavm/Client.java:12
      (return
        (get_local 0))))

  ;; function #2
  (func $ot_Client_main (export "main") (type $type2)
    ;; org/teavm/Client.java:16
    (return))

  ;; function #3
  (func $otbw_WasmRuntime_allocStack (type $type1)
    (local i32)
    (block i32
      ;; org/teavm/backend/wasm/WasmRuntime.java:246
      (set_local 1
        (i32.add
          (i32.load align=4
            ;; org/teavm/backend/wasm/WasmRuntime.java:246
            (i32.const 884))
          (i32.const 4)))
      ;; org/teavm/backend/wasm/WasmRuntime.java:247
      (i32.store align=4
        ;; org/teavm/backend/wasm/WasmRuntime.java:247
        (i32.const 884)
        (i32.add
          (get_local 1)
          ;; org/teavm/backend/wasm/WasmRuntime.java:247
          (i32.add
            ;; org/teavm/backend/wasm/WasmRuntime.java:247
            (i32.shl
              (get_local 0)
              (i32.const 2))
            (i32.const 4))))
      (i32.store align=4
        (i32.load align=4
          ;; org/teavm/backend/wasm/WasmRuntime.java:248
          (i32.const 884))
        (get_local 0))
      ;; org/teavm/backend/wasm/WasmRuntime.java:249
      (return
        (get_local 1))))

  ;; function #4
  (func $otbw_WasmRuntime__clinit_ (type $type3)
    (block
      ;; org/teavm/backend/wasm/WasmRuntime.java:27
      (i32.store align=4
        ;; org/teavm/backend/wasm/WasmRuntime.java:27
        (i32.const 884)
        (i32.const 2304))))

  ;; function #5
  (func $otr_GC_getAvailableChunkIfPossible (type $type1)
    (local i32)
    (block i32
      (if
        ;; org/teavm/runtime/GC.java:95
        (i32.eq
          (i32.load align=4
            ;; org/teavm/runtime/GC.java:95
            (i32.const 1200))
          (i32.const 0))
        (then
          ;; org/teavm/runtime/GC.java:96
          (return
            (i32.const 0))))
      (block $block_0
        (block $block_1
          (loop $block_2
            (if
              ;; org/teavm/runtime/GC.java:99
              (i32.eq
                (i32.add
                  (i32.load align=4
                    ;; org/teavm/runtime/GC.java:99
                    (i32.const 1192))
                  (get_local 0))
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:99
                  (i32.const 1188)))
              (then
                ;; org/teavm/runtime/GC.java:100
                (br $block_0)))
            (if
              (i32.lt_u
                (i32.add
                  (i32.load align=4
                    ;; org/teavm/runtime/GC.java:102
                    (i32.const 1192))
                  ;; org/teavm/runtime/GC.java:102
                  (i32.add
                    (get_local 0)
                    (i32.const 8)))
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:102
                  (i32.const 1188)))
              (then
                ;; org/teavm/runtime/GC.java:103
                (br $block_0)))
            ;; org/teavm/runtime/GC.java:105
            (set_local 1
              (i32.sub
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:105
                  (i32.const 1200))
                (i32.const 1)))
            ;; org/teavm/runtime/GC.java:105
            (i32.store align=4
              ;; org/teavm/runtime/GC.java:105
              (i32.const 1200)
              (get_local 1))
            (if
              ;; org/teavm/runtime/GC.java:105
              (i32.eq
                (get_local 1)
                (i32.const 0))
              (then
                ;; org/teavm/runtime/GC.java:105
                (br $block_1)))
            ;; org/teavm/runtime/GC.java:108
            (i32.store align=4
              ;; org/teavm/runtime/GC.java:108
              (i32.const 1204)
              ;; org/teavm/runtime/GC.java:108
              (i32.sub
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:108
                  (i32.const 1204))
                (i32.load offset=4 align=4
                  (i32.load align=4
                    ;; org/teavm/runtime/GC.java:108
                    (i32.const 1192)))))
            ;; org/teavm/runtime/GC.java:109
            (i32.store align=4
              ;; org/teavm/runtime/GC.java:109
              (i32.const 1196)
              (i32.add
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:109
                  (i32.const 1196))
                (i32.mul
                  (i32.const 1)
                  (i32.const 4))))
            ;; org/teavm/runtime/GC.java:110
            (i32.store align=4
              ;; org/teavm/runtime/GC.java:110
              (i32.const 1192)
              (i32.load align=4
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:110
                  (i32.const 1196))))
            ;; org/teavm/runtime/GC.java:111
            (i32.store align=4
              ;; org/teavm/runtime/GC.java:111
              (i32.const 1188)
              (i32.add
                (i32.load align=4
                  ;; org/teavm/runtime/GC.java:111
                  (i32.const 1192))
                (i32.load offset=4 align=4
                  (i32.load align=4
                    ;; org/teavm/runtime/GC.java:111
                    (i32.const 1192)))))
            (br $block_2)))
        ;; org/teavm/runtime/GC.java:106
        (return
          (i32.const 0)))
      ;; org/teavm/runtime/GC.java:113
      (return
        (i32.const 1))))

  ;; function #6
  (func $otr_GC__clinit_ (type $type3)
    (block
      ;; org/teavm/runtime/GC.java:33
      (i32.store align=4
        ;; org/teavm/runtime/GC.java:33
        (i32.const 1204)
        ;; org/teavm/runtime/GC.java:33
        (i32.wrap/i64
          (i64.const 32961348)))
      ;; org/teavm/runtime/GC.java:54
      (i32.store align=4
        ;; org/teavm/runtime/GC.java:54
        (i32.const 1192)
        (i32.const 593084))
      ;; org/teavm/runtime/GC.java:55
      (i32.store align=4
        (i32.load align=4
          ;; org/teavm/runtime/GC.java:55
          (i32.const 1192))
        (i32.const 0))
      ;; org/teavm/runtime/GC.java:56
      (i32.store offset=4 align=4
        (i32.load align=4
          ;; org/teavm/runtime/GC.java:56
          (i32.const 1192))
        ;; org/teavm/runtime/GC.java:56
        (i32.wrap/i64
          (i64.const 32961348)))
      ;; org/teavm/runtime/GC.java:57
      (i32.store align=4
        ;; org/teavm/runtime/GC.java:57
        (i32.const 1188)
        (i32.add
          (i32.load align=4
            ;; org/teavm/runtime/GC.java:57
            (i32.const 1192))
          (i32.load offset=4 align=4
            (i32.load align=4
              ;; org/teavm/runtime/GC.java:57
              (i32.const 1192)))))
      ;; org/teavm/runtime/GC.java:58
      (i32.store align=4
        ;; org/teavm/runtime/GC.java:58
        (i32.const 1196)
        (i32.const 67840))
      ;; org/teavm/runtime/GC.java:59
      (i32.store align=4
        (i32.load align=4
          ;; org/teavm/runtime/GC.java:59
          (i32.const 1196))
        (i32.load align=4
          ;; org/teavm/runtime/GC.java:59
          (i32.const 1192)))
      ;; org/teavm/runtime/GC.java:60
      (i32.store align=4
        ;; org/teavm/runtime/GC.java:60
        (i32.const 1200)
        (i32.const 1))
      ;; org/teavm/runtime/GC.java:61
      (drop
        (call $otr_GC_getAvailableChunkIfPossible
          (i32.const 0)))))

  ;; function #7
  (func $sys_catchException (export "sys_catchException") (type $type0)
    (local i32)
    (block i32
      ;; org/teavm/runtime/ExceptionHandling.java:36
      (set_local 0
        (i32.load align=4
          (i32.const 1340)))
      ;; org/teavm/runtime/ExceptionHandling.java:37
      (i32.store align=4
        ;; org/teavm/runtime/ExceptionHandling.java:37
        (i32.const 1340)
        (i32.const 0))
      ;; org/teavm/runtime/ExceptionHandling.java:38
      (return
        (get_local 0))))

  ;; function #8
  (func $supertypeof_ot_Client (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 21))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 23))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #9
  (func $supertypeof_jl_Object (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 0))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 42))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #10
  (func $supertypeof_Arr_C (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 28))))
    (return
      (if i32
        (i32.eq
          (get_local 0)
          (i32.const 0))
        (then
          (i32.const 0))
        (else
          (call $supertypeof_C
            (get_local 0))))))

  ;; function #11
  (func $supertypeof_C (type $type1)
    (return
      (i32.eq
        (get_local 0)
        (i32.const 488))))

  ;; function #12
  (func $supertypeof_jl_String (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 27))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 29))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #13
  (func $supertypeof_otbw_WasmRuntime (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 23))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 25))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #14
  (func $supertypeof_otr_Allocator (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 29))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 31))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #15
  (func $supertypeof_otr_GC (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 31))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 33))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #16
  (func $supertypeof_otr_ExceptionHandling (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 33))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 35))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #17
  (func $supertypeof_otr_ShadowStack (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 35))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 37))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #18
  (func $supertypeof_otr_Mutator (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 37))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 39))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #19
  (func $supertypeof_otr_MarkQueue (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 16))))
    (if
      (i32.lt_s
        (get_local 0)
        (i32.const 39))
      (then
        (return
          (i32.const 0))))
    (if
      (i32.ge_s
        (get_local 0)
        (i32.const 41))
      (then
        (return
          (i32.const 0))))
    (return
      (i32.const 1)))

  ;; function #20
  (func $supertypeof_Arr_jl_String (type $type1)
    (set_local 0
      (i32.load align=4
        (i32.add
          (get_local 0)
          (i32.const 28))))
    (return
      (if i32
        (i32.eq
          (get_local 0)
          (i32.const 0))
        (then
          (i32.const 0))
        (else
          (call $supertypeof_jl_String
            (get_local 0))))))

  ;; function #21
  (func $initclass_otbw_WasmRuntime (type $type3)
    (block $block_0
      (br_if $block_0
        (i32.and
          (i32.load align=4
            (i32.const 996))
          (i32.const 1)))
      (i32.store align=4
        (i32.const 996)
        (i32.or
          (i32.load align=4
            (i32.const 996))
          (i32.const 1)))
      (call $otbw_WasmRuntime__clinit_)))

  ;; function #22
  (func $initclass_otr_GC (type $type3)
    (block $block_0
      (br_if $block_0
        (i32.and
          (i32.load align=4
            (i32.const 1292))
          (i32.const 1)))
      (i32.store align=4
        (i32.const 1292)
        (i32.or
          (i32.load align=4
            (i32.const 1292))
          (i32.const 1)))
      (call $otr_GC__clinit_)))

  ;; function #23
  (func $__start__ (type $type3)
    (call $initclass_otbw_WasmRuntime)
    (call $initclass_otr_GC))

  (table 15 anyfunc)

  (memory (export "memory") 512)

  (elem (i32.const 0)
    $supertypeof_C
    $supertypeof_jl_String
    $supertypeof_Arr_C
    $supertypeof_jl_Object
    $supertypeof_ot_Client
    $supertypeof_otbw_WasmRuntime
    $initclass_otbw_WasmRuntime
    $supertypeof_otr_Allocator
    $supertypeof_otr_GC
    $initclass_otr_GC
    $supertypeof_otr_ExceptionHandling
    $supertypeof_otr_ShadowStack
    $supertypeof_otr_Mutator
    $supertypeof_otr_MarkQueue
    $supertypeof_Arr_jl_String)

  (data (i32.const 256)
      "\00\00\00\80\00\00\00\00\01\00\00\00\02\00\00\00\04\00\00\00\03\00\00\00\0f\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00\03\00\00\00\04\00\00\00\05\00\00\00\06\00\00\00\07\00\00\00\08\00\00\003\00\00\80\00\00\00\00\d4\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\80\00\00\00\00h\01\00\00\00\00\00\00\00\00\00\80\00\00\00\00\10\00\00\00j\00a\00v\00a\00.\00l\00a\00n\00g\00.\00S\00t\00r\00i\00n\00g\00\01\00\08\00\00\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\1b\00\00\00\ba\b1\aa\aaX\01\00\00\00\00\00\00\f0\07\00\00\01\00\00\00\ff\ff\ff\ff\00\00\00\00\00\00\00\00\94\01\00\00\00\00\00\00\00\00\00\80\00\00\00\00\04\00\00\00c\00h\00a\00r\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00"
      "@\01\00\00\00\00\00\00H\02\00\00\00\00\00\00\ff\ff\ff\ff\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\004\02\00\00\00\00\00\00\00\00\00\80\00\00\00\00\02\00\00\00[\00C\00\00\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\00\00\00\00\00\00\00\00\ae\aa\aa\aa$\02\00\00\e8\01\00\00\00\00\00\00\02\00\00\00\ff\ff\ff\ff\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\94\02\00\00\00\00\00\00I\00\00\80\00\00\00\00\10\00\00\00j\00a\00v\00a\00.\00l\00a\00n\00g\00.\00O\00b\00j\00e\00c\00t\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\00\00\00\00\a2\aa\aa\aa\84\02\00\00\00\00\00\00\00\00\00\00\03\00\00\00\ff\ff\ff\ff\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80"
      "\00\00\00\00\0c\03\00\00\00\00\00\00I\00\00\80\00\00\00\00\10\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00C\00l\00i\00e\00n\00t\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\15\00\00\00\a2\bf\aa\aa\fc\02\00\00\00\00\00\00\00\00\00\00\04\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\88\03\00\00\00\00\00\00I\00\00\80\00\00\00\00\"\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00b\00a\00c\00k\00e\00n\00d\00.\00w\00a\00s\00m\00.\00W\00a\00s\00m\00R\00u\00n\00t\00i\00m\00e\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\17\00\00\00\a2\bd\aa\aax\03\00\00\00\00\00\00\00\00\00\00\05\00\00\00"
      "\06\00\00\00\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00$\04\00\00\00\00\00\00I\00\00\80\00\00\00\00\1b\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00A\00l\00l\00o\00c\00a\00t\00o\00r\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\1d\00\00\00\a2\b7\aa\aa\14\04\00\00\00\00\00\00\00\00\00\00\07\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\c8\04\00\00\00\00\00\00I\00\00\80\00\00\00\00\14\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00G\00C\00\00\00\00\00"
      "\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00\1f\00\00\00\a2\b5\aa\aa\b8\04\00\00\00\00\00\00\00\00\00\00\08\00\00\00\09\00\00\00\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00P\05\00\00\00\00\00\00I\00\00\80\00\00\00\00#\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00E\00x\00c\00e\00p\00t\00i\00o\00n\00H\00a\00n\00d\00l\00i\00n\00g\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00!\00\00\00\a2\8b\aa\aa@\05\00\00\00\00\00\00\00\00\00\00\0a\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\f4\05\00\00\00\00\00\00I\00\00\80\00\00\00\00\1d\00\00\00"
      "o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00S\00h\00a\00d\00o\00w\00S\00t\00a\00c\00k\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00#\00\00\00\a2\89\aa\aa\e4\05\00\00\00\00\00\00\00\00\00\00\0b\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\8c\06\00\00\00\00\00\00I\00\00\80\00\00\00\00\19\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00M\00u\00t\00a\00t\00o\00r\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00%\00\00\00\a2\8f\aa\aa|\06\00\00\00\00\00\00\00\00\00\00\0c\00\00\00\ff\ff\ff\ff\c0\02\00\00"
      "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00(\07\00\00\00\00\00\00I\00\00\80\00\00\00\00\1b\00\00\00o\00r\00g\00.\00t\00e\00a\00v\00m\00.\00r\00u\00n\00t\00i\00m\00e\00.\00M\00a\00r\00k\00Q\00u\00e\00u\00e\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\00'\00\00\00\a2\8d\aa\aa\18\07\00\00\00\00\00\00\00\00\00\00\0d\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\003\00\00\80\00\00\00\00\bc\07\00\00\00\00\00\00I\00\00\80\00\00\00\00\13\00\00\00[\00L\00j\00a\00v\00a\00.\00l\00a\00n\00g\00.\00S\00t\00r\00i\00n\00g\00;\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\00\00\00\00"
      "\00\00\00\00\ae\aa\aa\aa\ac\07\00\00\98\01\00\00\00\00\00\00\0e\00\00\00\ff\ff\ff\ff\c0\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\008\08\00\00H\08\00\00\fc\02\00\00|\08\00\00\0c\00\00\003\00\00\80\00\00\00\00X\08\00\00\00\00\00\00I\00\00\80\00\00\00\00\0b\00\00\00C\00l\00i\00e\00n\00t\00.\00j\00a\00v\00a\00\00\003\00\00\80\00\00\00\00\8c\08\00\00\00\00\00\00I\00\00\80\00\00\00\00\08\00\00\00a\00d\00d\00_\00j\00a\00v\00a\00\03\00\00\00\00\00\00\00P\01\00\00T\01\00\00<\05\00\00")
  (start $__start__)
)