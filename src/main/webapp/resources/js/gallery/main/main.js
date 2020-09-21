

$(function() {
	
	'use strict';
	
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
			
			_self.initPage();
			_self.initBtnEvent();
		},	
			
//////////////
// 기능  함수  영역
//////////////
	
		/*----------
			버튼 이벤트 함수
		----------*/
		initBtnEvent : function(){
			var _self = this;			

			// 필터 컨트롤 이벤트
			$('.header-filter .dropdown-menu>li').on('click', function() {
				
				var _filter = $(this).attr("id");
				g_param.FILTER = _filter;
				_self.loadArticles(g_param); // 데이터 조회 
			});
			
			$('#btnRegist').on("click", function(){
				
			});
		},
		
		/*----------
			초기 페이지 로드시 실행 함수
		----------*/
		initPage : function() {
			var _self = this;
			_self.loadArticles(); // 데이터 조회
		},
		
// ////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////		
		
		/*----------
			이미지 데이터 조회 함수
		----------*/
		loadArticles(param) {
			var _self = this;
			
			let html = "";
			let grid_size 	= ""; // 그리드 영역 클래스
			let item_comment 	= ""; // 타이틀 또는 코멘트
			
			// 데이터 호출
			cmmn.util.Request.requestAjax("/preview/loadArticles.do", param, "ajax").done(function(result){

				$('.grid').empty(); // 영역 초기화
				
				$.each(result.list, function(i, list){
					
					// init
					grid_size 		= "";
					item_comment 	= "";
					
					// size
					if(list.ART_WIDTH >= 1800) { // 가로가 큰 이미지
						grid_size = " item-full";
					}
					
					if(list.ART_HEIGHT >= 750) { // 높이가 큰 이미지
						grid_size = " item-large";
					} else if(list.ART_HEIGHT < 750 && list.ART_HEIGHT >= 490) { // 높이가 중간정도인 이미지
						grid_size = " item-medium";
					} else if(list.ART_HEIGHT < 490) { // 높이가 평균인 이미지
						grid_size = "";
					}
					
					// details
					if(list.ART_TITLE != "") { // 제목이 있는경우
						item_comment = list.ART_TITLE;
					} else {	// 아직 제목이 없는 경우
						item_comment = "Leava a Comment";
					};
					
					// html
					html += "<div class='item" + grid_size +"' style='background: url(/tmp/rscs/img/" + list.ART_RNAME + ")" 
						   +"' data-id='" + list.ART_CODE + "'>"
						   
				   if(list.ART_TITLE != "") { // 제목이 있는경우
					   html += "		<div class='item_details'>" + list.USR_ID + " / " + list.ART_TITLE + "</div>";
						item_comment = list.ART_TITLE;
					} else {	// 아직 제목이 없는 경우
						html += "";
					};
					
					html += "</div>";
				});
				
				$('.grid').append(html);
				
				// 메인 이미지 클릭시 상세페이지 이동
				$('.grd_section .grid .item').on('click', function(){
					javascript:location.href = "/article/v?"+btoa("ART_CODE")+"=" + $(this).data("id"); // 컬럼네임 Base64 인코딩
				});
			});
			
		},
	};
	
	_class.open();
	
}); 