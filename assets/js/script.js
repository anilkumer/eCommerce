//========== Sticky Navbar ==========

var navOffset = 300;
$(".header").wrap('<div class="nav-placeholder"></div>');
$(".nav-placeholder").height(jQuery(".header").outerHeight());
$(window).scroll(function() {
	
	scrollPos = $(window).scrollTop();
	
	if (scrollPos >= navOffset) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	}
	
});
//========== Dropdown menu =============
    $(document).ready(function(){

$('.navigation-bar ul li').hover(function(){

$(this).find('ul').stop(true,true).slideDown(200);

},function(){

$(this).find('ul').stop(true,true).slideUp(200);

});

});
//========== Responsive Menu ==========

$(".toggle").click(function(){
	$(".navigation-bar").toggleClass("show-menu");

});


//========= Slider Owl Carousel =====

$('.banner-area-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});




//=========== Magnific popup ===============
$(document).ready(function() {
    $('.youtube-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
});

//======Counter========
