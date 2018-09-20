$(document).ready(function () {
    $("#submit").click(function () {
		if (!$("#text").val()){
            $("#tips").text("你还未输入密码！！！");
			return false;
		}
    });
});

