$(document).ready(function(){
	/* To top */
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
	
	/* Validation */
	function startValidate(selector) {
    $(selector).each(function () {
        $(this).validate({
            onsubmit: false,
            rules: {name: "required", phone: "required", email: {required: true, email: true}},
            messages: {
                name: "Required",
                phone: "Format of: x-xxx-xxx-xx-xx",
            }
        });
    });
}

startValidate('form');

/* Form Submit */
$('.header_form_btn').click(function () {
    var $form = $(this).closest('form');

    if ($form.valid() === true) {

        $form.attr('action', 'form-submit.php').submit();
    } else {
        $form.validate()
        $form.valid()
    }
});

/* Video_toggle */
	$(".video_btn").click(function(){
		$(".blocker").fadeIn();
	});
	$(".close-modal").click(function(){
		$(".blocker").fadeOut();
	});

	
});
