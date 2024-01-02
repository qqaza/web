<%@page import="javax.servlet.jsp.tagext.TagLibraryInfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>student/jstl.jsp</title>
</head>
<body>
	<!-- 자바코드 대체하기 -->
	<c:set var="name" value="홍길동"></c:set>
	<c:out value="${name }"></c:out>

	<c:set var="age" value="19"></c:set>
	<c:if test="${age >= 20 }">
		<p>성인입니다.</p>
	</c:if>

	<c:choose>
		<c:when test="${age >= 20 }">
			<p>성인입니다.</p>
		</c:when>
		<c:otherwise>
			<p>미성년자입니다.</p>
		</c:otherwise>
	</c:choose>
	<!-- for(int i=1, i<10, i++) -->
	<c:forEach begin="1" end="9" step="1" var="i">
		<p>3 * ${i } = ${3*i }</p>
	</c:forEach>

	<!-- for (String name : names) {} -->
	<c:set var="names" value="Hong,Hwang,kim"></c:set>
	<c:forEach items="${name  }" var="n">
		<p>${n  }</p>
	</c:forEach>


</body>
</html>