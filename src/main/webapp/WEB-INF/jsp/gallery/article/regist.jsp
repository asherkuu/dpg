<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	String CTX_PATH = request.getContextPath();
%>
<script src="/resources/js/gallery/article/article.js"></script>

<section class="article_regist_area">



<div class="container main_area">
		<div class="row">
			<div class="col-lg-7 m-auto">
<!--
	Main Carousel Area
-->
				<div class="album_slider owl-carousel owl-loaded owl-drag">
					<div class="owl-stage-outer">
						<div class="owl-stage main_frame">

							<div class="owl-item">
								<div class="album_slide set-bg" data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg" data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg" data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;); height: 410px;">
								</div>
							</div>
						</div>
					</div>
				</div>
<!--
	End Of Main Carousel Area
-->				
<!--
	Sub Carousel Area
-->
				<div class="album_thumb_slider owl-carousel owl-loaded owl-drag">
					<div class="owl-stage-outer">
						<div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1127px;">
						
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/1.jpg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/2.jpg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/3.jpg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/1.jpg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/2.jpg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/3.jpg" alt="">
								</div>
							</div>
							
						</div>
					</div>
				</div>
<!--
	End Of Sub Carousel Area
-->
			</div>
			
			<div class="col-lg-4">
<!--  
	Right Info Area
-->
				<div class="frame_info new">
					<h2>IT IS NEW !</h2>
					<br>
					<h3>Asher Kim</h3>
					<button id="btnViewMore" class="view_more">View More</button>
				</div>
<!--  
	End Of Right Info Area
-->
			</div>
		</div>
	</div>







	
<!--  
	preview Images
-->
	<div class="imgs_preview_area"></div>

	<!--  
	Regist Images Area
-->
	<form name="atc_regist_form" enctype="multipart/form-data">
		<div>
			<input type="file" multiple="multiple" name="multp_file"
				id="multp_file">
		</div>
		<input type="button" id="btnRegistFile" class="site-btn"
			value="Regist Articles">
	</form>

</section>
