<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="index.css">
    <script src="tool/jquery-3.3.1.min.js"></script>
	<script src="index.js"></script>
    <title>寸石镇贫困户查询</title>
</head>
<body>
	<div id="title1">寸石镇贫困户信息查询</div>
	<div id="title2">仅供内部人员使用，请先输入查询密码</div>
	<form action="demo1.php" method="post">
		<input type="text" placeholder="此处输入密码" name="password" id="text" autocomplete="off">
		<input type="submit" id="submit" value="点击进入">
	</form>
	<div id="tips">
		<?php
			if(!empty($_GET['x'])){
				echo "密码错误!!!";
			}
		?>
	<div>
</body>