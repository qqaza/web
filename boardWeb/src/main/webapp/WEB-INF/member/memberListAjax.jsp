<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/memberListAjax.jsp</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="js/member.js"></script>
</head>
<body>
    <h3>회원등록</h3>
    <table class="table">
        <tbody>
            <tr>
                <th>회원아이디</th>
                <td><input type="text" name="id"></td>
            </tr>
            <tr>
                <th>회원비번</th>
                <td><input type="text" name="pw"></td>
            </tr>
            <tr>
                <th>회원이름</th>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <th>회원사진</th>
                <td><input type="file" name="image"></td>
            </tr>
            <td colspan="2"><button id="addBtn">등록</button></td>
        </tbody>
    </table>

    <h3>회원목록</h3>
<table class="table">
    <thead>
        <tr>
            <th>아이디</th><th>이름</th><th>권한</th><th>이미지</th>
        </tr>
    </thead>
    <tbody id="list"></tbody>
</table>
</body>
</html>