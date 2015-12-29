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
				<div class="col-md-6 white">
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
							    	<label  class="col-xs-5 control-label">Roof Slope:</label>
							    	<div class="col-xs-7">
							    		<select class="form-control" id="slope">
							    			<optgroup label="Choose Slope">
										      	<option value="1">Flat 0°</option>
										      	<option value="1.118">Low Slope 26.6°</option>
										      	<option value="1.414" selected="true">Medium Slope 45°</option>
										      	<option value="1.803">Steep Slope 56.3°</option>
										      	<option value="2.236">Very Steep Slope 63.4°</option>
									      	</optgroup>
							    		</select>
							     	</div>
							  	</div>

						  	    <div class="form-group">
						  	    	<label class="col-xs-5 control-label">Roof Complexity</label>
						  	    	<div class="col-xs-7">
						  	    		<select class="form-control roof-choice" id="complexity">
						  	    			<optgroup label="Choose Complexity">
							  			      	<option id="roofAppears" value="simple">Simple Roof Complexity</option>
							  			      	<option selected="true" value="medium" >Medium Roof Complexity</option>
							  			      	<option value="difficult">Difficult Roof Complexity</option>
						  			      	</optgroup>
						  			    </select>
						  	     	</div>
						  	   	</div>

					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Tear Off</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control"  id="tearOffCostPerSqFt">
					  	  	    			<optgroup label="Choose Number of Layers">
						  	  			  		<option value="0" selected="true">YES - 1 Layer (No Cost)</option>
						  	  			  		<option value="1.25">YES - 2 Layers</option>
						  	  			  		<option value="2.50">Yes - 3 Layers</option>
					  	  			  		</optgroup>
					  	  	    		</select>
					  	  	     	</div>
					  	  	  	</div>

					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Materials</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control" id="roofMaterialsChoice">
					  	  	    			<optgroup label="Choose Materials">
						  	  			      	<option value="1.1" selected="true">30 yr. Shingles</option>
						  	  			      	<option value="1.7">50 yr. Shingles</option>
						  	  			      	<option value="2.5">Life Time Shingles</option>
					  	  			      	</optgroup>
					  	  	    		</select>
					  	  	     	</div>
					  	  	  	</div>
					
					    		<div class="form-group">
					        		<div class="col-xs-12">
										<button  id="btnRoofCalculator" class="btn btn-default pull-right calc_sq_ft">Show Estimate</button>
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
							<h2 class="page-title">Roof Installation Estimate&#42;</h2>
						</div>
					</div><!-- End Title -->

					<!-- House Image -->
					<div class="row">
					    <div class="col-md-12 calc-hide-pic" id="calcFade">
							<img src="assets/images/calc-house-images/calc-roof.png" class="center-block img-responsive difficult hiding house-pic" id="calcFade">
							<img src="assets/images/calc-house-images/simple-roof.png" class="center-block img-responsive simple hiding house-pic" id="calcFade">
							<img src="assets/images/calc-house-images/medium-roof.png" class="center-block img-responsive medium hiding house-pic" id="calcFade">
						</div>
						<div class="roof-complexity-text">Difficult Roof Complexity</div>
					</div><!-- End House Image -->

				</div><!-- House Image And Title (Col-sm-6) -->
			</div><!--End Calculator/House (Row)-->
		<div class="all-original-costs"></div>

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

