<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="false" %>

<% String CTX_PATH = request.getContextPath(); %>

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
	
</section>


<!--  
	Filter Controls Area
-->
<div class="filter-controls">
	<ul>
		<li class="filter active" data-filter="*">ALL</li>
		<li class="filter" data-filter=".yet">YET</li>
		<li class="filter" data-filter=".done">DONE</li>
	</ul>
</div>
<!--  
	End Of Filter Controls Area
-->


<section class="gallery_section">
	<div class="gallery_warp" id="MixItUp1BE6E7">
<!--  
	Main Articles Area
-->
		<div class="mix grid_item grid-1 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-2 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-3 done">
			<a class="gallery_img set-bg done" href="<%=CTX_PATH%>/resources/img/2.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-4 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-5 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-6 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-7 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-8 done">
			<a class="gallery_img set-bg done" href="<%=CTX_PATH%>/resources/img/2.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-9 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-10 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-11 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-12 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-13 done">
			<a class="gallery_img set-bg done" href="<%=CTX_PATH%>/resources/img/2.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-14 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-15 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-16 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-17 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-18 done">
			<a class="gallery_img set-bg done" href="<%=CTX_PATH%>/resources/img/2.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/2.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/2.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-19 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/1.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/1.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/1.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
		<div class="mix grid_item grid-20 yet">
			<a class="gallery_img set-bg yet" href="<%=CTX_PATH%>/resources/img/3.jpg"
				data-setbg="<%=CTX_PATH%>/resources/img/3.jpg"
				style="background-image: url(&quot;<%=CTX_PATH%>/resources/img/3.jpg&quot;);">
				<div class="gellery_text">
					<span>Photography / Flower</span>
					<h3>Flower In Door</h3>
				</div>
			</a>
		</div>
<!--  
	End Of Main Articles Area
-->
	</div>
	
		<!-- 스크롤 페이징 처리
		<div class="gird_loading">
			<i class="fa fa-spinner fa-spin"></i>
		</div>
		-->
</section>

<!--
 	<script src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13" type="text/javascript"></script>
	<script type="text/javascript"> 
 		window.dataLayer = window.dataLayer || [];
 		function gtag() {
 			dataLayer.push(arguments);
 		}
 		gtag('js', new Date());

 		gtag('config', 'UA-23581568-13');
 	</script> 
-->