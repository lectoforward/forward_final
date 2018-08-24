<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<script>
$(function() { $("#postcodify_search_button").postcodifyPopUp(); });


</script>
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
   	 		<h2 style="font-weight:bold;">${boardName}회원 관리</h2>    
 	 	</div>
 	 	
        <div class="col-sm-10">
          <div class="well" style="height:100%;background:white;">
            <div class="container-fluid">
			  <h4 style="font-weight:bold;">회원 수정</h4>
			  <br>
				<form class = "mainForm">
				<div class="form-group row">
				    <label class="col-sm-2 col-form-label" for="userid">아이디</label>
				    <input id="userid" name="userid" type="id" class="input-sm" equired autofocus>
				</div>
				<div class="form-group row">
				    <label for="pwd1" class="col-sm-2 col-form-label"l>비밀번호</label>
				    <input id="pwd1" name="pwd1" type="password" class="input-sm" required>
				</div>
				<div class="form-group row">
				    <label pwd="fullname" class="col-sm-2 col-form-label">이름</label>
				    <input id="fullname" name="fullname" type="text" placeholder="40자미만 공백없이" class="input-sm"  required>
				</div>
				<div class="form-group row">
				    <label for=nickname" class="col-sm-2 col-form-label"l>닉네임</label>
				    <input id="nickname" name="nickname" type="text" class="input-sm" required>
				</div>
				<div class="form-group row">
				    <label pwd="email" class="col-sm-2 col-form-label">메일 주소</label>
				    <input id="email" name="email" type="email" placeholder="abcd@domain.com" class="input-sm"  required autocomplete="off">
				</div>
				<div class="form-group row">
				    <label pwd="tel" class="col-sm-2 col-form-label">연락처</label>
				  
				    <select class="0stnum input-sm">
				    	<option value="010">010
				
				    </select>
				    <input class ="1stnum input-sm" id="1stnum" name="1stnum" style="width:80px;">
				    <input class ="2stnum input-sm" id="2stnum" name="2stnum" style="width:80px;">
				</div>  
				<div class="form-group row">
					<label id="birth" class="col-sm-2 col-form-label">생년월일</label>
						<script class="birth_sc">
							//var today = new Date();
							var today =new Date();
							var toyear = parseInt(today.getYear());
							//var start = toyear - 5
							var start = 1900;
							//var end = start + 100;
							var end = toyear+start;
							
							document.write("<font size=2><select name=birth1 class=input-sm>");
							document.write("<option value='' selected>");
							for (i=start;i<=end;i++) document.write("<option>"+i+"년");
							document.write("</select>  "); 
							
							document.write("<select name=birth2 class=input-sm>");
							document.write("<option value='' selected>");
							for (i=1;i<=12;i++) document.write("<option>"+i+"월");
							document.write("</select>  ");
							
							document.write("<select name=birth3 class=input-sm>");
							document.write("<option value='' selected>");
							for (i=1;i<=31;i++) document.write("<option>"+i+"일"); 
							document.write("</select>   </font>");
							
						</script>
				</div>
				<div class="form-group row">
					<label  class="col-sm-2 col-form-label">주소</label>
					<input type="text" name="" class="postcodify_postcode5 float-left input-sm" value="" />
					<button id="postcodify_search_button" class="btn btn-info btn-sm">검색</button>
					<input type="text" name="" class="postcodify_address input-sm" value=""/>
					<label>&nbsp;</label><input type="text" name="" class="postcodify_details input-sm" value="" />
				</div>
				
				
				<div class="form-group row">
				  <a href="./managemember.jsp" class="btn btn-success" id="btnSubmit"> 제출 </a>
				  <a href="./managemember.jsp" class="btn btn-warning" id="btnCancel"> 취소</a>
				</div>
			</form>
			</div>
		</div>
		</div>
	</div>
</body>
</html>