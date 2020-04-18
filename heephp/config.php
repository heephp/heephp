<?php
namespace heephp;
class config{

    private static $config=array();

    private function __construct()
    {

        if(is_file('./../app/config.php'))
            config::$config = require './../app/config.php';

        aop('config_init');
    }

    private function _get(){
        return config::$config;
    }

    public static function get($name=''){

        $instance = new self();
        $configs= config::$config;

        if(empty($name)) {
            return $configs;
        }
        //var_dump($configs);
        if(strstr($name,'.')!=''){
            $names=explode('.',$name);
            if(empty($names[1]))
                return $configs[$names[0]];
            return $configs[$names[0]][$names[1]];
        }
        //var_dump($configs);
        return $configs[$name];
    }

}