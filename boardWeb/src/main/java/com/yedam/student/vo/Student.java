package com.yedam.student.vo;

public class Student {
	String studentNo; // student_name
	String studentName;
	int eng;
	int math;

	public Student() {

	}

	public void showInfo() {
		System.out.println("이름은 " + studentName + "영어는 " + eng + "수학은 " + math);
	}

	public void SetStudentName(String studentName) {
		this.studentName = studentName;
	}

	public void SetEng(int eng) {
		this.eng = eng;
	}

	public void SetMath(int math) {
		this.math = math;
	}

	public void setStudentNo(String studentNo) {
		this.studentNo = studentNo;
	}

	public String getStudentName() {
		return studentName;
	}

	public String getstudentNo() {
		return studentNo;
	}

	public int getEng() {
		return eng;
	}

	public int getMath() {
		return math;
	}

	public Student(String studentNo, String studentName, int eng, int math) {
		this.studentNo = studentNo;
		this.studentName = studentName;
		this.eng = eng;
		this.math = math;
	}
}
