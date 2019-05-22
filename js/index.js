$(function(){

	var swiper = new Swiper('.sec_con1 .swiper-container', {
		pagination: '.sec_con1 .swiper-pagination',
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		padinationClickable: true,
		spaceBetween: 0,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		speed: 1000,
		loop: true
	});

	//让轮播图片高度为一屏的高
	var Xh;
	Xh = $(window).height();
	$(".sec1_bann>img").css({
		'height': Xh + 'px'
	});
	$(window).resize(function() {
		Xh = $(window).height();
		$(".dec1_bann>img").css({
			'heihgt': Xh + 'px'
		})
	});

	//sec1_list 滚动后的3d特效
	var Top_list = $(".sec_con2").offset().top-400;
	$(window).scroll(function() {
		var Top = $(window).scrollTop();
		if (Top > Top_list) {
			$(".sec_con1").addClass("active");
		} else {
			$(".sec_con1").removeClass("active");
		}
	})

})