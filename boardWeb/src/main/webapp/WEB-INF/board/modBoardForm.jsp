<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
	



	<h3>수정화면</h3>
	
	<form action="modifyBoard.do">
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
					<td colspan="3"><textarea cols="30" rows="4"  name="content">${vo.content }</textarea></td>
				</tr>
				<tr>
					<td>작성자</td>
					<td colspan="3">"${vo.writer }"</td>
				</tr>
				<tr>
					<td>작성일</td>
					<td><fmt:formatDate value="${vo.writeDate }" pattern="yyyy-MM-dd"/></td>
					<td>조회수</td>
					<td>"${vo.clickCnt }"</td>
				</tr>
				<tr>
					<td>이미지</td>
					<td colspan="3">${vo.image }</td>
				</tr>
				<tr>
					<td colspan="4" align="center">
					<input type="submit" value="저장">
					
						<input type="reset" value="취소">
						</td>
				</tr>
			</tbody>
		</table>
	</form>
	<br>
	<a href="boardList.do">글 목록으로 가기</a>
