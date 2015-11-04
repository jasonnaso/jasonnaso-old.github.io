var calculatorObj = {

    init: function(){
        
        this.cacheDom();
        this.bindEvents();
        
    },

    cacheDom: function(){
        
        //cache all thats needed
        this.$roofCalculator = $("#roofCalculator");
        this.$paintCalculator = $("#paintCalculator");
        this.$slope = $("#slope");
        this.$materialsChoice = $("#materialsChoice");
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

    calculateMaterials: function(totalSquareFootage){

        var materialsCost = totalSquareFootage * this.$materialsChoice.val();
        
        return materialsCost;
    },

    render: function(totalCost){

        console.log(totalCost);
        var lowEnd = totalCost * 0.95;
        var nasoRemodel = totalCost;
        var mid = totalCost *  1.05;
        var midHigh = totalCost * 1.10;
        var highEnd = totalCost * 1.15;    
        
        //string command   num command
        var roundedLowEnd = Math.round(lowEnd * 100) / 100;
        var roundedNasoRemodel = Math.round(nasoRemodel * 100) / 100;
        var roundedMid = Math.round(mid * 100) / 100;
        var roundedMidHigh = Math.round(midHigh * 100) / 100;
        var roundedHighEnd = Math.round(highEnd * 100) / 100;

        $(".lowEndTotal").html(roundedLowEnd);
        $(".midLowTotal").html(roundedNasoRemodel);
        $("#nasoEstimate").html(roundedNasoRemodel);
        $(".middleTotal").html(roundedMid);
        $(".MidHighTotal").html(roundedMidHigh);
        $(".highEndTotal").html(roundedHighEnd);

    },

    roofCalc: function(){

        var slope = this.$slope.val();
        var totalSquareFootage = this.calculateSquareFootage();
            totalSquareFootage = totalSquareFootage * slope;
        var totalMaterialsCost = this.calculateMaterials(totalSquareFootage);
        var complexity = this.roofComplexity();
        var tearoffTotal = this.tearoffTotal();
        //total is complexity  + tearoffTotal 
        //   
        var totalCost = complexity  + tearoffTotal + totalMaterialsCost + (totalSquareFootage  * 2.4018 );
        
        var output = this.render(totalCost);
        
        console.log("Length,  Width = " + this.$length.val() + " , " + this.$width.val());

        console.log("Roof Slope = " + this.$slope.val());
        console.log("totalSquareFootage = " + totalSquareFootage);
        console.log("totalMaterialsCost = " + totalMaterialsCost);
        console.log("complexity = " + complexity);
        console.log("tearoffTotal = " + tearoffTotal);
        console.log("total cost = " + totalCost);

        $(".curt").html("Roof Slope = " + this.$slope.val() + " totalSquareFootage = " + totalSquareFootage + " totalMaterialsCost = " + totalMaterialsCost + " complexity = " + complexity + " tearoffTotal = " + tearoffTotal + " total cost = " + totalCost);

        //Clear Fields
        $("#length").val('');
        $("#width").val('');

    },

    paintCalc: function(){

        console.log("Paint Calc your here!");
        var totalSquareFootage = this.calculateSquareFootage();
        var totalMaterialsCost = this.calculateMaterials(totalSquareFootage);

        totalCost = totalSquareFootage + totalMaterialsCost;

        var totalCost = (totalSquareFootage * 3.1818) + totalMaterialsCost;
        var output = this.render(totalCost);

        
        console.log("totalSquareFootage = " + totalSquareFootage);
        console.log("totalMaterialsCost = " + totalMaterialsCost);
        console.log("total cost = " + totalCost);

         //make all calculations with square footage/materials/etc
    },

    windowEstimate: function(){
         //make all calculations with square footage/materials/etc
    },
};
    
$(window).load(function(){ calculatorObj.init();});
        
    

   







