<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	String CTX_PATH = request.getContextPath();
%>
<script src="/resources/js/gallery/article/article.js"></script>

<section class="regist_section">

	<div class="imgs_preview_main">
	</div>

<!--  
	preview Images
-->
	<div class="imgs_preview_area"></div>

<!--  
	Regist Images Area
-->
	<form name="atc_regist_form" enctype="multipart/form-data" class="atc_regist_form">
		<div class="file-input dp-in">
			<input type="file" multiple="multiple" name="multp_file" id="multp_file">
		</div>		
		<div class="button-input dp-in">
			<input type="button" id="btnRegistFile" class="site-btn-black" value="Regist Articles">
		</div>
	</form>

</section>
