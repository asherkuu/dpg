
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
				_self.initOnInputOption();
			},
			
			
//////////////
// 기능  함수  영역
//////////////			
			

			// 버튼 이벤트 함수
			initBtnEvent :function(){
				var _self = this;
				
				// go to regist page
				$("#btnAccount").click(function(){
					javascript:location.href="/signIn/regist";
				});
				
				$("#btnSignIn").on("click",function(){
					if(_self.isValid()) {
						cmmn.util.Request.requestAjax("/signIn/login.do", $('form[name=signIn_form]').serialize());
					};
				});
				
				// 엔터
				$('#USR_PWD').keydown(function(e){
					if(e.keyCode === 13) {
						$("#btnSignIn").click();
					}
				});
			},
			
			// 
			isValid : function() {
				var _self = this;
				
				if($('#USR_ID').val().trim().length <= 0) {
					$('#USR_ID').focus();
					return false;
				};
				
				if($('#USR_PWD').val().trim().length <= 0) {
					$('#USR_PWD').focus();
					return false;
				};
				
				return true;
			},
			
			// 인풋타입 입력방지
			initOnInputOption : function() {
				var _self = this;
				
				$('.frame_form_box input').on("input",function(){					
					
					this.value = this.value.replace(/ /g, ''); // 공백제거
					
					if(this.name == "USR_ID") {
						this.value = this.value.replace(/[~!@\#$%^&*\()\-=+_']/gi, ''); // 특수문자 제거
					};
				});
			},
			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////
			
			login : function(param) {
				cmmn.util.Request.requestAjax("/signIn/login.do", param).done(function(result){					
					if(result.SUCCESS) {
						javascript:location.href="/";
					} else {
//						if() {
//							존재하지 않는 아이디입니다.
//							비밀번호가 일치하지 않습니다.
//						}
						return false;
					}
				});
			},
			
	};
	
	_class.open();

	
});