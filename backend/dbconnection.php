<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "messages_db"


$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);




if (!$mysqli)
{
  die('Could not connect: ' . mysql_error());
}

$sql = file_get_contents('./messages.sql');


$mysqli->exec($sql);

?>