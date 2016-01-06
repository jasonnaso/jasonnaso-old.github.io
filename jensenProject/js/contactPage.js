
$('document').ready(function(){

$('#content').css({'opacity': 0}).fadeTo(2000,1);


$('#stockholm').css({'opacity': 0}).fadeTo(1000,1);
$('#malmo').css({'opacity': 0}).fadeTo(2000,1);
$('#goteborg').css({'opacity': 0}).fadeTo(3000,1);
//$("h1").animate({top: "+=100", borderWidth:10},300);
//$("#contactHeading").animate({left: 500},500);
$("#contactHeading").animate({
    left: $("#contactHeading").parent().width() / 2 - $("#contactHeading").width() / 2
}, 2000);

//.css({'opacity': 0}).fadeTo(3000,1);
//$('#allAddresses').animate({top: "=+100"});
//under is right
//.animate({top: "+=100", borderWidth:10},300);
//.animate({left: 400},500)


$("#testDiv").animate({height: 300},400)
        .animate({left: 200},2000)


})