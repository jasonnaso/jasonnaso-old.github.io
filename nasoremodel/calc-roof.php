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
								        <input type="number" class="form-control" id="length" placeholder="Length">
									</div>
								</div>
											  
								<div class="form-group">
									<label for="inputPassword3" class="col-xs-5 control-label">Width</label>
								    <div class="col-xs-7">
								        <input type="number" class="form-control" id="width" placeholder="Width">
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
						  	    		<select class="form-control target" id="complexity">
						  	    			<optgroup label="Choose Complexity">
							  			      	<option id="roofAppears" value="simple">Simple  (1 Chimney 2 Gutters)</option>
							  			      	<option selected="true" value="medium" >Medium  (2 Chimneys 4 Gutters)</option>
							  			      	<option value="difficult">Difficult (2 Chimneys 4 Gutters Skylights)</option>
						  			      	</optgroup>
						  			    </select>
						  	     	</div>
						  	   	</div>

					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Tear Off</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control"  id="tearOffCostPerSqFt">
					  	  	    			<optgroup label="Choose Number of Layers">
						  	  			  		<option value="1.25" selected="true">YES - 1 layer 1.25</option>
						  	  			  		<option value="2.5">YES - 2 layers 2.5</option>
						  	  			  		<option value="3.75">Yes - 3 Layers 3.75</option>
						  	  			  		<option value="0">NO tear-off 0</option>
					  	  			  		</optgroup>
					  	  	    		</select>
					  	  	     	</div>
					  	  	  	</div>

					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Materials</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control" id="roofMaterialsChoice">
					  	  	    			<optgroup label="Choose Materials">
						  	  			      	<option value="1.1">30 yr. shingles 1.1</option>
						  	  			      	<option value="1.7" selected="true">50 yr. shingles 1.7</option>
						  	  			      	<option value="2.5">Life Time 2.5</option>
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
							<p class="page-title">Roof Installation Estimate&#42;</p>
						</div>
					</div><!-- End Title -->

					<!-- House Image -->
					<div class="row">
					    <div class="col-md-12 calc-hide-pic" id="calcFade">
							<img src="assets/images/calc-house-images/calc-roof.png" class="center-block img-responsive difficult hiding house-pic" id="calcFade">
							<img src="assets/images/calc-house-images/simple-roof.png" class="center-block img-responsive simple hiding house-pic" id="calcFade">
							<img src="assets/images/calc-house-images/medium-roof.png" class="center-block img-responsive medium hiding house-pic" id="calcFade">
						</div>
						<div class="roof-text"><h3>Difficult Complexity</h3></div>
					</div><!-- End House Image -->

				</div><!-- House Image And Title (Col-sm-6) -->
			</div><!--End Calculator/House (Row)-->
		<div class="all-original-costs"></div>

		<!--Result Box  -->
		<?php include("resultBox.php");?>
		<!--End Result Box  -->
		
		<!--Map And Statement-->
		<?php include ("map.php");?>
		<!--End Map And Statement -->
		
	</div>
</div><!-- Close with Row And Col-sm-12 -->

<!-- /////////////////////////////// -->
<!-- /// End Page Content Here////// -->
<!-- /////////////////////////////// -->

<!-- Start Footer -->
<?php 	include("includes/footer.php");?>
<!-- End Footer -->

