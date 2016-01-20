<?php

	//Query functions

	function selectAllFrom($table){

		try{
			global $db;

			$query = "SELECT * FROM $table";

			$ps = $db->prepare($query);

			$ps->execute();

			$data = $ps->fetchAll();

			return $data;

		}catch(Exception $exception){
			echo $exception;
		}
	}

	function selectAllWhere($table,$column,$input){

  		try{
  			global $db;

			$query  = "SELECT * FROM $table ";
			$query .= "WHERE $column = :input";
						
			$ps = $db->prepare($query);

			$result = $ps->execute(array(
				'input' => $input
			));
						
			return $data = $ps->fetch();
			
		}catch (Exception $exception){
			echo $exception;
		}
	}

	//Miscellaneous
		
	function hasLoggedIn(){
		if(!isset($_SESSION["username"])){ 
            header("Location: index.php");
            return false;
        }
        else{
        	return true;
        }
	}
	//j here
	function autoLogout(){
		echo "<script>setTimeout(function(){ window.location.href='includes/logout.php'; }, 1200*1000); </script>";
	}

	function alert($color, $bold, $message){

		echo "<div class='alert alert-".$color." alert-dismissible' role='alert' id='loginAlert'>
		<button type='button' class='close' data-dismiss='alert'>
		<span aria-hidden='true'>&times;</span>
		<span class='sr-only'>Close</span></button>
		<strong>".$bold."</strong>".$message."</div>";
	}

	
	function redirect($location){

		echo "<script>window.top.location='".$location."'</script>";
	}

	




?>