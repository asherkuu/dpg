package com.dpg.gallery.main.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.cmmn.ObjectMapperSupport;
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
	 * @param model
	 * @return "gallery/main/index.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView loadMain(ModelAndView mv) throws Exception {
		mv.setViewName("gallery/main/index.ga");
		return mv;
	}
	
	/**
	 * 이미지 조회
	 * @param Map<String, Object>> (filter)
	 * @return List<Map<String, Object>> 
	 * @exception Exception
	 */
	@RequestMapping(value = "/loadArticles.do", method={RequestMethod.GET,RequestMethod.POST}, produces="application/json;charset-UTF-8")
	@ResponseBody
	public String loadArticles(@RequestParam Map<String, Object> param) throws Exception {
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			list = mainService.getArticles(param);
			
			if(list == null || list.size() <= 0) {
				result.put("SUCCESS", false);
				result.put("message", "Can't not load Articles.");
				result.put("location", "/preview/");
			} else {
				result.put("SUCCESS", true);
				result.put("message", "");
				result.put("location", "");
				result.put("list", list);
			}
			
		} catch (Exception e) {
			e.getStackTrace();
		}
		return ObjectMapperSupport.objectToJson(result);
	}
	
}
