<?php
namespace heephp\bulider;
class pager{

    public function __construct()
    {

    }

    public function bulider($page,$pagecount,$urlparms,$pname,$other=''){
        //构造url
        $path='/'.APP.'/'.CONTROLLER.'/'.METHOD;
        //$url = url($path,array_merge($parms,[$pname.'_'.$page]));
        $firstpage=url($path,array_merge($urlparms,[$pname.'_1'])).'?'.$other;
        $prvpage2=url($path,array_merge($urlparms,[$pname.'_'.($page-2)])).'?'.$other;
        $prvpage=url($path,array_merge($urlparms,[$pname.'_'.($page-1)])).'?'.$other;
        $nextpage=url($path,array_merge($urlparms,[$pname.'_'.($page+1)])).'?'.$other;
        $nextpage2=url($path,array_merge($urlparms,[$pname.'_'.($page+2)])).'?'.$other;
        $endpage=url($path,array_merge($urlparms,[$pname.'_'.$pagecount])).'?'.$other;



        $pagerclass=' class="'.config('pagination.class').'"';
        $pageritemclass=' class="'.config('pagination.item_class').'"';
        $pagerlinkclass=' class="'.config('pagination.link_class').'"';
        $pagercurrtclass=' class="'.config('pagination.item_class').' '.config('pagination.currt_class').'"';


        $pager="<ul$pagerclass>";
        $pager.=($page!=1)?"<li$pageritemclass><a$pagerlinkclass href=\"$firstpage\">首页</a></li>":'';
        $pager.=($page!=1)?"<li$pageritemclass><a$pagerlinkclass href=\"$prvpage\">上一页</a></li>":'';
        $pager.=($page>2&&$pagecount>2)?"<li$pageritemclass><a$pagerlinkclass href=\"$prvpage2\">".($page-2).'</a></li>':'';
        $pager.=($page>1&&$pagecount>1)?"<li$pageritemclass><a$pagerlinkclass href=\"$prvpage\">".($page-1).'</a></li>':'';
        $pager.="<li$pagercurrtclass><a$pagerlinkclass href=\"#\">$page</a></li>";
        $pager.=$pagecount>$page?"<li$pageritemclass><a$pagerlinkclass href=\"$nextpage\">".($page+1).'</a></li>':'';
        $pager.=$pagecount>($page+1)?"<li$pageritemclass><a$pagerlinkclass href=\"$nextpage2\">".($page+2).'</a></li>':'';
        $pager.=$pagecount>$page&&$page<$pagecount?"<li$pageritemclass><a$pagerlinkclass href=\"$nextpage\">下一页</a></li>":'';
        $pager.=$pagecount>$page?"<li$pageritemclass><a$pagerlinkclass href=\"$endpage\">尾页</a></li>":'';
        $pager.='   第'.$page.'/'.$pagecount.'页';
        $pager.='</ul>';
        return $pager;
    }

}