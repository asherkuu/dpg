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
		return registDao.registDao(param);
	}


}
