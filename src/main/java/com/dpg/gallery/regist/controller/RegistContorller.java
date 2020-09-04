package com.dpg.gallery.regist.controller;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.dpg.cmmn.FileManager;
import com.dpg.cmmn.ObjectMapperSupport;
import com.dpg.cmmn.SHA256;
import com.dpg.gallery.regist.service.RegistService;

/**
 * @Class Name  : RegistContorller.java
 * @Description : RegistContorller Class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ -----------   ------------     ----------------------------------
 * @ 2020.08.22 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.08.22
 * @version 1.0
 */
@Controller
@RequestMapping(value = "/signIn")
public class RegistContorller {

	@Resource(name = "registService")
	protected RegistService registService;
	
	@Autowired
	private FileManager fileManager;
	
	/**
	 * @comment : 회원가입 화면 조회
	 * @name	: loadRegist()
	 * @param  	: 
	 * @return 	: "gallery/signIn/regist.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/regist")
	public String loadRegist() throws Exception {
		return "gallery/signIn/regist.ga";
	} 
	
	/**
	 * @comment : 등록된 회원인 경우의 화면 조회
	 * @name    : loadIsExists()
	 * @param   : 
	 * @return  : "gallery/signIn/isExists.ga"
	 * @exception Exception
	 */
	@RequestMapping(value = "/isExists")
	public String loadIsExists() throws Exception {
		return "gallery/signIn/isExists.ga";
	}

	/**
	 * @comment : 회원가입
	 * @name    : loadRegist()
	 * @param   : Parameter Map - 유저정보
	 * @return  : result (Object To Json)
	 * @exception Exception
	 */
	@RequestMapping(value = "/regist/registUser.do", method={RequestMethod.GET,RequestMethod.POST}, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String registUser(MultipartHttpServletRequest mrequest, @RequestParam Map<String, Object> param) throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		 
		try {
			boolean isExist = registService.isExistsUser(param); // 아이디 존재유무

			if(!isExist) { // 아이디 존재시
				result.put("SUCCESS", false);
				result.put("message", "");
				result.put("location", "/signIn/isExists");
			} else { // 아이디 미존재시
				
				MultipartFile mpf = mrequest.getFile("img_file");
				
				if(!mpf.isEmpty()) {
					HttpSession session = mrequest.getSession();
					String root = session.getServletContext().getRealPath("/");
					String path = root + "resources" + File.separator + "images";
					String newFileName = "";
					String realFileName = mpf.getOriginalFilename();
					byte[] bytes = mpf.getBytes();
					long filsSize = mpf.getSize();
					
					newFileName = fileManager.fileUpload(bytes, realFileName, path);
					
					param.put("IMG_NAME", newFileName);
					param.put("IMG_RNAME", realFileName);
					param.put("IMG_PATH", path);
					param.put("IMG_SIZE", filsSize);
					param.put("IMG_EXTS", realFileName.substring(realFileName.lastIndexOf(".")));
				}
								
				param.put("USR_PWD",  SHA256.encrypt(param.get("USR_PWD").toString()));
				int cnt = registService.registUser(param);
				
				if(cnt < 0) { // 등록 실패
					result.put("SUCCESS", false);
					result.put("message", "Fail to Create Account.");
					result.put("location", "location.reload(true)");
				} else { // 등록 성공
					result.put("SUCCESS", true);
					result.put("message", "Success.");
					result.put("location", "/signIn/");
				}
			}			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ObjectMapperSupport.objectToJson(result);
	}
}
