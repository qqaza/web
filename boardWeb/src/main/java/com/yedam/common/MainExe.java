package com.yedam.common;



import com.yedam.member.service.MemberService;
import com.yedam.member.serviceImpl.MemberServiceImpl;
import com.yedam.member.vo.MemberVO;

public class MainExe {
	public static void main(String[] args) {
		MemberService svc = new MemberServiceImpl();
		MemberVO vo = svc.login("user1", "1111");
		
		if(vo != null) {
			System.out.println(vo);
		}else {
			System.out.println("id,pw확인하세요.");
		}
			
	}
}