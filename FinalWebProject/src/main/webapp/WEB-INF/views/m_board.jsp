<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!-- <!DOCT`YPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->


<%@ include file="userheader.jsp"%>


<html lang="ko-KR">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="format-detection" content="telephone=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
	(function(html) {
		html.className = html.className.replace(/\bno-js\b/, 'js')
	})(document.documentElement);
</script>

<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>SMASH</title>

<link rel='dns-prefetch' href='//code.jquery.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<style type="text/css">
img.wp-smiley, img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}

.contain {
	width: 100%;
	text-align: center;
}

.footer_navbx {
	
}

.max_container>ul {
	padding: 0 0 0 40%;
}
</style>

<script>
	
</script>
<link rel='stylesheet' id='dashicons-css'
	href='./resources/css/dashicons.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='post-views-counter-frontend-css'
	href='./resources/css/frontend.css' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-fonts-css'
	href='./resources/css/css.css' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css'
	href='./resources/css/genericons.css' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-style-css'
	href='./resources/css/style.css' type='text/css' media='all' />
<!-- <link rel='stylesheet' id='jquery-ui-css'  href='//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.min.css' type='text/css' media='all' /> -->
<!-- <link rel='stylesheet' id='unslider-css'  href='./resources/css/unslider.css' type='text/css' media='all' /> -->
<script type='text/javascript' src='./resources/js/jquery.js'></script>
<script type='text/javascript'
	src='./resources/js/jquery-migrate.min.js'></script>
<script type='text/javascript'
	src='//code.jquery.com/ui/1.11.4/jquery-ui.min.js'></script>
<!-- <script type='text/javascript' src='./resources/css/unslider.js'></script> -->
<link rel="alternate" type="application/json+oembed"
	href="./json/embed.json" />
<link rel="alternate" type="text/xml+oembed" href="./json/embed.json" />
<style type="text/css">
.recentcomments a {
	display: inline !important;
	padding: 0 !important;
	margin: 0 !important;
}
</style>


<!-- <link rel="stylesheet" href="./resources/css/metabrain-editor.css"
	type="text/css" media="all"> -->
<script type="text/javascript" src="./resources/js/common.js"></script>
</head>

<body style="background: white;">


	<c:if test="${themeCode eq 'th1'}">
		<div class="pg_topbannerbx">
			<div class="bg"></div>
			<div class="max_container">
				<!-- 타이틀 박스 -->
				<div class="title_bx">
					<h2 class="entry-title">자유게시판</h2>
					<!-- 빵가루 -->
					<div class="breadcrumb">
						<ul>
							<li class="home"><a class="item" href="/index">home</a></li>
							<li><a class="item" href="#">자유게시판</a></li>
						</ul>
					</div>
					<!-- .빵가루 -->
				</div>
				<!-- .타이틀 박스 -->
			</div>
	</c:if>

	</div>
	<!-- .헤더 -->
	<div id="primary" class="content-area">
		<div id="main" class="site-main" role="main">
			<div class="content_rowbx">
				<div class="max_container">
					<article id="post-42"
						class="post-42 page type-page status-publish hentry">
						<div class="entry-content">
							<!-- 컨텐츠 시작 -->


							<!-- 리스트 -->


							<c:if test="${themeCode eq 'th1'}">
								<!-- 셀렉박스 -->
								<div class="pg_headbx align_c m_top">
									<div class="tabbx tabrow50">
										<ul>
											<li><a href="#" data-tab-link="#">공지사항</a></li>
											<li class="active"><a href="#" data-tab-link="#">자유게시판</a></li>
										</ul>
									</div>
								</div>

								<div class="pg_headbx align_c">
									<div class="basic_s_bx">
										<!-- 셀렉박스 -->
										<div class="basic_select_bx board_select_bx">
											<!-- <a class="textbx" href="#;">제목</a> -->
											<select style="width: 70px; height: 46px;color=light-gray;"
												name="selectBox" id="selectBox">
												<option value="subject">제목</option>
												<option value="content">내용</option>
												<option value="author">작성자</option>
											</select>

											<!-- <ul class="select_ul">
										<li><a href="javascript:" data-value="subject">제목</a></li>
										<li><a href="javascript:" data-value="content">내용</a></li>
										<li><a href="javascript:" data-value="author">작성자</a></li>
									</ul>  -->
										</div>
										<!-- 서치박스 -->
										<div class="basic_search_bx">
											<form name="board_search" method="GET" id="search">
												<input type="hidden" id="boardCode" name="boardCode"
													value="${boardCode}"> <input type="hidden"
													id="searchWay" name="searchWay" value=""> <label
													for="pg_search">search</label> <input id="pg_search"
													type="text" name="keyword" class="text_input" value="">
											</form>
										</div>
										<div class="basic_btnbx">
											<a href="#" class="basic_btn search" id="btn2"><span
												class="text">검색</span></a>
										</div>
										<!-- .서치박스 -->
										<form name="write" action="/m_addarticle" method="GET"
											id="write">
											<input type="hidden" id="boardCode" name="boardCode"
												value="${boardCode}">
										</form>
									</div>
								</div>
								<!-- .셀렉박스 -->
								<div class="tbl_basiclist">
									<table>
										<caption>자유게시판</caption>
										<colgroup>
											<col style="width: 13%;">
											<col style="width: 61%;">
											<col style="width: 13%;">
											<col style="width: 13%;">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">No</th>
												<th scope="col">제목</th>
												<th scope="col">작성자</th>
												<th scope="col">작성일</th>
												<th scope="col">조회수</th>
											</tr>
										</thead>
										<tbody id="articleList">
											<c:forEach items="${list}" var="articleVO">
												<tr>
													<!-- no -->
													<td>${articleVO.articleCode}</td>
													<!-- 제목 -->
													<td><a
														href='m_detailarticle${pageMaker.makeQuery(pageMaker.cri.page)}&articleCode=${articleVO.articleCode}&boardCode=bo2'>
															${articleVO.articleTitle}</a></td>

													<!-- 작성자 -->
													<td>${articleVO.memberNickname}</td>
													<!-- 작성일 -->
													<td>${articleVO.articleDate}</td>
													<!-- 조회수-->
													<td><span class="badge bg-red">${articleVO.articleHits }</span></td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
								<!-- .리스트 -->
								<!-- ` 버튼 -->
								<%-- <c:if test="${sessionScope.login != null}"> --%>
								<div class="basic_btnbx">
									<a href="#" class="basic_btn write"><span class="text">글쓰기</span></a>
								</div>
								<%-- </c:if> --%>


								<!--. 글쓰기 버튼 -->
								<!-- 페이징 -->
								<form id="jobForm">
									<input type="hidden" name="page"
										value=${pageMaker.cri.page}> <input
										type="hidden" name="perPageNum"
										value=${pageMaker.cri.perPageNum}>
								</form>

								<div class="text-center">
									<ul class="pagination">
										<c:if test="${pageMaker.prev}">
											<li><a
												href="m_board?boardCode=${boardCode}&page=${pageMaker.startPage -1}">&laquo;</a></li>
										</c:if>

										<c:forEach begin="${pageMaker.startPage}"
											end="${pageMaker.endPage}" var="idx">
											<li
												<c:out value="${pagfeMaker.cri.page == idx?'class=active':''}"/>>
												<a href="m_board?boardCode=${boardCode}&page=${idx}">${idx}</a>


											</li>

										</c:forEach>


										<c:if test="${pageMaker.next && pageMaker.endPage>0}">
											<li><a
												href="m_board?boardCode=${boardCode}&page=${pageMaker.endPage+1}">&raquo;</a></li>
										</c:if>


									</ul>

								</div>
								<!-- .페이징 -->
							</c:if>







							<c:if test="${themeCode eq 'th2'}">
								<link rel="stylesheet" type="text/css"
									href="./resources/css/theme2.css">
								<!-- 셀렉박스 -->

								<!-- <div class="pg_headbx align_c m_top">
								<div class="tabbx tabrow50">
									<ul>
										<li><a href="#" data-tab-link="#">공지사항</a></li>
										<li class="active"><a href="#" data-tab-link="#">자유게시판</a></li>
									</ul>
								</div>
							</div> -->

								<div id="topImage">
									<a href="/m_board?boardCode=bo1&page=10"> <img src="./resources/images/notice.png"
										class="imagesHover" id="noticeImage" alt="notice" border="3px"
										width="100px" align="left">
									</a> <a href="/m_board?boardCode=bo2&page=10"> <img src="./resources/images/board.png"
										class="imagesHover" id="boardImage" alt="board" border="3px"
										width="100px" align="left">
									</a>


								</div>
								<!-- <div>
							<p class="topImagetext1">공지사항</p>
							<p class="topImagetext2">자유게시판</p>
							</div> -->



								<!-- .셀렉박스 -->
								<div class="basic_btnbx">
									<a href="#" class="basic_btn write" id="addArticle_btn"><span
										class="text">글쓰기</span></a>
								</div>


								<div class="tbl_basiclist">
									<table>
										<caption>자유게시판</caption>
										<colgroup>
											<col style="width: 13%;">
											<col style="width: 61%;">
											<col style="width: 13%;">
											<col style="width: 13%;">
										</colgroup>
										<thead>
											<tr id="contentTitle">
												<th scope="col">No</th>
												<th scope="col">제목</th>
												<th scope="col">작성자</th>
												<th scope="col">작성일</th>
												<th scope="col">조회수</th>
											</tr>
										</thead>
										<tbody id="articleList">
											<c:forEach items="${list}" var="articleVO">
												<tr>
													<!-- no -->
													<td>${articleVO.articleCode}</td>
													<!-- 제목 -->
													<td><a
														href='m_detailarticle${pageMaker.makeQuery(pageMaker.cri.page)}&articleCode=${articleVO.articleCode}&boardCode=bo2'>
															${articleVO.articleTitle}</a></td>

													<!-- 작성자 -->
													<td>${articleVO.memberNickname}</td>
													<!-- 작성일 -->
													<td>${articleVO.articleDate}</td>
													<!-- 조회수-->
													<td><span class="badge bg-red">${articleVO.articleHits }</span></td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
								<!-- .리스트 -->
								<!-- ` 버튼 -->
								<%-- <c:if test="${sessionScope.login != null}"> --%>

								<%-- </c:if> --%>


								<div class="pg_headbx align_c">
									<div class="basic_s_bx">
										<!-- 셀렉박스 -->
										<div class="basic_select_bx board_select_bx">
											<!-- <a class="textbx" href="#;">제목</a> -->
											<select style="width: 70px; height: 46px;" name="selectBox"
												id="selectBox">
												<option value="subject">제목</option>
												<option value="content">내용</option>
												<option value="author">작성자</option>
											</select>

											<!-- <ul class="select_ul">
										<li><a href="javascript:" data-value="subject">제목</a></li>
										<li><a href="javascript:" data-value="content">내용</a></li>
										<li><a href="javascript:" data-value="author">작성자</a></li>
									</ul>  -->
										</div>
										<!-- 서치박스 -->
										<div class="basic_search_bx">
											<form name="board_search" method="GET" id="search">
												<input type="hidden" id="boardCode" name="boardCode"
													value="${boardCode}"> <input type="hidden"
													id="searchWay" name="searchWay" value=""> <label
													for="pg_search">search</label> <input id="pg_search"
													type="text" name="keyword" class="text_input" value="">
											</form>
										</div>
										<div class="basic_btnbx">
											<a href="#" class="basic_btn search" id="btn2"><span
												class="text">검색</span></a>
										</div>



										<!-- .서치박스 -->
										<form name="write" action="/m_addarticle" method="GET"
											id="write">
											<input type="hidden" id="boardCode" name="boardCode"
												value="${boardCode}">
										</form>
									</div>
								</div>


								<!--. 글쓰기 버튼 -->
								<!-- 페이징 -->
								<form id="jobForm">
									<input type="hidden" name="page"
										value=${pageMaker.cri.page}> <input
										type="hidden" name="perPageNum"
										value=${pageMaker.cri.perPageNum}>
								</form>

								<div class="text-center">
									<ul class="pagination">
										<c:if test="${pageMaker.prev}">
											<li><a
												href="m_board?boardCode=${boardCode}&page=${pageMaker.startPage -1}">&laquo;</a></li>
										</c:if>

										<c:forEach begin="${pageMaker.startPage}"
											end="${pageMaker.endPage}" var="idx">
											<li
												<c:out value="${pagfeMaker.cri.page == idx?'class=active':''}"/>>
												<a href="m_board?boardCode=${boardCode}&page=${idx}">${idx}</a>


											</li>

										</c:forEach>


										<c:if test="${pageMaker.next && pageMaker.endPage>0}">
											<li><a
												href="m_board?boardCode=${boardCode}&page=${pageMaker.endPage+1}">&raquo;</a></li>
										</c:if>


									</ul>

								</div>


							</c:if>
							<!-- .컨텐츠 시작 -->
						</div>
						<!-- .entry-content -->
					</article>
					<!-- #post-## -->
				</div>
			</div>
		</div>
		<!-- .site-main -->
	</div>
	<!-- .content-area -->
</body>
</html>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
	jQuery(document).ready(function($) {
		/* 글쓰기 페이지 이동 */

		$(".write").on("click", function(e) {
			$("#write").submit();
		});

		/* 검색 */
		//$("#btn2").click(function() {
		var target = document.getElementById("selectBox");
		$("#searchWay").val(target.options[target.selectedIndex].value);
		var $form = $("#searchWay");
		$(".search").submit();
		$form.attr("action", "m_searchKeyAndWay");

		/* 상세보기  동적 폼 생성*/
		/* $('#articleList tr')
				.click(
						function() {
							
							
							var tr = $(this);
							var td = tr.children();
							var id = td.eq(0).text();
							// var boardCode = ${boardCode};
							var boardCode = "bo2";
							var $form = $('<form></form>');
							$form.attr('action',
									'/m_detailarticle');
							$form.attr('method', 'get');
							$form.appendTo('body');
							var articleCd = '<input type="hidden" name="articleCode" value="' + id + '" articleCode="$(articleCode}">';
							var boardCd = '<input type="hidden" name="boardCode" value="' + boardCode + '">';
							alert(boardCd);
							$form.append(articleCd);
							$form.append(boardCd);
							$form.submit();
						}); */

		$('#tb tr').on('click', ':checkbox', function(e) {
			e.stopPropagation();
		});

		/* 	$("ul").on("click", ".init", function() {
		$(this).closest("ul").children('li:not(.init)').slideDown();
		});


		var allOptions = $("ul").children('li:not(.init)');
		$("ul").on("click", "li:not(.init)", function() {
		allOptions.removeClass('selected');
		$(this).addClass('selected');
		$("ul").children('.init').html($(this).html());
		allOptions.slideUp();
		}); */

		/* alert("The selected Value is "+ $("ul").find(".selected").data("value")); */
		//});
		/* $("ul").on("click", ".init", function() {
		    $(this).closest("ul").children('li:not(.init)').slideDown();
		    
		});
		
		/* $("ul").on("click", "li:not(.init)", function() {
			var allOptions = $(".select_ul").children('li:not(.init)');
		    allOptions.removeClass('selected');
		    $(this).addClass('selected');
		    $("ul").children('.init').html($(this).html());
		     allOptions.slideUp();
		//}); */

		/* $("#btn2").click(function() {
			alert($(".select_ul").find(".selected").data("value")); */
		/*  alert("The selected Value is "+ $("ul").find(".selected").attr("data-value")); */
		//});
	});

	//function search(){

	/* var allOptions = $("ul").children('li:not(.init)');
	$("ul").on("click", "li:not(.init)", function() {
	    allOptions.removeClass('selected');
	    $(this).addClass('selected');
	    $("ul").children('.init').html($(this).html());
	    allOptions.slideUp();
	});
	
	
	$("#btn2").click(function() {
		$("ul").on("click", ".init", function() {
		    $(this).closest("ul").children('li:not(.init)').slideDown();
		});
		
	    alert("The selected Value is "+ $("ul").find(".selected").data("value"));
	}); */
	/* $("#select_ul").children().each(function(){
	    alert("1. $(this).text() : "+$(this).text()+", $(this).attr() : "+$(this).attr("value"));
	  }); */
	// var $searchForm = $('form[name="board_search"]');
	//console.log("1. $(this).text() : "+$(this).text()+", $(this).attr() : "+$(this).attr("value"));
	//if($searchForm.length){
	//			$searchForm.find('input[name="c"]').val($(this).data('value'));
	//	}
	//console.log($(this));
	//$(this).closest('ul').slideUp(200);
	//$(".content").var($(this).closest('.basic_select_bx').find('.textbx').text($(this).text()));
	//$(".search").submit();		 */	
	//	});
	$('#noticeImage').mouseover(function() {
		$('.topImagetext1').css("visibility", "visible");
	});

	$('#noticeImage').mouseout(function() {
		$('.topImagetext1').css("visibility", "hidden");
	});

	$('#boardImage').mouseover(function() {
		$('.topImagetext2').css("visibility", "visible");
	});

	$('#boardImage').mouseout(function() {
		$('.topImagetext2').css("visibility", "hidden");
	});
	

	$(".pagination li a").on("click", function(event){
		event.preventDefault();
		var targetPage = $(this).attr("href");
		var page = ${page};
		var jobForm=$("#jobForm");
		jobForm.find("[name='page']").val(targetPage);
		jobForm.attr("action","/m_board/boardCode=bo2&page="+"'"+${pageMaker.cri.page}+"'");
		jobForm.attr("method","get");
		jobForm.submit();
	});
	
	
</script>
