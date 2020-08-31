package com.dpg.gallery.regist.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dpg.gallery.regist.service.RegistService;

/**
 * @Class Name : RegistContorller.java
 * @Description : RegistContorller Class
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
@RequestMapping(value = "/signIn")
public class RegistContorller {

	@Resource(name = "registService")
	protected RegistService registService;
	
	/**
	 * 글 목록을 조회한다. (pageing)
	 * @param searchVO - 조회할 정보가 담긴 SampleDefaultVO
	 * @param model
	 * @return "egovSampleList"
	 * @exception Exception
	 */
	@RequestMapping(value = "/regist")
	public String selectSign() throws Exception {
		return "gallery/sign/regist.ga";
	}

	// 유저등록
	@RequestMapping(value = "/regist.dpg")
	public String registUser(@RequestParam Map<String, Object> param) throws Exception {
		int cnt = registService.registUser(param);
		System.out.println(cnt);
		return "";
	}
}
