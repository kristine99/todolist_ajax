<?php 
	 include_once('dbconnect.php');
	 if(isset($_GET) && $_GET['todo'] != '' && $_GET['id'] != '' ){
	 	$todo = $_GET['todo'];
	 	$id = $_GET['id'];
		$query = "UPDATE list set description='$todo' where id='$id'";
		 if($conn->query($query) === true){
		 	$data['status'] = 1;
		 	$data['msg'] = "Successfully Edited";
		 	echo json_encode($data);
		 }else{
		 	echo "Failed to add";
		 }
	 }else{
	 	echo "Invalid Input";
	 } 
?>