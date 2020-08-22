package com.dpg.cmmn;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

/**
 * @Class Name  : ContextListner.java
 * @Description : ContextListner.Class
 * @Modification Information
 * @
 * @ Update date    Update Admin  	Update Comment
 * @ ------------   ------------	--------------------------------
 * @ 2020.08.22 	Asher       	The first write
 *
 * @author Asher
 * @since 2020.08.22
 * @version 1.0
 */
public class ContextListner implements ServletContextListener {

	/*
		일반 Mysql Server 가 아닌 SSH Mysql Server 로 연결하기 위한 과정으로 이를 터널링이라 함.
		JSCH를 이용하여 접속을 하며 이전에 Maven에 (pom.xml)에 dependency를 추가해주어야 한다.
	 */
	
	static Session SSH_SESSION;
    static JSch jsch = new JSch();
    
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		
		if(SSH_SESSION != null){
            SSH_SESSION.disconnect();
        }
        if(jsch != null){
            jsch = null;
        }
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		
		java.util.Properties config = new java.util.Properties();
        config.put("StrictHostKeyChecking", "no");

        try {
            SSH_SESSION = jsch.getSession("ec2-user", "18.216.21.171", 22);
            SSH_SESSION.setPassword("");
            SSH_SESSION.setConfig(config);
            SSH_SESSION.connect();
            SSH_SESSION.setPortForwardingL(3307, "127.0.0.1", 3306);
        } catch (JSchException e) {
            e.printStackTrace();
        }
	}

}
