package com.yedam.student.command;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.student.mapper.StudentDAO;
import com.yedam.student.service.StudentService;
import com.yedam.student.serviceImpl.StudentServiceImpl;
import com.yedam.student.vo.Student;

@WebServlet("/modifyStudent")
public class ModifyStudent extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ModifyStudent() {

		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");

		// 파라미터 활용해서 조회.
		String sno = request.getParameter("sno");

		StudentService dao = new StudentServiceImpl();
		Student std = dao.getStudent(sno);

		String str = "<form action='updateStudent'>";
		str += "<table border='1'><caption>학생정보</caption>";
		str += "<tr><th>학번</th><td><input type='text'" + " readonly name='sno' value='" + std.getstudentNo()
				+ "'></td></tr>";
		str += "<tr><th>이름</th><td>" + std.getStudentName() + "</td></tr>";
		str += "<tr><th>영어점수</th><td><input type='number' name='escore'value='" + std.getEng() + "'></td></tr>";
		str += "<tr><th>수학점수</th><td><input type='number' name='mscore'value='" + std.getMath() + "'></td></tr>";
		str += "<tr><td><input type = 'submit' value='수정'></td></tr></table>";
		str += "</form>";

		response.getWriter().print(str);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
