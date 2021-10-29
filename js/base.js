$('#navbarNavAltMarkup').on('show.bs.collapse', function () {
    $('.navbar-nav ').css('height','10000px')
    $('.navbar-light .navbar-toggler-icon').css('background-image',"url('./images/ico-menu-close.png')")
    $(".navbar-nav").animate({opacity: '1'});
   
})

$('#navbarNavAltMarkup').on('hide.bs.collapse', function () {
    $(".navbar-nav").animate({opacity: '0'});
    $('.navbar-light .navbar-toggler-icon').css('background-image',"url('./images/ico-menu-open.png')")
})
$(document).ready(function() { 
    var width = $(window).width();
    $('#banner').css('height',width/2.5+'px')

 });

$(window).resize(function(){
    var width = $(window).width();
    $('#banner').css('height',width/2.5+'px')
 
});