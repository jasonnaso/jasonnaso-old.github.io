<?php


	try{
		require_once("includes/dbConnection.php");
		require_once("includes/functions.php");

		$course       = trim($_POST["course"]);
		$educationKey = trim($_POST["educationKey"]);

		$query = "INSERT INTO courses (education_key, course_id)";
		$query .= "VALUES (:educationKey, :course)";

		$ps = $db->prepare($query);

		$ps->execute(array(

			"educationKey" => $educationKey,
			"course"       => $course

			));

  		alert("success", $course, " har lagts till");

	}
	catch(Exception $exception){
		echo $exception;
	}
?>