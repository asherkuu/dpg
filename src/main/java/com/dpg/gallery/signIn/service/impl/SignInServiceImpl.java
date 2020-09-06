package com.dpg.gallery.signIn.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.signIn.service.SignInService;

@Service("signInService")
public class SignInServiceImpl implements SignInService {

	@Autowired
	private SignInDAO signInDao;

	@Override
	public Map<String, Object> login(Map<String, Object> param) throws Exception {
		return signInDao.login(param);
	}

}
