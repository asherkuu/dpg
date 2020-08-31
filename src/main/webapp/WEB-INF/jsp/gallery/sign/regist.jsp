<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<section class="contact_section spad">
	<div class="container">
		<form name="regist_form" class="regist_form">
		<div class="row">
			<div class="col-lg-4">
				<div class="img-area">
					<img id="img-preivew" class="img-preview" src="/resources/img/no-image.jpg">
					<input type="file" id="img-file" name="img-file">
				</div>
			</div>
			<div class="col-lg-8">
				<div class="contact_form_box">
					<h2>REGIST</h2>
					<input type="text" id="USR_LNAME" name="USR_LNAME" class="input-half i-left" placeholder="Last Name *" required>
					<input type="text" id="USR_FNAME" name="USR_FNAME" class="input-half i-right" placeholder="First Name *" required> 
					<input type="text" id="USR_ID" name="USR_ID" placeholder="ID *" required>
					<input type="password" id="USR_PWD"  name="USR_PWD" class="input-half i-left" placeholder="Password *" required
					data-toggle="tooltip" data-placement="top" title="Tooltip on top">
					<input type="password" id="USR_CPWD" name="USR_CPWD" class="input-half i-right" placeholder="Confirm Password *" required>
					<input type="text" id="USR_EMAIL" name="USR_EMAIL" 	placeholder="Email">
					<input type="text" id="USR_PHONE"  name="USR_PHONE" placeholder="Phone">
					<button id="btnCreate" class="site-btn">Create Account</button>
				</div>
			</div>
		</div>
		</form>
	</div>
</section>
