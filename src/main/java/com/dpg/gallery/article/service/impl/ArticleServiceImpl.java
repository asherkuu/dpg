package com.dpg.gallery.article.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.article.service.ArticleService;

@Service("articleService")
public class ArticleServiceImpl implements ArticleService {

	@Autowired
	private ArticleDAO articleDao;

	@Override
	public int registArticles(List<Map<String, Object>> listParam) throws Exception {
		return articleDao.registArticles(listParam);
	}

	@Override
	public int getParOrderNum() throws Exception {
		return articleDao.getParOrderNum();
	}
}
