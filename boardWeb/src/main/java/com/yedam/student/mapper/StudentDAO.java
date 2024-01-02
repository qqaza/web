package com.yedam.student.mapper;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.yedam.student.vo.Student;

//저장공간: ORACLE DB.

//추가/수정/삭제/목록/단건조회.
public class StudentDAO {
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

	// 목록.
	public List<Student> getStudentList() {
		getConn();
		List<Student> students = new ArrayList<Student>();
		String sql = "select * from student order by 1";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Student student = new Student();
				student.setStudentNo(rs.getString("student_No"));
				student.SetStudentName(rs.getString("student_Name"));
				student.SetEng(rs.getInt("eng"));
				student.SetMath(rs.getInt("math"));
				// 배열의 빈곳에 한건 저장.
				students.add(student);

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return students;
	}// end of getStudentList().

//추가.
	public boolean addStudent(Student std) {
		getConn();
		String sql = "insert into student values(?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, std.getstudentNo());
			psmt.setString(2, std.getStudentName());
			psmt.setInt(3, std.getEng());
			psmt.setInt(4, std.getMath());

			int r = psmt.executeUpdate();
			if (r == 1) {
				return true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}// end of addStudent()
		// 단건조회.

	public Student getStudent(String sno) {
		getConn();
		String sql = "select * from student where student_No =?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sno);
			rs = psmt.executeQuery();
			if (rs.next()) {
				Student student = new Student();
				student.setStudentNo(rs.getString("student_No"));
				student.SetStudentName(rs.getString("student_Name"));
				student.SetEng(rs.getInt("eng"));
				student.SetMath(rs.getInt("math"));
				return student;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;

	} // 단건조회 끝.

	// 수정.
	public boolean modifytudent(String no, int eng, int math) {
		getConn();
		String sql = "UPDATE student " + "set eng = ?,math=? " + "where student_No = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, eng);
			psmt.setInt(2, math);
			psmt.setString(3, no);
			int r = psmt.executeUpdate();
			if (r > 0) {
				return true;
			}

		} catch (SQLException e) {

			e.printStackTrace();
		}
		return false;
	}// 수정끝.

	// 삭제.

	public boolean removeStudent(String Name) {
		getConn();
		String sql = "delete from student where student_Name =?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, Name);
			int r = psmt.executeUpdate();
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}// 삭제 끝.

}// end of class
