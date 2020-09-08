package com.dpg.gallery.signIn.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dpg.cmmn.CmmnUtil;
import com.dpg.cmmn.ObjectMapperSupport;
import com.dpg.cmmn.SHA256;
import com.dpg.gallery.signIn.service.SignInService;

/**
 * @Class Name  : SignInContorller.java
 * @Description : SignInController.class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ -----------   	--------------- ---------------------------------
 * @ 2020.09.02 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.09.02
 * @version 1.0
 */

@Controller
@RequestMapping(value = "/signIn")
public class SignInContorller {

	@Resource(name = "signInService")
	protected SignInService signInService;
	
	/**
	 * @comment : 로그인 화면 조회
	 * @name    : loadSignIn()
	 * @param   : 
	 * @return  : "gallery/signIn/signIn.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/")
	public ModelAndView loadSignIn(HttpServletRequest request, ModelAndView mv) throws Exception {
		
		if(CmmnUtil.isLogin(request)) {
			mv.setViewName("gallery/signIn/signIn.ga");
		} else {
			mv.setViewName("redirect:/preview/");
		}
		
		return mv;
	}
	
	/**
	 * @comment : 아이디 / 비밀번호 찾기 화면 조회
	 * @name    : loadFindInfo()
	 * @param   : 
	 * @return  : "gallery/signIn/findInfo.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/findInfo")
	public ModelAndView loadFindInfo(HttpServletRequest request, ModelAndView mv) throws Exception {
		
		if(CmmnUtil.isLogin(request)) {
			mv.setViewName("gallery/signIn/findInfo.ga");
		} else {
			mv.setViewName("redirect:/preview/");
		}
		
		return mv;
	}

	/**
	 * @comment : 로그인
	 * @name    : registUser()
	 * @param   : 
	 * @return  : result (Object To Json)
	 * @exception Exception
	 */
	@RequestMapping(value = "/login.do", method={RequestMethod.GET,RequestMethod.POST}, produces="application/json;charset-UTF-8")
	@ResponseBody
	public String registUser(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpSession session = request.getSession();
		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			String USR_ID = request.getParameter("USR_ID");
			String USR_PWD = request.getParameter("USR_PWD");
			
			param.put("USR_ID", USR_ID);
			
			Map<String, Object> user = signInService.login(param);
			
			if(user == null) { // 아이디가 존재하지 않는경우
				result.put("SUCCESS", false);
				result.put("message", "We cannot find an account with that ID.");
				result.put("location", "");
			} else {
				
				String sha_pwd = SHA256.encrypt(USR_PWD); // 암호화
				
				if(!sha_pwd.equals(user.get("USR_PWD"))) {
					result.put("SUCCESS", false);
					result.put("message", "Password is incorrect.");
					result.put("location", "");
				} else {
					session.setAttribute("loginUser", user);
					
					result.put("SUCCESS", true);
					result.put("message", "");
					result.put("location", "/preview/");
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ObjectMapperSupport.objectToJson(result);
	}
}
