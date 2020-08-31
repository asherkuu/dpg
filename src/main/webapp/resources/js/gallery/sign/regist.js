
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
				_self.initOnInput();
				_self.initTooltip();
			},
			
			
//////////////
// 기능  함수  영역
//////////////			
			
			// 버튼 이벤트 함수
			initBtnEvent : function(){
				var _self = this;
				
				// 이미지 미리보기
				$("#img-file").change(function() {
					_self.imgPreview(this);
			    });
				
				// 등록버튼
				$("#btnCreate").on("click", function(){

					
//					if(_self.isValid()) {
//						alert("done");
//					} else {
//						return false;
//					} 
					
				});
			},
			
			// 이미지 미리보기
			imgPreview : function(input){
				var _self = this;
				
				if(input.files.length == 0) {
					$('#img-preivew').attr('src', "/resources/img/no-image.jpg");
					return;
				}
				
				if (input.files && input.files[0]) {
		            var reader = new FileReader();
		            reader.onload = function(e) {
		                $('#img-preivew').attr('src', e.target.result);
		            }
		            reader.readAsDataURL(input.files[0]);
		        }
			},
			
			// 인풋타입 입력방지
			initOnInput : function() {
				var _self = this;
				
				$('.contact_form_box input').on("input",function(){
					
					if(this.name == 'USR_LNAME' || this.name == 'USR_FNAME') {
						return;
					} else {
						this.value = this.value.replace(/ /g, ''); // 공백제거
					}
					
					if(this.name == "USR_PHONE") {
						this.value = this.value.replace(/[^0-9]/g, '');
					}
				});
			},
			
			// 인풋 툴팁 띄우기
			initTooltip : function() {
				var _self = this;

				$('[data-toggle="tooltip"]').tooltip(); // 툴팁 활성화
				
				$('#USR_PWD').on("focus", function(){
					
					$('#USR_PWD').tooltip({
						animation: false,
						containter: false,
						delay:{show:500, hide:100},
						html: true,
						selector: false,
						trigger: 'hover focus',
						viewport: {selector:'body', padding:0},
					});
				});
				
				$('#USR_PWD').on("focusout", function(){
					$('#USR_PWD').tooltip('dispose');
				});
			},
			
			// 유효성검사
			isValid : function() {
				var _self = this;
				
				var frm = document.regist_form;
				
				// User Id
				if(frm.USR_ID.value.trim() == '') {
					alert("ID is required.");
					$('#USR_ID').focus();
					return false;
					
					// ID is already registered.
				
				} else {
					var id_Reg = /^[A-za-z0-9]{4,15}$/g;
					
					if(!id_Reg.test(frm.USR_ID.value.trim())) {
						alert(".");
						$('#USR_ID').focus();
						return false;
					}
				}
				
				// User Password
				if(frm.USR_PWD.value.trim() == '') {
					alert("Password is required.");
					$('#USR_PWD').focus();
					return false;
				}
				
				// Confirm Password
				if(frm.USR_CPWD.value.trim() == '') {
					alert("Password is required.");
					$('#USR_CPWD').focus();
					return false;
				} else {
					if(frm.USR_PWD.value.trim() != frm.USR_CPWD.value.trim()) {
						alert("Password do not match.");
						$('#USR_CPWD').val('');
						$('#USR_CPWD').focus();
					}
				}
				
				// Email
				if(frm.USR_EMAIL.value.trim() == '' || frm.USR_EMAIL.value.trim().length == 0) {
					alert("Email is required.");
					$('#USR_EMAIL').focus();
					return false;
				} else {
					var email_reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
					
					if(!email_reg.test(frm.USR_EMAIL.value.trim())) {
						alert("Email is not valid.");
						$('#USR_EMAIL').focus();
						return false;
					}
				}				
				
				return true;
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