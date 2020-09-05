package com.dpg.gallery.regist.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.regist.service.RegistService;

@Service("registService")
public class RegistServiceImpl implements RegistService {

	@Autowired
	private RegistDAO registDao;

	@Override
	public int registUser(Map<String, Object> param) throws Exception {
		int cnt = registDao.registUser(param); // 정보등록
		int scnt = 0;
		if(param.get("IMG_NAME") != null) {
			scnt = registDao.registUserImage(param); // 이미지등록
		}
		
		if(cnt + scnt <= 0) {
			return 0;
		} else {
			return 1;
		} 
	}

	@Override
	public boolean isExistsUser(Map<String, Object> param) throws Exception {
		int cnt = registDao.isExistsUser(param);

		if(cnt > 0) {
			return false;	
		} else {
			return true;
		}
	}

}
