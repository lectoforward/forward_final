<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
   /* .row.content {height: 550px}*/
    
    /* Set gray background color and 100% height */
   /* .sidenav {
      background-color: #f2f2f2;
      height: 100%;
    }
         */
    /* On small screens, set height to 'auto' for the grid */
  /*  @media screen and (max-width: 767px) {
      .row.content {height: auto;} 
    }*/
    .navbar-nav{
    	width:100%;
    }

  </style>
</head>
<body class="header-fixed sidebar-fixed" data-spy="scroll" data-target=".navbar" data-offset="60">
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav">
	      	<li><a class="navbar-brand" style="font-weight:bold;font-size:20pt;" href="./adminmain.jsp">ADMINMASTER</a></li>
	        <li class="active" style="font-weight:bold;font-size:12pt;"><a href="./adminmain.jsp">관리 홈</a></li>
	        <li style="font-weight:bold;font-size:12pt;"><a href="./managearticles.jsp">게시판 관리</a></li>
	        <li style="font-weight:bold;font-size:12pt;"><a href="./managemember.jsp">회원 관리</a></li>
	        <li style="font-weight:bold;font-size:12pt;"><a href="./managemanager.jsp">운영자 관리</a></li>
	        <li style="font-weight:bold;font-size:12pt;"><a href="./admininfo.jsp">관리자 정보</a></li>
	        <li><a href="./index.jsp" class="pull-right" style="font-weight:bold;font-size:12pt;">로그아웃</a></li>
	      </ul>
	    </div>
</body>
</html>
