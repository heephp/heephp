<html>
<header>
    <title>系统错误：<?=$msg?> heephp</title>
    <style>
        body{padding: 20px 30px;margin: 20px 20px;}
    </style>
</header>
<body>

<h2><?=$msg?></h2>

<h5><?=APPS?'<b>应用:</b>'.APP:''?>  <b>         控制器:</b><?=CONTROLLER?><b>        方法:</b><?=METHOD?><b>     参数:</b><? var_dump(PARMS)?></h5>

文件：<?=$file?><Br>
所在行：<?=$line?><bR><Br>

<b>错误追踪:</b><Br>
<? foreach ($traces as $t){?>
    <?='文件：'.$t['file'].'    行：'.$t['line'].'   '.$t['class'].'\\'.$t['function'].'()'?><br>
<?}?>
<br><br>
<a href="http://doc.heephp.com" target="_blank">帮助文档</a> <a href="https://heephp.gitee.io/heephp/" target="_blank">完全手册</a> <a href="https://www.heephp.com/index/contact.htm" target="_blank">联系我们</a> <a href="http://www.heephp.com" target="_blank">heephp</a>
</body>
</html>