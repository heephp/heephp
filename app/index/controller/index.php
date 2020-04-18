<?php

namespace app\index\controller;

use heephp\controller;

class index extends controller {

    function index(){
        return "<html><header><title>欢迎使用HeePHP框架</title></header><body style='margin: 20px 10px;padding: 10px 30px;'><h3>欢迎使用HeePHP框架！</h3>".'<a href="http://doc.heephp.com">帮助文档</a> <a href="http://bbs.heephp.com">在线论坛</a> <a href="http://www.heephp.com">联系我们</a> <a href="http://www.heephp.com">heephp</a>
'."</body></html>";
    }

}