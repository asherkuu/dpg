package com.dpg.gallery.article.service;

import java.util.List;
import java.util.Map;

public interface ArticleService {

	public int registArticles(List<Map<String, Object>> list) throws Exception;

	public int getParOrderNum() throws Exception;

	public List<Map<String, Object>> loadArticlesDetail(Map<String, Object> param) throws Exception;

}
