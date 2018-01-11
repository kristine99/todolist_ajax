<?php
	$server = "localhost";
	$username = "root";
	$password = "";
	$db = "todolist";


	$conn = new mysqli($server,$username, $password, $db);
	//var_dump($conn);
	if($conn->connect_errno > 0){
		die("Connection Failed");
	}
?>