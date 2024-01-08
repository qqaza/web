package com.yedam.board.command;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.board.service.BoardService;
import com.yedam.board.serviceImpl.BoardServiceMybatis;
import com.yedam.board.vo.BoardVO;
import com.yedam.common.Control;

public class RemoveBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServiceMybatis();
		boolean rem = svc.remBoard(Integer.parseInt(bno));
		
		try {
			if (rem) {
				resp.sendRedirect("boardList.do");
			} else {
				resp.sendRedirect("removeForm.do");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}