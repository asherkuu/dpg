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
		int cnt = registDao.registUser(param);
		if(cnt > 0) {
			int scnt = registDao.registUserImage(param);
			if(scnt > 0) {
				return 1;
			} else {
				return 0;
			}
		} else {
			return 0;
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
