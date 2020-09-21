<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import = "java.util.ResourceBundle" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% 
	ResourceBundle resource = ResourceBundle.getBundle("resource.prop.globals");
	String UPLOAD_PATH = resource.getString("Globals.Upload");	
	
	String CTX_PATH = request.getContextPath();
%>

<div class="offcanvas-menu-overlay"></div>
	<div class="offcanvas-menu">
		<a href="<%=CTX_PATH%>/preview/" class="site-logo"> 
		<img src="<%=CTX_PATH%>/resources/img/dpg-logo.png" alt="">
	</a>
	<nav class="mobile_menu a"></nav>
</div>

<header class="header">
	<div class="header_warp">
		<a href="<%=CTX_PATH%>/preview/" class="site-logo"> 
			<img src="<%=CTX_PATH%>/resources/img/dpg-logo.png" alt="">
		</a>
		
		<div class="header_menu right">
		
			<div class="header-filter dropdown">
				<div class="select">
					<span>Select Filter</span>
					<i class="fa fa-chevron-left"></i>
				</div>
				<ul class="dropdown-menu">
					<li id="all">ALL</li>
					<li id="yet">YET</li>
					<li id="done">DONE</li>
				</ul>
			</div>
			
			<div class="search">
				<input type="text" id="search_bar" class="search_bar" placeholder="Searching...">
				<button type="submit" class="searchButton">
		       	<i class="fa fa-search"></i>
		     	</button>
			</div>
			
			<nav class="main_menu">
				<ul>
					<c:choose>
						<c:when test="${not empty sessionScope.loginUser}">
						
							<li><i class="fa fa-lg fa-comment" id=""></i></li>
							<li><i class="fa fa-lg fa-user-circle" id=""></i>
								<ul class="sub_menu">
									<li><a href="<%=CTX_PATH%>/profile/">Profile</a></li>
									<li><a href="<%=CTX_PATH%>/profile/logout.do">Logout</a></li>
								</ul>
							</li>
						</c:when>
						<c:otherwise>
							<li>
								<i class="fa fa-lg fa-user-plus" id=""
								onclick="javascript:location.href='<%=CTX_PATH%>/signIn/'"></i>
							</li>
						</c:otherwise>
					</c:choose>
					
					<li>
						<i class="fa fa-lg fa-plus-circle" id="btnRegist" 
						onclick="javascript:location.href='<%=CTX_PATH%>/article/regist'"></i>
					</li>
				</ul>
			</nav>
			<div class="header_switches hide">
				<a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
			</div>
		</div>
	</div>
</header>
