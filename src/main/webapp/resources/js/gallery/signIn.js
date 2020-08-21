
$(function() {	
	
	"use strict";
	
	var _class = {
			
//////////////
// 글로벌 변수 영역
//////////////			
			
			// jsp 경로
			gJspPath : {
				
			},
			
			// 글로벌 프로퍼티
			gProp : {
				
			},
			
			// 글로벌 파라미터
			param : {
				
			},			
			
//////////////
//초기 호출 함수 영역
//////////////			
			
			// 초기 호출 함수
			open : function(){
				var _self = this;
				
				_self.initBtnEvent();
			},
			
			
//////////////
// 기능  함수  영역
//////////////			
			

			// 버튼 이벤트 함수
			initBtnEvent :function(){
				var _self = this;
				
				$("#btn-account").click(function(){
					javascript:location.href="/gallery/regist";
				});
			},
			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////
			
	};
	
	_class.open();

	
});