<%@page import="com.yedam.board.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
	






<h3>삭제화면</h3>
	
	<form name="myForm" action="removeBoard.do">
		<input type="hidden" name="bno" value="${vo.boardNo }">
		<table class="table">
			<tbody>
				<tr>
					<td>글번호</td>
					<td colspan="3">"${vo.boardNo }"</td>
				</tr>
				<tr>
					<td>제목</td>
					<td colspan="3">"${vo.title }"</td>

				</tr>
				<tr>
					<td>내용</td>
					<td colspan="3">"${vo.content }"</td>

				</tr>
				<tr>
					<td>작성자</td>
					<td colspan="3">"${vo.writer }"</td>
				</tr>
				<tr>
					<td>작성일</td>
					<td><fmt:formatDate pattern="yyyy-MM-dd" value="${vo.writeDate }"/></td>
					<td>조회수</td>
					<td>"${vo.clickCnt }"</td>
				</tr>
				<tr>
					<td>이미지</td>
					<td colspan="3"></td>
				</tr>
				<tr>
					<td colspan="4" align="center">
					<c:choose>
				<c:when test="${logName eq vo.writer }">
					<input type="submit" value="삭제">
						<input type="reset" value="취소">
						</c:when>
				<c:otherwise>
				<input type="submit" value="삭제">
						<input type="reset" value="취소">
						</c:otherwise>
				</c:choose>
						</td>
				</tr>
			</tbody>
		</table>
	</form>
	<br>
	<a href="boardList.do">글 목록으로 가기</a>
