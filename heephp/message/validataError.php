<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>验证错误 heephp</title>
    <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
    <style>
        body{padding: 20px 30px;margin: 20px 20px;}
    </style>
</head>
<body>                   <div>
                            <h2 class="text-white fw-bold op-7 mb-2">验证错误：<?=$error['message']?></h2>

                            <h5 class="text-white pb-2">
                                字段：<?=$error['field']??''?><Br>
                                标题：<?=$error['title']??''?><br>
                                规则：<?=$error['rulename']??$error['field']?><br>
                                错误：<?=$error['errmsg']??$error['message']?><br>
                            </h5>
                        </div>

<br><br>
<a href="http://doc.heephp.com" target="_blank">帮助文档</a> <a href="https://heephp.gitee.io/heephp/" target="_blank">完全手册</a> <a href="https://www.heephp.com/index/contact.htm" target="_blank">联系我们</a> <a href="http://www.heephp.com" target="_blank">heephp</a>
</body>
<script>
    setTimeout(function () {
        window.history.go(-1);
    },3000);
</script>
</html>