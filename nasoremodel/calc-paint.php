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
				      	  	    	<label  class="col-xs-5 control-label">Paint Grade</label>
				      	  	    	<div class="col-xs-7">
				      	  	    		<select class="form-control" id="materialsChoice">
				      	  	    			<optgroup label="Choose Paint Grade">
				    	  	  			      	<option value="7">Low Grade</option>
				    	  	  			      	<option value="10" selected="true">Med Grade</option>
				    	  	  			      	<option value="15">High Grade</option>
				      	  			      	</optgroup>
				      	  	    		</select>
				      	  	     	</div>
				      	  	  	</div>

						  	    <div class="form-group">
				      	  	    	<label  class="col-xs-5 control-label">Primer</label>
				      	  	    	<div class="col-xs-7">
				      	  	    		<select class="form-control" id="materialsChoice">
				      	  	    			<optgroup label="Primer?">
				    	  	  			      	<option value="0"  selected="true">Yes</option>
				    	  	  			      	<option value="7">No (Primer is reccomended)</option>
				    	  	  			      	
				      	  			      	</optgroup>
				      	  	    		</select>
				      	  	     	</div>
				      	  	  	</div>
								<!--
					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Tear Off</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control"  id="tearoff">
					  	  			  		<option selected="selected" value="yes">YES - 1 layer</option>
					  	  			  		<option value="yes2">YES - 2 layers</option>
					  	  			  		<option value="3">Yes - 3 Layers</option>
					  	  			  		<option value="no">NO tear-off</option>
					  	  	    		</select>
					  	  	     	</div>
					  	  	  	</div>

					  	  	    <div class="form-group">
					  	  	    	<label  class="col-xs-5 control-label">Materials</label>
					  	  	    	<div class="col-xs-7">
					  	  	    		<select class="form-control" id="materials">
					  	  			      	<option value="0" selected="selected">30 yr. shingles</option>
					  	  			      	<option value="1">50 yr. shingles</option>
					  	  			      	<option value="2">Steel Shingles</option>
					  	  	    		</select>
					  	  	     	</div>
					  	  	  	</div> -->
					
					    		<div class="form-group">
					        		<div class="col-xs-offset-3 col-xs-9">
					             	<button id="paintCalculator" class="btn btn-default pull-right">Show Estimate</button>
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
							<p class="page-title">Painting Estimate&#42;</p>
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
			
		
<!--Start Sub Content-->
<!--End Sub Content-->
<!-- Start Footer -->
<?php 	include("includes/footer.php");?>
<!-- End Footer -->