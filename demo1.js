window.onload = function () {
    let buttonSearch = document.getElementById("button"),
        input1 = document.getElementById("input1"),
        input2 = document.getElementById("input2"),
        table = document.getElementsByTagName("table")[0],
        errorText = document.getElementById("main3"),
		search1 = document.getElementById("search1"),
		search2 = document.getElementById("search2"),
		search3 = document.getElementById("search3"),
		search4 = document.getElementById("search4"),
		search5 = document.getElementById("search5"),
        value1,
        value2,
        row,
        ajaxText,
        limit = 0,
		state = 1,
        url;
    function encodeText(name,value) {
        return encodeURIComponent(name) + "=" + encodeURIComponent(value);
    }
    function createTable(data1,data2,data3,data4,data5,data6,data7,data8,num=0){
        let tr = document.createElement("tr"),
            th_village = document.createElement("th"),
            th_name = document.createElement("th"),
            th_identityNumber = document.createElement("th"),
            th_number = document.createElement("th"),
            th_relation = document.createElement("th"),
            th_povertyProperty = document.createElement("th"),
            th_povertyYear = document.createElement("th"),
            th_povertyCause = document.createElement("th");
        th_village.innerHTML = data1;
        th_name.innerHTML = data2;
        th_name.style.width = "65px";
        th_identityNumber.innerHTML = data3;
        th_number.innerHTML = data4;
        th_relation.innerHTML = data5;
        th_povertyProperty.innerHTML = data6;
        th_povertyYear.innerHTML = data7;
        th_povertyCause.innerHTML = data8;
        tr.appendChild(th_village);
        tr.appendChild(th_name);
        tr.appendChild(th_identityNumber);
        tr.appendChild(th_number);
        tr.appendChild(th_relation);
        tr.appendChild(th_povertyProperty);
        tr.appendChild(th_povertyYear);
        tr.appendChild(th_povertyCause);
        table.appendChild(tr);
        if (num % 2 === 0){
            if (value1 === data2 || value2 === data3){
                tr.id = "tt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "tr";
            }
        } else {
            if (value1 === data2 || value2 === data3){
                tr.id = "ttt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "trr";
            }
        }
    }
	function queryPoverty() {
        errorText.innerText = "";
        url = "php/ajax.php";
        value1 = input1.value;
        value2 = input2.value;
        limit = 0;
        if (!value1 && !value2){
            errorText.innerText = "用户名和密码不能都为空!!!";
        } else {
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4){
                    if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304){
                        console.log(ajax.responseText);
                        table.innerHTML = "";
                        if (ajax.responseText === "不正确") {
                            errorText.innerText = "姓名或身份证" + ajax.responseText + "！！！";
                        } else {
                            try {
                                ajaxText = JSON.parse(ajax.responseText);
                            } catch (e) {
                                errorText.innerHTML = ajax.responseText;
                                return false;
                            }
                            createTable(
                                "行政村",
                                "姓名",
                                "证件号码",
                                "人数",
                                "与户主关系",
                                "脱贫属性",
                                "脱贫年度",
                                "主要致贫原因"
                            );
                            let i = 0;
                            while (row = ajaxText[i++]){
                                createTable(
                                    row['village'],
                                    row['name'],
                                    row['identityNumber'],
                                    row['number'],
                                    row['relation'],
                                    row['povertyProperty'],
                                    row['povertyYear'],
                                    row['povertyCause'],
                                    row['num']
                                );
                            }
                            errorText.innerHTML = "查到" + limit + "个结果";
                        }
                    } else {
                        console.log("向服务器请求数据失败：" + ajax.status);
                    }
                }
            };
            if (value1 && value2) {
                url = url + "?" + encodeText("name",value1) + "&" + encodeText("identityNumber",value2);
            } else if (value1){
                url = url + "?" + encodeText("name",value1);
            } else {
                url = url + "?" + encodeText("identityNumber",value2);
            }
            ajax.open("post",url,true);
            ajax.send(null);
        }
    }
	function createTable2 (data1,data2,data3,data4,data5,data6,data7,data8=0,num=0){
        let tr = document.createElement("tr"),
            th_village = document.createElement("th"),
            th_name = document.createElement("th"),
            th_identityNumber = document.createElement("th"),
            th_number = document.createElement("th"),
            th_relation = document.createElement("th"),
            th_site = document.createElement("th"),
            th_status_cn = document.createElement("th");
        th_village.innerHTML = data1;
        th_name.innerHTML = data2;
        th_name.style.width = "65px";
        th_identityNumber.innerHTML = data3;
        th_number.innerHTML = data4;
        th_relation.innerHTML = data5;
        th_site.innerHTML = data6;
        th_status_cn.innerHTML = data7;
        tr.appendChild(th_village);
        tr.appendChild(th_name);
        tr.appendChild(th_identityNumber);
        tr.appendChild(th_number);
        tr.appendChild(th_relation);
        tr.appendChild(th_site);
        tr.appendChild(th_status_cn);
        table.appendChild(tr);
        if (num % 2 === 0){
			if( data8 === "leave") {
				tr.style.color = "#ff0000";
			} else if (value1 === data2 || value2 === data3){
                tr.id = "tt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "tr";
            }
        } else {
			if( data8 === "leave") {
				tr.style.color = "#ff0000";
            } else if (value1 === data2 || value2 === data3){
                tr.id = "ttt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "trr";
            }
        }
		if (data8 === "householder"){
			th_relation.style.backgroundColor = "#000f0f";
		}
    }
	function continue_createTable2 (data1,data2,data3,data4,data5,data6,data7,data8=0,num=0){
        let tr = document.createElement("tr"),
            th_village = document.createElement("th"),
            th_name = document.createElement("th"),
            th_identityNumber = document.createElement("th"),
            th_number = document.createElement("th"),
            th_relation = document.createElement("th"),
            th_site = document.createElement("th"),
            th_status_cn = document.createElement("th");
        th_village.innerHTML = data1;
        th_name.innerHTML = data2;
        th_name.style.width = "65px";
        th_identityNumber.innerHTML = data3;
        th_number.innerHTML = data4;
        th_relation.innerHTML = data5;
        th_site.innerHTML = data6;
		th_site.colspan = "2";		
        th_status_cn.innerHTML = data7;
        tr.appendChild(th_village);
        tr.appendChild(th_name);
        tr.appendChild(th_identityNumber);
        tr.appendChild(th_number);
        tr.appendChild(th_relation);
        tr.appendChild(th_site);
        tr.appendChild(th_status_cn);
        table.appendChild(tr);
        if (num % 2 === 0){
			if( data8 === "leave") {
				tr.style.color = "#ff0000";
			} else if (value1 === data2 || value2 === data3){
                tr.id = "tt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "tr";
            }
        } else {
			if( data8 === "leave") {
				tr.style.color = "#ff0000";
            } else if (value1 === data2 || value2 === data3){
                tr.id = "ttt";
                limit++;
            } else if (data2 === "姓名") {
            } else {
                tr.className = "trr";
            }
        }
		if (data8 === "householder"){
			th_relation.style.backgroundColor = "#000f0f";
		}
    }
	function queryHousehold () {
		errorText.innerText = "";
        url = "php/ajax2.php";
        value1 = input1.value;
        value2 = input2.value;
        limit = 0;
        if (!value1 && !value2){
            errorText.innerText = "用户名和密码不能都为空!!!";
        } else {
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4){
                    if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304){
                        console.log(ajax.responseText);
                        table.innerHTML = "";
                        if (ajax.responseText === "不正确") {
                            errorText.innerText = "姓名或身份证" + ajax.responseText + "！！！";
                        } else {
                            try {
                                ajaxText = JSON.parse(ajax.responseText);
                            } catch (e) {
                                errorText.innerHTML = ajax.responseText;
                                return false;
                            }
                            createTable2("行政村","姓名","证件号码","人数","与户主关系","地址","管理状态");
                            let i = 0;
                            while (row = ajaxText[i++]){
                                createTable2(row['village'],row['name'],row['identityNumber'],row['number'],row['relation'],row['site'],row['status_cn'],row['status_en'],row['num']);
                            }
                            errorText.innerHTML = "查到" + limit + "个结果";
                        }
                    } else {
                        console.log("向服务器请求数据失败：" + ajax.status);
                    }
                }
            };
            if (value1 && value2) {
                url = url + "?" + encodeText("name",value1) + "&" + encodeText("identityNumber",value2);
            } else if (value1){
                url = url + "?" + encodeText("name",value1);
            } else {
                url = url + "?" + encodeText("identityNumber",value2);
            }
            ajax.open("post",url,true);
            ajax.send(null);
        }
	}
	function continue_queryHousehold () {
        url = "php/ajax2.php";
        value1 = input1.value;
        value2 = input2.value;
        limit = 0;
        if (!value1 && !value2){
            errorText.innerText = "用户名和密码不能都为空!!!";
        } else {
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4){
                    if ((ajax.status >= 200 && ajax.status < 300) || ajax.status === 304){
                        console.log(ajax.responseText);
                        if (ajax.responseText === "不正确") {
                            errorText.innerText = "姓名或身份证" + ajax.responseText + "！！！";
                        } else {
                            try {
                                ajaxText = JSON.parse(ajax.responseText);
                            } catch (e) {
                                errorText.innerHTML = ajax.responseText;
                                return false;
                            }
                            continue_createTable2("行政村","姓名","证件号码","人数","与户主关系","地址","管理状态");
                            let i = 0;
                            while (row = ajaxText[i++]){
                                continue_createTable2(row['village'],row['name'],row['identityNumber'],row['number'],row['relation'],row['site'],row['status_cn'],row['status_en'],row['num']);
                            }
                            errorText.innerHTML = "贫困户：" + errorText.innerHTML + "<br>" + "户籍：" + "查到" + limit + "个结果";
                        }
                    } else {
                        console.log("向服务器请求数据失败：" + ajax.status);
                    }
                }
            };
            if (value1 && value2) {
                url = url + "?" + encodeText("name",value1) + "&" + encodeText("identityNumber",value2);
            } else if (value1){
                url = url + "?" + encodeText("name",value1);
            } else {
                url = url + "?" + encodeText("identityNumber",value2);
            }
            ajax.open("post",url,true);
            ajax.send(null);
        }
	}
    buttonSearch.onclick = function () {
		if (state === 1){
			queryPoverty();
		} else if (state === 2){
			queryHousehold();
		}
    };
    input1.onfocus = function () {
        document.onkeydown = function (e) {
            e = e || window.event;
            if (e.keyCode === 13){
				if (state === 1){
					queryPoverty();
				} else if (state === 2){
					queryHousehold();
				}
            }
        };
    };
    input1.onblur = function () {
        document.onkeydown = function () {
            return false;
        };
    };
    input2.onfocus = function () {
        document.onkeydown = function (e) {
            e = e || window.event;
            if (e.keyCode === 13){
                if (state === 1){
					queryPoverty();
				} else if (state === 2){
					queryHousehold();
				}
            }
        };
    };
    input2.onblur = function () {
        document.onkeydown = function () {
            return false;
        };
    };
	search1.onclick = function () {
		state = 1;
		table.innerHTML = "";
		errorText.innerText = "";
	};
	search2.onclick = function () {
		state = 2;
		table.innerHTML = "";
		errorText.innerText = "";
	};
	search3.onclick = function () {
		state = 3;
		table.innerHTML = "";
		errorText.innerText = "";
	};
	search4.onclick = function (){
		if (state !== 2){
			continue_queryHousehold();
		}
	};
	search5.onclick = function () {
        if (state !== 3){
            console.log("我点击了search5按钮");
        }
    };
};








