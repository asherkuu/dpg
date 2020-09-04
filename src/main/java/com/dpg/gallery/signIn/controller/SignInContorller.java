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
	public String loadSignIn() throws Exception {
		return "gallery/signIn/signIn.ga";
	}
	
	/**
	 * @comment : 아이디 / 비밀번호 찾기 화면 조회
	 * @name    : loadFindInfo()
	 * @param   : 
	 * @return  : "gallery/signIn/findInfo.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/findInfo")
	public String loadFindInfo() throws Exception {
		return "gallery/signIn/findInfo.ga";
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
					session.setAttribute("loginuser", user);
					
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
