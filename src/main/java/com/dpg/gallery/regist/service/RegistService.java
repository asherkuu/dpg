package com.dpg.gallery.regist.service;

import java.util.Map;

public interface RegistService {

	/**
	 * 회원가입
	 * @param mpf 
	 * @param  : Parameter Map - 유저정보
	 * @param  : model
	 * @return : json
	 * @exception Exception
	 */
	public int registUser(Map<String, Object> param) throws Exception;

	/**
	 * 회원 존재 유무
	 * @param  : Parameter Map - 유저정보
	 * @param  : model
	 * @return : json
	 * @exception Exception
	 */
	public boolean isExistsUser(Map<String, Object> param) throws Exception;

}
