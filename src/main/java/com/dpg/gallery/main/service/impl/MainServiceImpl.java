package com.dpg.gallery.main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.main.service.MainService;

@Service("mainService")
public class MainServiceImpl implements MainService {

	@Autowired
	private MainDAO mainDao;
}
