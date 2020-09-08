/* ===================================
-------------------
	Version: 1.0
-------------------
======================================*/


$(function() {
	
	'use strict';

	/*----------
		필터 스크롤 이벤트
	----------*/
	$(window).on('scroll resize',function(e) {
		if($(document).scrollTop() > 800) {
			$('.filter-controls').addClass('controls_fixed');
			$('body').addClass('pt200');
		} else {
			$('.filter-controls').removeClass('controls_fixed');
			$('body').removeClass('pt200');
		}
		e.preventDefault();
	});
	
	/*----------
		버튼 클릭이벤트
	----------*/
	$('#btnViewMore').on('click', function() {
		javascript:location.href="/articles/view";
	});

	/*---------
		Article 클릭시 해당 Detail 페이지 이동
	----------*/
	$('.owl-stage.main_frame .owl-item').on('click', function(){
		javascript:location.href="/articels/detail";
	});
	
	/*----------
		슬라이더
	----------*/
	var sync1 = $(".album_slider");
	var sync2 = $(".album_thumb_slider");
	
	cmmn.util.Request.initCarousel(sync1, sync2);
	
}); 