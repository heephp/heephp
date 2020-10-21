<?php
namespace heephp;
class view
{

    private static $basedir = '';
    private static $vars = [];
    private static $layout = '';

    private function __construct()
    {
    }

    public static function create($basedir = '', $vars = [])
    {
        if (empty($basedir)) {
            $backtrace = debug_backtrace();
            view::$basedir = dirname($backtrace[0]['file']);

            //throw new sysExcption('模板目录未指定');
            //exit;
        } else
            view::$basedir = $basedir;
    }

    public static function setvars($vars)
    {

        if (empty(view::$basedir)) {
            throw new sysExcption('模板目录未指定');
            exit;
        }
        view::$vars = array_merge(view::$vars, $vars);

    }

    private static function include($file,$vars = [])
    {
        if (empty(view::$basedir)) {
            throw new sysExcption('模板目录未指定');
            exit;
        }
        view::$vars = array_merge(view::$vars, $vars);
        foreach (view::$vars as $k => $v) {
            $$k = $v;
        }
        include view::$basedir . '/' . $file.'.php';
    }

    public static function import($file,$vars = [])
    {
        view::include($file,$vars);
    }

    public static function layout($file,$vars){
        view::$layout = view::$basedir.$file.'.php';
        view::$vars = array_merge(view::$vars, $vars);
        foreach (view::$vars as $k => $v) {
            $$k = $v;
        }
        include view::$layout;
    }

    public static function part($name)
    {
        if (function_exists('view_' . $name)) {
            call_user_func('view_' . $name);
        }
    }

    public static function getlist($modelname, $where, $order, $limit = 0)
    {

        $mname = model($modelname);
        if (empty($where)) {
            $where = '1=1';
        }
        if (empty($order)) {
            $order = $mname->key . ' asc';
        }
        if (empty($limit)) {
            $list = $mname->where($where)->order($order)->page();
        } else
            $list = $mname->where($where)->order($order)->limit($limit)->all();

        return $list;
    }

    public static function getdetail($modelname, $keyval)
    {

        $mname = model($modelname);
        if (empty($keyval)) {
            echo '主键值为空！';
            exit;
        }

        $info = $mname->get($keyval);
        return $info;
    }

    public static function update($modelname, $data, $keyval)
    {
        $m = model($modelname);
        if (empty($where)) {
            $where = $m->key . '=' . $keyval;
        }
        $ued = $m->where($where)->update($data);
        return $ued;
    }

    public static function del($modelname, $keyval)
    {
        $m = model($modelname);
        return $m->delete($keyval);
    }

}