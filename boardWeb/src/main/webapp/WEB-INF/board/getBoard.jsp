<%@page import="com.yedam.board.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<h3>상세화면</h3>



<form name="myForm" action="modifyForm.do">
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
				<td><fmt:formatDate pattern="yyyy-MM-dd"
						value="${vo.writeDate }" /></td>
				<td>조회수</td>
				<td>"${vo.clickCnt }"</td>
			</tr>
			<tr>
				<td>이미지</td>
				<td colspan="3"><c:if test="${!empty vo.image }">
						<img width="150px" src="images/${vo.image }">
					</c:if></td>
			</tr>
			<tr>
				<td colspan="4" align="center"><c:choose>
						<c:when test="${logName eq vo.writer }">
							<input type="submit" value="수정">
							<input type="button" onclick="deleteFun()" value="삭제">
						</c:when>
						<c:otherwise>
							<input type="submit" value="수정">
							<input type="button" onclick="deleteFun()" value="삭제">
						</c:otherwise>
					</c:choose></td>
			</tr>
		</tbody>
	</table>
</form>
${logName } vs. ${vo.writer }
<br>
댓글내용:
<input type="text" id="content">
<button id="addReply">등록</button>
<p />
<p>댓글목록</p>
<div id="show">
	<ul id="list">

		<li><span>글번호1</span>,내용:
	</ul>
</div>
<a href="boardList.do">글 목록으로 가기</a>
<script src="js/service.js"></script>

<script>
function deleteFunc(){
    console.log(window);
    document.forms.myForm.action = "removeForm.do";
    document.forms.myForm.submit();
}
let ul = document.querySelector('#list');
const bno = '${vo.boardNo}';
//Ajax 호출
const xhtp = new XMLHttpRequest();
xhtp.open('get','replyListJson.do?bno=' + bno);
xhtp.send();
xhtp.onload = function(){
	
	let data = JSON.parse(xhtp.responseText); //json문자열 -> 객체
	data.forEach(reply => {
		console.log(reply);
		//시작.
		let li = makeLi(reply);
		
		ul.appendChild(li);
	})
	
}
//등록버튼 클릭 이벤트 생성.
//document.querySelector('#addReply').addEventListenrt('click',funcyion(){ });
document.querySelector('#addReply').onclick = function(){
	let reply = document.querySelector('#content').value;
	let replyer = '${logid}';
	
	const addAjax = new XMLHttpRequest();
	addAjax.open('get', 'addReplyJson.do?reply='+reply+'&replyer='+replyer+'&bno='+bno );
	addAjax.send();
	addAjax.onload = function(){
		let result = JSON.parse(addAjax.responseText);
		if(result.retCode == 'OK'){
			
			let reply = result.vo;
			
			let li = makeLi(reply);
		
			ul.appendChild(li); //함수빠지는 부분
			document.querySelect('#content').value = '';
		}else if(result.retCode == 'NG'){
			alert('처리중 에러.');
		}
	}
}
	
</script>