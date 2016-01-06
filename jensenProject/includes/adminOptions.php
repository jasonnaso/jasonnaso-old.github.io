
<!--TO_DO: add the rest of the forms and style dropdown menus-->



<!--Menu left column-->

	<div id="sidebar-wrapper">
		<ul class="sidebar-nav">
			<li class="sidebar-brand"><a href="#">Alternativ</a></li>
			<li class="adminOptions" data-value="0"><a href="#">Lägg till användare</a></li>
			<li class="adminOptions" data-value="1"><a href="#">Lägg till utbildning</a></li>
			<li class="adminOptions" data-value="2"><a href="#">Lägg till kurs</a></li>
			<li class="adminOptions" data-value="3"><a href="#">Ändra användare</a></li>
			<li class="adminOptions" data-value="4"><a href="#">Ändra utbildning</a></li>
			<li class="adminOptions" data-value="5"><a href="#">Ändra kurs</a></li>
			<li class="adminOptions" data-value="6"><a href="#">Ta bort användare</a></li>
			<li class="adminOptions" data-value="7"><a href="#">Ta bort utbildning</a></li>
			<li class="adminOptions" data-value="8"><a href="#">Ta bort kurs</a></li>
		</ul>
	</div>

	<!--Add user form-->

	<div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">></a>
    

		<div class="hidden adminForms">
    		<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            	<div class="panel-heading">
            		<h3 class="panel-title">Lägg till användare</h3>
            	</div>

            	<div class="panel-body">
					<div class="col-md-12">
				    	<form action="profile.php" method="POST">
				    		<div class="input-group">
								<span class="input-group-addon">Personnummer</span>
				    			<input type="text" name="socialsecurity" class="form-control" placeholder="ÅÅÅÅMMDD-XXXX">
				    		</div>
				    		<div class="input-group">
								<span class="input-group-addon">Förnamn</span>
				    			<input type="text" name="name" class="form-control" placeholder="Balder">
				    		</div>
		    				<div class="input-group">
								<span class="input-group-addon">Efternamn</span>
				    			<input type="text" name="lastname" class="form-control" placeholder="Sigurdsson">
				    		</div>
		    				<div class="input-group">
								<span class="input-group-addon">Användarnamn</span>
				    			<input type="text" name="username" class="form-control" placeholder="ykalstr001">
				    		</div>
		    				<div class="input-group">
								<span class="input-group-addon">Lösenord</span>
				    			<input type="text" name="password" class="form-control" placeholder="Minst 5 tecken">
				    		</div>
		    				<div class="input-group">
								<span class="input-group-addon">E-post</span>
				    			<input type="text" name="email" class="form-control" placeholder="odin@valhalla.com">
				    		</div>
				    		<div class="input-group">
								<span class="input-group-addon">Utbildning</span>
				    			<input type="text" name="educationKey" class="form-control" placeholder="WUK15, COBOL15">
				    		</div>
				    		<div class="input-group">
								<span class="input-group-addon">Behörighet</span>
				    			<input type="text" name="authority" class="form-control" placeholder="student,teacher,admin">
				    		</div>				    						    		
				    		<input type="submit" name="addUser" class="form-control formSubmits" value="Skapa">
				    	</form>
				    	</div>
				  	</div>
				</div>
			</div>

				<!--Add education form-->
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Lägg till utbildning</h3>
            </div>

            <div class="panel-body">
				<div class="col-md-12">
				    <form action="profile.php" method="POST">

				    	<div class="input-group">
							<span class="input-group-addon">Utbildningsnamn</span>
				    		<input type="text" name="education" class="form-control" placeholder="T.ex WUK15">
				    	</div>

				    	<input type="submit" name="addEducation" class="form-control formSubmits" value="Skapa">
				    </form>
				</div>
			</div>
		</div>
	</div>

				<!--Add course form-->
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Lägg till kurs</h3>
            </div>

            <div class="panel-body">
				<div class="col-md-12">
				    <form action="profile.php" method="POST">

				    	<div class="input-group">
							<span class="input-group-addon">Kursnamn</span>
				    		<input type="text" name="course" class="form-control" placeholder="T.ex Javascript">
				    	</div>
				    	<div class="input-group">
							<span class="input-group-addon">Utbildning</span>
				    		<input type="text" name="educationKey" class="form-control" placeholder="T.ex WUK15">
				    	</div>

				    	<input type="submit" name="addCourse" class="form-control formSubmits" value="Skapa">
				    </form>
				</div>
			</div>
		</div>
	</div>

				<!--Edit user form-->

				<?php include("includes/editUser.php");?>

				<!--Edit educations form-->

				<?php include("includes/editEducation.php");?>

				<!--Edit courses form-->

				<?php include("includes/editCourse.php");?>

				<!--Delete user form-->

				<?php include("includes/deleteUser.php");?>

				<!--Delete education form-->
				
				<?php include("includes/deleteEducation.php");?>

				<!--Delete course form-->

				<?php include("includes/deleteCourse.php");?>


	                	</div>
	                </div>
	            </div>
	        </div>











			