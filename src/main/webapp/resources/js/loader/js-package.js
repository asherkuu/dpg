//
// Version 1.0
//
// 18 May 2020
//
//

var AppLibFiles = {
		
		JS : {
			
			// 외부 라이브러리
			Ref : [
				
				"resources/js/util/jquery-3.3.1.min.js",				// jquery
				"resources/js/util/bootstrap.min.js",					// bootstrap
				"resources/js/util/jquery.slicknav.min.js",				// jquery.slicknav
				"resources/js/util/jquery.magnific-popup.min.js",		// jquery.magnific-popup
				"resources/js/util/owl.carousel.min.js",				// owl.carousel
				"resources/js/util/mixitup.min.js",						// mixitup
				"resources/js/util/masonry.pkgd.min.js",				// masonry.pkgd
				"resources/js/util/slicknav.min.js",					// slicknav
				"resources/js/util/analytics.js",						// analytics
				"resources/js/util/email-decode.min.js",				// email-decode
				"resources/js/util/sweetalert.js",						// sweetalert
				
				/*
				"resources/js/common/common.js",						// common
				"resources/js/common/controls.js",						// controls
				"resources/js/common/map.js",							// map
				"resources/js/common/onion.js",							// onion
				"resources/js/common/overlay.js",						// overlay
				"resources/js/common/search_impl.js",					// search_impl
				"resources/js/common/util.js",							// util
				*/
			],
			
			// 내부 라이브러리
			Core : [
				
				// 공통 - common
				"resources/js/common/app.js",							// 앱 - 글로벌 객체 생성
				"resources/js/common/cmmnUtil.js",						// 공통 함수
				"resources/js/common/init.js",							// 초기세팅
				
//				"resources/js/gallery/sign/signIn.js",							// signIn
//				"resources/js/gallery/sign/regist.js",							// regist
	
			],

		},
		
		CSS : {
			
			// 외부 CSS
			Ref : [
				
				"resources/css/bootstrap.min.css",						// bootstrap
				"resources/css/font-awesome.min.css",					// font-awesome
				"resources/css/magnific-popup.css",						// magnific-popup
				"resources/css/owl.carousel.min.css",					// owl.carousel.min
				"resources/css/slicknav.min.css",						// slicknav
				"resources/css/aos.css",								// aos
				"resources/css/style.css",								// style
				
			],
			
			// 내부 CSS
			Core : [
				
				"resources/css/signIn.css",								// signIn
				
			]
		}

}

if(typeof exports !== "undefined"){
	exports.AppLibFiles = AppLibFiles;
}
