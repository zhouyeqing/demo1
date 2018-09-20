<?php
/**
 * Created by PhpStorm.
 * User: 周叶青
 * Date: 2018/7/21 0021
 * Time: 18:01
 */
    if (!empty($_GET["name"]) && !empty($_GET["identityNumber"])){
        $name = $_GET["name"];
        unset($_GET["name"]);
        $identityNumber = $_GET["identityNumber"];
        unset($_GET["identityNumber"]);
        $conn = mysqli_connect("localhost","root","Zhou13874209969","destitute_household");
        mysqli_query($conn,"set names utf8");
        $i = 0;
        if ($conn->connect_error){
            die("连接失败：".$conn->connect_error);
        }
        $result1 = [];
        $j = 0;
        $query1 = mysqli_query($conn,"SELECT ID FROM information WHERE name='".$name."'");
        $query2 = mysqli_query($conn,"SELECT ID FROM information WHERE identityNumber='".$identityNumber."'");
        while ($temp1 = mysqli_fetch_assoc($query1)){
            $result1[$j++] = $temp1['ID'];
        }
        $result2 = mysqli_fetch_assoc($query2)["ID"];
        function compare ($data1,$data2) {
            for ($k = 0;$k < count($data1);$k++){
                if ($data1[$k] == $data2){
                    return true;
                }
            }
            return false;
        }
        if (!compare($result1,$result2)){
            die("不正确");
        }
        $tempData = mysqli_query($conn,"SELECT householdID FROM information WHERE name='".$name."'");
        $data = [];
        $num = 0;
        if (mysqli_num_rows($tempData) > 0){
            while ($householdID = mysqli_fetch_assoc($tempData)["householdID"]){
                $sql = "SELECT village,name,identityNumber,number,relation,povertyProperty,povertyYear,povertyCause FROM information WHERE householdID='".$householdID."'";
                $result = mysqli_query($conn,$sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    $row['num'] = $num;
                    $data[$i++] = $row;
                }
                $num++;
            }
            die(json_encode($data,JSON_UNESCAPED_UNICODE));
        }
        echo "查到的结果数为：".mysqli_num_rows($tempData);
    } elseif (!empty($_GET["name"])){
        $name = $_GET["name"];
        unset($_GET["name"]);
        $conn = mysqli_connect("localhost","root","Zhou13874209969","destitute_household");
        mysqli_query($conn,"set names utf8");
        $i = 0;
        if ($conn->connect_error){
            die("连接失败：".$conn->connect_error);
        }
        $tempData = mysqli_query($conn,"SELECT householdID FROM information WHERE name='".$name."'");
        $data = [];
        $num = 0;
        if (mysqli_num_rows($tempData) > 0) {
            while ($householdID = mysqli_fetch_assoc($tempData)["householdID"]){
                $sql = "SELECT village,name,identityNumber,number,relation,povertyProperty,povertyYear,povertyCause FROM information WHERE householdID='".$householdID."'";
                $result = mysqli_query($conn,$sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    $row['num'] = $num;
                    $data[$i++] = $row;
                }
                $num++;
            }
            die(json_encode($data,JSON_UNESCAPED_UNICODE));
        }
        echo "查到的结果数为：".mysqli_num_rows($tempData);
    } else {
        $identityNumber = $_GET["identityNumber"];
        unset($_GET["identityNumber"]);
        $conn = mysqli_connect("localhost","root","Zhou13874209969","destitute_household");
        mysqli_query($conn,"set names utf8");
        $i = 0;
        if ($conn->connect_error){
            die("连接失败：".$conn->connect_error);
        }
        $tempData = mysqli_query($conn,"SELECT householdID FROM information WHERE identityNumber='".$identityNumber."'");
        $data = [];
        $num = 0;
        if (mysqli_num_rows($tempData) > 0){
            while ($householdID = mysqli_fetch_assoc($tempData)["householdID"]){
                $sql = "SELECT village,name,identityNumber,number,relation,povertyProperty,povertyYear,povertyCause FROM information WHERE householdID='".$householdID."'";
                $result = mysqli_query($conn,$sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    $row['num'] = $num;
                    $data[$i++] = $row;
                }
                $num++;
            }
            die(json_encode($data,JSON_UNESCAPED_UNICODE));
        }
        echo "查到的结果数为：".mysqli_num_rows($tempData);
    }
