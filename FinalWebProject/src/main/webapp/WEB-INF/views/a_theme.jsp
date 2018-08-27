<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>게시판 관리</title>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script>
var controllerThemeCode;

var boardCode="${boardCode}";
var themeCode="${themeCode}"
/*
 //실제로는 이걸로 해야함
 var boardCode="${boardCode}";
 */
$(document).ready(function(e){

	
	if(themeCode=="th1"){
		$("#themeCode1").attr('checked',true);
	}
	 
	if(themeCode=="th2"){
		$("#themeCode2").attr('checked',true);

	}
	 
	 $('#themeCancel').click(function(e){
			
			location.href="/a_articlelist";
		
	 });
	
	 $('#themeCode1').click(function(e){
		controllerThemeCode = $('input[name="themeCode"]:checked').val();
		
		
	});
	
	
	$('#themeCode2').click(function(e){
		controllerThemeCode = $('input[name="themeCode"]:checked').val();
		
		
	});
	
	

	
	 
	
	
});

function changeTheme(flag){

	var $form = $('<form></form>');
	
	$form.attr('action','/a_theme');
	$form.attr('method','post');
	$form.appendTo('body');
	var checkTheme = '<input type="hidden" value="' + controllerThemeCode + '" name="themeCode">';	
	var outputBoardCode = '<input type="hidden" value="' + boardCode + '" name="boardCode">';
	$form.append(checkTheme);
	$form.append(outputBoardCode);
	$form.submit();
}




</script>




<style>
#sidebar {
	float: left;
}

#sidebar:before, #sidebar:after {
	clear: both;
	content: "";
}






</style>
</head>
<body>
	<div id="header">
		<%@ include file="adminheader.jsp"%>
	</div>
	<div id="sidebar">
		<%@ include file="adminsidebar.jsp"%>
	</div>
	<div id="content">
		
		<div class="well text-center">
			<h2 style="font-weight: bold;">${boardName}게시판테마 변경</h2>
		</div>
		<div class="col-sm-10">
			<div class="well" style="height: 100%; background: white;">
				<div class="container-fluid">
					<h4 style="font-weight: bold;">테마 변경</h4>
					<h4>게시판에 적용할 테마를 선택하세요.</h4>
					<br>
					<div class="container-fluid text-center bg-grey">

						<div class="row text-center">
							<div class="col-sm-6">
								<div class="thumbnail">
									<img src="./resources/images/theme1.png"
										style="width: 400px; height: 300px;">
									<h5>
										<input type="radio" id="themeCode1" name="themeCode"
											value="th1" checked><strong>블랙 테마(기본 테마)</strong>
									</h5>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="thumbnail">
									<img src="./resources/images/theme2.png"
										style="width: 400px; height: 300px;">
									<h5>
										<input type="radio" id="themeCode2" name="themeCode"
											value="th2"><strong>하늘 테마</strong>
									</h5>
								</div>
							</div>
						</div>
						<div>
							<button type="button" onClick="changeTheme(this);" class="btn btn-success text-center" id="changeThemeBtn">테마적용</button>
							<button type="button" id="themeCancel" class="btn btn-danger btn-default text-cneter">변경취소</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>