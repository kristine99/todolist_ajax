<?php 
	 include_once('dbconnect.php');
	 if(isset($_GET) && $_GET['id'] != ''){
	 	$id = $_GET['id'];
		$query = "DELETE FROM list WHERE id='$id'";
		 if($conn->query($query) === true){
		 	$data['status'] = 1;
		 	$data['msg'] = "Successfully Deleted";
		 	echo json_encode($data);
		 }else{
		 	echo "Failed to add";
		 }
	 }else{
	 	echo "Invalid Input";
	 } 
?>