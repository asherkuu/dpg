//
// Version 1.0
// 18 May 2020
// 
// Auther : Asher Kim
//
//

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
							swal(result.message, {icon : "success", button : "YEET !"}).then((willDelete) => {
								if(willDelete) {
									if(result.location != "") {
										javascript:location.href = result.location;
									}
								}
							});
						} else {
							swal(result.message, {icon : "warning", button : true}).then((willDelete) => {
								if(willDelete) {
									if(result.location != "") {
										javascript:location.href = result.location;
									}
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
							swal(result.message, {icon : "success", button : "YEET !"}).then((willDelete) => {
								if(willDelete) {
									if(result.location != "") {
										javascript:location.href = result.location;
									}
								}
							});
						} else {
							swal(result.message, {icon : "warning", button : true}).then((willDelete) => {
								if(willDelete) {
									if(result.location != "") {
										javascript:location.href = result.location;
									}
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
		 * function: initRegExpression
		 * Description : 정규표현식 함수
		 * Usage   : cmmn.util.Request.initRegExpression(gParam);
		 * Author  : Asher Kim
		 * Comment : 폼태그내에서 입력된 공통된값을 gParam 으로 넘겨받아서
		 * 				   각 input 태그에 입력된 값들이 정규표현식(Regular Expression) 에 적합한지
		 * 				   테스트를 한후 그에 맞게 에러메시지를 출력한다.
		 * 				   Usage 에서 사용할때 gParam 에 form.serialize(); 한 데이터를 gParam에 담아서 넘겨주고
		 * 				   input 태그의 id 값은 아래 함수에 정의되어져있는 id 값을 사용해야 공통으로 사용할 수 있다.
		 */
		initRegExpression : function() {
			
		
		}, 
		
	} // end of _util

	// js extend
	cmmn.util = $.extend(cmmn.util || {}, {
		Request : _util
	});

})();
