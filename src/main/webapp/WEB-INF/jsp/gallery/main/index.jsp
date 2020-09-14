<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="false"%>

<% String CTX_PATH = request.getContextPath(); %>

<script src="<%=CTX_PATH%>/resources/js/gallery/main/main.js"></script>

<section class="hero">
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
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/1.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpeg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/2.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpeg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/3.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpeg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/1.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpeg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/2.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpeg&quot;); height: 410px;">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide set-bg"
									data-setbg="<%=CTX_PATH%>/resources/img/3.jpeg"
									style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpeg&quot;); height: 410px;">
								</div>
							</div>
						</div>
					</div>
					<div class="owl-nav">
						<button type="button" role="presentation" class="owl-prev">
							<i class="fa fa-angle-left"></i>
						</button>
						<button type="button" role="presentation" class="owl-next">
							<i class="fa fa-angle-right"></i>
						</button>
					</div>
					<div class="owl-dots disabled"></div>
				</div>
<!--
	/ Main Carousel Area
-->
<!--
	Sub Carousel Area
-->
				<div class="album_thumb_slider owl-carousel owl-loaded owl-drag">
					<div class="owl-stage-outer">
						<div class="owl-stage"
							style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1127px;">

							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/1.jpeg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/2.jpeg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/3.jpeg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/1.jpeg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/2.jpeg" alt="">
								</div>
							</div>
							<div class="owl-item">
								<div class="album_slide_thumb set-bg">
									<img src="<%=CTX_PATH%>/resources/img/3.jpeg" alt="">
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
<!--
	/ Sub Carousel Area
-->			
<!--  
	Right Info Area
-->
			<div class="col-lg-4">
				<div class="frame_info new">
					<h2>IT IS NEW !</h2>
					<br>
					<h3>Asher Kim</h3>
					<button id="btnViewMore" class="view_more">View More</button>
				</div>
			</div>
<!--  
	/ Right Info Area
-->
		</div>
	</div>
</section>
<!--  
	Filter Controls Area
-->
<div class="filter-controls">
	<ul>
		<li class="filter active" id="all">ALL</li>
		<li class="filter" id="yet">YET</li>
		<li class="filter" id="done">DONE</li>
	</ul>
</div>
<!--  
	/ Filter Controls Area
-->
<!--  
	Main Articles Area
-->
<section class="grd_section">
	<div class="grid"></div>
</section>
<!--  
	/ Main Articles Area
-->
