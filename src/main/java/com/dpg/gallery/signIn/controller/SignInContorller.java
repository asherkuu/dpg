package com.dpg.gallery.signIn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Class Name : SignInContorller.java
 * @Description : SignInContorller Class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ ------	------   	----------------
 * @ 2020.08.22 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.08.22
 * @version 1.0
 */

@Controller
@RequestMapping(value = "/gallery")
public class SignInContorller {

	/**
	 * 글 목록을 조회한다. (pageing)
	 * @param searchVO - 조회할 정보가 담긴 SampleDefaultVO
	 * @param model
	 * @return "egovSampleList"
	 * @exception Exception
	 */
	@RequestMapping(value = "/signIn")
	public String selectSign() throws Exception {
		return "gallery/sign/signIn.ga";
	}

}
