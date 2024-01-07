package com.yedam.reply.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.reply.service.ReplyService;
import com.yedam.reply.serviceImpl.ReplyServiceImpl;
import com.yedam.reply.vo.ReplyVO;

public class ReplyListJson implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// json 데이터를 생성해서 반환
		// [{"replyNo":1,"boardNo":3,"reply":"안녕",.....},{},....{}]
		resp.setContentType("text/json;charset=utf-8");
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyListPaging(Integer.parseInt(bno), Integer.parseInt(page));
		String json = "[";
		for (int i = 0; i < list.size(); i++) {
			json += "{\"replyNo\":" + list.get(i).getReplyNo() + ",\"boardNo\":" + list.get(i).getBoardNo()
					+ ",\"reply\":\"" + list.get(i).getReply() + "\"" + ",\"name\":\"" + list.get(i).getName()
					+ "\"}";
			if (i != list.size() - 1) {
				json += ",";
			}
		}

		json += "]";

		try {
			resp.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}