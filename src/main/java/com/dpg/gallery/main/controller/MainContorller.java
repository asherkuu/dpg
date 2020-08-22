package com.dpg.gallery.main.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springmodules.validation.commons.DefaultBeanValidator;

import egovframework.rte.fdl.property.EgovPropertyService;

/**
 * @Class Name  : MainContorller.java
 * @Description : MainContorller.Class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ ------	------   	----------------
 * @ 2020.08.21 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.08.21
 * @version 1.0
 */
@Controller
@RequestMapping(value = "/gallery")
public class MainContorller {

	/** EgovPropertyService */
	@Resource(name = "propertiesService")
	protected EgovPropertyService propertiesService;

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
	@RequestMapping(value = "/preview")
	public String selectMain() throws Exception {
		return "gallery/main/index.ga";
	}

}
