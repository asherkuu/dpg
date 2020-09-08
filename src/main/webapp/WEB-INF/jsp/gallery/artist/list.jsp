<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- <script src="/resources/js/gallery/profile/profile.js"></script> -->

<style type="text/css">
.align-items-stretch {
	-webkit-box-align: stretch !important;
	-ms-flex-align: stretch !important;
	align-items: stretch !important;
}

.photo_row {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-right: -10px;
	margin-left: -10px;
}

float: left;
    width: calc(100% - 250px);
</style>

<main class="main-content">
<div class="container-fluid photos">

	<div class="photo_row align-items-stretch">
		<div class="col-6 col-md-6 col-lg-3 aos-init aos-animate"
			data-aos="fade-up">
			<a href="/resources/img/1.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/1.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init aos-animate"
			data-aos="fade-up" data-aos-delay="100">
			<a href="/resources/img/2.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/2.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-3 aos-init aos-animate"
			data-aos="fade-up" data-aos-delay="200">
			<a href="/resources/img/3.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/3.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-8 aos-init aos-animate"
			data-aos="fade-up">
			<a href="/resources/img/4.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/4.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init aos-animate"
			data-aos="fade-up" data-aos-delay="100">
			<a href="/resources/img/5.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/5.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init aos-animate"
			data-aos="fade-up">
			<a href="/resources/img/6.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/6.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init aos-animate"
			data-aos="fade-up" data-aos-delay="100">
			<a href="/resources/img/7.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/7.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init" data-aos="fade-up">
			<a href="/resources/img/8.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/8.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init" data-aos="fade-up"
			data-aos-delay="100">
			<a href="/resources/img/9.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/9.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init" data-aos="fade-up"
			data-aos-delay="200">
			<a href="/resources/img/10.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/10.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-3 aos-init" data-aos="fade-up">
			<a href="/resources/img/1.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/1.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init" data-aos="fade-up"
			data-aos-delay="100">
			<a href="/resources/img/2.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/2.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-3 aos-init" data-aos="fade-up"
			data-aos-delay="200">
			<a href="/resources/img/3.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/3.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-8 aos-init" data-aos="fade-up">
			<a href="/resources/img/4.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/4.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init" data-aos="fade-up"
			data-aos-delay="100">
			<a href="/resources/img/5.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/5.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init" data-aos="fade-up">
			<a href="/resources/img/6.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/6.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-6 aos-init" data-aos="fade-up"
			data-aos-delay="100">
			<a href="/resources/img/7.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/7.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-4 aos-init" data-aos="fade-up">
			<a href="/resources/img/8.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/8.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
		<div class="col-6 col-md-6 col-lg-8 aos-init" data-aos="fade-up"
			data-aos-delay="100">
			<a href="/resources/img/9.jpg" class="d-block photo-item"
				data-fancybox="gallery"> <img src="/resources/img/9.jpg"
				alt="Image" class="img-fluid">
			</a>
		</div>
	</div>

</div>
</main>
