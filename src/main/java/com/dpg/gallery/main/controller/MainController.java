package com.dpg.gallery.main.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.gallery.main.service.MainService;

/**
 * @Class Name  : MainContorller.java
 * @Description : MainContorller.Class
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
@RequestMapping(value = "/preview")
public class MainController {

	@Resource(name = "mainService")
	protected MainService mainService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;

	/**
	 * 메인화면 조회
	 * @param searchVO - 조회할 정보가 담긴 SampleDefaultVO
	 * @param model
	 * @return "egovSampleList"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView selectMain(ModelAndView mv) throws Exception {
		String getTime = mainService.getTime();
		mv.addObject("time", getTime);
		System.out.println("getTime : " + getTime);
		mv.setViewName("gallery/main/index.ga");
		return mv;
	}

}
