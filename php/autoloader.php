<?php

spl_autoload_register(
    function(string $namespaceClass): void {
        $way = "/php";
        $directoryClass = str_replace("\\", DIRECTORY_SEPARATOR, $namespaceClass);
        @include_once getcwd() . $way . DIRECTORY_SEPARATOR . "{$directoryClass}.php";
    }
);
