<?php

	if(isset($_POST["forgotPassword"])){
		try{
			require_once("includes/dbConnection.php");
			require_once("includes/functions.php");

			$email = $_POST["forgotPasswordInput"];

			$query = "SELECT password ";
			$query .= "FROM users ";
			$query .= "WHERE email = :email";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"email" => $email
			));

			$user = $ps->fetch(PDO::FETCH_ASSOC);

			if($user){

				alert("success","","Du har fått ett e-mail med nya instruktioner gällande ditt lösenord");

			}
			else{
				alert("danger", "Varning! ", "Din e-post adress kunde ej hittas, vänligen försök igen");
			}

		}catch(Exception $exception) {
			echo $exception;
		}
	}