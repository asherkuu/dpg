package com.dpg.gallery.main.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.gallery.main.service.MainService;

/**
 * @Class Name  : MainContorller.java
 * @Description : MainController.class
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
	 * @param 
	 * @param model
	 * @return "gallery/main/index.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView loadMain(ModelAndView mv) throws Exception {
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		try {
			list = mainService.getArticles();
			
			mv.addObject("LIST", list);
			mv.setViewName("gallery/main/index.ga");
			
		} catch (Exception e) {
			e.getStackTrace();
		}
		
		return mv;
	}
	
}
