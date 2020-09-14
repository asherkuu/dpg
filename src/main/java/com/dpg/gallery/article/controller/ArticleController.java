package com.dpg.gallery.article.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.commons.DefaultBeanValidator;

import com.dpg.cmmn.CmmnUtil;
import com.dpg.cmmn.FileManager;
import com.dpg.cmmn.ObjectMapperSupport;
import com.dpg.gallery.article.service.ArticleService;

/**
 * @Class Name  : ArticleContorller.java
 * @Description : ArticleController.class
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
@RequestMapping(value = "/article")
public class ArticleController {

	@Resource(name = "articleService")
	protected ArticleService articleService;

	/** Validator */
	@Resource(name = "beanValidator")
	protected DefaultBeanValidator beanValidator;
	
	/**
	 * @comment : 작품 조회
	 * @name    : loadArticles()
	 * @param   : 
	 * @return  : "gallery/article/list.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	@ResponseBody
	public ModelAndView loadArticles(HttpServletRequest request, ModelAndView mv) throws Exception {
		
		if(CmmnUtil.isLogin(request)) {
			mv.setViewName("redirect:/signIn/");
		} else {
			mv.setViewName("gallery/article/list.ga");
		}

		return mv;
	}
	
	/**
	 * @comment : 작품 상세 조회
	 * @name    : loadArticleDetail()
	 * @param   : String ART_CODE
	 * @return  : "gallery/article/detail.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/v")
	@ResponseBody
	public ModelAndView loadArticleDetail(HttpServletRequest request, ModelAndView mv, @RequestParam Map<String, Object> param) throws Exception {
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Map<String, Object> paramap = new HashMap<String, Object>();

		try {
			// 컬럼네임 Base64 디코딩
			Map<String, Object> code = CmmnUtil.decodeBase64(param);
			paramap.put((String) code.get("key"), code.get("value"));
			
			list = articleService.loadArticlesDetail(paramap);
			
			if(list == null || list.size() <= 0) { // 조회 실패
				mv.setViewName("redirect:/preview/");
			} else {
				mv.addObject("list", list);
				mv.setViewName("gallery/article/detail.ga");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * @comment : 작품 등록
	 * @name    : loadArticleRegist()
	 * @param   : 
	 * @return  : "gallery/article/list.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/regist")
	@ResponseBody
	public ModelAndView loadArticleRegist(HttpServletRequest request, ModelAndView mv) throws Exception {

		if(CmmnUtil.isLogin(request)) {
			mv.setViewName("redirect:/signIn/");
		} else {
			mv.setViewName("gallery/article/regist.ga");
		}
		return mv;
	}

	/**
	 * @comment : 작품 등록
	 * @name    : registArticles()
	 * @param   : Parameter Map - 아티클 정보
	 * @return  : result (Object To Json)
	 * @exception Exception
	 */
	@RequestMapping(value = "/regist.do", method={RequestMethod.GET,RequestMethod.POST}, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String registArticles(HttpServletRequest request, MultipartHttpServletRequest mrequest, @RequestParam Map<String, Object> param) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		int cnt = 0;
		
		try {	
			if(CmmnUtil.isLogin(request)) {
				
				result.put("SUCCESS", false);
				result.put("message", "Login First.");
				result.put("location", "/signIn/");
			} else {
				
				Map<String, Object> loginUser = CmmnUtil.getLoginUser(request); // 유저정보
				String USR_ID = loginUser.get("USR_ID").toString();
				String USR_NUM = loginUser.get("USR_NUM").toString();
				
				// 파일 업로드
				List<MultipartFile> fileList = mrequest.getFiles("multp_file");
				
				if(!fileList.isEmpty()) {
					list = FileManager.multifleFileUpload(fileList, param, "a");
					
					// ART_CODE
					String code = CmmnUtil.getPrivateCode(USR_ID, USR_NUM);
					int parOrderNum = articleService.getParOrderNum();
					
					for (int i = 0; i < list.size(); i++) {
						list.get(i).put("ART_CODE"		, code);
						list.get(i).put("ART_PORD_NUM"	, parOrderNum);
						list.get(i).put("ART_ORD_NUM"	, i);
						list.get(i).put("USR_ID"			, USR_ID);
						list.get(i).put("USR_NUM"		, USR_NUM);
					}
					
					cnt = articleService.registArticles(list);
				}
				
				if(cnt <= 0) { // 등록 실패
					result.put("SUCCESS", false);
					result.put("message", "Fail to Regist Articles.");
					result.put("location", "");
				} else { // 등록 성공
					result.put("SUCCESS", true);
					result.put("message", "Success.");
					result.put("location", "/article/");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ObjectMapperSupport.objectToJson(result);
	}
}


