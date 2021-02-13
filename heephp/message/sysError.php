<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>操作失败 heephp</title>
    <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
    <meta http-equiv="refresh" content="<?=$stoptime?>;url=<?=$url?>">

    <style>
        body{padding: 20px 30px;margin: 20px 20px;}
    </style>
</head>
<body>

<h2>操作失败:<?=$msg?></h2>
<h5>有任何问题，您都可以点击下面链接寻求帮助？</h5>

<div>
    长时间没有跳转？<a href="<?=$url?>"> 点击链接</a>
</div>


<br><br>
<a href="http://doc.heephp.com" target="_blank">帮助文档</a> <a href="https://heephp.gitee.io/heephp/" target="_blank">完全手册</a> <a href="https://www.heephp.com/index/contact.htm" target="_blank">联系我们</a> <a href="http://www.heephp.com" target="_blank">heephp</a>


</body>

<script>
    setTimeout(function () {
        location.href='<?=$url?>';
    },<?=$stoptime*1000?>);
</script>
</html>


