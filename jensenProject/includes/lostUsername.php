<?php

	if(isset($_POST["forgotUsername"])){
		try{
			require_once("dbConnection.php");
			require_once("functions.php");

			$email = $_POST["forgotUsernameInput"];

			$query = "SELECT username ";
			$query .= "FROM users ";
			$query .= "WHERE email = :email";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"email" => $email
			));

			$user = $ps->fetch(PDO::FETCH_ASSOC);

			if($user){
				alert("success", "Ditt användarnamn är: ", $user["username"]);
			}
			else{
				alert("danger", "Varning! ", "Din e-post adress kunde ej hittas, vänligen försök igen");
			}

		}catch(Exception $exception) {
			echo $exception;
		}
	}
	











?>