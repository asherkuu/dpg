package com.dpg.gallery.main.service.impl;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MainDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "com.dpg.gallery.main.";
	
	public String getTime() throws Exception {
		return sqlSession.selectOne(prefix + "getTime");
	};
	
}
