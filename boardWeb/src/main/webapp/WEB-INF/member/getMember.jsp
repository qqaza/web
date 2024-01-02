<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<form  name="memForm" action="getMember.do">
	<input type="text" name="id" value="${vo.id }">
	<table class="table">
		<tbody>
			<tr>
				<td>아이디</td>
				<td>${vo.id }</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td>${vo.pw }</td>

			</tr>
			<tr>
				<td>이름</td>
				<td>${vo.name }</td>

			</tr>
			<tr>
				<td>권한</td>
				<td>${vo.responsibilitity }</td>
			</tr>
			
			</table>
			</form>