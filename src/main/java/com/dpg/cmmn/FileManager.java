package com.dpg.cmmn;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

/**
 * @Class Name  : RegistContorller.java
 * @Description : RegistContorller.class
 * @Modification Information
 * @
 * @ Update date    	Update Admin  	Update Comment
 * @ -----------    -------------    ----------------------------------
 * @ 2020.09.03 		Asher       	The first write
 * 
 * @author Asher
 * @since 2020.09.03
 * @version 1.0
 */
@Component
public class FileManager {

	// 리눅스 기준으로 파일 경로를 작성 ( 루트 경로인 /으로 시작한다. )
	// 윈도우라면 workspace의 드라이브를 파악하여 JVM이 알아서 처리해준다.
	// 따라서 workspace가 C드라이브에 있다면 C드라이브에 upload 폴더를 생성해 놓아야 한다.
	// window project path ("C:\egov-workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp2\wtpwebapps\DPG\resources\images")
	// private static final String SAVE_PATH_WIDNOW = session.getServletContext().getRealPath("/") + File.separator + "images";
	
	private static final String SAVE_PATH 	= "/upload";  //파일이 저장될 위치
	private static final String PREFIX_URL 	= "/upload/"; //저장된 파일을 jsp에서 불러오기 위한 경로 
	
	/**
		@Version : 1.0
		@Usage   : fileManage.fileUpload(byte[], String, String)
		@Author  : Asher Kim
		@reutrn  : String newFilename
		@Comment : 단일 파일 업로드 및 업로드된 파일명 반환
	 */
	public String fileUpload(byte[] bytes, String originalFilename, String path) throws Exception {
		
		String newFilename = null;
		
		if(bytes == null) return null; // 선택한 파일이 없는 경우
		if(originalFilename.equals("")) return null; // 선택한 파일의 이름이 없는 경우
		String fileExt = originalFilename.substring(originalFilename.lastIndexOf(".")); // 확장자
		if(fileExt == null || fileExt.equals("")) return null; // 확장자가 없는 경우
		
		// 실제 저장될 파일명이 중복되면 않되기때문에 나노세컨드 값까지 결합시켜 생성
		newFilename = SHA256.encrypt(originalFilename) + System.nanoTime();
		newFilename += fileExt;
		
		File dir = new File(path); // Java 는 File 로서 파일 생성 및 관리한다.
		if(!dir.exists()) dir.mkdirs(); // 파일 업로드시 디렉토리가 없는경우 path에 디렉토리 자동생성
		
		String pathname = path + File.separator + newFilename; // 파일경로 구분자 Window "\" Unix, Linux "/"
		
		FileOutputStream fos = new FileOutputStream(pathname); // 실제 데이터 기록을 해주는 for class 생성
		fos.write(bytes); // 실제로 파일 데이터 기록
		fos.close(); // 파일생성후 더이상 사용되지 않도록 소멸
		
		return newFilename;
	}
	
	/**
		@Version : 1.1
		@Usage   : fileManage.newFileUpload(MultipartFile, Map<String, Object>, String)
		@Author  : Asher Kim
		@reutrn  : Map<String, Obejct> fileInfo
		@Comment : 단일 파일 업로드 및 업로드된 파일 정보 반환
	 */
	public static Map<String, Object> newFileUpload(MultipartFile file, Map<String, Object> param, String regType) throws Exception {
		
		if(!file.isEmpty()) {
			
			String path 		= SAVE_PATH;
			String newFileName 	= "";
			String realFileName = file.getOriginalFilename();
			byte[] bytes 		= file.getBytes();
			long   filsSize 	= file.getSize();
			
			if(bytes == null) return null; 
			if(realFileName.equals("")) return null;
			String fileExt = realFileName.substring(realFileName.lastIndexOf("."));
			if(fileExt == null || fileExt.equals("")) return null;
			
			newFileName = regType.toUpperCase() + SHA256.encrypt(realFileName) + System.nanoTime() + fileExt;
			
			File dir = new File(path);
			if(!dir.exists()) dir.mkdirs();
			
			String pathname = path + File.separator + newFileName;
			
			FileOutputStream fos = new FileOutputStream(pathname);
			fos.write(bytes);
			fos.close();
			
			param.put("IMG_NAME" , realFileName);
			param.put("IMG_RNAME", newFileName);
			param.put("IMG_PATH" , path);
			param.put("IMG_SIZE" , filsSize);
			param.put("IMG_EXTS" , fileExt);	
		}
		
		return param;
	}
	
	/**
		@Version : 1.0
		@Usage   : fileManage.multifleFileUpload(List<MultipartFile>, Map<String, Object>, String)
		@Author  : Asher Kim
		@reutrn  : List<Map<String, Object>> fileInfo
		@Comment : 단일 파일 업로드 및 업로드된 파일 정보 반환
	 */
	public static List<Map<String, Object>> multifleFileUpload(List<MultipartFile> mtpFile, Map<String, Object> param, String regType) throws Exception {
		
		Map<String, Object> paraMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		
		if(!mtpFile.isEmpty()) {
			
			for(MultipartFile mf : mtpFile) {
				
				paraMap = new HashMap<String, Object>();
				
				String path 		= SAVE_PATH;
				String newFileName 	= "";
				String realFileName = mf.getOriginalFilename();
				byte[] bytes 		= mf.getBytes();
				long   filsSize 	= mf.getSize();
				
				if(bytes == null) return null; 
				if(realFileName.equals("")) return null;
				String fileExt = realFileName.substring(realFileName.lastIndexOf("."));
				if(fileExt == null || fileExt.equals("")) return null;
				
				newFileName = regType.toUpperCase() + SHA256.encrypt(realFileName) + System.nanoTime() + fileExt;
				
				File dir = new File(path);
				if(!dir.exists()) dir.mkdirs();
				
				String pathname = path + File.separator + newFileName;
				
				FileOutputStream fos = new FileOutputStream(pathname);
				fos.write(bytes);
				fos.close();
							
				paraMap.put("ART_NAME" , realFileName);
				paraMap.put("ART_RNAME", newFileName);
				paraMap.put("ART_PATH" , path);
				paraMap.put("ART_SIZE" , filsSize);
				paraMap.put("ART_EXTS" , fileExt);
				
				list.add(paraMap);
			}
		}
		
		return list;
	}
	
}

