/* ===================================
-------------------
	Version: 1.0
-------------------
======================================*/

'use strict';

$(function() {	

	/*---------
		프리로더
	----------*/
	
	$(".loader").fadeOut();
	$("#preloder").delay(250).fadeOut("slow");
	
	/*---------
		메인프레임 메뉴 스크롤 이벤트
	----------*/
	
	$('.filter-controls').on('click', function(e) {
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
		메인프레임 메뉴 이벤트
	----------*/
	
	$('.filter-controls li').on('click', function() {
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
	
	/*--------
		상단 우측 좌측 검색 활성화 버튼 이벤트
	--------*/
	$('.search-switch').on('click', function (e) {
		e.preventDefault();
	    $('.search-model').fadeIn(400);
	});
	
	$('.search-close-switch').on('click', function () {
	    $('.search-model').fadeOut(400, function () {
	        $('#search-input').val('');
	    });
	});
	
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

	$('#btnViewMore').on('click', function() {
		javascript:location.href="/articles/view";
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
	$('.filter-controls').on("click", function(){
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
	
	/*----------
		슬라이더
	----------*/
	var sync1 = $(".album_slider");
	var sync2 = $(".album_thumb_slider");
	var syncedSecondary = true;
	
	sync1.owlCarousel({
	    items: 1,
	    slideSpeed: 2000,
	    nav: true,
	    dots: false,
	    loop: true,
		responsiveRefreshRate: 200,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay: true,
	}).on('changed.owl.carousel', syncPosition);
	
	sync2.on('initialized.owl.carousel', function() {
	    sync2.find(".owl-item").eq(0).addClass("current");
	}).owlCarousel({
		dots: false,
		nav: false,
		smartSpeed: 200,
		slideSpeed: 500,
		margin: 20,
		responsiveRefreshRate: 100,
		items: 8,
		slideBy: 8,
		autoWidth:true,
		autoHeight:true,
		responsive : {
			0 : {
				items: 2,
				slideBy: 2,
			},
			480 : {
				items: 4,
				slideBy: 4,
			},
			768 : {
				items: 6,
				slideBy: 6,
			},
			992 : {
				items: 8,
				slideBy: 8,
			}
		}
	}).on('changed.owl.carousel', syncPosition2);
	
	function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	
	    //if you disable loop you have to comment this block
	    var count = el.item.count - 1;
	    var current = Math.round(el.item.index - (el.item.count / 2) - .5);
	
	    if (current < 0) {
	        current = count;
	    }
	    if (current > count) {
	        current = 0;
	    }
	    //end block

	    sync2
	        .find(".owl-item")
	        .removeClass("current")
	        .eq(current)
	        .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	
	    if (current > end) {
	        sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	        sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	}

	function syncPosition2(el) {
	    if (syncedSecondary) {
	        var number = el.item.index;
	        sync1.data('owl.carousel').to(number, 100, true);
	    }
	}
	
	sync2.on("click", ".owl-item", function(e) {
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	});

	
}); 