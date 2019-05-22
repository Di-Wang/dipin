$(function(){

	//导航icon点击切换动画效果
	$('.gh').click(function(){
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$('#nav').addClass('hide');
		}else {
			$(this).addClass('selected');
			$('#nav').removeClass('hide');
		}
	})



})