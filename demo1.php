<?php
/**
 * Created by PhpStorm.
 * User: 周叶青
 * Date: 2018/7/21 0021
 * Time: 16:26
 */
	if(!empty($_POST['password'])){
		if($_POST['password'] != "cszfpb"){
			header("Location: index.php?x=x");
		}
	} else {
		header("Location: index.php");
	}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="demo1.css">
    <script src="demo1.js"></script>
    <title>寸石镇贫困户查询</title>
</head>
<body>
	<div id="bar">
		<button id="search1">基本信息</button>
		<button id="search2">户籍信息</button>
		<button id="search3">帮扶责任人信息</button>
	</div>
    <div id="main1">
        <h1 id="title1">贫&nbsp;困&nbsp;户&nbsp;信&nbsp;息&nbsp;查&nbsp;询</h1>
        <div id="div_input">
            <input type="text" placeholder="在此处输入姓名" name="name" id="input1">
            <input type="text" placeholder="在此处输入身份证" name="indentityNumber" id="input2">
            <button id="button">查询</button>
        </div>
    </div>
    <div id="main2">
        <table border="1"></table>
    </div>
    <div id="main3"></div>
	<div id="fixed">
		<div id="search4">继续查看户籍信息</div>
		<div id="search5">继续查看结对帮扶信息</div>
	</div>
</body>
</html>
