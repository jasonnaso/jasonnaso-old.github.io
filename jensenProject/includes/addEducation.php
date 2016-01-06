<?php



	try{
		require_once("includes/dbConnection.php");
		require_once("includes/functions.php");

		$education = trim($_POST["education"]);

		$query = "INSERT INTO educations (education_key, education_name) ";
		$query .= "VALUES (:education, :education)";

		$ps = $db->prepare($query);

		$ps->execute(array(

			"education" => $education

			));

		alert("success", $education, " har lagts till");

	}
	catch(Exception $exception){
		echo $exception;
	}
?>