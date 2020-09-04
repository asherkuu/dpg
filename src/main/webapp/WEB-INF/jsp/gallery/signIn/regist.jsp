<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="/resources/js/gallery/signIn/regist.js"></script>

<section class="contact_section spad">
	<div class="container">
		<form name="regist_form" class="regist_form" enctype="multipart/form-data">
		<div class="row">

			<div class="col-lg-8">
				<div class="frame_form_box">
					<h2>REGIST</h2>
					<div>
						<input type="text" id="USR_LNAME" name="USR_LNAME" class="input-half i-left" required placeholder="Last Name *"  maxlength="50">
					</div>
					<div>
						<input type="text" id="USR_FNAME" name="USR_FNAME" class="input-half i-right" required placeholder="First Name *"  maxlength="50">
					</div> 					
					<div class="tooltip_input">
						<input type="text" id="USR_ID" name="USR_ID" placeholder="ID *" required maxlength="20">
					<!-- 						<i class="error-icon"></i> -->
						<span class="tooltiptext id">Tooltip text</span>
					</div>
					<div class="tooltip_input">
						<input type="password" id="USR_PWD"  name="USR_PWD" placeholder="Password *" required maxlength="25" data-toggle="tooltip" data-placement="top" title="Must be contain one digit, one special character, one capital and between 8 ~ 25" >
						<span class="tooltiptext pwd">Tooltip text</span>
					</div>
					<div class="tooltip_input">
						<input type="password" id="USR_CPWD" name="USR_CPWD" placeholder="Confirm Password *" required maxlength="25">
						<span class="tooltiptext cpwd">Tooltip text</span>
					</div>
					<div class="tooltip_input">
						<input type="text" id="USR_EMAIL" name="USR_EMAIL" 	placeholder="Email" maxlength="100">
						<span class="tooltiptext email">Tooltip text</span>
					</div>
					<div>
						<input type="text" id="USR_PHONE"  name="USR_PHONE" placeholder="Phone" maxlength="30">
					</div>
					<input type="button" id="btnCreate" class="site-btn" value="Create Account">
				</div>
			</div>
			
			<div class="col-lg-4 photo">
				<div class="contact_box photo"> 
					<div class="div-photo"><h2>Photo</h2></div>
					<div class="img-area">
						<img id="img-preivew" class="img-preview" src="">
						<div>
							<input type="file" id="img_file" name="img_file">
						</div>
					</div>
				</div>
			</div>
			
		</div>
		</form>
	</div>
</section>
