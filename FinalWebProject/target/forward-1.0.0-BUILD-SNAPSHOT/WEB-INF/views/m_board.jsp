<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko-KR"
	itemscope
	itemtype="http://schema.org/Article"
	prefix="og: http://ogp.me/ns#"  class="no-js">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="format-detection" content="telephone=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>
<title>SMASH</title>

<link rel='dns-prefetch' href='//code.jquery.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<style type="text/css">
img.wp-smiley,
img.emoji {
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
 
.contain{
	width: 100%;
	text-align:center;
} 
.footer_navbx{

}
.max_container > ul{
	padding: 0 0 0 40%;
}
</style>


<link rel='stylesheet' id='dashicons-css'  href='./css/dashicons.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='post-views-counter-frontend-css'  href='./css/frontend.css' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-fonts-css'  href='./css/css.css' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css'  href='./css/genericons.css' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-style-css'  href='./css/style.css' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-ui-css'  href='//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='unslider-css'  href='./css/unslider.css' type='text/css' media='all' />
<script type='text/javascript' src='./js/jquery.js'></script>
<script type='text/javascript' src='./js/jquery-migrate.min.js'></script>
<script type='text/javascript' src='//code.jquery.com/ui/1.11.4/jquery-ui.min.js'></script>
<script type='text/javascript' src='./css/unslider.js'></script>
<link rel="alternate" type="application/json+oembed" href="./json/embed.json" />
<link rel="alternate" type="text/xml+oembed" href="./json/embed.json" />
		<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
	<link rel="stylesheet" href="http://gangwon-fc.com/wp-content/themes/gangwonfc/css/template.css?20170607" type="text/css" media="all">
	<link rel="stylesheet" href="./css/metabrain-editor.css" type="text/css" media="all">
	<script type="text/javascript" src="./js/common.js"></script>
</head>

<body style="background:white;">
<div id="masthead" class="site-header" role="banner"><!-- site-header-menu 영역 호버시 nav_on 클래스 적용   .search_btn 클릭시 search_on 클래스 적용-->
			<div class="hover_bg"></div>
			<!-- 서치박스 -->
			<div class="head_searchbx">
				<div class="max_container">
					<label for="head_search">검색</label>
					<div class="search_anibx">
						<input type="text" class="textbx" id="head_search" placeholder="검색어를 입력해주세요.">
						<input type="submit" class="submitbx" value="검색하기">
						<a href="#;" class="close_btn">close</a>
					</div>
				</div>
			</div>
			<!-- 서치박스 -->
			<!-- 상단헤더 -->
			<div class="top_headbx">
				<div class="max_container">
					<!-- SNS -->
					<div class="head_sns_bx">
						<ul>
							<li class="instargram"><a href="https://www.instagram.com/" target="_blank">instargram</a></li>
							<li class="facebook"><a href="https://www.facebook.com/" target="_blank">facebook</a></li>
							<li class="youtube"><a href="http://www.youtube.com/" target="_blank">youtube</a></li>
						</ul>
					</div>
					<!-- .SNS -->
					<!-- 링크박스 -->
					<div class="head_linkbx"><!-- 사이트맵 클릭시 active 클래스 적용 -->
						<ul>
							<li><a href="login.jsp">LOGIN</a></li>
							<li><a href="signup.jsp">JOIN</a></li>
						</ul>
					</div>
					<!-- .링크박스 -->
					<!-- 서치버튼 -->
					<!--<div class="search_btn"><a class="search_item" href="#;">검색하기</a></div>-->
					<!-- .서치버튼 -->
				</div>
			</div>
			<!-- .상단헤더 -->
			<!-- 하단헤더 -->
			<div class="nav_headbx">
				<div class="max_container">
					<div id="site-header-menu" class="site-header-menu">
						<nav id="site-navigation" class="main-navigation" role="navigation" aria-label="기본 메뉴">
							<div class="menu-main_nav-container">
							<ul id="menu-main_nav-1" class="primary-menu">
							<li class="nav_greatu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-91">
							<a href="index.jsp">Home</a>
							<ul class="sub-menu">
								<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"><a href="noticeboard.jsp">공지사항</a></li>
								<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95"><a href="article.do?job=articleListPerBoard&boardCode=bo1">자유게시판</a>
									<ul class="sub-menu">
										<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7014"><a href="#">Q&#038;A</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="nav_about menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1167"><a href="#">Smash</a>
						<ul class="sub-menu">
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"><a href="#">Smash 소개</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-99"><a href="#">Smash 이용 방법</a>
						<ul class="sub-menu">
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7020"><a href="#">연혁</a></li>
	</ul>
</li>
</li>
</ul>
</li>
<li class="nav_athlete menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-103"><a href="#">축구</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">매칭 게시판</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">축구 게시판</a></li>
</ul>
</li>
<li class="nav_match menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-105"><a href="#">야구</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">매칭 게시판</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">야구 게시판</a></li>
</ul>
</li>
<li class="nav_media menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-110"><a href="#">배드민턴</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">매칭 게시판</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">배드민턴 게시판</a></li>
</ul>
</li>
<li class="nav_youth menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-114"><a href="#">농구</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">매칭 게시판</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">농구 게시판</a></li>
</ul>
</li>
<li class="nav_management menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-119"><a href="#">e-Sports</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">매칭 게시판</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22305"><a href="#">e-Sports 게시판</a></li>
</ul>
</li>
<li class="nav_quick menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1161"><a href="#;">Quick Menu</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-123"><a target="_blank" href="#">고객센터</a></li>
</ul>
</li>
</ul></div>								</nav><!-- .main-navigation -->
													</div><!-- .site-header-menu -->
				</div>
			</div>
			<!-- .하단헤더 -->
		</div>
		<div class="pg_topbannerbx">
	<div class="bg"></div>
	<div class="max_container">
		<!-- 타이틀 박스 -->
		<div class="title_bx">
			<h2 class="entry-title">자유게시판</h2>
						<!-- 빵가루 -->
			<div class="breadcrumb">
				<ul>
					<li class="home"><a class="item" href="index.jsp">home</a></li>						
					<li><a class="item" href="article.do?job=articleListPerBoard&boardCode=bo1">자유게시판</a></li>						
				</ul>
			</div>
			<!-- .빵가루 -->
		</div>
		<!-- .타이틀 박스 -->
	</div>
</div>
<!-- .헤더 -->
<div id="primary" class="content-area">
	<div id="main" class="site-main" role="main">
		<div class="content_rowbx">
			<div class="max_container">
				<article id="post-42" class="post-42 page type-page status-publish hentry">
					<div class="entry-content">
						<!-- 컨텐츠 시작 -->
						<!-- 셀렉박스 -->
						<div class="pg_headbx align_c m_top">
							<div class="tabbx tabrow50">
								<ul>
									<li><a href="noticeboard.jsp;" data-tab-link="#">공지사항</a></li>
									<li class="active"><a href="article.do?job=articleListPerBoard&boardCode=bo1" data-tab-link="#">자유게시판</a></li>
								</ul>
							</div>
						</div>
						
						<div class="pg_headbx align_c">
							<div class="basic_s_bx">
								<!-- 셀렉박스 -->
								<div class="basic_select_bx board_select_bx">
									<a class="textbx" href="#;">제목</a>
									<ul class="select_ul">
										<li><a href="javascript:" data-value="subject">제목</a></li>
										<li><a href="javascript:" data-value="content">내용</a></li>
										<li><a href="javascript:" data-value="author">작성자</a></li>
									</ul>
								</div>
								<!-- 서치박스 -->
								<div class="basic_search_bx">
									<form name="board_search">
										<input type="hidden" name="job" value="searchArticle">
										<label for="pg_search">search</label>
										<input id="pg_search" type="text" name="q" class="text_input" value="">
										<input type="submit" class="submit_input" value="검색" >
									</form>
								</div>
								<!-- .서치박스 -->
							</div>
						</div>
						<!-- .셀렉박스 -->
				
						<!-- 리스트 -->
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
							<tbody>
								<c:forEach items="${articles}" var="articleVO">
									<tr>
										<td>${articleVO.articleNum}</td>
										<td><a href='/board/bno=${articleVO.articleCode}'>${articleVO.articleTitle}</a></td>
										<td>${articleVO.memberNickname}</td>
										<td><%-- <fmt:formatDate pattern="yyyy-MM-dd HH:mm" --%>
												<!-- value=" -->${articleVO.articleDate}<!-- " --> /></td>
										<td><span class="badge bg-red">${articleVO.articleHits }</span></td>
									</tr>
								</c:forEach>
							</tbody>
					</table>
				</div>
				<!-- .리스트 -->
								<!-- 글쓰기 버튼 -->
				<div class="basic_btnbx">
					<a href="m_writeaticle.jsp" class="basic_btn"><span class="text">글쓰기</span></a>
				</div>
				<!--. 글쓰기 버튼 -->
				<!-- 페이징 -->
				<div class="paging">
					<ul data-current-paged="1">
						<li class="active"><a href="#!" class="item">1</a></li>
						<li><a href="#" data-paged="2" class="item">2</a></li>
						<li><a href="#" data-paged="3" class="item">3</a></li>
						<li><a href="#" data-paged="5" class="item">5</a></li>
						<li><a href="#" data-paged="6" class="item">6</a></li>
						<li><a href="#" data-paged="7" class="item">7</a></li>
						<li><a href="#" data-paged="8" class="item">8</a></li>
						<li><a href="#" data-paged="9" class="item">9</a></li>
						<li><a href="#" data-paged="10" class="item">10</a></li>
						<li class="next_btn">
						<a href="#" data-paged="11" class="item">next</a></li>
						<li class="last_btn">
						<a href="#" class="item">last</a></li></ul></div>
				<!-- .페이징 -->
				<!-- .컨텐츠 시작 -->
			</div><!-- .entry-content -->
		</article><!-- #post-## -->
	</div>
</div>
</div><!-- .site-main -->
</div><!-- .content-area -->
</body>
</html>