<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="/resources/js/gallery/signIn/signIn.js"></script>

<section class="contact_section spad spad-signIn">
	<div class="container">
		<div class="row">

			<div class="col-lg-8">
				<div class="frame_form_box">
					<h2>Sign-In</h2>
					<form name="signIn_form" id="signIn_form">
						<input type="text" 		id="USR_ID"  name="USR_ID" placeholder="Your Id"> 
						<input type="password" 	id="USR_PWD" name="USR_PWD" placeholder="Your Password">
						<input type="button" class="site-btn" id="btnSignIn" value="Sign In">
					</form>
					<a href="/signIn/findInfo">Forgot your ID / Password ?</a>
				</div>
			</div>
			
			<div class="col-lg-4">
				<div class="pt-50">
					<div class="create-account">
						<div class="frame_info">
							<h3>New Customer ?</h3>
						</div>
						<input type="button" class="btn-black btnAccount" id="btnAccount" value="Create Your DPG Account" />						
					</div>
				</div>
				
				<div class="">				
					<section class="sns-login-wrap">
						<div class="frame_info">
							<p>Quick Access With</p>
						</div>
						
						<div class="sns-btns">
							<div class="login-sns-wrap">
								<div class="sns-item-wrap">
									<a class="sns-item facebook" href="#" target="_blank"></a>
								</div>
								<div class="sns-item-wrap">
									<a class="sns-item google" href="#" target="_blank"></a>
								</div>
								<div class="sns-item-wrap">
									<a class="sns-item twitter" href="#" target="_blank"></a>
								</div>
								<div class="sns-item-wrap">
									<a class="sns-item instagram" href="#" target="_blank"></a>
								</div>
							</div>	
						</div>
					</section>
				</div>
			</div>
			
		</div>
	</div>
</section>
