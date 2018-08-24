<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <title>회원 관리</title>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <style>
  	#sidebar{
  		float: left;
  	}
  	#sidebar:before, #sidebar:after{
  		clear:both;
  		content:"";
  	}
  </style>
</head>
<body>
<div id="header">
	<%@ include file="adminheader.jsp" %>
</div>
<div id="sidebar">
<%@ include file="adminsidebar.jsp" %>
</div>
<div id="content">
   	 	<div class="well text-center">
   	 		<h2 style="font-weight:bold;">${boardName}운영자 관리</h2>    
 	 	</div>
 	 	
        <div class="col-sm-10">
          <div class="well" style="height:100%;background:white;">
            <div class="container-fluid">
			  <h4 style="font-weight:bold;">운영자 목록</h4>
			  <br>
			 	<div class="">
					<select class="form-control col-md-6" style="width:150px">
						<option>아이디</option>
						<option>닉네임</option>
					</select>
					<input type="text" class="form-control col-md-4" style="width:200px"/>
					<button type="button" class="btn btn-info">검색</button>
				</div>  
				<br>    
			  <table class="table table-striped active" id="tb">
			    <thead>
			      <tr>
			      	<th><input type="checkbox" id="checkall"></th>
			        <th>아이디</th>
			        <th>이름</th>
			        <th>전화번호</th>
			        <th>게시판명</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td id="memberId">${memberId}admin1</td>
			        <td id="memberName">${memberName}이영자</td>
			        <td id="memberPhone">${memberPhone}010-1111-1111</td>
			        <td id="boardName">${boardName}자유 게시판</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>admin</td>
			        <td>김관리</td>
			        <td>010-3333-3333</td>
			        <td>공지 게시판</td>
			      </tr>
			    </tbody>
			  </table>
			  <hr/>
			<div class="text-center">
				<ul class="pagination">
					<li><a href="#">1</a></li>
				</ul>
			</div>
			  <a href="#" class="btn btn-danger pull-right">운영자 삭제</a>
			  <a href="./addmanager.jsp" class="btn btn-success pull-right">운영자 추가</a>
			</div>
          </div>
        </div>
        
	</div>
</body>
<script>
$(document).ready(function(){
	$("#checkall").click(function(){
		$(".checkthis").prop('checked', $(this).prop('checked'));
	});
	
	$('#tb td').click(function(){
		var href = "./editmanager.jsp";
		window.location.href = href;
	});
});
</script>
</html>