var calculatorObj = {

    init: function(){
        
        this.cacheDom();
        this.bindEvents();
        //custom-script.js  
    },

    cacheDom: function(){
            
        //cache all thats needed
        this.$roofCalculator = $("#roofCalculator");
        this.$paintCalculator = $("#paintCalculator");
        this.$slope = $("#slope");
        this.$roofMaterialsChoice = $("#roofMaterialsChoice");
        this.$paintMaterialsChoice = $("#paintMaterialsChoice");
        this.$primerMaterialsChoice = $("#primerMaterialsChoice");

        this.$tearOffCostPerSqFt = $("#tearOffCostPerSqFt");
        this.$length = $("#length");
        this.$width = $("#width");
        this.$complexity = $("#complexity");

    },

    //bind all needed for clicks
    bindEvents: function(){ 

        //https://secure2.homedepot.com/webapp/wcs/stores/servlet/THDCalcInteriorPaint
        this.$roofCalculator.on("click",this.roofCalc.bind(this));
        this.$paintCalculator.on("click",this.paintCalc.bind(this));
    },


    //If Input Field Empty alert
    emptyFieldCheck: function(length, width){

        if (length === "" || width === ""){

            
            sweetAlert("Sorry, We need to know the Length and Width");

            }else{

            $('html body').animate({

                scrollTop: $(".result-box-title").offset().top - 15}, 2000);
        }
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

        var tearoffTotal = this.$tearOffCostPerSqFt.val() * totalSquareFootage;

        this.nationalAverage(tearoffTotal);

        //console.log(this.calculatedNationalAverage);

        return tearoffTotal;
    },


    //calculate shit for square footage
    calculateSquareFootage: function(){

        var width = this.$width.val();
        var length = this.$length.val();
        
        this.emptyFieldCheck(length, width);

        totalSquareFootage = (width * length);
        
        return totalSquareFootage;
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
       
        $(".lowEnd").html(finalCost.lowEnd);
        $(".nasoEstimate").html(finalCost.nasoEstimate);
        $(".middle").html(finalCost.middle);
        $(".midHigh").html(finalCost.midHigh);
        $(".highEnd").html(finalCost.highEnd);
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

        console.log("Length,  Width = " + this.$length.val() + " , " + this.$width.val());

        

        $(".tearoff-mid-low").html(tearoffTotal);
        $(".curt").html("Roof Slope = " + this.$slope.val() + " totalSquareFootage Roof  = " + totalSquareFootage + " totalRoofMaterialsCost = " + totalRoofMaterialsCost + " complexity = " + complexity + " tearoffTotal = " + tearoffTotal + " total cost = " + totalCost);

        //Clear Fields
        $("#length").val('');
        $("#width").val('');

    },

    paintCalc: function(){

        console.log(" Paint choice = " + this.$paintMaterialsChoice.val());
        console.log(" Primer choice = " + this.$primerMaterialsChoice.val());

        var totalSquareFootage = this.calculateSquareFootage();
        console.log("totalSquareFootage paint calc = " + totalSquareFootage);

        var totalPaintMaterialsCost = this.calculatePaintMaterials(totalSquareFootage);
        console.log("total Paint Materials = " + totalPaintMaterialsCost);

        var totalPrimerMaterialsCost = this.calculatePrimerMaterials(totalSquareFootage);
        console.log("total Primer Materials = " + totalPrimerMaterialsCost);

        var totalCost = (totalSquareFootage * 2.4018) + totalPaintMaterialsCost + totalPrimerMaterialsCost;

        this.nationalAverage(totalCost);

        var finalCost = this.nationalAverage(totalCost);

        this.render(finalCost);

        $("#length").val('');
        $("#width").val('');

        
    },

    windowEstimate: function(){

         //make all calculations with square footage/materials/etc
        var totalSquareFootage = this.calculateSquareFootage();
    },
};
    
$(window).load(function(){ calculatorObj.init();});
        
    

   







