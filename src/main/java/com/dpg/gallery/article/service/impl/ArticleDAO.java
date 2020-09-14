package com.dpg.gallery.article.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ArticleDAO {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	String prefix = "com.dpg.gallery.article.";

	public int registArticles(List<Map<String, Object>> listParam) throws Exception {
		return sqlSession.insert(prefix + "registArticles", listParam);
	}

	public int getParOrderNum() throws Exception {
		return sqlSession.selectOne(prefix + "getParOrderNum");
	}

	public List<Map<String, Object>> loadArticlesDetail(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(prefix + "loadArticlesDetail", param);
	}

}
