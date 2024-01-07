package com.yedam.board.command;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.board.service.BoardService;
import com.yedam.board.serviceImpl.BoardServiceMybatis;
import com.yedam.board.vo.BoardVO;
import com.yedam.common.Control;

public class ModifyBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String bno = req.getParameter("bno");
		String content = req.getParameter("content");
		
		BoardVO board = new BoardVO();
		board.setBoardNo(Integer.parseInt(bno));
		board.setContent(content);
		BoardService svc = new BoardServiceMybatis();
		
		boolean mod = svc.modBoard(board);
		
		try {
			if (mod) {
				resp.sendRedirect("boardList.do");
			} else {
				resp.sendRedirect("modifyForm.do");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}