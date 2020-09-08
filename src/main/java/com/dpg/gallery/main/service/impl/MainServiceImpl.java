package com.dpg.gallery.main.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.main.service.MainService;

@Service("mainService")
public class MainServiceImpl implements MainService {

	@Autowired
	private MainDAO mainDao;

	@Override
	public List<Map<String, Object>> getArticles() throws Exception {
		return mainDao.getArticles();
	}
}
