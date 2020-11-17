<?php
namespace heephp;

class sysExcption extends \Error
{
    private $traces=[];
    public function __construct($msg,$code=0,$traces=[])
    {
        parent::__construct('错误代码：'.$code.'错误消息：'.$msg,is_int($code)?$code:404);
        $this->traces = $traces;
        $this->show();
        exit;
    }

    public function show(){

        if(!config('debug')){
            echo '页面出错~<br><br><a href="http://www.heephp.com" target="_blank">heephp</a>';
            return;
        }

        $msg = $this->message;
        $code = $this->code;
        $file = $this->getFile();
        $line = $this->getLine();
        $trace = $this->getTraceAsString();
        $traces = empty($this->traces)?$this->getTrace():$this->traces;

        include_once 'message/sysExcption.php';
    }

}