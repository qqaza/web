package com.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DAO {
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	public Connection getConn() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe"; // 연결할 url
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			conn = DriverManager.getConnection(url, "dev", "dev"); // url,아이디,비번
			System.out.println("연결 성공!!");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	
}//end of class
