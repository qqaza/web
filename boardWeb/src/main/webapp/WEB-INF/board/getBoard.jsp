<%@page import="com.yedam.board.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<style>
	.pagination {
	  display: inline-block;
	}
	
	.pagination a {
	  color: black;
	  float: left;
	  padding: 8px 16px;
	  text-decoration: none;
	}
	
	.pagination a.active {
	  background-color: #4CAF50;
	  color: white;
	}
	
	.pagination a:hover:not(.active) {background-color: #ddd;}
	</style>

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

<div id="show">
	<p style="margin: 0 auto;">[댓글목록]</p>
	<ul id="list" style="list-style: none;">
	</ul>
</div>
<!-- 페이징 처리 -->
<div id = "paging" class="pagination">
</div>

<a href="boardList.do">글 목록으로 가기</a>
<script src="js/service.js"></script>

<script>
function deleteFunc(){
    console.log(window);
    document.forms.myForm.action = "removeForm.do";
    document.forms.myForm.submit();
}
const bno = '${vo.boardNo}';
let ul = document.querySelector('#list');

//페이지 클릭하면 페이지의 데이터 보여주도록하기.
let pageInfo = 1;
function pageList(e){
	e.preventDefault();
	pageInfo = this.getAttribute("href");
	showList(pageInfo);

		
//페이지를 생성하는 함수를 호출.
pagingList(pageInfo);
}

//Ajax 호출
function showList_backup(page){
	ul.innerHTML = '';
	const xhtp = new XMLHttpRequest();
	xhtp.open('get','replyListJson.do?bno=' + bno+ "&page=" + page);
	xhtp.send();
	xhtp.onload = function(){
		
		let data = JSON.parse(xhtp.responseText); //json문자열 -> 객체
		data.forEach(reply => {
			//시작.
			let li = makeLi(reply);
			ul.appendChild(li);
		})
	}
}//
function showList(page){
	ul.innerHTML = '';
	fetch("replyListJson.do?bno=" + bno+ "&page=" + page)
	.then(str => str.json())
	.then(result=>{
		result.forEach(reply=>{
			let li = makeLi(reply);
			ul.appendChild(li);
		})
	})
	.catch(reject => console.log(reject));
}
showList(pageInfo);

//페이지 생성.
let paging = document.querySelector('#paging');
pagingList();

function pagingList(page=1){
	//다음 페이지를 기준으로 페이지 목록 생성.
	paging.innerHTML='';

	let pagingAjax = new XMLHttpRequest();
pagingAjax.open('get', 'pagingListJson.do?bno='+bno+'&page=' + page);
pagingAjax.send();
pagingAjax.onload = function(){
	let result = JSON.parse(pagingAjax.responseText);
	console.log(result);
	//이전페이지.
	if(result.prev){
		let aTag = document.createElement('a');
		aTag.href = result.startPage -1;
		aTag.innerText = '이전';
		aTag.addEventListener('click', pageList);
		paging.appendChild(aTag);
	}
	//페이지목록.
	for(let p = result.startPage; p <= result.lastPage; p++){
		let aTag = document.createElement('a');
		if(p == page) {
			aTag.setAttribute('class', 'active');
		}
		aTag.href = p;
		aTag.innerText = p;
		aTag.addEventListener('click', pageList);
		paging.appendChild(aTag);
	}
	// 다음페이지.
	if(result.next){
		let aTag = document.createElement('a');
		aTag.href = result.lastPage +1;
		aTag.innerText = '다음';
		aTag.addEventListener('click', pageList);
		paging.appendChild(aTag);

	
	}
	
}
}



//등록버튼 클릭 이벤트 생성.
//document.querySelector('#addReply').addEventListenrt('click',funcyion(){ });
document.getElementById('addReply').onclick = function () {
		let reply = document.querySelector('#content').value;
		let replyer = '${logid}';

		//fetch함수.
		fetch('addReplyJson.do', {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'reply='+reply+'&replyer='+replyer+'&bno='+bno
		})
		.then(str => str.json())
		.then(result =>{
			if(result.retCode == 'OK'){
				
				
				alert('처리 성공');
				pageInfo = 1;
				showList(pageInfo);
				pagingList();
				document.querySelector('#content').value = '';
			}else if(result.retCode == 'NG'){
				alert('처리중 에러');
			}
		})
		.catch(err=> console.error(err));

		// const addAjax = new XMLHttpRequest();
		// addAjax.open('post', 'addReplyJson.do');
		// addAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		// addAjax.send('reply='+reply+'&replyer='+replyer+'&bno='+bno);
		// addAjax.onload = function() {
		// 	let result = JSON.parse(addAjax.responseText);
		// 	if(result.retCode == 'OK'){
				
				
		// 		alert('처리 성공');
		// 		pageInfo = 1;
		// 		showList(pageInfo);
		// 		pagingList();
		// 		document.querySelector('#content').value = '';

		// 	} else if(result.retCode == 'NG'){
		// 		alert('처리중 에러');
		// 	}
		// }//end of onload
	}
	

</script>