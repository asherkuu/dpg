
$(function() {	

	"use strict";
	
//////////////
//글로벌 변수 영역
//////////////	
	
	var g_jspPath = {}; // jsp 경로
	var g_prop 	= {}; // 글로벌 프로퍼티
	var g_param 	= {}; // 글로벌 파라미터	
	
	var _class = {

//////////////
//초기 호출 함수 영역
//////////////			
			
			/*----------
				초기 호출 함수
			----------*/
			open : function(){
				var _self = this;
				
				// input file style
				$('#multp_file').filestyle({
					buttonBefore: true,
					placeholder: "No file"
				});
				
				_self.initBtnEvent();
			},
			
//////////////
// 기능  함수  영역
//////////////		
			
			/*----------
				버튼 이벤트 함수
			----------*/
			initBtnEvent :function(){
				var _self = this;
				
				// regist image
				$("#btnRegistFile").on("click",function(){
					var formData = new FormData();
					var inputFile = $('input[name=multp_file]');
					var files = inputFile[0].files;
					
					if(files.length <= 0) {
						swal("Select your Articles !", {icon : "warning", button : true})
					} else {
						
						for(var i = 0; i < files.length; i++) {
							
							var lastIndex = files[i].name.lastIndexOf(".");
							var fileExt = files[i].name.substring(lastIndex, files[i].name.length).toLowerCase();
							
							if(fileExt != ".jpg" && fileExt != ".png" && fileExt != ".jpeg") {
								swal("Can Select only JPG , JPEG and PNG files !", {icon : "warning", button : true})
								$('input[name=multp_file]').val('');
								return;
							}
							
							formData.append('multp_file', files[i]);
						}
						
						cmmn.util.Request.requestAjaxFileUpload("/article/regist.do", formData);
					}
				});
				
				// Preview Images
				$("#multp_file").change(function(e) {
					_self.imgsPreview(e);
			    });

			},
			
			/*----------
				이미지 미리보기 함수
			----------*/
			imgsPreview : function(e) {
				var _self = this;
	
				$('.imgs_preview_area').empty();
	
				var files = e.target.files;
				var arr = Array.prototype.slice.call(files);
	
				for (var i = 0; i < files.length; i++) {
					if (!_self.checkExtension(files[i].name, files[i].size)) {
						return false;
					}
				}

				arr.forEach(function(f) {

					// 파일명이 길면 파일명...으로 처리
					var fileName = f.name;
					if (fileName.length > 10) {
						fileName = fileName.substring(0, 7) + "...";
					}

					// div에 이미지 추가
					var html = "";
					
					html += '<div class="img_list" style="">';
					html += 	'<li>';

					// 이미지 파일 미리보기
					if (f.type.match('image.*')) {

						var reader = new FileReader();
						reader.onload = function(e) {
							html += 		'<img src="' + e.target.result + '" title="' + f.name + '" width=100 height=100 />';
							html += 	'</li>';
							html += '</div>';
							$(html).appendTo('.imgs_preview_area');
						}
						reader.readAsDataURL(f);
					} else {
						html += '<img src="/resources/img/fileImg.png" title="' + f.name + '" width=100 height=100 />';
						$(html).appendTo('.imgs_preview_area');
					}
				});// arr.forEach
			},
			
			/*----------
				이미지 확장자 체크 함수
			----------*/
			checkExtension : function(fileName, fileSize) {
				var regex = new RegExp("(.*?)\.(jpg|jpeg|png)$");
				var maxSize = 20971520; // 20MB
	
				if (fileSize >= maxSize) {
					swal('Exceeding The Maximun File Size');
					$("input[type='file']").val(""); // 파일 초기화
					return false;
				}
	
				var inputFile = $('input[name=multp_file]');
				var files = inputFile[0].files;
	
				for (var i = 0; i < files.length; i++) {
	
					var lastIndex = files[i].name.lastIndexOf(".");
					var fileExt = files[i].name.substring(lastIndex, files[i].name.length).toLowerCase();
	
					if (fileExt != ".jpg" && fileExt != ".png" && fileExt != ".jpeg") {
						swal("Can Select only JPG , JPEG and PNG files !", { icon : "warning", button : true});
						$('input[name=multp_file]').val('');
						return;
					}
				}
		      
		      return true;
		    },
			
// ////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////
			
	};
	
	_class.open();

});