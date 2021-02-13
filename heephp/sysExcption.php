<?php
namespace heephp;

class sysExcption extends \Exception
{
    private $traces=[];
    public function __construct($msg,$code=0,$traces=[])
    {
        parent::__construct($msg.'代码：'.$code,is_int($code)?$code:404);
        $this->traces = $traces;

    }

    public function show(){
        if(!config('debug')){
            return '页面出错~<br><br><a href="http://www.heephp.com" target="_blank">heephp</a>';
        }

        $msg = $this->message;
        $code = $this->code;
        $file = $this->getFile();
        $line = $this->getLine();
        $trace = $this->getTraceAsString();
        $traces = empty($this->traces)?$this->getTrace():$this->traces;

        ob_start();
        include_once 'message/sysExcption.php';
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function __toString(){

        return $this->show();

    }

}