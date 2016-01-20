<div class="page-header header alignCenter">

			<img src="images/logo.jpg" id="logo">

			<h1>Jensen Online</h1>

			<div class="conainer-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
					 data-target="#hamburgerMenu" value="Meny">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>

				<div class="collapse navbar-collapse" id="hamburgerMenu">
					<ul class="nav nav-pills nav-justified menu" id="mainMenu">
						<li class="border_right" role="presentation"><a href="frontpage.php">Hem</a></li>
						<li class="border_right" role="presentation"><a href="newsPage.php">Nyheter</a></li>

						<?php if($_SESSION["authority"] === "admin"): ?>
							<li class="border_right" role="presentation"><a href="profile.php">Profil</a></li>
							<li class="border_right" role="presentation"><a href="grading.php">Betygsättning</a></li>
						<?php endif; ?>

						<?php if($_SESSION["authority"] === "student"): ?>
							<li class="border_right" role="presentation"><a href="studentGrades.php">Mina&nbsp;Betyg</a></li>
						<?php endif;?>

						<li class="border_right" role="presentation"><a href="classlist.php">Klasslista</a></li>
						<li class="border_right" role="presentation"><a href="contact.php">Kontakt</a></li>
						<li role="presentation"><a href="includes/logout.php">Logga&nbsp;ut</a></li>		
					</ul>
				</div>
			</div>
		</div>

