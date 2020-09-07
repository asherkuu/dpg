<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ page import = "java.util.ResourceBundle" %>

<%@ page import="com.dpg.cmmn.CmmnUtil" %>

<c:set var="ctxPath" value="${pageContext.request.contextPath}" />

<%
	ResourceBundle resource = ResourceBundle.getBundle("resource.prop.globals");
	String UPLOAD_PATH = resource.getString("Globals.Upload");
	
	String CTX_PATH = request.getContextPath();

	String URL_PATH = "";
	if(CmmnUtil.isLinux()) {
		URL_PATH = "http://www.deadpoetsgallery.com";
	} else {
		URL_PATH = "http://localhost:8080";
	};
%>

<!DOCTYPE html>
<html lang="zxx">
<head>

<meta charset="UTF-8">
<meta name="description" content="SUNZINE Photo Studio HTML Template">
<meta name="keywords" content="photo, html">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- <meta http-equiv="X-UA-Compatible" content="IE=9"> -->

<title>DPG</title>

<!-- load JS files -->
<script src="<%=CTX_PATH%>/resources/js/loader/js-package.js"></script>
<script src="<%=CTX_PATH%>/resources/js/loader/js-loader.js"></script>

<script type="text/javascript">
	var agent = navigator.userAgent.toLowerCase();

	if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
		console.log("Welcome to DPG.");
	} else {
		console.log('%c DPG', 'font-size: 130px; background: url(<%=URL_PATH%>/resources/img/dpg-logo.png) no-repeat;')	
	}
</script>

</head>

<body>
	<div id="preloder">
		<div class="loader"></div>
	</div>

	<div id="ga_container">
		<div id="ts_header">
			<tiles:insertAttribute name="ts_header" />
		</div>

		<div id="ts_content">
			<tiles:insertAttribute name="ts_content" />
		</div>

		<div id="ts_footer">
			<tiles:insertAttribute name="ts_footer" />
		</div>
	</div>
</body>

</html>