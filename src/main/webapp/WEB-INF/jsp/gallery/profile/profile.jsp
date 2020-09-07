<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<% String CTX_PATH = request.getContextPath(); %>

<!-- <script src="/resources/js/gallery/profile/profile.js"></script> -->

<%-- <c:if test="${not empty sessionScope.loginuser}"> --%>
<!-- 	<div> -->
<!-- 		<img alt="" src="/tmp/rscs/img/test.jpg"> -->
<!-- 	</div> -->
<%-- </c:if> --%>


<div class="blog_single">
	<div class="container">
		<div class="row">
			<div class="col-lg-9">
				<article class="blog_post_content">
					<div class="post_date">26th June, 2019</div>
					<img alt="" src="<%= CTX_PATH%>/tmp/rscs/img/test.jpg" style="max-width: 850px; max-height: 520px;">
<!-- 					<img src="/resources/img/artist/blog-big.jpg" alt=""> -->
				</article>
				
				<!--  
					POEM AREA
				-->
				<div class="blog_details_comment">
					<h4>POEM (02)</h4>
					<div class="blog_details_comment_item">
						<div class="blog_details_comment_item_text">
							<div class="comment_date">18 Jan 2020</div>
							<h6>1ST DEAD POET</h6>
							<p>
							Feeling Good.
							</p>
							<a href="#">Like</a> <a href="#">Reply</a>
						</div>
					</div>					
					<div class="blog_details_comment_item">
						<div class="blog_details_comment_item_text">
							<div class="comment_date">18 Jan 2020</div>
							<h6>2ND DEAD POET</h6>
							<p>
								Looks Nice.
							</p>
							<a href="#">Like</a> <a href="#">Reply</a>
						</div>
					</div>
				</div>
				
				<!--  
					GUT AREA
				-->
				<div class="blog_comment_form">
					<h4>LEAVE A GUT</h4>
					<form>
						<textarea placeholder="COMMENT"></textarea>
						<button class="site-btn">LEAVER A COMMENT</button>
					</form>
				</div>
			</div>
			
			<!--  
				RIGHT BAR AREA
			-->
			<div class="col-lg-3 col-md-7 sidebar">
				<div class="sidebar_widget">
					<h2 class="widget_title">RECENT NEWS</h2>
					<div class="letest_post_wedget">
						<div class="recent_post">
							<div class="recent_post_cata">Sport</div>
							<h6>
								<a href="#">Is Meghan Markle</a>
							</h6>
							<div class="recent_post_date">26th June, 2019</div>
						</div>
						<div class="recent_post">
							<div class="recent_post_cata">Sport</div>
							<h6>
								<a href="#">5 summer style </a>
							</h6>
							<div class="recent_post_date">26th June, 2019</div>
						</div>
						<div class="recent_post">
							<div class="recent_post_cata">Sport</div>
							<h6>
								<a href="#">Princesses with this</a>
							</h6>
							<div class="recent_post_date">26th June, 2019</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="post_share">
								<a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i
									class="fa fa-twitter"></i></a> <a href="#"><i
									class="fa fa-google"></i></a> <a href="#"><i
									class="fa fa-pinterest"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
