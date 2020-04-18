<?php
//是否是多应用
define('APPS',true);
//是否pathinfo模式
define('PATHINFO',true);

include_once './../heephp/heephp.php';
$sys = new \heephp\heephp();
$sys->run();