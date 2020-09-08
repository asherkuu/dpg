//
// Version 1.0
// 18 June 2020
// 
// Auther : Asher Kim
//
//

	// 글로벌 파라미터
	var param = {
		
	};	

(function() {
	
	"use strict";	

	var _util = {
		
		/**
		 * Version 		: 1.0
		 * function		: requestAjax
		 * Usage   		: cmmn.util.Request.requestAjax(url, param).done(function(result){});
		 * Description 	: Ajax 데이터 처리 함수
		 * Author  		: Asher Kim
		 * Comment 		: 백엔드에 이벤트를 생성한 후 위의 Usage 처럼 해당 url 과 처리해야할 param 을 넘겨주면 아래 $.ajax 에서
		 * 				  받아서 이벤트를 처리해준후 성공시(success) result 값을 반환하여 deferred 메소드를 통해 결과값을 넘겨준다.
		 * 
		 */
		requestAjax : function(url, param) {
			
			var deferred = $.Deferred();
			
			$.ajax({
				url  : url,
				data : param,
				type : "POST",
				dataType : "json",
				success : function(result){
					
					deferred.resolve(result);
					
					if(result.message != "") {
						if(result.SUCCESS) {
							
							swal(result.message, {icon : "success", button : "YEET !"}).then(function() {
								javascript:location.href = result.location;
							});
						} else {
							
							swal(result.message, {icon : "warning", button : true}).then(function() {
								if(result.location != "") {
									javascript:location.href = result.location;
								}
							});
						}
					} else {
						if(result.location != "") {
							javascript:location.href = result.location;
						}
					}
					
				},
				error : function(request, status, error){
					console.log("code: "+request.status+/* "\n"+"message: "+request.responseText+ */ "\n"+"error: "+error);
					deferred.resolve();
				}
			});
			
			return deferred.promise();
			
		}, // end of requestAjax

		/**
		 * Version 		: 1.0
		 * function		: requestAjaxFileUpload
		 * Usage   		: cmmn.util.Request.requestAjaxFileUpload(url, param).done(function(result){});
		 * Description 	: Ajax를 통한 파일업로드 처리 함수
		 * Author  		: Asher Kim
		 * Comment 		: 백엔드에 이벤트를 생성한 후 위의 Usage 처럼 해당 url 과 처리해야할 param 을 넘겨주면 아래 $.ajax 에서
		 * 				  받아서 이벤트를 처리해준후 성공시(success) result 값을 반환하여 deferred 메소드를 통해 결과값을 넘겨준다.
		 * 
		 */
		requestAjaxFileUpload : function(url, param) {
			
			var deferred = $.Deferred();
			
			$.ajax({
				url  : url,
				data : param,
				type : "POST",
				dataType : "json",
				enctype: 'multipart/form-data',
				processData : false,
				contentType : false,
				success : function(result){
					
					deferred.resolve(result);
					
					if(result.message != "") {
						if(result.SUCCESS) {
							
							swal(result.message, {icon : "success", button : "YEET !"}).then(function() {
									javascript:location.href = result.location;
							});
						} else {
							
							swal(result.message, {icon : "warning", button : true}).then(function() {
								if(result.location != "") {
									javascript:location.href = result.location;
								}
							});
						}
					} else {
						if(result.location != "") {
							javascript:location.href = result.location;
						}
					}
					
				},
				error : function(request, status, error){
					console.log("code: "+request.status+/* "\n"+"message: "+request.responseText+ */ "\n"+"error: "+error);
					deferred.resolve();
				}
			});
			
			return deferred.promise();
			
		}, // end of requestAjaxFileUpload
		
		/**
		 * Version : 1.0
		 * function: initCarousel
		 * Description : 케러셀
		 * Usage   : cmmn.util.Request.initCarousel(main_target, sub_target);
		 * Author  : Asher Kim
		 * Comment : 케러셀 기능
		 */
		initCarousel : function(sync1, sync2) {
			var _self = this;
			
			param.sync1 = sync1;
			param.sync2 = sync2;
			
			var syncedSecondary = true;
			
			sync1.owlCarousel({
			    items: 1,
			    lazyLoad : true,
			    slideSpeed: 2000,
			    nav: true,
			    dots: false,
			    loop: true,
				responsiveRefreshRate: 200,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				autoplay: true,
			}).on('changed.owl.carousel', _self.syncPosition);
			
			sync2.on('initialized.owl.carousel', function(el) {
			    sync2.find(".owl-item").eq(0).addClass("current");
			}).owlCarousel({
				dots: false,
				lazyLoad : true,
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
			}).on('changed.owl.carousel', _self.syncPosition2);
			
			sync2.on("click", ".owl-item", function(e) {
			    e.preventDefault();
			    var number = $(this).index();
			    sync1.data('owl.carousel').to(number, 300, true);
			});
			
		},
		
		syncPosition : function(el) {
		    var sync2 = param.sync2;
		    
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
		},

		syncPosition2 : function(el) {
			var sync1 = param.sync2;
			var syncedSecondary = true;
			
		    if (syncedSecondary) {
		        var number = el.item.index;
		        sync1.data('owl.carousel').to(number, 100, true);
		    }
		} // end of initCarousel()
		
		
	} // end of _util

	// js extend
	cmmn.util = $.extend(cmmn.util || {}, {
		Request : _util
	});

})();
