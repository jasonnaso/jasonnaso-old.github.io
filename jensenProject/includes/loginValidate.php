<?php
		try{
			require_once("includes/dbConnection.php");
			require_once("includes/functions.php");

			$username = $_POST["username"];
			$password = $_POST["password"];

			$query  = "SELECT * FROM users ";
			$query .= "WHERE username = :username";

			$ps = $db->prepare($query);

			$ps->execute(array(
					"username"  => $username
				));

			$user = $ps->fetch(PDO::FETCH_ASSOC);

			if($user){
				if(password_verify($password, $user["password"])){
					$_SESSION["authority"] = $user["authority"];
					$_SESSION["username"] = $user["username"];
					$_SESSION["user_id"] = $user["user_id"];
					$_SESSION["name"] = $user["name"];
					$_SESSION["lastname"] = $user["lastname"];


					redirect("frontpage.php");
				}
				else{				
					alert("danger","Varning! ", " fel användarnamn/lösenord");				
				}
			}
			else{
				alert("danger","Varning! ", " fel användarnamn/lösenord");
			}
		}
		catch(Exception $exception){
				echo "Query failed</br></br>";
				echo $exception."</br></br>";
		}
?>
