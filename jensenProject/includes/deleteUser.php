<?php

include("dbConnection.php");

	if(isset($_POST["deleteUser"])){
		try{

			$id = $_POST["user"];

			$query = "DELETE FROM users WHERE user_id = :id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"id" => $id
			));

			alert("success", "Användare", " är borttagen");

		}
		catch(Exception $exception){
			echo $exception;
		}
	}
	try{

		$query = "SELECT * FROM users";

		$ps = $db->prepare($query);

		$ps->execute();
		$user = $ps->fetchAll();

	}
	catch(Exception $exception){
		echo $exception;
	}
	
?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Ta bort användare</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="user" class="form-control">
							<option>Användare</option>

	<?php

	foreach($user as $u){
		echo "<option value =".$u["user_id"].">".$u["username"]."</option>";
	}

	?>
	</select>
	<input type="submit" name="deleteUser" class="form-control formSubmits" value="Ta bort">
	</form>

</div>
</div>
</div>
</div>











