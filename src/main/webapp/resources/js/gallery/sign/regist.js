
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
			initBtnEvent : function(){
				var _self = this;
				
				// 이미지 미리보기
				$("#img-file").change(function() {
					_self.imgPreview(this);
			    });
			},
			
			// 이미지 미리보기
			imgPreview : function(input){
				
				alert(input)
				
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
			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////
			
	};
	
	_class.open();

	
});