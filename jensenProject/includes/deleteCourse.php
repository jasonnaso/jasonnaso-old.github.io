<?php

include("dbConnection.php");

	if(isset($_POST["deleteCourse"])){
		try{

			$course_id = $_POST["courses"];

			$query = "DELETE FROM courses WHERE course_id = :course_id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"course_id" => $course_id
			));

			alert("success", $course_id, " har blivit borttagen");

		}
		catch(Exception $exception){
			echo $exception;
		}
	}
	try{

		$query = "SELECT * FROM courses";

		$ps = $db->prepare($query);

		$ps->execute();
		$courses = $ps->fetchAll();

	}
	catch(Exception $exception){
		echo $exception;
	}
	
?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Ta bort kurs</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="courses" class="form-control">
							<option>Kurser</option>

	<?php

	foreach($courses as $c){
		echo "<option value =".$c["course_id"].">".$c["course_id"]."</option>";
	}

	?>
	</select>
	<input type="submit" name="deleteCourse" class="form-control formSubmits" value="Ta bort">
	</form>
	
</div>
</div>
</div>
</div>



