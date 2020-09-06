package com.dpg.gallery.profile.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.profile.service.ProfileService;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileDAO profileDao;

}
