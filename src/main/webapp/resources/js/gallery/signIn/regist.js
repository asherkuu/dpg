
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
				
				_self.init();
				_self.initBtnEvent();
				_self.initOnInputOption();
				_self.isValidFocusout();
			},
			
			// 초기화
			init : function() {
				$('[data-toggle="tooltip"]').tooltip(); // 툴팁 활성화
			},
			
//////////////
// 기능  함수  영역
//////////////			
			
			// 버튼 이벤트 함수
			initBtnEvent : function(){
				var _self = this;
				
				// 이미지 미리보기
				$("#img_file").change(function() {
					_self.imgPreview(this);
			    });
				
				// 등록버튼
				$("#btnCreate").on("click", function(){
					if(! _self.isValid()) {
						return false;
					} else {
						var formData = new FormData($("form[name=regist_form]")[0]);
//						var fromData = new Formdata($("form[name=regist_form]")[0]);
						cmmn.util.Request.requestAjaxFileUpload("/signIn/regist/registUser.do", formData/*$('form[name=regist_form]').serialize()*/);
					}
				});
			},
			
			// 이미지 미리보기
			imgPreview : function(input){
				var _self = this;
				
//				if(input.files.length == 0) {
//					$('#img-preivew').attr('src', "/resources/img/no-image.jpg");
//					return;
//				}
				
				if (input.files && input.files[0]) {
		            var reader = new FileReader();
		            reader.onload = function(e) {
		                $('#img-preivew').attr('src', e.target.result);
		            }
		            reader.readAsDataURL(input.files[0]);
		        }
			},
			
			// 인풋타입 입력방지
			initOnInputOption : function() {
				var _self = this;
				
				$('.contact_form_box input').on("input",function(){
					
					if(this.name == 'USR_LNAME' || this.name == 'USR_FNAME') {
						return;
					} else {
						this.value = this.value.replace(/ /g, ''); // 공백제거
					}
					
					if(this.name == "USR_ID") {
						this.value = this.value.replace(/[~!@\#$%^&*\()\-=+_']/gi, ''); // 특수문자 제거
					}
					
					if(this.name == "USR_PHONE") {
						this.value = this.value.replace(/[^0-9]/g, ''); // 숫자만 입력가능
					}
				});
			},		
			
			// 유효성검사
			isValid : function() {
				var _self = this;
				
				var valLname 	= $('#USR_LNAME').val().trim();
				var valFname 	= $('#USR_FNAME').val().trim();
				var valId 		= $('#USR_ID').val().trim();
				var valPwd 		= $('#USR_PWD').val().trim();
				var valCpwd 	= $('#USR_CPWD').val().trim();
				var valEmail	= $('#USR_EMAIL').val().trim();
				
				var id_Reg 		= /^[a-z]+[a-z0-9]{5,30}$/g;
				var pwd_reg 	= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
				var email_reg 	= /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				
				if(valLname == '') {
					$('#USR_LNAME').focus();
					return false;
				};
				
				if(valFname == '') {
					$('#USR_FNAME').focus();
					return false;
				};
				
				if(valId == '') {
					$('#USR_ID').focus();
					return false;
				} else {
					if(!id_Reg.test(valId)) {
						$('#USR_ID').focus();
						return false;
					};
				};
				
				if(valPwd == '') {
					$('#USR_PWD').focus();
					return false;
				} else {
					if(!pwd_reg.test(valPwd)) {
						$('#USR_PWD').focus();
						return false;
					};
				};
				
				if(valCpwd == '') {
					$('#USR_CPWD').focus();
					return false;
				} else {
					if(valPwd != valCpwd) {
						$('#USR_CPWD').val('');
						$('#USR_CPWD').focus();
						return false;
					}
				};
				
				if(valEmail != '') {
					if(!email_reg.test(valEmail)) {
						$('#USR_EMAIL').focus();
						return false;
					};
				};
				
				return true;
			},
			
			// 유효성검사 - focusout
			isValidFocusout : function() {
				var _self = this;
				
				$('#USR_PWD').keydown(function(e){
					if(e.keyCode === 9) {
						$('#USR_PWD').tooltip('hide');
					}
				});
				
				var id_Reg 		= /^[a-z]+[a-z0-9]{6,30}$/g;
				var pwd_reg 	= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
				var email_reg 	= /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				
				// error message
				$('.contact_form_box input').on("focusout", function(){
					var error = '';
					
					var valLname 	= $('#USR_LNAME').val().trim(); 
					var valFname 	= $('#USR_FNAME').val().trim(); 
					var valId 		= $('#USR_ID').val().trim();    
					var valPwd 		= $('#USR_PWD').val().trim();   
					var valCpwd 	= $('#USR_CPWD').val().trim();  
					var valEmail	= $('#USR_EMAIL').val().trim(); 
					
					// USR_ID
					if(this.name == "USR_ID") {
						if(valId.length > 0) {
							if(!id_Reg.test(valId)) {
								if(valId.length < 6) {
									error = "ID must be at least 6 characters.";
								} else if(valId.search(/[a-z]/g)) {
									error = "ID must be start with small letter.";
								}
								
								$('.tooltip_input .tooltiptext.id').css("visibility", "visible");
								$('.tooltip_input').css("visibility", "visible");
								$('.tooltip_input .tooltiptext.id').html(error);
								$('#USR_ID').css("border-bottom","1px solid red");
								return false;
							} else {
								$('#USR_ID').css("border-bottom","");
							}
						}
						$('.tooltip_input .tooltiptext.id').css("visibility", "hidden");
						$('#USR_ID').css("border-bottom","");
					} // USR_ID
					
					// USR_PWD
					if(this.name == "USR_PWD") {
						if(valPwd.length > 0) {
							if(!pwd_reg.test(valPwd)) {
								if(valPwd.length < 8) {
									error = "Password must be between 8 and 25 characters.";
								} else {
									error = "Enter a valid Password.";
								}
								
								$('.tooltip_input .tooltiptext.pwd').css("visibility", "visible");
								$('.tooltip_input .tooltiptext.pwd').html(error);
								$('#USR_PWD').css("border-bottom","1px solid red");
								$('#USR_PWD').val('');
								return false;
							} else {
								$('#USR_PWD').css("border-bottom","");
							}
						} else {
							$('#USR_CPWD').val('');
						}
						$('.tooltip_input .tooltiptext.pwd').css("visibility", "hidden");
						$('#USR_PWD').css("border-bottom","");							
					} // USR_PWD
					
					// USR_CPWD
					if(this.name == "USR_CPWD") {
						if($('#USR_CPWD').val().trim().length > 0) {
							if($('#USR_PWD').val().trim() != $('#USR_CPWD').val().trim()) {
								error = "Password is not match.";
								$('.tooltip_input .tooltiptext.cpwd').css("visibility", "visible");
								$('.tooltip_input .tooltiptext.cpwd').html(error);
								$('#USR_CPWD').css("border-bottom","1px solid red");
								$('#USR_CPWD').val('');
								return false;
							}
						}
						$('.tooltip_input .tooltiptext.cpwd').css("visibility", "hidden");
						$('#USR_CPWD').css("border-bottom","");
					} // USR_CPWD
					
					// USR_EMAIL
					if(this.name == "USR_EMAIL") {
						if($('#USR_EMAIL').val().trim().length > 0) {
							if(!email_reg.test($('#USR_EMAIL').val().trim())) {
								error = "Enter a valid Email.";
								$('.tooltip_input .tooltiptext.email').css("visibility", "visible");
								$('.tooltip_input .tooltiptext.email').html(error);
								$('#USR_EMAIL').css("border-bottom","1px solid red");
								return false;
							}
						} 
						$('.tooltip_input .tooltiptext.email').css("visibility", "hidden");
						$('#USR_EMAIL').css("border-bottom","");	
					}// USR_EMAIL
					
				}); // focusout
				
				return true;
			},
			
//////////////
// 페이지 호출 영역
//////////////
			
//////////////
// 데이터 호출 영역
//////////////
			
			// 등록
//			registUser : function(param) {
//				cmmn.util.Request.requestAjax("/signIn/regist/registUser.do", param);
//			},
			
	};
	
	_class.open();

});