<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <title>게시판 관리</title>
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
   	 		<h2 style="font-weight:bold;">게시판 관리</h2>    
 	 	</div>
        <div class="col-sm-10">
          <div class="well" style="height:100%;background:white;">
            <div class="container-fluid">
			  <h4 style="font-weight:bold;">게시판 관리</h4><br> 
			 	<div class="">
					<select class="form-control col-md-6" style="width:150px">
						<option id="memberId">운영자아이디</option>
						<option id="boardName">게시판명</option>
						<option id="themeName">테마명</option>
					</select>
					<input type="text" class="form-control col-md-4" style="width:200px"/>
					<button type="button" class="btn btn-info">검색</button>
				</div>  
				<br>     
			  <table class="table table-striped active" id="tb">
			    <thead>
			      <tr>
			     	<th><input type="checkbox" class="chechall" id="checkall"/></th>
			        <th>게시판명</th>
			        <th>운영자</th>
			        <th>테마명</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			     	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td id="boardName">${boardName}탁구 게시판</td>
			        <td id="memberId">${memberId}운영자1</td>
			        <td id="themeName">${themeName}흰색 테마</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>축구 게시판</td>
			        <td>운영자3</td>
			        <td>흰색 테마</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>농구 게시판</td>
			        <td>운영자4</td>
			        <td>검정 테마</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>야구 게시판</td>
			        <td>운영자2</td>
			        <td>흰색 테마</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>E-스포츠</td>
			        <td>운영자5</td>
			        <td>흰색 테마</td>
			      </tr>
			    </tbody>
			  </table>
			  <a href="#" class="btn btn-danger pull-right">삭제</a>
			  <a href="./editboard.jsp" class="btn btn-warning pull-right">수정</a>
			  <a href="./addboard.jsp" class="btn btn-success pull-right">게시판 추가</a>
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
			var href = "./managearticles.jsp";
			window.location.href = href;
		});
	});
</script>
</html>