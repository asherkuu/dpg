package com.dpg.gallery.signIn.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SignInDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "com.dpg.gallery.signIn.";

	public Map<String, Object> login(Map<String, Object> param) {
		return sqlSession.selectOne(prefix + "login", param);
	}

}
