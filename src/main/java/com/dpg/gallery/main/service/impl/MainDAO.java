package com.dpg.gallery.main.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MainDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "com.dpg.gallery.main.";

	public List<Map<String, Object>> getArticles(Map<String, Object> param) {
		return sqlSession.selectList(prefix + "getArticles", param);
	}

}
