package com.dpg.gallery.regist.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RegistDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "com.dpg.gallery.regist.";

	public int registUser(Map<String, Object> param) {
		return sqlSession.insert(prefix + "registUser", param);
	}

	public int isExistsUser(Map<String, Object> param) {
		return sqlSession.selectOne(prefix + "isExistsUser", param);
	}

	public int registUserImage(Map<String, Object> param) {
		return sqlSession.insert(prefix + "registUserImage", param);
	}
	
}
