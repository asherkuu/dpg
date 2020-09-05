<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<c:set var="ctxPath" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" type="text/css" href="${ctxPath}/resources/css/bootstrap.min.css">

<title>404</title>

<style type="text/css">
	.frame_error_img {
		overflow: hidden;
	}
	
	.return_home {
		width: 150px;
	    height: 50px;
	    background: white;
	    border: 6px solid #d4a400;
		position: absolute;
	    top: 35.6em;
	    left: 43em;
	}
	
	.return_home:hover {
		font-weight: bold;
		color: #d4a400;
	}
	
	.return_home:focus {
		outline: 0px;!important;
	}
	
	@media (max-width: 920px) {
		.frame_error_img, .return_home {
			margin-left: -23em;
		}
	} 
	
	@media (max-width: 535px) {
		.frame_error_img, .return_home {
			margin-left: -27em;
		}
	} 
	
	@media (max-width: 440px) {
		.frame_error_img, .return_home {
			margin-left: -30em;
		}
	} 
	
	@media (max-width: 411px) {
		.frame_error_img, .return_home {
			margin-left: -30em;
		}
	}
	
	@media (max-width: 375px) {
		.frame_error_img, .return_home {
			margin-left: -33.5em;
		}
	} 
	
	@media (max-width: 320px) {
		.frame_error_img, .return_home {
			margin-left: -35em;
		}
	} 
	
	@media (max-width: 280px) {
		.frame_error_img, .return_home {
			margin-left: -36.2em;
		}
	}
	
	@media (max-height: 750px) {
		.frame_error_img, .return_home {
			margin-top: -8em;
		}
	}
	
</style>

</head>

<body>
	<div class="frame_error_img">
		<img alt="" src="/resources/img/error-page.jpg">
		<button id="return_home" class="return_home" onclick="javascript:location.href='${ctxPath}/preview/'">HOME</button>
	</div>
</body>
</html>