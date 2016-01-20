<?php

	include("dbConnection.php");

?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Ändra kurs</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="editCourse" class="form-control">
							<option>Kurser</option>

							<?php

							foreach(selectAllFrom("courses") as $c){

							echo "<option value =".$c["id"].">".$c["course_id"]."</option>";
							}

							?>

						</select>
						<input type="submit" name="chooseCourse" class="form-control formSubmits">
					</form>


<?php

	if(isset($_POST["chooseCourse"])){

		try{

			$id = $_POST["editCourse"];

			$query = "SELECT * FROM Courses ";
			$query .= "WHERE id = :id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"id" => $id
			));

			$courses = $ps->fetch(PDO::FETCH_ASSOC);

		}catch(Exception $exception){
			echo $exception;
		}


	}

?>

<form action="profile.php" method="POST">

<!--A div with the input-group class is neccessary for the span element with the input-group-addon element to work-->
	<div class="input-group">
		<span class="input-group-addon">Utbildning</span>
		<input type="text" name="id" value="<?php if(isset($_POST['chooseCourse'])){echo 
			$courses['id'];}?>" class="hidden">
		<input type="text" name="course_id" value="<?php if(isset($_POST['chooseCourse'])){echo 
			$courses['course_id'];}?>" class="form-control">
	</div>
	<input type="submit" name="updateCourse" value="Uppdatera" class="form-control formSubmits">
</form>
</div>
</div>
</div>
</div>

<?php 

	if(isset($_POST["updateCourse"])){

		$id = $_POST["id"];
		$course_id  = $_POST["course_id"];

		try{

			$query = "UPDATE courses ";
			$query .= "SET course_id = :course_id ";
			$query .= "WHERE id = :id";

			$ps = $db->prepare($query);

			$ps->execute(array(

				"id"        => $id,
				"course_id" => $course_id
			));

			alert("success", $course_id, "har uppdaterats");


		}catch(Exception $exception){
			echo $exception;
		}
	}

?>










