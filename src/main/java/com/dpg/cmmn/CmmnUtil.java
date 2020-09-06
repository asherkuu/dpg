package com.dpg.cmmn;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletWebRequest;

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
	 * Usage   : cmmnUtil.osName();
	 * Author  : Asher Kim
	 * Comment : 현 컴퓨터의 OS 명 반환
	 */
	public static String osName() throws Exception {
		return osName;
	}
	
	/**
	 * Version : 1.0
	 * Usage   : cmmnUtil.isWindows();
	 * Author  : Asher Kim
	 * Comment : OS가 윈도우인경우 true 반환
	 */
	public static boolean isWindows() {
		return (osName.indexOf("win") >= 0);
	}
	
	/**
	 * Version : 1.0
	 * Usage   : cmmnUtil.isLinux();
	 * Author  : Asher Kim
	 * Comment : OS가 리눅스인경우 true 반환
	 */
	public static boolean isLinux() {
		return (osName.indexOf("nux") >= 0);
	}
}

