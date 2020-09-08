package com.dpg.gallery.artist.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.gallery.artist.service.ArtistService;

/**
 * @Class Name  : ArtistContorller.java
 * @Description : ArtistController.class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ ------------   ------------	--------------------------------
 * @ 2020.09.07 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.09.07
 * @version 1.0
 */
@Controller
@RequestMapping(value = "/artist")
public class ArtistController {

	@Resource(name = "artistService")
	protected ArtistService artistService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;

	/**
	 * 메인화면 조회
	 * @param 
	 * @param model
	 * @return "gallery/artist/artist_list.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView loadArtist(ModelAndView mv) throws Exception {
		mv.setViewName("gallery/artist/artist_list.ga");
		return mv;
	}

	
}
