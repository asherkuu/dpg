package com.dpg.cmmn;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;

/**
 * @Class Name  : CmmnUtil.java
 * @Description : CmmnUtil.class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ -----------   -------------    ----------------------------------
 * @ 2020.09.03 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.09.03
 * @version 1.0
 */
@Controller
public class CmmnUtil { 

	private static String osName = System.getProperty("os.name").toLowerCase();
	
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.osName();
	 * Author  : Asher Kim
	 * Comment : 현 컴퓨터의 OS 명 반환
	 */
	public static String osName() throws Exception {
		return osName;
	}
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.isWindows();
	 * Author  : Asher Kim
	 * Comment : OS가 윈도우인경우 true 반환
	 */
	public static boolean isWindows() {
		return (osName.indexOf("win") >= 0);
	}
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.isLinux();
	 * Author  : Asher Kim
	 * Comment : OS가 리눅스인경우 true 반환
	 */
	public static boolean isLinux() {
		return (osName.indexOf("nux") >= 0);
	}
	
	/**
		@Version : 1.0
		@Usage   : CmmnUtil.getPrivateCode(String, String)
		@Author  : Asher Kim
		@reutrn  : String code
		@Comment : 아티클 고유 키코드 생성
	 */
	public static String getPrivateCode(String id, String num) throws Exception {
		String code = null;
		String encStr = id + num + System.nanoTime();
		code = "K" + SHA256.encrypt24(encStr);
		return code;
	}
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.isLogin();
	 * Author  : Asher Kim
	 * Comment : 로그인 상태
	 */
	@SuppressWarnings("unchecked")
	public static boolean isLogin(HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		Map<String, Object> loginUser = (Map<String, Object>) session.getAttribute("loginUser");
		
		return loginUser == null;
	}
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.getLoginUser();
	 * Author  : Asher Kim
	 * Comment : 로그인 유저 정보
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, Object> getLoginUser(HttpServletRequest request) {
		HttpSession session = request.getSession();
		Map<String, Object> loginUser = (Map<String, Object>) session.getAttribute("loginUser");
		return loginUser;
	}
	
	/**
	 * Version : 1.0
	 * Usage   : CmmnUtil.goBackURL();
	 * Author  : Asher Kim
	 * Comment : 이전 URL
	 */
	public static String goBackURL(HttpServletRequest request) {
		String CURRENT_URL = request.getRequestURL().toString();
		String queryString = request.getQueryString();
		
		CURRENT_URL += "?" + queryString;
		
		String CTX_PATH = request.getContextPath();
		int index = CURRENT_URL.indexOf(CTX_PATH) + CTX_PATH.length();
		
		CURRENT_URL = CURRENT_URL.substring(index + 1);
		
		return CURRENT_URL;
	}
}

