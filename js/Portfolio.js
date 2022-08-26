$(document).ready(function(){

    const view = document.body.clientWidth;
    if(view >= 768) $("nav").show(); else $("nav").hide();

    $(".mobile-nav-icon").click(function(){ 
        $("nav").slideToggle();    
    });

     //group
    $(".fancybox").fancybox({
        openEffect  : 'fade', //'elastic', 'fade' or 'none'
        closeEffect : 'none'
    });

});

$(window).on('resize', function(){
    const view = document.body.clientWidth;
    if(view >= 768) $("nav").show(); else $("nav").hide();
});
