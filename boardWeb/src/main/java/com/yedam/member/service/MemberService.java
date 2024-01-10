package com.yedam.member.service;

import java.util.List;


import com.yedam.member.vo.MemberVO;

public interface MemberService {
	public MemberVO login(String id, String pw);
	public List<MemberVO> memberList();
	public MemberVO getMember(String id); 
	
	//등록 삭제
	public boolean addMember(MemberVO vo); 
	public boolean removeMember(String id); 
	
	
}
