package com.yedam.student.command;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.student.service.StudentService;
import com.yedam.student.serviceImpl.StudentServiceMybatis;
import com.yedam.student.vo.Student;

@WebServlet("/StudentList")
public class StudentListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public StudentListServ() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");

		response.getWriter().append("Served at: ").append(request.getContextPath());

		PrintWriter out = response.getWriter();

		// 목록 페이지.
		StudentService dao = new StudentServiceMybatis();
		List<Student> list = dao.studentList();

		// out.print("<table border='1'>");
		String str = "<table border='1'>";
		str += "<thead><tr><th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead>";
		str += "<tbody>";
		for (Student std : list) {

			str += "<tr><td><a href='getStudentServlet?sno=" + std.getstudentNo() + "'>" + std.getstudentNo()
					+ "</td><td>" + std.getStudentName() + "</td><td>" + std.getEng() + "</td><td>" + std.getMath()
					+ "</td></tr>";
		}
		str += "</tbody></table>";
		str += "<a href='student/inform.html'>등록 화면으로 이동</a>";
		out.print(str);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
