package com.dpg.gallery.profile.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.gallery.profile.service.ProfileService;

/**
 * @Class Name  : ProfileContorller.java
 * @Description : ProfileController.class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ ------------   ------------	--------------------------------
 * @ 2020.08.21 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.08.21
 * @version 1.0
 */
@Controller
@RequestMapping(value = "/profile")
public class ProfileController {

	@Resource(name = "profileService")
	protected ProfileService profileService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;

	/**
	 * @comment : 개인정보 화면 조회
	 * @name	: loadRegist()
	 * @param  	: 
	 * @return 	: "gallery/signIn/regist.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView loadProfile(ModelAndView mv) throws Exception {
		mv.setViewName("gallery/profile/profile.ga");
		return mv;
	}
	
	/**
	 * @comment : 로그아웃
	 * @name	: logout()
	 * @param  	: 
	 * @return 	: session.invalidate();
	 * @exception Exception
	 */
	@RequestMapping(value = "/logout.do")
	public String logout(HttpSession session, ModelAndView mv) throws Exception {
		session.invalidate();
		return "redirect:/preview/";
	}

}
