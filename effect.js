$(document).ready(function(){
    $(".sekil img").each(function(x){
$(this).click(function(){
    $(".nav1").animate({left: '-500px'},1000)
    $(".nav2").animate({right: '-700px'},1000)
   $(".back").fadeIn()
})
    })
    $("i").click(function(){
        $(".nav1").animate({left: '0'},1000)
        $(".nav2").animate({right: '0'},1000)
        $(".back").fadeOut()
    })
})