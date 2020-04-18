<?php
namespace heephp;
use heephp\sysExcption;

class controller{

    //protected $_app='';
    //protected $_controller='';
    //protected $_method='';//当前url调用的方法名
    protected $_pagevar = array();

    public function  __construct(/*$app,$controller,$method*/)
    {
        /*$this->_app=$app;
        $this->_controller=$controller;
        $this->_method=$method;
*/
        aop('controller_init');

    }

    public function assign($name,$value){
        $this->_pagevar[]=[$name=>$value];
    }

    public function fetch($viewpage=''){
        $viewpage=empty($viewpage)?METHOD:$viewpage;
        $viewPagePath = '';
        $otherdir = strpos($viewpage,'/')>-1;
        if(APPS) {
            //多应用
            if ($otherdir)
                $viewPagePath = './../app/' . APP . '/view/' . $viewpage . '.php';
            else
                $viewPagePath = './../app/' . APP . '/view/' . CONTROLLER . '/' . $viewpage . '.php';
        }else{
            //单应用
            if ($otherdir)
                $viewPagePath = './../app/view/' . $viewpage . '.php';
            else
                $viewPagePath = './../app/view/'.CONTROLLER.'/'.$viewpage.'.php';
        }
        if(!is_file($viewPagePath)){
            throw new sysExcption( '模板文件'.$viewPagePath.'不存在！');
            exit;
        }
        //print_r($this->_pagevar);
        //取出变量
        foreach ($this->_pagevar as $k=>$v){
            foreach ($v as $a=>$b){
                $$a=$b;
            }
        }

        ob_start();

        include $viewPagePath;
        //调用调试
        trace::page_trace();

        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }

    public function json($data){
        header("Content-Type: json/application; charset=UTF-8");
        echo json_encode($data);
    }

    public function file($file,$filename){
        $fileinfo=fopen($file,'r');
        header("Content-Type:application/octet-stream");
        header("Accept-Ranges:bytes");
        header("Accept-Length:".filesize($file));
        header("Content-Disposition:attachment;filename=".$filename);
        echo fread($fileinfo,filesize($file));
        fclose($fileinfo);
    }

    public function rediect($path){
        ob_start();
        header('Location:'.url($path));
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function success($msg,$url,$stoptime=1){

        ob_start();

        include config('success_page');

        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function error($msg,$url='',$stoptime=1){
        $url = empty($url)?$_SERVER["HTTP_REFERER"]:$url;

        ob_start();

        include config('error_page');

        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function __get($name)
    {
        if($name=='pagevar'){
            return $this->_pagevar;
        }
    }


}