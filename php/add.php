<?php 
	 include_once('dbconnect.php');
	 if(isset($_GET) && $_GET['todo'] != ''){
	 	$todo = $_GET['todo'];
		$query = "INSERT INTO list VALUES('','$todo')";
		 if($conn->query($query) === true){
		 	$data['status'] = 1;
		 	$data['msg'] = "Successfully added";
		 	echo json_encode($data);
		 }else{
		 	echo "Failed to add";
		 }
	 }else{
	 	echo "Invalid Input";
	 } 
?>