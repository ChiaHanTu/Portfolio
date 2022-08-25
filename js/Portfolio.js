$(document).ready(function(){

	$(".mobile-nav-icon").click(function(){ 
        $("nav").slideToggle();    
    });
    
    $(window).on('load resize',function(){
        var a_w = document.body.clientWidth;
        if(a_w >= 768) $("nav").show(); else $("nav").hide();
    });

     //group
    $(".fancybox").fancybox({
        openEffect  : 'fade', //'elastic', 'fade' or 'none'
        closeEffect : 'none'
    });
});
