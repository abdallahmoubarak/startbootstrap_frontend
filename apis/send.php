<?php
include('../backend/dbconnection.php');


$name = $_POST["name"];
$mail = $_POST["mail"];
$number = $_POST["number"];
$message = $_POST["message"];




$sql = "INSERT INTO messages(user_name, user_mail,user_number,message) VALUE (?, ?,?,?)";
$query =$mysqli->prepare($sql);

$query->bind_param("ssss", $name, $mail, $number, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


?>