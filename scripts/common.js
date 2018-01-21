$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
			$(".to_top_btn").fadeIn();
		}
		else{
			$(".to_top_btn").fadeOut();
		}
    });
	$(".to_top_btn").on('click', function (event) {
		scroll_top_duration = 700,
        $('body,html').animate({scrollTop: 0,}, scroll_top_duration);
    });
});