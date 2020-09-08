/* ===================================
-------------------
	Version: 1.0
-------------------
======================================*/


$(function() {
	
	'use strict';

	/*----------
		헤더 스크롤 이벤트
	----------*/
	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > 83) {
			$('.header').addClass('sticky');
			$('body').addClass('pt83');
		}else{
			$('.header').removeClass('sticky');
			$('body').removeClass('pt83');
		}
		e.preventDefault();
	});

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
	
	/*---------
		프리로더
	----------*/
	$(".loader").fadeOut();
	$("#preloder").delay(250).fadeOut("slow");
	
	/*---------
		메인프레임 메뉴 스크롤 이벤트
	----------*/
	$('.filter-controls .filter').on('click', function(e) {
		var screenWidth = window.innerWidth;
		if(screenWidth > 992) {
			$('html').animate({scrollTop:770}, 500);
		} else if(screenWidth <= 992 && screenWidth >= 768) {
			$('html').animate({scrollTop:760}, 500);
		} else if(screenWidth < 768 && screenWidth >= 576) {
			$('html').animate({scrollTop:835}, 500);
		}  else if(screenWidth <= 576 && screenWidth >= 280) {
			$('html').animate({scrollTop:825}, 500);
		}		
	});
	
	/*---------
		필터 컨트롤 이벤트
	----------*/
	$('.filter-controls li.filter').on('click', function() {
		$('.filter-controls li').removeClass('active');
		$(this).addClass('active');
	});
	
	if($('.gallery_warp').length > 0 ) {
		var containerEl = document.querySelector('.gallery_warp');
		var mixer = mixitup(containerEl);
	}
	
	if($('.blog_row').length > 0 ) {
		$('.blog_row').masonry();
	}

	/*---------
		상단 메뉴 active 이벤트
	----------*/
	var url = document.location.href; // ex) http://domain/index/preview
	var crrClass = url.split('/')[3];
	
	if(crrClass != undefined && crrClass != "") {
		var lenCrrClass = crrClass.length;
		
		if(crrClass.substring((lenCrrClass - 1), lenCrrClass) == "#" || 
		   crrClass.substring((lenCrrClass - 1), lenCrrClass) == "?") {
			crrClass = crrClass.substring((lenCrrClass - 1), 0);
		}
	}
	
	if(crrClass == undefined || crrClass == "") { // 초기화면 로드시 (http://domain)
		$('.mobile_menu #preview').addClass('menu-active');
		$('.main_menu #preview').addClass('menu-active');
	} else {
		$('.main_menu #'+crrClass+'').removeClass('menu-active');
		$('.main_menu #'+crrClass+'').addClass('menu-active');
	}
	
	/*---------
		Background Set
	----------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	
	/*---------
		상단 우측 좌측 nav 메뉴 활성화 버튼 이벤트
	----------*/
	$(".nav-switch").on('click', function (e) {
		e.preventDefault();
		$('.main_menu').toggleClass('menu-hide');
		$('.menu-wrapper').addClass('hide-left');
	});
	
	$(".nav-switch").on('click', function (e) {
		e.preventDefault();
	    $(".offcanvas-menu").addClass("show-offcanvas-menu");
	    $(".offcanvas-menu-overlay").addClass("active");
	    $("body").addClass("over-hid");
	});
	
	$(".offcanvas-menu-overlay").on('click', function (e) {
		e.preventDefault();
	    $(".offcanvas-menu").removeClass("show-offcanvas-menu");
	    $(".offcanvas-menu-overlay").removeClass("active");
	    $("body").removeClass("over-hid");
	});
	
	$('.main_menu').slicknav({
		'appendTo' : '.mobile_menu',
		'openedSymbol': '<i class="fa fa-angle-up"></i>',
		'closedSymbol': '<i class="fa fa-angle-right"></i>'
	});
	
	/*----------
		사진클릭 이벤트
	----------*/
	var filter = '';
	
	if(filter == '' || filter.length <= 0) {
		filter = $(".gallery_img");
	}
	
	// init
	$(filter).magnificPopup({
		type:'image',
		gallery:{
			enabled:true,
		},
	});
	
	// set
	$('.filter-controls .filter').on("click", function(){
		var selectedFilter = $('.filter-controls .active').text().toLowerCase();
		
		if(selectedFilter == "all") {
			filter = $(".gallery_img");
		} else {
			filter = $(".gallery_img.set-bg." + selectedFilter);
		}
		
		filter.magnificPopup({
			type:'image',
			gallery:{
				enabled:true,
			},
		});
	});
	
	
}); 