package com.yedam.reply.serviceImpl;



import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.reply.mapper.ReplyMapper;
import com.yedam.reply.service.ReplyService;
import com.yedam.reply.vo.ReplyVO;

public class ReplyServiceImpl implements ReplyService{

	SqlSession session = DataSource.getInstance().openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);
	@Override
	public List<ReplyVO> replyList(int boardNo) {
		// TODO Auto-generated method stub
		return mapper.replyList(boardNo);
	}
	@Override
	public boolean removeReply(int replyNo) {
		// TODO Auto-generated method stub
		return mapper.deleteReply(replyNo)==1;
	}
	@Override
	public boolean addReply(ReplyVO vo) {
		// TODO Auto-generated method stub
		return mapper.insertReply(vo)==1;
	}
//	@Override
//	public ReplyVO selectReply(int replyNo) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	@Override
	public ReplyVO getReply(int replyNo) {
		// TODO Auto-generated method stub
		return mapper.selectReply(replyNo);
	}
	@Override
	public List<ReplyVO> replyListPaging(int boardNo, int page) {
		// TODO Auto-generated method stub
		return mapper.replyListPaging(boardNo, page);
	}

	@Override
	public int getTotalCnt(int boardNo) {
		// TODO Auto-generated method stub
		return mapper.selectCount(boardNo);
	}

	
}
