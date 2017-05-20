$(document).ready(function () {
    
$(".expand_content").click(function(){
     
if($('.hideText').css("display")=="none"){
$('.leftSideBar').css({"height":"auto"});    
$('.hideText').css("display","inline-block");
$('.subMenu').css({"position":"static","left":"0","top":"","margin-top":"10px"}); 
$('.subMenu').find("span").addClass("triangle_down"); 
$('.subMenu').find("span").removeClass("triangle_left");     
$(".expand_bar").css("left","270px");
$(".leftSideBar").css("width","270px");
$(".verticaltext").text( "COLLAPSE");
$(".expand_icon").text("<");    
$(".subHeading").css("display","none")  
 $(".mainNavul ul").on("mouseover", function () {
            $(".footerText").hide();
            $(".footer li").css({"display": "inline-block"});
        });
    $(".mainNavul ul").on("mouseout", function () {
        $(".footerText").show();
         $(".footer li").css("display", "block");
    });   
}
else{
$('.hideText').hide();
$('.leftSideBar').css({"height":"100%"});    
$('.subMenu').css({"position":"","left":"","top":"","margin-top":"0px"});     
$(".expand_bar").css("left","70px");
$(".leftSideBar").css("width","70px");
$(".verticaltext").text("EXPAND");
$(".expand_icon").text(">");    
$(".subHeading").css("display","inline-block")     
$('.subMenu').find("span").addClass("triangle_left"); 
$('.subMenu').find("span").removeClass("triangle_down");
}

});
$("li").hover(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        $(this).find(".inactive_img").css("display","none");
         $(this).find(".active_img").css("display","block");
        }
    else{
        $(this).addClass("active") 
        $(this).find(".inactive_img").css("display","block");
        $(this).find(".active_img").css("display","none");
    }
    
});
});


