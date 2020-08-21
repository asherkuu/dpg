<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>    
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>

<c:set var="ctxPath" value="${pageContext.request.contextPath}" />
 
<!DOCTYPE html>
<html lang="zxx">
<head>

<meta charset="UTF-8">
<meta name="description" content="SUNZINE Photo Studio HTML Template">
<meta name="keywords" content="photo, html">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>DPG ADMIN</title>

<!-- load JS files -->
<script src="${ctxPath}/resources/js/loader/js-package.js"></script>
<script src="${ctxPath}/resources/js/loader/js-loader.js"></script>

</head>

<body>
	<div id="ad_container">
		<div id="ts_header">
			<tiles:insertAttribute name="ts_header"/>
		</div>
		
		<div id="ts_content">
			<tiles:insertAttribute name="ts_content"/>
		</div>
		
		<div id="ts_footer">
			<tiles:insertAttribute name="ts_footer"/>
		</div>
	</div>
</body>

</html>