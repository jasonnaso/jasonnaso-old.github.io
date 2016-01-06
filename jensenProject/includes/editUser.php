s<?php

	include("dbConnection.php");

?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Lägg till Användare</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="editUser" class="form-control">
							<option>Användare</option>

							<?php

							foreach(selectAllFrom("users") as $u){

							echo "<option value =".$u["user_id"].">".$u["name"]." ".$u["lastname"]."</option>";
							}

							?>

						</select>
						<input type="submit" name="chooseUser" class="form-control formSubmits">
					</form>


<?php

	if(isset($_POST["chooseUser"])){

		try{

			$user_id = $_POST["editUser"];

			$query = "SELECT * FROM users ";
			$query .= "WHERE user_id = :user_id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"user_id" => $user_id
			));

			$user = $ps->fetch(PDO::FETCH_ASSOC);

		}catch(Exception $exception){
			echo $exception;
		}


	}

?>

<form action="profile.php" method="POST">

<!--A div with the input-group class is neccessary for the span element with the input-group-addon element to work-->
	<div class="input-group">
		<span class="input-group-addon">Personnummer</span>
		<input type="text" name="socialsecurity" value="<?php if(isset($_POST['chooseUser'])){echo $user['socialsecurity'];}?>" class="form-control">
	</div>

	<div class="input-group">
	<span class="input-group-addon">Förnamn</span>
		<input type="text" name="name" value="<?php if(isset($_POST['chooseUser'])){echo $user['name'];}?>" class="form-control">
	</div>

	<div class="input-group">
		<span class="input-group-addon">Efternamn</span>
		<input type="text" name="lastname" value="<?php if(isset($_POST['chooseUser'])){echo $user['lastname'];}?>" class="form-control">
	</div>

	<div class="input-group">
	<span class="input-group-addon">Användarnamn</span>
		<input type="text" name="username" value="<?php if(isset($_POST['chooseUser'])){echo $user['username'];}?>" class="form-control">
	</div>

	<div class="input-group">
	<span class="input-group-addon">E-post</span>
		<input type="text" name="email" value="<?php if(isset($_POST['chooseUser'])){echo $user['email'];}?>" class="form-control">
	</div>

	<div class="input-group">
	<span class="input-group-addon">Utbildning</span>
		<input type="text" name="educationkey" value="<?php if(isset($_POST['chooseUser'])){echo $user['education_key'];}?>" class="form-control">
	</div>

	<div class="input-group">
	<span class="input-group-addon">Behörighet</span>	
		<input type="text" name="authority" value="<?php if(isset($_POST['chooseUser'])){echo $user['authority'];}?>" class="form-control">
	</div>

	<div class="input-group hidden">
	<span class="input-group-addon">Personnummer</span>
		<input type="text" name="user_id" value="<?php if(isset($_POST['chooseUser'])){echo $user['user_id'];}?>" class="form-control">
	</div>
	<input type="submit" name="updateUser" value="Uppdatera" class="form-control formSubmits">
</form>
</div>
</div>
</div>
</div>

<?php 

	if(isset($_POST["updateUser"])){

		$socialsecurity = $_POST["socialsecurity"];
		$name =$_POST["name"];
		$lastname = $_POST["lastname"];
		$username = $_POST["username"];
		$email = $_POST["email"];
		$education_key = $_POST["educationkey"];
		$authority = $_POST["authority"];
		$user_id = $_POST["user_id"];

		try{

			$query = "UPDATE users ";
			$query .= "SET socialsecurity = :socialsecurity, name = :name, lastname = :lastname, ";
			$query .= "username = :username, email = :email, education_key = :education_key, authority = :authority ";
			$query .= "WHERE user_id = :user_id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"socialsecurity" => $socialsecurity,
				"name"           => $name,
				"lastname"       => $lastname,
				"username"       => $username,
				"email"          => $email,
				"education_key"  => $education_key,
				"authority"      => $authority,
				"user_id"        => $user_id
			));

			alert("success", "Användaren", "har uppdaterats");


		}catch(Exception $exception){
			echo $exception;
		}
	}

?>










