document.addEventListener('DOMContentLoaded', function () {
    window.onresize = function(event) {
        console.log($(this).innerWidth());
    };
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        if (!$(this).hasClass('open')) {
            let rwd = $('.rwdmenu');
            rwd.animate({
               top:'-120px', 
            },1000)
        }
		$(this).toggleClass('open');
	});
    $('.cross').click(function () {
        let rwd = $('.rwdmenu');
            rwd.animate({
               top:'-325px', 
            },1000)
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
    })
});