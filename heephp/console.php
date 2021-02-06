<?php
namespace heephp;

class console{

    public function __construct()
    {
        define('STDIN', fopen('php://stdin', 'r'));
        define('STDOUT', fopen('php://stdout', 'w'));
        define('STDERR', fopen('php://stderr', 'w'));
    }

    public static function parms(){
        return request('ser.argv');
    }

    public static function option($name){
        $ov = getopt($name);
        return $ov;
    }

    public static function write($name){
        fwrite(STDOUT, $name);
    }

    public static function read(){
        return fgets(STDIN);
    }

}