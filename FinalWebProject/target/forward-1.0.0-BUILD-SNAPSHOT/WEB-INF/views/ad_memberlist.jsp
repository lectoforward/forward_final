<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
   	 		<h2 style="font-weight:bold;">${boardName}자유 게시판&nbsp;&nbsp;회원 관리</h2>    
 	 	</div>
 	 	
        <div class="col-sm-10">
          <div class="well" style="height:100%;background:white;">
            <div class="container-fluid">
			  <h4 style="font-weight:bold;">회원 목록</h4>
			  <br>
			 	<div class="">
					<select class="form-control col-md-6" style="width:150px">
						<option>아이디</option>
						<option>닉네임</option>
						<option>이름</option>
						<option>등급명</option>
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
			        <th>닉네임</th>
			        <th>이름</th>
			        <th>메일</th>
			        <th>게시글 수</th>
			        <th>등급명</th>
			      </tr>
			    </thead>
			    <tbody>
			 
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td id="memberId">${memberId}sadka12</td>
			        <td id="memberNickname">${memberNickname}권혁담</td>
			        <td id="memberName">${memberName}권혁담</td>
			        <td id="memberMail">${memberMail}asd12@gmail.com</td>
			        <td id="articleCnt">${articleCnt}24</td>
			        <td id="gradeName">${gradeName}골드</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>jgfk34</td>
			        <td>정민수</td>
			        <td>정민수</td>
			        <td>wssdd12@gmail.com</td>
			        <td id="articleCnt">${articleCnt}6</td>
			        <td>실버</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>dfkk6743</td>
			        <td>yellowmint</td>
			        <td>손흥만</td>
			        <td>asd3838@gmail.com</td>
			        <td id="articleCnt">${articleCnt}11</td>
			        <td>골드</td>
			      </tr>
			      <tr>
			      	<td><input type="checkbox" class="checkthis" value=""></td>
			        <td>kdjl4545</td>
			        <td>탁구왕김제빵</td>
			        <td>김탁구</td>
			        <td>kasdslaj@gmail.com</td>
			        <td id="articleCnt">${articleCnt}3</td>
			        <td>브론즈</td>
			      </tr>
			    </tbody>
			  </table>
			  <hr/>
			<div class="text-center">
				<ul class="pagination">
					<li><a href="#">◀</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">▶</a></li>
				</ul>
			</div>
			  <a href="./managemember.jsp" class="btn btn-danger pull-right">회원 삭제</a>
			  <a href="./addmember.jsp" class="btn btn-success pull-right">회원 추가</a>
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
		var href = "./editmember.jsp";
		window.location.href = href;
	});
});
</script>
</html>