package com.dpg.gallery.artist.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dpg.gallery.artist.service.ArtistService;

@Service("artistService")
public class ArtistServiceImpl implements ArtistService {

	@Autowired
	private ArtistDAO artistDao;
}
