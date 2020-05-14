<?php

namespace app\index\controller;

use heephp\controller;

class index extends controller {

    function index(){
        return "<html><header><title>欢迎使用HeePHP框架</title></header><body style='margin: 20px 10px;padding: 10px 30px;'><h1>欢迎使用HeePHP框架！<small>V".VERSION."</small></h1><h3>简单、高效，一用就上瘾</h3><br><br>".'<a href="http://doc.heephp.com" target="_blank">帮助文档</a> <a href="http://bbs.heephp.com" target="_blank">在线论坛</a> <a href="http://www.heephp.com" target="_blank">联系我们</a> <a href="http://www.heephp.com" target="_blank">heephp</a>
'."</body></html>";
    }

}