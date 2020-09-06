<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import = "java.util.ResourceBundle" %>

<% 
	ResourceBundle resource = ResourceBundle.getBundle("resource.prop.globals");
	String FILE_PATH = resource.getString("Globals.Upload");	
%>

	<c:choose>
		<c:when test="${not empty sessionScope.loginuser}">
		
			<div class="offcanvas-menu-overlay"></div>
			<div class="offcanvas-menu">
				<a href="/preview/" class="site-logo"> 
					<img src="/resources/img/dpg-logo.png" alt="">
				</a>
				<nav class="mobile_menu a"></nav>
			</div>
		
			<header class="header">
				<div class="header_warp">
					<a href="/preview/" class="site-logo"> 
						<img src="/resources/img/dpg-logo.png" alt="">
					</a>
					<div class="header_right">
						<nav class="main_menu">
							<ul>	
								<li><a href="/preview/" id="preview">HOME</a></li>
								<li><a href="/articles/" id="articles">ARTICLES</a></li>
								<li><a href="/artist/" id="artist">ARTIST</a></li>
								<li><a href="/create/" id="create">CREATE</a>
									<ul class="sub_menu">
										<li><a href="/create/">Create</a></li>
										<li><a href="/create/articles">List</a></li>
									</ul>
								</li>
								<li><a href="/profile/" id="profile">PROFILE</a>
									<ul class="sub_menu">
										<li><a href="/profile/">Profile</a></li>
										<li><a href="/profile/logout.do">Logout</a></li>
									</ul>
								</li>
							</ul>
						</nav>
						<div class="header_switches">
							<a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
						</div>
					</div>
				</div>
			</header>
			
		</c:when>
		
		<c:otherwise>
		
			<div class="offcanvas-menu-overlay"></div>
			<div class="offcanvas-menu">
				<a href="/preview/" class="site-logo"> 
					<img src="/resources/img/dpg-logo.png" alt="">
				</a>
				<nav class="mobile_menu"></nav>
			</div>
			
			<header class="header">
				<div class="header_warp">
					<a href="/preview/" class="site-logo"> 
						<img src="/resources/img/dpg-logo.png" alt="">
					</a>
					<div class="header_right">
						<nav class="main_menu">
							<ul>	
								<li><a href="/preview/" id="preview">HOME</a></li>
								<li><a href="/articles/" id="articles">ARTICLES</a></li>
								<li><a href="/artist/" id="artist">ARTIST</a></li>
								<li><a href="/signIn/" id="signIn">SIGN IN</a></li>
							</ul>
						</nav>
						<div class="header_switches">
							<a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
						</div>
					</div>
				</div>
			</header>
			
		</c:otherwise>
	</c:choose>

	