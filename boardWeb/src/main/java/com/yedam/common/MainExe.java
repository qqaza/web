package com.yedam.common;

import com.yedam.reply.vo.PageDTO;

public class MainExe {
	public static void main(String[] args) {
		int total = 70;
		PageDTO dto = new PageDTO(13, total);
			
		System.out.println(dto.toString());
	}
}