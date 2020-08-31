package com.dpg.gallery.regist.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RegistDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "regist.";

	public int registDao(Map<String, Object> param) {
		return sqlSession.insert(prefix + "registUser", param);
	}
	
}
