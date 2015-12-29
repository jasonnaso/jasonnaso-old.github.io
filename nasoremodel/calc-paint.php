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
								
								<div class="form-group ">
									<label  class="col-xs-5 control-label">Length</label>
									<div class="col-xs-7">
								        <input class="form-control" id="length" type="number" min="1" placeholder="Length">
									</div>
								</div>
											  
								<div class="form-group">
									<label for="inputPassword3" class="col-xs-5 control-label">Width</label>
								    <div class="col-xs-7">
								        <input class="form-control" id="width" type="number" min="1" placeholder="Width">
								    </div>
								</div>

				      	  	    <div class="form-group">
				      	  	    	<label  class="col-xs-5 control-label">Paint Grade</label>
				      	  	    	<div class="col-xs-7">
				      	  	    		<select class="form-control" id="paintMaterialsChoice">
				      	  	    			<optgroup label="Choose Paint Grade">
				    	  	  			      	<option value="15">Low Grade</option>
				    	  	  			      	<option value="20" selected="true">Med Grade</option>
				    	  	  			      	<option value="25">High Grade</option>
				      	  			      	</optgroup>
				      	  	    		</select>
				      	  	     	</div>
				      	  	  	</div>

								<div class="form-group">
				      	  	    	<label  class="col-xs-5 control-label">Primer</label>
				      	  	    	<div class="col-xs-7">
				      	  	    		<select class="form-control" id="primerMaterialsChoice">
				      	  	    			<optgroup label="Choose Primer">
				    	  	  			      	<option value="15"  selected="true">Yes</option>
				    	  	  			      	<option value="0">No (Primer is reccomended)</option>
				    	  	  			      	
				      	  			      	</optgroup>
				      	  	    		</select>
				      	  	     	</div>
				      	  	  	</div>

								<div class="form-group">
					        		<div class="col-xs-offset-3 col-xs-9">
					             	<button id="btnPaintCalculator" class="btn btn-default pull-right">Show Estimate</button>
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
							<h2 class="page-title">Painting Estimate&#42;</h2>
						</div>
					</div>
					<!-- End Title -->
					<!-- House Image -->
					<div class="row">
						<div class="col-md-12  calc-hide-pic" id="calcFade">
							<img src="assets/images/calc-house-images/calc-paint.png" class="center-block img-responsive house-pic">
						</div>
					</div><!-- End House Image -->
				</div><!-- House Image And Title (Col-sm-6) -->
			</div><!--End Calculator/House (Row)-->

			<!--Result Box  -->
			<?php include ("resultBox.php");?>
			<!-- include ("mapResultTest.php"); -->
			<!--End Result Box  -->
			
		</div>
	</div><!-- Close with Row And Col-sm-12 -->

	<!-- /////////////////////////////// -->
	<!-- /// End Page Content Here////// -->
	<!-- /////////////////////////////// -->
	<div class="disclaimer-top pull-right">* We try to estimate as close as possible but for a true quote please call!</div><br />
	<div class="disclaimer pull-right">** Regional costs based on a general cost of living difference.</div>

<!-- Start Footer -->
<?php 	include("includes/footer.php");?>
<!-- End Footer -->