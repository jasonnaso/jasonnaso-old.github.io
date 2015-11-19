<?php 	include("includes/head.php");
		include("includes/header.php")
?>
	<!-- /////////////////////////////// -->
	<!-- /// New Page Content Here////// -->
	<!-- /////////////////////////////// -->

	<!-- Open with Row And Col-sm-12 -->
	<div class="row">
		<div class="col-xs-12 white">
			<!--Calculator/House (row)-->
			<div class="row">
				<!-- Calculator/House (col-sm-6)-->
				<div class="col-md-6">
					<div class="panel panel-default calc-panel">
						<div class="panel-heading calc-box-title">Calculate</div>
						<div class="panel-body">
							
							<div class="form-horizontal">
								<!-- /////////Calc Choice//////// -->
								<?php 	include("calc-choice.php");?>
								<!-- /////////End Calc Choice//////// -->
								
								<div class="form-group">
							  		<label for="inputPassword3" class="col-xs-5 control-label">Number Of Doors</label>
							  	    <div class="col-xs-7">
							  	        <input type="number" class="form-control" id="numberOfDoors" placeholder="1">
							  	    </div>
							  	</div>

						  	    <div class="form-group">
					        		<div class="col-xs-offset-3 col-xs-9">
					             	<button  id="btnDoorCalculator" class="btn btn-default pull-right">Show Estimate</button>
					        		</div>
					    		</div>
							</div>
						</div>
					</div>
				</div><!--End Calculator (col-sm-6)-->
				
				<!-- House Image And Title (col-sm-6) -->
				<!-- Title-->
				<div class="col-md-6">
					<div class="row">
						<div class="col-xs-12">
							<p class="page-title">Door Installation Estimate&#42;</p>
						</div>
					</div>
					<!-- End Title -->
					<!-- House Image -->
					<div class="row">
						<div class="col-md-12 calc-hide-pic" id="calcFade">
							<img src="assets/images/calc-house-images/calc-door.png" class="center-block img-responsive house-pic">
						</div>
					</div><!-- End House Image -->
				</div><!-- House Image And Title (Col-sm-6) -->
			</div><!--End Calculator/House (Row)-->

			<!--Result Box  -->
			<?php include("resultBox.php");?>
			<!--End Result Box  -->

			<!--Map And Statement-->
			<?php include ("map.php");?>
			<!--End Map And Statement -->
			
		</div>
	</div>
	<!-- Close with Row And Col-sm-12 -->

	<!-- /////////////////////////////// -->
	<!-- /// End Page Content Here////// -->
	<!-- /////////////////////////////// -->
<!-- Start Footer -->
<?php 	include("includes/footer.php");?>
<!-- End Footer -->
