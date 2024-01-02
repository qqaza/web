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
		// 글번호 조회.
				String bno = req.getParameter("bno");
				String content = req.getParameter("content");

				BoardVO vo = new BoardVO();
				vo.setBoardNo(Integer.parseInt(bno));
				vo.setContent(content);
				BoardService svc = new BoardServiceMybatis();
				// svc.modBoard(): BoardVO인수, boolean 반환
				if(svc.modBoard(vo)) {
					//수정 성공시 상세보기 페이지로 이동
					try {
						resp.sendRedirect("getBoard.do?bno=" + bno);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}else {
					try {
						//등록 실패시 수정 페이지로 이동
						resp.sendRedirect("modifyForm.do");
					} catch (IOException e) {
						e.printStackTrace();
					}
				}


	}

}
