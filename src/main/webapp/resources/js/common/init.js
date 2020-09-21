
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

	/*---------
		프리로더
	----------*/
	$(".loader").fadeOut();
	$("#preloader").delay(250).fadeOut("slow");

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
	
	/*---------
		드롭다운
	----------*/
	$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
}); 