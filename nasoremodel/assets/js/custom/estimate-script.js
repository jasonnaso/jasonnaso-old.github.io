var calculatorObj = {

    init: function(){  
        
        this.cacheDom();
        this.bindEvents(); 
    },

    cacheDom: function(){
            
        //cache all thats needed

        //Cache Buttons
        this.$btnRoofCalculator = $("#btnRoofCalculator");
        this.$btnPaintCalculator = $("#btnPaintCalculator");
    
        //Cache Dropdowns
        this.$slope = $("#slope");
        this.$roofMaterialsChoice = $("#roofMaterialsChoice");
        this.$paintMaterialsChoice = $("#paintMaterialsChoice");
        this.$primerMaterialsChoice = $("#primerMaterialsChoice");
        this.$tearOffCostPerSqFt = $("#tearOffCostPerSqFt");
        this.$complexity = $("#complexity");

        //Cache Fields
        this.$length = $("#length");
        this.$width = $("#width");
    
    },

    //bind all needed for clicks
    bindEvents: function(){ 

        //https://secure2.homedepot.com/webapp/wcs/stores/servlet/THDCalcInteriorPaint
        this.$btnRoofCalculator.on("click",this.roofCalc.bind(this));
        this.$btnPaintCalculator.on("click",this.paintCalc.bind(this));
        
    },
    
    //Get Complexity  Cost
    roofComplexity: function(){
      
        var complexity = this.$complexity.val();
        
        if (complexity === "simple"){
            complexity = 0;}

        if (complexity === "medium"){
            complexity = 650;}

        if (complexity === "difficult"){
            complexity = 1800;}

            return complexity;
    },

    //Get Tear off total cost
    tearoffTotal: function(){

        //Does this after the first 
        var tearoffTotal = this.$tearOffCostPerSqFt.val() * totalSquareFootage;

        this.nationalAverage(tearoffTotal);

        return tearoffTotal;
    },

    
    //calculate shit for square footage
    calculateSquareFootage: function(){

        var width = this.$width.val();
        var length = this.$length.val();
        
        // this.emptyFieldCheck(length, width);
        if (length === "" || width === ""){

            sweetAlert("Sorry, you are missing length and width");
            
        }else{
            
            nasoCustomObj.scrollToTop();
            totalSquareFootage = (width * length);
        
            return totalSquareFootage;
        }
    },

    calculateRoofMaterials: function(totalSquareFootage){
        
        return totalSquareFootage * this.$roofMaterialsChoice.val();
    },

    calculatePaintMaterials: function(totalSquareFootage){

        return (totalSquareFootage / 350) * this.$paintMaterialsChoice.val();
    },

    calculatePrimerMaterials: function(totalSquareFootage){

        return (totalSquareFootage / 350) * this.$primerMaterialsChoice.val();
    },

    nationalAverage: function(calculatedCost){

        //JUST RETURN THE OBJECT INSTEAD OF MAKING IT A VAR!!!!!!
        var calculatedNationalAverage = {
            
            lowEnd:       Math.round((calculatedCost * 100) * 0.95) / 100,
            nasoEstimate: Math.round((calculatedCost * 100) * 1) / 100,
            middle:       Math.round((calculatedCost * 100) * 1.05) / 100,
            midHigh:      Math.round((calculatedCost * 100) * 1.10) /100,
            highEnd:      Math.round((calculatedCost * 100) * 1.15) / 100
        };  

            console.log(calculatedNationalAverage);
            
            return calculatedNationalAverage; 
    },

    render: function(finalCost){

        $("#lowEnd").html("$ " + finalCost.lowEnd).show();
        $("#midLow, #naso-estimate").html("$ " + finalCost.nasoEstimate).show();
        $("#middle").html("$ " + finalCost.middle).show();
        $("#midHigh").html("$ " + finalCost.midHigh).show();
        $("#highEnd").html("$ " + finalCost.highEnd).show();
       

        // nasoCustomObj.pulsate();
    },

    roofCalc: function(){

        var slope = this.$slope.val();
        var totalSquareFootage = this.calculateSquareFootage();
            totalSquareFootage = totalSquareFootage * slope;

        var totalRoofMaterialsCost = this.calculateRoofMaterials(totalSquareFootage);
        var complexity = this.roofComplexity();
        var tearoffTotal = this.tearoffTotal();   
        var totalCost = complexity  + tearoffTotal + totalRoofMaterialsCost + (totalSquareFootage  * 2.4018 );
        var finalCost = this.nationalAverage(totalCost);

        this.render(finalCost);
        
        // $(".all-original-costs").html("Square Footage: " + totalSquareFootage + " Materials Cost = " + totalRoofMaterialsCost + " Roof Complexity: " + complexity + " Tearoff Cost: " + tearoffTotal);

        ////////// BREAKDOWN TEST///////
        // $("#square-footage").html(totalSquareFootage);
        // $("#materials").html(totalRoofMaterialsCost);
        // $("#tearoff-cost").html(tearoffTotal);
        ////////// END BREAKDOWN TEST///////

        

        // + " Materials Cost = " + totalRoofMaterialsCost + " Roof Complexity: " + complexity + " Tearoff Cost: " + tearoffTotal);

        //Clear Fields
        $("#length").val('');
        $("#width").val('');

    },

    paintCalc: function(){

        var totalSquareFootage = this.calculateSquareFootage();
        console.log("totalSquareFootage = " +totalSquareFootage);

        var totalPaintMaterialsCost = this.calculatePaintMaterials(totalSquareFootage);
        
        console.log("totalPaintMaterialsCost = " + totalPaintMaterialsCost);

        var totalPrimerMaterialsCost = this.calculatePrimerMaterials(totalSquareFootage);
        console.log("totalPrimerMaterialsCost = " + totalPrimerMaterialsCost);

        var totalCost = (totalSquareFootage * 2.4018) + totalPaintMaterialsCost + totalPrimerMaterialsCost;
        var finalCost = this.nationalAverage(totalCost);
        
        // if(!isNaN(finalCost.lowEnd))  NOT SURE IF THIS WAS NEEDED

        // {
            

        // }

        this.render(finalCost);//This goes inside isnan..

        $("#length").val('');
        $("#width").val('');
    }

   
};
    
$(window).load(function(){ calculatorObj.init();});
        