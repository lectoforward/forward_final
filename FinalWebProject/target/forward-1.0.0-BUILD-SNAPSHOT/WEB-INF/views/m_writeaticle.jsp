<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko-KR">
<head>
<title></title>

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

.max_container > ul{
	padding: 0 0 0 40%;
}
.top{
	padding: 0 0 0 87%;
}
</style>
<link rel='stylesheet' id='dashicons-css'  href='./css/dashicons.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='post-views-counter-frontend-css'  href='./css/frontend.css?ver=4.7.3' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-fonts-css'  href='https://fonts.googleapis.com/css?family=Montserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css'  href='./css/genericons.css' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-style-css'  href='http://gangwon-fc.com/wp-content/themes/gangwonfc/style.css?ver=4.7.3' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-ui-css'  href='//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='unslider-css'  href='./css/unslider.css' type='text/css' media='all' />
<link rel='stylesheet' id='metabrain-editor-custom-css-css'  href='./css/custom-editor.css' type='text/css' media='all' />
<script type='text/javascript' src='./js/jquery.js'></script>
<script type='text/javascript' src='./js/jquery-migrate.min.js'></script>
<script type='text/javascript' src='//code.jquery.com/ui/1.11.4/jquery-ui.min.js'></script>
<script type='text/javascript' src='./js/unslider.js'></script>
<script type='text/javascript' src='./js/rangy-core.js'></script>
<script type='text/javascript' src='./js/metabrain-editor-0.1.1.js'></script>
<script type='text/javascript' src='./js/custom.js'></script>
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
<link rel="stylesheet" href="http://gangwon-fc.com/wp-content/themes/gangwonfc/css/template.css?20170607" type="text/css" media="all">
<link rel="stylesheet" href="http://gangwon-fc.com/wp-content/themes/gangwonfc/metabrain-editor/css/metabrain-editor.css" type="text/css" media="all">
<script type="text/javascript" src="./js/common.js"></script>
</head>

<body class="page-template page-template-templates page-template-board-write page-template-templatesboard-write-php page page-id-298 logged-in group-blog write_edit">
<div class="site_wrap">
<div id="page" class="site">
	<div class="mobile_nav_onbg"></div>
	<div class="site-inner">
		<!-- 헤더 -->
		<div id="masthead" class="site-header" role="banner">
			<div class="hover_bg"></div>
			<h1 class="logo"><a href="#"><img src="" alt="" /></a></h1>
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
			<!-- .서치박스 -->
			<!-- 상단헤더 -->
			<div class="top_headbx">
				<div class="max_container">
					<!-- 모바일 메뉴버튼 -->
					<button class="m_menubox">
						<span class="bar first"></span>
						<span class="bar center"></span>
						<span class="bar last"></span>
					</button>
					<!-- .모바일 메뉴버튼 -->
					<!-- SNS -->
					<div class="head_sns_bx">
						<ul>
							<li class="instargram"><a href="https://www.instagram.com/">instargram</a></li>
							<li class="facebook"><a href="https://www.facebook.com/" target="_blank">facebook</a></li>
							<li class="youtube"><a href="http://www.youtube.com/" target="_blank">youtube</a></li>
						</ul>
					</div>
					<!-- .SNS -->
					<!-- 링크박스 -->
					<div class="head_linkbx"><!-- 사이트맵 클릭시 active 클래스 적용 -->
						<ul>
														<li><a href="#">LOGOUT</a></li>
							<li><a href="#">MY PAGE</a></li>
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
								<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"><a href="#">공지사항</a></li>
								<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-95"><a href="freeboard.jsp">자유게시판</a>
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
</ul>
</div>
</nav><!-- .main-navigation -->
</div><!-- .site-header-menu -->						
</div>
			</div>
			<!-- .하단헤더 -->
		</div>
		<!-- .헤더 -->
		<div id="content" class="site-content">
<!-- 상단배너 -->

<div class="pg_topbannerbx">
	<div class="bg"></div>
	<div class="max_container">
		<!-- 타이틀 박스 -->
		<div class="title_bx">
			<h2 class="entry-title">글쓰기</h2>
						<!-- 빵가루 -->
			<div class="breadcrumb">
				<ul>
					<li class="home"><a class="item" href="index.jsp">home</a></li>						
					<li><a class="item" href="">home</a></li>						
				</ul>
			</div>
			<!-- .빵가루 -->
					</div>
		<!-- .타이틀 박스 -->
	</div>
</div>
<!-- .상단배너 -->
<div id="primary" class="content-area">
	<div id="main" class="site-main" role="main">
		<div class="content_rowbx">
			<div class="max_container">
				
				<article id="post-298" class="post-298 page type-page status-publish hentry">



					<div class="entry-content">
						<!-- 컨텐츠 시작 -->
						<!-- 싱글페이지 -->
						<!--  데이터  -->
						<div class="single_pgbx single_edit">
							<form action="article.do" method="POST"  id="form_write">
								<input type="hidden" name="job" value="articleAdd">
								<input type="hidden" name="userId" value="${sessionScope.id }" />
								<input type="hidden" name="boardCode" value="bo1" />
								<input type="hidden" name="notice" value="false">
								<input type="hidden" name="articleHits" value="0">
								<!--<input type="hidden" name="write_nonce" value="1fe20652f2"/>
								<input type="hidden" name="status" value="publish">
								<input type="hidden" name="category" value="14">
								<input type="hidden" name="action" value="write_board"> -->
						<!--  데이터  -->

								<!--  싱글페이지 헤더 -->
								<div class="single_headbx two" >
									<div class="single_tblbx">
										<div class="title_bx"><input type="text" name="articleTitle" class="single_edit_title" placeholder="제목을 입력해주세요." value=""></div>
									</div>
								</div>
								<!--  .싱글페이지 헤더-->
								<!-- 싱글컨텐츠 -->
								<div class="single_contbx">
									<div class="single_container">
										<div class="meta_editbx"><!-- 사이드 뷰박스 클릭시 fix_view 클래스 추가 -->
											<!-- contentbx -->
											<div class="cont_edit_bx" id="content_editor"></div>
											<textarea name="articleContent" style="display:none"></textarea>
											<!-- .contentbx -->
										</div>
									</div>
								</div>
								<!-- .싱글컨텐츠 -->
								<!-- 목록버튼 -->
								<div class="basic_btnbx">
									<a class="basic_btn btn_save"><span class="text">글등록</span></a>
								</div>
								<!-- .목록버튼 -->
							</form>
						</div>
						<!-- .싱글페이지 -->
						<!-- .컨텐츠 시작 -->
					</div><!-- .entry-content -->


				</article><!-- #post-## -->
			</div>
		</div>
	</div><!-- .site-main -->
</div>


<script type="text/javascript">
jQuery(document).ready(function($){
	$("#form_write .btn_save").on("click", function(e){
		$("#form_write").trigger('submit');
	});


	$('#form_write').submit(function(e){
		var $form = $(this);
		var content = $form.find('#content_editor').text();
		$form.find('textarea[name="articleContent"]').val(content); // articleContent를 content로 set

		$.ajax({
			url: $form.attr('action'),
			type: 'POST',
			data: $form.serialize(),
			success: function(data){;}
		});
 
		e.stopPropagation();
		e.preventDefault();
	}); 
});	
</script>


		</div><!-- .site-content -->

		<div id="colophon" class="site-footer" role="contentinfo">
				<!-- 푸터네비게이션 -->
			<div class="footer_navbx">
				<div class="max_container">
					<ul>
						<li><a href="/privacy-policy/">개인정보처리방침</a></li>
						<li><a href="/terms-of-use/">이용약관</a></li>
						<li><a href="/unauthorized-collection-of-e-mail/">이메일무단수집거부</a></li>
					</ul>
				</div>
			</div>
			<!-- .푸터네비게이션 -->
					<!-- 푸터컨텐츠 -->
			<div class="footer_contbx">
				<div class="max_container contain">
					<h2 class="footer_logo"><a href="#"><img src="" alt="" /></a></h2>
					<div class="cont">
						<div class="`_infobx">
							<span class="item">사무실 : 서울 관악구 관악로24길 14 렉토피아</span>
							<span class="item">TEL 070-1234-5678</span>
						</div>
						<p class="copyright">Copyright 2018 <span class="color">©Fourward</span> ALL RIGHTS RESERVED. </p>
					</div>
				</div>
			</div>
			<!-- .푸터컨텐츠 -->
		</div><!-- .site-footer -->
	</div><!-- .site-inner -->
</div><!-- .site -->
	<!--[if lte IE 8]>
	<style>
		.attachment:focus {
			outline: #1e8cbe solid;
		}
		.selected.attachment {
			outline: #1e8cbe solid;
		}
	</style>
	<![endif]-->

	
	<script type="text/html" id="tmpl-media-frame">
		<div class="media-frame-menu"></div>
		<div class="media-frame-title"></div>
		<div class="media-frame-router"></div>
		<div class="media-frame-content"></div>
		<div class="media-frame-toolbar"></div>
		<div class="media-frame-uploader"></div>
	</script>

	<script type="text/html" id="tmpl-media-modal">
		<div class="media-modal wp-core-ui">
			<button type="button" class="button-link media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">미디어 패널 닫기</span></span></button>
			<div class="media-modal-content"></div>
		</div>
		<div class="media-modal-backdrop"></div>
	</script>

	<script type="text/html" id="tmpl-uploader-window">
		<div class="uploader-window-content">
			<h1>업로드 하려면 파일을 놓으세요</h1>
		</div>
	</script>

	<script type="text/html" id="tmpl-uploader-editor">
		<div class="uploader-editor-content">
			<div class="uploader-editor-title">업로드 하려면 파일을 놓으세요</div>
		</div>
	</script>

	<script type="text/html" id="tmpl-uploader-inline">
		<# var messageClass = data.message ? 'has-upload-message' : 'no-upload-message'; #>
		<# if ( data.canClose ) { #>
		<button class="close dashicons dashicons-no"><span class="screen-reader-text">업로더 닫기</span></button>
		<# } #>
		<div class="uploader-inline-content {{ messageClass }}">
		<# if ( data.message ) { #>
			<h2 class="upload-message">{{ data.message }}</h2>
		<# } #>
					<div class="upload-ui">
				<h2 class="upload-instructions drop-instructions">업로드 하려면 아무 곳에나 파일을 놓으세요</h2>
				<p class="upload-instructions drop-instructions">또는</p>
				<button type="button" class="browser button button-hero">파일을 선택하세요</button>
			</div>

			<div class="upload-inline-status"></div>

			<div class="post-upload-ui">
				
				<p class="max-upload-size">최대 업로드 파일 크기: 80 MB.</p>

				<# if ( data.suggestedWidth && data.suggestedHeight ) { #>
					<p class="suggested-dimensions">
						제안된 이미지 크기: {{data.suggestedWidth}} &times; {{data.suggestedHeight}}
					</p>
				<# } #>

							</div>
				</div>
	</script>

	<script type="text/html" id="tmpl-media-library-view-switcher">
		<a href="/category/free-board/board-write/?mode=list" class="view-list">
			<span class="screen-reader-text">목록 보기</span>
		</a>
		<a href="/category/free-board/board-write/?mode=grid" class="view-grid current">
			<span class="screen-reader-text">그리드 보기</span>
		</a>
	</script>

	<script type="text/html" id="tmpl-uploader-status">
		<h2>업로드</h2>
		<button type="button" class="button-link upload-dismiss-errors"><span class="screen-reader-text">에러 무시하기</span></button>

		<div class="media-progress-bar"><div></div></div>
		<div class="upload-details">
			<span class="upload-count">
				<span class="upload-index"></span> / <span class="upload-total"></span>
			</span>
			<span class="upload-detail-separator">&ndash;</span>
			<span class="upload-filename"></span>
		</div>
		<div class="upload-errors"></div>
	</script>

	<script type="text/html" id="tmpl-uploader-status-error">
		<span class="upload-error-filename">{{{ data.filename }}}</span>
		<span class="upload-error-message">{{ data.message }}</span>
	</script>

	<script type="text/html" id="tmpl-edit-attachment-frame">
		<div class="edit-media-header">
			<button class="left dashicons <# if ( ! data.hasPrevious ) { #> disabled <# } #>"><span class="screen-reader-text">이전 미디어 아이템 편집</span></button>
			<button class="right dashicons <# if ( ! data.hasNext ) { #> disabled <# } #>"><span class="screen-reader-text">다음 미디어 아이템 편집</span></button>
		</div>
		<div class="media-frame-title"></div>
		<div class="media-frame-content"></div>
	</script>

	<script type="text/html" id="tmpl-attachment-details-two-column">
		<div class="attachment-media-view {{ data.orientation }}">
			<div class="thumbnail thumbnail-{{ data.type }}">
				<# if ( data.uploading ) { #>
					<div class="media-progress-bar"><div></div></div>
				<# } else if ( data.sizes && data.sizes.large ) { #>
					<img class="details-image" src="{{ data.sizes.large.url }}" draggable="false" alt="" />
				<# } else if ( data.sizes && data.sizes.full ) { #>
					<img class="details-image" src="{{ data.sizes.full.url }}" draggable="false" alt="" />
				<# } else if ( -1 === jQuery.inArray( data.type, [ 'audio', 'video' ] ) ) { #>
					<img class="details-image icon" src="{{ data.icon }}" draggable="false" alt="" />
				<# } #>

				<# if ( 'audio' === data.type ) { #>
				<div class="wp-media-wrapper">
					<audio style="visibility: hidden" controls class="wp-audio-shortcode" width="100%" preload="none">
						<source type="{{ data.mime }}" src="{{ data.url }}"/>
					</audio>
				</div>
				<# } else if ( 'video' === data.type ) {
					var w_rule = '';
					if ( data.width ) {
						w_rule = 'width: ' + data.width + 'px;';
					} else if ( wp.media.view.settings.contentWidth ) {
						w_rule = 'width: ' + wp.media.view.settings.contentWidth + 'px;';
					}
				#>
				<div style="{{ w_rule }}" class="wp-media-wrapper wp-video">
					<video controls="controls" class="wp-video-shortcode" preload="metadata"
						<# if ( data.width ) { #>width="{{ data.width }}"<# } #>
						<# if ( data.height ) { #>height="{{ data.height }}"<# } #>
						<# if ( data.image && data.image.src !== data.icon ) { #>poster="{{ data.image.src }}"<# } #>>
						<source type="{{ data.mime }}" src="{{ data.url }}"/>
					</video>
				</div>
				<# } #>

				<div class="attachment-actions">
					<# if ( 'image' === data.type && ! data.uploading && data.sizes && data.can.save ) { #>
					<button type="button" class="button edit-attachment">이미지 편집</button>
					<# } else if ( 'pdf' === data.subtype && data.sizes ) { #>
					문서 미리보기					<# } #>
				</div>
			</div>
		</div>
		<div class="attachment-info">
			<span class="settings-save-status">
				<span class="spinner"></span>
				<span class="saved">저장함.</span>
			</span>
			<div class="details">
				<div class="filename"><strong>파일 이름:</strong> {{ data.filename }}</div>
				<div class="filename"><strong>파일 형식:</strong> {{ data.mime }}</div>
				<div class="uploaded"><strong>업로드 장소:</strong> {{ data.dateFormatted }}</div>

				<div class="file-size"><strong>파일 크기:</strong> {{ data.filesizeHumanReadable }}</div>
				<# if ( 'image' === data.type && ! data.uploading ) { #>
					<# if ( data.width && data.height ) { #>
						<div class="dimensions"><strong>규격:</strong> {{ data.width }} &times; {{ data.height }}</div>
					<# } #>
				<# } #>

				<# if ( data.fileLength ) { #>
					<div class="file-length"><strong>길이:</strong> {{ data.fileLength }}</div>
				<# } #>

				<# if ( 'audio' === data.type && data.meta.bitrate ) { #>
					<div class="bitrate">
						<strong>비트레이트:</strong> {{ Math.round( data.meta.bitrate / 1000 ) }}kb/s
						<# if ( data.meta.bitrate_mode ) { #>
						{{ ' ' + data.meta.bitrate_mode.toUpperCase() }}
						<# } #>
					</div>
				<# } #>

				<div class="compat-meta">
					<# if ( data.compat && data.compat.meta ) { #>
						{{{ data.compat.meta }}}
					<# } #>
				</div>
			</div>

			<div class="settings">
				<label class="setting" data-setting="url">
					<span class="name">URL</span>
					<input type="text" value="{{ data.url }}" readonly />
				</label>
				<# var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly'; #>
								<label class="setting" data-setting="title">
					<span class="name">타이틀</span>
					<input type="text" value="{{ data.title }}" {{ maybeReadOnly }} />
				</label>
								<# if ( 'audio' === data.type ) { #>
								<label class="setting" data-setting="artist">
					<span class="name">아티스트</span>
					<input type="text" value="{{ data.artist || data.meta.artist || '' }}" />
				</label>
								<label class="setting" data-setting="album">
					<span class="name">앨범</span>
					<input type="text" value="{{ data.album || data.meta.album || '' }}" />
				</label>
								<# } #>
				<label class="setting" data-setting="caption">
					<span class="name">캡션</span>
					<textarea {{ maybeReadOnly }}>{{ data.caption }}</textarea>
				</label>
				<# if ( 'image' === data.type ) { #>
					<label class="setting" data-setting="alt">
						<span class="name">대체 텍스트</span>
						<input type="text" value="{{ data.alt }}" {{ maybeReadOnly }} />
					</label>
				<# } #>
				<label class="setting" data-setting="description">
					<span class="name">설명</span>
					<textarea {{ maybeReadOnly }}>{{ data.description }}</textarea>
				</label>
				<label class="setting">
					<span class="name">업로드한 사람</span>
					<span class="value">{{ data.authorName }}</span>
				</label>
				<# if ( data.uploadedToTitle ) { #>
					<label class="setting">
						<span class="name">업로드 글</span>
						<# if ( data.uploadedToLink ) { #>
							<span class="value"><a href="{{ data.uploadedToLink }}">{{ data.uploadedToTitle }}</a></span>
						<# } else { #>
							<span class="value">{{ data.uploadedToTitle }}</span>
						<# } #>
					</label>
				<# } #>
				<div class="attachment-compat"></div>
			</div>

			<div class="actions">
				<a class="view-attachment" href="{{ data.link }}">첨부 페이지 보기</a>
				<# if ( data.can.save ) { #> |
					<a href="post.php?post={{ data.id }}&action=edit">더 많은 상세 편집</a>
				<# } #>
				<# if ( ! data.uploading && data.can.remove ) { #> |
											<button type="button" class="button-link delete-attachment">영구적으로 삭제하기</button>
									<# } #>
			</div>

		</div>
	</script>

	<script type="text/html" id="tmpl-attachment">
		<div class="attachment-preview js--select-attachment type-{{ data.type }} subtype-{{ data.subtype }} {{ data.orientation }}">
			<div class="thumbnail">
				<# if ( data.uploading ) { #>
					<div class="media-progress-bar"><div style="width: {{ data.percent }}%"></div></div>
				<# } else if ( 'image' === data.type && data.sizes ) { #>
					<div class="centered">
						<img src="{{ data.size.url }}" draggable="false" alt="" />
					</div>
				<# } else { #>
					<div class="centered">
						<# if ( data.image && data.image.src && data.image.src !== data.icon ) { #>
							<img src="{{ data.image.src }}" class="thumbnail" draggable="false" alt="" />
						<# } else if ( data.sizes && data.sizes.medium ) { #>
							<img src="{{ data.sizes.medium.url }}" class="thumbnail" draggable="false" alt="" />
						<# } else { #>
							<img src="{{ data.icon }}" class="icon" draggable="false" alt="" />
						<# } #>
					</div>
					<div class="filename">
						<div>{{ data.filename }}</div>
					</div>
				<# } #>
			</div>
			<# if ( data.buttons.close ) { #>
				<button type="button" class="button-link attachment-close media-modal-icon"><span class="screen-reader-text">삭제</span></button>
			<# } #>
		</div>
		<# if ( data.buttons.check ) { #>
			<button type="button" class="button-link check" tabindex="-1"><span class="media-modal-icon"></span><span class="screen-reader-text">선택 해제</span></button>
		<# } #>
		<#
		var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly';
		if ( data.describe ) {
			if ( 'image' === data.type ) { #>
				<input type="text" value="{{ data.caption }}" class="describe" data-setting="caption"
					placeholder="이 이미지에 캡션&hellip;" {{ maybeReadOnly }} />
			<# } else { #>
				<input type="text" value="{{ data.title }}" class="describe" data-setting="title"
					<# if ( 'video' === data.type ) { #>
						placeholder="이 비디오에 대한 설명&hellip;"
					<# } else if ( 'audio' === data.type ) { #>
						placeholder="이 오디오 파일에 대한 설명&hellip;"
					<# } else { #>
						placeholder="이 미디어 파일에 대한 설명&hellip;"
					<# } #> {{ maybeReadOnly }} />
			<# }
		} #>
	</script>

	<script type="text/html" id="tmpl-attachment-details">
		<h2>
			첨부 상세			<span class="settings-save-status">
				<span class="spinner"></span>
				<span class="saved">저장함.</span>
			</span>
		</h2>
		<div class="attachment-info">
			<div class="thumbnail thumbnail-{{ data.type }}">
				<# if ( data.uploading ) { #>
					<div class="media-progress-bar"><div></div></div>
				<# } else if ( 'image' === data.type && data.sizes ) { #>
					<img src="{{ data.size.url }}" draggable="false" alt="" />
				<# } else { #>
					<img src="{{ data.icon }}" class="icon" draggable="false" alt="" />
				<# } #>
			</div>
			<div class="details">
				<div class="filename">{{ data.filename }}</div>
				<div class="uploaded">{{ data.dateFormatted }}</div>

				<div class="file-size">{{ data.filesizeHumanReadable }}</div>
				<# if ( 'image' === data.type && ! data.uploading ) { #>
					<# if ( data.width && data.height ) { #>
						<div class="dimensions">{{ data.width }} &times; {{ data.height }}</div>
					<# } #>

					<# if ( data.can.save && data.sizes ) { #>
						<a class="edit-attachment" href="{{ data.editLink }}&amp;image-editor" target="_blank">이미지 편집</a>
					<# } #>
				<# } #>

				<# if ( data.fileLength ) { #>
					<div class="file-length">길이: {{ data.fileLength }}</div>
				<# } #>

				<# if ( ! data.uploading && data.can.remove ) { #>
											<button type="button" class="button-link delete-attachment">영구적으로 삭제하기</button>
									<# } #>

				<div class="compat-meta">
					<# if ( data.compat && data.compat.meta ) { #>
						{{{ data.compat.meta }}}
					<# } #>
				</div>
			</div>
		</div>

		<label class="setting" data-setting="url">
			<span class="name">URL</span>
			<input type="text" value="{{ data.url }}" readonly />
		</label>
		<# var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly'; #>
				<label class="setting" data-setting="title">
			<span class="name">타이틀</span>
			<input type="text" value="{{ data.title }}" {{ maybeReadOnly }} />
		</label>
				<# if ( 'audio' === data.type ) { #>
				<label class="setting" data-setting="artist">
			<span class="name">아티스트</span>
			<input type="text" value="{{ data.artist || data.meta.artist || '' }}" />
		</label>
				<label class="setting" data-setting="album">
			<span class="name">앨범</span>
			<input type="text" value="{{ data.album || data.meta.album || '' }}" />
		</label>
				<# } #>
		<label class="setting" data-setting="caption">
			<span class="name">캡션</span>
			<textarea {{ maybeReadOnly }}>{{ data.caption }}</textarea>
		</label>
		<# if ( 'image' === data.type ) { #>
			<label class="setting" data-setting="alt">
				<span class="name">대체 텍스트</span>
				<input type="text" value="{{ data.alt }}" {{ maybeReadOnly }} />
			</label>
		<# } #>
		<label class="setting" data-setting="description">
			<span class="name">설명</span>
			<textarea {{ maybeReadOnly }}>{{ data.description }}</textarea>
		</label>
	</script>

	<script type="text/html" id="tmpl-media-selection">
		<div class="selection-info">
			<span class="count"></span>
			<# if ( data.editable ) { #>
				<button type="button" class="button-link edit-selection">선택 편집하기</button>
			<# } #>
			<# if ( data.clearable ) { #>
				<button type="button" class="button-link clear-selection">지우기</button>
			<# } #>
		</div>
		<div class="selection-view"></div>
	</script>

	<script type="text/html" id="tmpl-attachment-display-settings">
		<h2>첨부 표시 설정</h2>

		<# if ( 'image' === data.type ) { #>
			<label class="setting">
				<span>정렬</span>
				<select class="alignment"
					data-setting="align"
					<# if ( data.userSettings ) { #>
						data-user-setting="align"
					<# } #>>

					<option value="left">
						왼쪽					</option>
					<option value="center">
						중앙					</option>
					<option value="right">
						오른쪽					</option>
					<option value="none" selected>
						없음					</option>
				</select>
			</label>
		<# } #>

		<div class="setting">
			<label>
				<# if ( data.model.canEmbed ) { #>
					<span>임베드 또는 링크</span>
				<# } else { #>
					<span>연결</span>
				<# } #>

				<select class="link-to"
					data-setting="link"
					<# if ( data.userSettings && ! data.model.canEmbed ) { #>
						data-user-setting="urlbutton"
					<# } #>>

				<# if ( data.model.canEmbed ) { #>
					<option value="embed" selected>
						미디어 플레이어 임베드					</option>
					<option value="file">
				<# } else { #>
					<option value="none" selected>
						없음					</option>
					<option value="file">
				<# } #>
					<# if ( data.model.canEmbed ) { #>
						미디어 파일 링크					<# } else { #>
						미디어 파일					<# } #>
					</option>
					<option value="post">
					<# if ( data.model.canEmbed ) { #>
						첨부 페이지 링크					<# } else { #>
						첨부 페이지					<# } #>
					</option>
				<# if ( 'image' === data.type ) { #>
					<option value="custom">
						사용자 정의 URL					</option>
				<# } #>
				</select>
			</label>
			<input type="text" class="link-to-custom" data-setting="linkUrl" />
		</div>

		<# if ( 'undefined' !== typeof data.sizes ) { #>
			<label class="setting">
				<span>크기</span>
				<select class="size" name="size"
					data-setting="size"
					<# if ( data.userSettings ) { #>
						data-user-setting="imgsize"
					<# } #>>
											<#
						var size = data.sizes['thumbnail'];
						if ( size ) { #>
							<option value="thumbnail" >
								작은 사진(썸네일) &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['medium'];
						if ( size ) { #>
							<option value="medium" >
								보통 &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['large'];
						if ( size ) { #>
							<option value="large" >
								최대 크기 &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['full'];
						if ( size ) { #>
							<option value="full"  selected='selected'>
								전체 크기 &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
									</select>
			</label>
		<# } #>
	</script>

	<script type="text/html" id="tmpl-gallery-settings">
		<h2>갤러리 설정</h2>

		<label class="setting">
			<span>연결</span>
			<select class="link-to"
				data-setting="link"
				<# if ( data.userSettings ) { #>
					data-user-setting="urlbutton"
				<# } #>>

				<option value="post" <# if ( ! wp.media.galleryDefaults.link || 'post' == wp.media.galleryDefaults.link ) {
					#>selected="selected"<# }
				#>>
					첨부 페이지				</option>
				<option value="file" <# if ( 'file' == wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
					미디어 파일				</option>
				<option value="none" <# if ( 'none' == wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
					없음				</option>
			</select>
		</label>

		<label class="setting">
			<span>열(컬럼)</span>
			<select class="columns" name="columns"
				data-setting="columns">
									<option value="1" <#
						if ( 1 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						1					</option>
									<option value="2" <#
						if ( 2 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						2					</option>
									<option value="3" <#
						if ( 3 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						3					</option>
									<option value="4" <#
						if ( 4 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						4					</option>
									<option value="5" <#
						if ( 5 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						5					</option>
									<option value="6" <#
						if ( 6 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						6					</option>
									<option value="7" <#
						if ( 7 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						7					</option>
									<option value="8" <#
						if ( 8 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						8					</option>
									<option value="9" <#
						if ( 9 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						9					</option>
							</select>
		</label>

		<label class="setting">
			<span>랜덤 순서</span>
			<input type="checkbox" data-setting="_orderbyRandom" />
		</label>

		<label class="setting size">
			<span>크기</span>
			<select class="size" name="size"
				data-setting="size"
				<# if ( data.userSettings ) { #>
					data-user-setting="imgsize"
				<# } #>
				>
									<option value="thumbnail">
						작은 사진(썸네일)					</option>
									<option value="medium">
						보통					</option>
									<option value="large">
						최대 크기					</option>
									<option value="full">
						전체 크기					</option>
							</select>
		</label>
	</script>

	<script type="text/html" id="tmpl-playlist-settings">
		<h2>실행 목록 설정</h2>

		<# var emptyModel = _.isEmpty( data.model ),
			isVideo = 'video' === data.controller.get('library').props.get('type'); #>

		<label class="setting">
			<input type="checkbox" data-setting="tracklist" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<# if ( isVideo ) { #>
			<span>비디오 목록 보이기</span>
			<# } else { #>
			<span>트랙 목록 보이기</span>
			<# } #>
		</label>

		<# if ( ! isVideo ) { #>
		<label class="setting">
			<input type="checkbox" data-setting="artists" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<span>트랙 목록에 아티스트 이름 보이기</span>
		</label>
		<# } #>

		<label class="setting">
			<input type="checkbox" data-setting="images" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<span>이미지 보이기</span>
		</label>
	</script>

	<script type="text/html" id="tmpl-embed-link-settings">
		<label class="setting link-text">
			<span>링크 텍스트</span>
			<input type="text" class="alignment" data-setting="linkText" />
		</label>
		<div class="embed-container" style="display: none;">
			<div class="embed-preview"></div>
		</div>
	</script>

	<script type="text/html" id="tmpl-embed-image-settings">
		<div class="thumbnail">
			<img src="{{ data.model.url }}" draggable="false" alt="" />
		</div>

					<label class="setting caption">
				<span>캡션</span>
				<textarea data-setting="caption" />
			</label>
		
		<label class="setting alt-text">
			<span>대체 텍스트</span>
			<input type="text" data-setting="alt" />
		</label>

		<div class="setting align">
			<span>정렬</span>
			<div class="button-group button-large" data-setting="align">
				<button class="button" value="left">
					왼쪽				</button>
				<button class="button" value="center">
					중앙				</button>
				<button class="button" value="right">
					오른쪽				</button>
				<button class="button active" value="none">
					없음				</button>
			</div>
		</div>

		<div class="setting link-to">
			<span>연결</span>
			<div class="button-group button-large" data-setting="link">
				<button class="button" value="file">
					이미지 URL				</button>
				<button class="button" value="custom">
					사용자 정의 URL				</button>
				<button class="button active" value="none">
					없음				</button>
			</div>
			<input type="text" class="link-to-custom" data-setting="linkUrl" />
		</div>
	</script>

	<script type="text/html" id="tmpl-image-details">
		<div class="media-embed">
			<div class="embed-media-settings">
				<div class="column-image">
					<div class="image">
						<img src="{{ data.model.url }}" draggable="false" alt="" />

						<# if ( data.attachment && window.imageEdit ) { #>
							<div class="actions">
								<input type="button" class="edit-attachment button" value="원본 편집" />
								<input type="button" class="replace-attachment button" value="교체" />
							</div>
						<# } #>
					</div>
				</div>
				<div class="column-settings">
											<label class="setting caption">
							<span>캡션</span>
							<textarea data-setting="caption">{{ data.model.caption }}</textarea>
						</label>
					
					<label class="setting alt-text">
						<span>대체 텍스트</span>
						<input type="text" data-setting="alt" value="{{ data.model.alt }}" />
					</label>

					<h2>표시 설정</h2>
					<div class="setting align">
						<span>정렬</span>
						<div class="button-group button-large" data-setting="align">
							<button class="button" value="left">
								왼쪽							</button>
							<button class="button" value="center">
								중앙							</button>
							<button class="button" value="right">
								오른쪽							</button>
							<button class="button active" value="none">
								없음							</button>
						</div>
					</div>

					<# if ( data.attachment ) { #>
						<# if ( 'undefined' !== typeof data.attachment.sizes ) { #>
							<label class="setting size">
								<span>크기</span>
								<select class="size" name="size"
									data-setting="size"
									<# if ( data.userSettings ) { #>
										data-user-setting="imgsize"
									<# } #>>
																			<#
										var size = data.sizes['thumbnail'];
										if ( size ) { #>
											<option value="thumbnail">
												작은 사진(썸네일) &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['medium'];
										if ( size ) { #>
											<option value="medium">
												보통 &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['large'];
										if ( size ) { #>
											<option value="large">
												최대 크기 &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['full'];
										if ( size ) { #>
											<option value="full">
												전체 크기 &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																		<option value="custom">
										사용자 정의 크기									</option>
								</select>
							</label>
						<# } #>
							<div class="custom-size<# if ( data.model.size !== 'custom' ) { #> hidden<# } #>">
								<label><span>폭 <small>(px)</small></span> <input data-setting="customWidth" type="number" step="1" value="{{ data.model.customWidth }}" /></label><span class="sep">&times;</span><label><span>높이 <small>(px)</small></span><input data-setting="customHeight" type="number" step="1" value="{{ data.model.customHeight }}" /></label>
							</div>
					<# } #>

					<div class="setting link-to">
						<span>연결</span>
						<select data-setting="link">
						<# if ( data.attachment ) { #>
							<option value="file">
								미디어 파일							</option>
							<option value="post">
								첨부 페이지							</option>
						<# } else { #>
							<option value="file">
								이미지 URL							</option>
						<# } #>
							<option value="custom">
								사용자 정의 URL							</option>
							<option value="none">
								없음							</option>
						</select>
						<input type="text" class="link-to-custom" data-setting="linkUrl" />
					</div>
					<div class="advanced-section">
						<h2><button type="button" class="button-link advanced-toggle">고급 옵션</button></h2>
						<div class="advanced-settings hidden">
							<div class="advanced-image">
								<label class="setting title-text">
									<span>이미지 타이틀 속성</span>
									<input type="text" data-setting="title" value="{{ data.model.title }}" />
								</label>
								<label class="setting extra-classes">
									<span>이미지 CSS 클래스</span>
									<input type="text" data-setting="extraClasses" value="{{ data.model.extraClasses }}" />
								</label>
							</div>
							<div class="advanced-link">
								<div class="setting link-target">
									<label><input type="checkbox" data-setting="linkTargetBlank" value="_blank" <# if ( data.model.linkTargetBlank ) { #>checked="checked"<# } #>>새 탭에서 링크 열기</label>
								</div>
								<label class="setting link-rel">
									<span>링크 관계</span>
									<input type="text" data-setting="linkRel" value="{{ data.model.linkClassName }}" />
								</label>
								<label class="setting link-class-name">
									<span>CSS 클래스 링크</span>
									<input type="text" data-setting="linkClassName" value="{{ data.model.linkClassName }}" />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</script>

	<script type="text/html" id="tmpl-image-editor">
		<div id="media-head-{{ data.id }}"></div>
		<div id="image-editor-{{ data.id }}"></div>
	</script>

	<script type="text/html" id="tmpl-audio-details">
		<# var ext, html5types = {
			mp3: wp.media.view.settings.embedMimes.mp3,
			ogg: wp.media.view.settings.embedMimes.ogg
		}; #>

				<div class="media-embed media-embed-details">
			<div class="embed-media-settings embed-audio-settings">
				<audio style="visibility: hidden"
	controls
	class="wp-audio-shortcode"
	width="{{ _.isUndefined( data.model.width ) ? 400 : data.model.width }}"
	preload="{{ _.isUndefined( data.model.preload ) ? 'none' : data.model.preload }}"
	<#
	if ( ! _.isUndefined( data.model.autoplay ) && data.model.autoplay ) {
		#> autoplay<#
	}
	if ( ! _.isUndefined( data.model.loop ) && data.model.loop ) {
		#> loop<#
	}
	#>
>
	<# if ( ! _.isEmpty( data.model.src ) ) { #>
	<source src="{{ data.model.src }}" type="{{ wp.media.view.settings.embedMimes[ data.model.src.split('.').pop() ] }}" />
	<# } #>

	<# if ( ! _.isEmpty( data.model.mp3 ) ) { #>
	<source src="{{ data.model.mp3 }}" type="{{ wp.media.view.settings.embedMimes[ 'mp3' ] }}" />
	<# } #>
	<# if ( ! _.isEmpty( data.model.ogg ) ) { #>
	<source src="{{ data.model.ogg }}" type="{{ wp.media.view.settings.embedMimes[ 'ogg' ] }}" />
	<# } #>
	<# if ( ! _.isEmpty( data.model.wma ) ) { #>
	<source src="{{ data.model.wma }}" type="{{ wp.media.view.settings.embedMimes[ 'wma' ] }}" />
	<# } #>
	<# if ( ! _.isEmpty( data.model.m4a ) ) { #>
	<source src="{{ data.model.m4a }}" type="{{ wp.media.view.settings.embedMimes[ 'm4a' ] }}" />
	<# } #>
	<# if ( ! _.isEmpty( data.model.wav ) ) { #>
	<source src="{{ data.model.wav }}" type="{{ wp.media.view.settings.embedMimes[ 'wav' ] }}" />
	<# } #>
	</audio>

				<# if ( ! _.isEmpty( data.model.src ) ) {
					ext = data.model.src.split('.').pop();
					if ( html5types[ ext ] ) {
						delete html5types[ ext ];
					}
				#>
				<label class="setting">
					<span>SRC</span>
					<input type="text" disabled="disabled" data-setting="src" value="{{ data.model.src }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.mp3 ) ) {
					if ( ! _.isUndefined( html5types.mp3 ) ) {
						delete html5types.mp3;
					}
				#>
				<label class="setting">
					<span>MP3</span>
					<input type="text" disabled="disabled" data-setting="mp3" value="{{ data.model.mp3 }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.ogg ) ) {
					if ( ! _.isUndefined( html5types.ogg ) ) {
						delete html5types.ogg;
					}
				#>
				<label class="setting">
					<span>OGG</span>
					<input type="text" disabled="disabled" data-setting="ogg" value="{{ data.model.ogg }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.wma ) ) {
					if ( ! _.isUndefined( html5types.wma ) ) {
						delete html5types.wma;
					}
				#>
				<label class="setting">
					<span>WMA</span>
					<input type="text" disabled="disabled" data-setting="wma" value="{{ data.model.wma }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.m4a ) ) {
					if ( ! _.isUndefined( html5types.m4a ) ) {
						delete html5types.m4a;
					}
				#>
				<label class="setting">
					<span>M4A</span>
					<input type="text" disabled="disabled" data-setting="m4a" value="{{ data.model.m4a }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.wav ) ) {
					if ( ! _.isUndefined( html5types.wav ) ) {
						delete html5types.wav;
					}
				#>
				<label class="setting">
					<span>WAV</span>
					<input type="text" disabled="disabled" data-setting="wav" value="{{ data.model.wav }}" />
					<button type="button" class="button-link remove-setting">오디오 소스 제거</button>
				</label>
				<# } #>
				
				<# if ( ! _.isEmpty( html5types ) ) { #>
				<div class="setting">
					<span>최적화된 HTML5 실행을 위한 대체 소스 추가:</span>
					<div class="button-large">
					<# _.each( html5types, function (mime, type) { #>
					<button class="button add-media-source" data-mime="{{ mime }}">{{ type }}</button>
					<# } ) #>
					</div>
				</div>
				<# } #>

				<div class="setting preload">
					<span>미리 올림</span>
					<div class="button-group button-large" data-setting="preload">
						<button class="button" value="auto">자동</button>
						<button class="button" value="metadata">메타데이터</button>
						<button class="button active" value="none">없음</button>
					</div>
				</div>

				<label class="setting checkbox-setting">
					<input type="checkbox" data-setting="autoplay" />
					<span>자동 실행</span>
				</label>

				<label class="setting checkbox-setting">
					<input type="checkbox" data-setting="loop" />
					<span>연속재생</span>
				</label>
			</div>
		</div>
	</script>

	<script type="text/html" id="tmpl-video-details">
		<# var ext, html5types = {
			mp4: wp.media.view.settings.embedMimes.mp4,
			ogv: wp.media.view.settings.embedMimes.ogv,
			webm: wp.media.view.settings.embedMimes.webm
		}; #>

				<div class="media-embed media-embed-details">
			<div class="embed-media-settings embed-video-settings">
				<div class="wp-video-holder">
				<#
				var w = ! data.model.width || data.model.width > 640 ? 640 : data.model.width,
					h = ! data.model.height ? 360 : data.model.height;

				if ( data.model.width && w !== data.model.width ) {
					h = Math.ceil( ( h * w ) / data.model.width );
				}
				#>

				<#  var w_rule = '', classes = [],
		w, h, settings = wp.media.view.settings,
		isYouTube = isVimeo = false;

	if ( ! _.isEmpty( data.model.src ) ) {
		isYouTube = data.model.src.match(/youtube|youtu\.be/);
		isVimeo = -1 !== data.model.src.indexOf('vimeo');
	}

	if ( settings.contentWidth && data.model.width >= settings.contentWidth ) {
		w = settings.contentWidth;
	} else {
		w = data.model.width;
	}

	if ( w !== data.model.width ) {
		h = Math.ceil( ( data.model.height * w ) / data.model.width );
	} else {
		h = data.model.height;
 	}

	if ( w ) {
		w_rule = 'width: ' + w + 'px; ';
	}

	if ( isYouTube ) {
		classes.push( 'youtube-video' );
	}

	if ( isVimeo ) {
		classes.push( 'vimeo-video' );
	}

#>
<div style="{{ w_rule }}" class="wp-video">
<video controls
	class="wp-video-shortcode {{ classes.join( ' ' ) }}"
	<# if ( w ) { #>width="{{ w }}"<# } #>
	<# if ( h ) { #>height="{{ h }}"<# } #>
	<#
		if ( ! _.isUndefined( data.model.poster ) && data.model.poster ) {
			#> poster="{{ data.model.poster }}"<#
		} #>
		preload="{{ _.isUndefined( data.model.preload ) ? 'metadata' : data.model.preload }}"<#
	 if ( ! _.isUndefined( data.model.autoplay ) && data.model.autoplay ) {
		#> autoplay<#
	}
	 if ( ! _.isUndefined( data.model.loop ) && data.model.loop ) {
		#> loop<#
	}
	#>
>
	<# if ( ! _.isEmpty( data.model.src ) ) {
		if ( isYouTube ) { #>
		<source src="{{ data.model.src }}" type="video/youtube" />
		<# } else if ( isVimeo ) { #>
		<source src="{{ data.model.src }}" type="video/vimeo" />
		<# } else { #>
		<source src="{{ data.model.src }}" type="{{ settings.embedMimes[ data.model.src.split('.').pop() ] }}" />
		<# }
	} #>

	<# if ( data.model.mp4 ) { #>
	<source src="{{ data.model.mp4 }}" type="{{ settings.embedMimes[ 'mp4' ] }}" />
	<# } #>
	<# if ( data.model.m4v ) { #>
	<source src="{{ data.model.m4v }}" type="{{ settings.embedMimes[ 'm4v' ] }}" />
	<# } #>
	<# if ( data.model.webm ) { #>
	<source src="{{ data.model.webm }}" type="{{ settings.embedMimes[ 'webm' ] }}" />
	<# } #>
	<# if ( data.model.ogv ) { #>
	<source src="{{ data.model.ogv }}" type="{{ settings.embedMimes[ 'ogv' ] }}" />
	<# } #>
	<# if ( data.model.wmv ) { #>
	<source src="{{ data.model.wmv }}" type="{{ settings.embedMimes[ 'wmv' ] }}" />
	<# } #>
	<# if ( data.model.flv ) { #>
	<source src="{{ data.model.flv }}" type="{{ settings.embedMimes[ 'flv' ] }}" />
	<# } #>
		{{{ data.model.content }}}
</video>
</div>

				<# if ( ! _.isEmpty( data.model.src ) ) {
					ext = data.model.src.split('.').pop();
					if ( html5types[ ext ] ) {
						delete html5types[ ext ];
					}
				#>
				<label class="setting">
					<span>SRC</span>
					<input type="text" disabled="disabled" data-setting="src" value="{{ data.model.src }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.mp4 ) ) {
					if ( ! _.isUndefined( html5types.mp4 ) ) {
						delete html5types.mp4;
					}
				#>
				<label class="setting">
					<span>MP4</span>
					<input type="text" disabled="disabled" data-setting="mp4" value="{{ data.model.mp4 }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.m4v ) ) {
					if ( ! _.isUndefined( html5types.m4v ) ) {
						delete html5types.m4v;
					}
				#>
				<label class="setting">
					<span>M4V</span>
					<input type="text" disabled="disabled" data-setting="m4v" value="{{ data.model.m4v }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.webm ) ) {
					if ( ! _.isUndefined( html5types.webm ) ) {
						delete html5types.webm;
					}
				#>
				<label class="setting">
					<span>WEBM</span>
					<input type="text" disabled="disabled" data-setting="webm" value="{{ data.model.webm }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.ogv ) ) {
					if ( ! _.isUndefined( html5types.ogv ) ) {
						delete html5types.ogv;
					}
				#>
				<label class="setting">
					<span>OGV</span>
					<input type="text" disabled="disabled" data-setting="ogv" value="{{ data.model.ogv }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.wmv ) ) {
					if ( ! _.isUndefined( html5types.wmv ) ) {
						delete html5types.wmv;
					}
				#>
				<label class="setting">
					<span>WMV</span>
					<input type="text" disabled="disabled" data-setting="wmv" value="{{ data.model.wmv }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
				<# if ( ! _.isEmpty( data.model.flv ) ) {
					if ( ! _.isUndefined( html5types.flv ) ) {
						delete html5types.flv;
					}
				#>
				<label class="setting">
					<span>FLV</span>
					<input type="text" disabled="disabled" data-setting="flv" value="{{ data.model.flv }}" />
					<button type="button" class="button-link remove-setting">비디오 소스 삭제</button>
				</label>
				<# } #>
								</div>

				<# if ( ! _.isEmpty( html5types ) ) { #>
				<div class="setting">
					<span>최적화된 HTML5 실행을 위한 대체 소스 추가:</span>
					<div class="button-large">
					<# _.each( html5types, function (mime, type) { #>
					<button class="button add-media-source" data-mime="{{ mime }}">{{ type }}</button>
					<# } ) #>
					</div>
				</div>
				<# } #>

				<# if ( ! _.isEmpty( data.model.poster ) ) { #>
				<label class="setting">
					<span>포스터 이미지</span>
					<input type="text" disabled="disabled" data-setting="poster" value="{{ data.model.poster }}" />
					<button type="button" class="button-link remove-setting">포스터 이미지 삭제</button>
				</label>
				<# } #>
				<div class="setting preload">
					<span>미리 올림</span>
					<div class="button-group button-large" data-setting="preload">
						<button class="button" value="auto">자동</button>
						<button class="button" value="metadata">메타데이터</button>
						<button class="button active" value="none">없음</button>
					</div>
				</div>

				<label class="setting checkbox-setting">
					<input type="checkbox" data-setting="autoplay" />
					<span>자동 실행</span>
				</label>

				<label class="setting checkbox-setting">
					<input type="checkbox" data-setting="loop" />
					<span>연속재생</span>
				</label>

				<label class="setting" data-setting="content">
					<span>트랙 (부제, 캡션, 설명, 챕터, 또는 메타데이터)</span>
					<#
					var content = '';
					if ( ! _.isEmpty( data.model.content ) ) {
						var tracks = jQuery( data.model.content ).filter( 'track' );
						_.each( tracks.toArray(), function (track) {
							content += track.outerHTML; #>
						<p>
							<input class="content-track" type="text" value="{{ track.outerHTML }}" />
							<button type="button" class="button-link remove-setting remove-track">비디오 트랙 삭제</button>
						</p>
						<# } ); #>
					<# } else { #>
					<em>관련된 부제가 없습니다.</em>
					<# } #>
					<textarea class="hidden content-setting">{{ content }}</textarea>
				</label>
			</div>
		</div>
	</script>

	<script type="text/html" id="tmpl-editor-gallery">
		<# if ( data.attachments.length ) { #>
			<div class="gallery gallery-columns-{{ data.columns }}">
				<# _.each( data.attachments, function( attachment, index ) { #>
					<dl class="gallery-item">
						<dt class="gallery-icon">
							<# if ( attachment.thumbnail ) { #>
								<img src="{{ attachment.thumbnail.url }}" width="{{ attachment.thumbnail.width }}" height="{{ attachment.thumbnail.height }}" alt="" />
							<# } else { #>
								<img src="{{ attachment.url }}" alt="" />
							<# } #>
						</dt>
						<# if ( attachment.caption ) { #>
							<dd class="wp-caption-text gallery-caption">
								{{{ data.verifyHTML( attachment.caption ) }}}
							</dd>
						<# } #>
					</dl>
					<# if ( index % data.columns === data.columns - 1 ) { #>
						<br style="clear: both;">
					<# } #>
				<# } ); #>
			</div>
		<# } else { #>
			<div class="wpview-error">
				<div class="dashicons dashicons-format-gallery"></div><p>항목을 찾을 수 없습니다.</p>
			</div>
		<# } #>
	</script>

	<script type="text/html" id="tmpl-crop-content">
		<img class="crop-image" src="{{ data.url }}" alt="이미지 자르기 영역 미리보기. 마우스 상호작용 필수.">
		<div class="upload-errors"></div>
	</script>
<script type='text/javascript'>
/* <![CDATA[ */
var screenReaderText = {"expand":"\ud558\uc704 \uba54\ub274 \ud655\uc7a5","collapse":"\ud558\uc704 \uba54\ub274 \ucd95\uc18c"};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-content/themes/gangwonfc/js/functions.js?ver=20160816'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-content/themes/gangwonfc/functions/kmcis/kmcis.js'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-content/themes/gangwonfc/functions/validation/validation.js'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/wp-embed.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/underscore.min.js?ver=1.8.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/shortcode.min.js?ver=4.7.3'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var userSettings = {"url":"\/","uid":"4447","time":"1531921599","secure":""};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/utils.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/backbone.min.js?ver=1.2.3'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/wp-util.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/wp-backbone.min.js?ver=4.7.3'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var _wpMediaModelsL10n = {"settings":{"ajaxurl":"\/wp-admin\/admin-ajax.php","post":{"id":0}}};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/media-models.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/plupload/plupload.full.min.js?ver=2.1.8'></script>
<!--[if lt IE 8]>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/json2.min.js?ver=2015-05-03'></script>
<![endif]-->
<script type='text/javascript'>
/* <![CDATA[ */
var pluploadL10n = {"queue_limit_exceeded":"\ub108\ubb34 \ub9ce\uc740 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud588\uc2b5\ub2c8\ub2e4.","file_exceeds_size_limit":"\uc774 \uc0ac\uc774\ud2b8\uc5d0 \ud5c8\uc6a9\ub41c \ucd5c\ub300 \uc5c5\ub85c\ub4dc \uc6a9\ub7c9\uc744 %s \ucd08\uacfc \ud588\uc2b5\ub2c8\ub2e4.","zero_byte_file":"\ud30c\uc77c\uc774 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc73c\ub85c \uc62c\ub824\uc8fc\uc2ed\uc2dc\uc624.","invalid_filetype":"\uc774 \ud30c\uc77c\ud615\uc2dd\uc740 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc73c\ub85c \uc62c\ub824\uc8fc\uc2ed\uc2dc\uc624.","not_an_image":"\uc774 \ud30c\uc77c\uc740 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc73c\ub85c \uc62c\ub824\uc8fc\uc138\uc694.","image_memory_exceeded":"\uba54\ubaa8\ub9ac\uac00 \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4. \uc791\uc740 \ud30c\uc77c\ub85c \uc62c\ub824\uc8fc\uc138\uc694.","image_dimensions_exceeded":"\uc774\uac83\uc740 \ucd5c\ub300 \uc0ac\uc774\uc988\ubcf4\ub2e4 \ud07d\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc73c\ub85c \uc62c\ub824\uc8fc\uc138\uc694.","default_error":"\uc5c5\ub85c\ub4dc\uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2ed\uc2dc\uc624.","missing_upload_url":"\uc124\uc815\uc624\ub958. \uc11c\ubc84 \uad00\ub9ac\uc790\uc640 \uc0c1\uc758\ud558\uc2ed\uc2dc\uc624.","upload_limit_exceeded":"\ud558\ub098\uc758 \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","http_error":"HTTP \uc624\ub958.","upload_failed":"\uc5c5\ub85c\ub4dc \uc2e4\ud328.","big_upload_failed":"\uc774 \ud30c\uc77c\uc744 %1$s\ube0c\ub77c\uc6b0\uc800 \uc5c5\ub85c\ub354%2$s\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5c5\ub85c\ub4dc \ud574\ubcf4\uc138\uc694.","big_upload_queued":"\uc6f9\ube0c\ub77c\uc6b0\uc800 \uc0ac\uc6a9\uc2dc \ub2e4\uc911 \ud30c\uc77c \uc5c5\ub85c\ub354\uc5d0\uc11c \ucd5c\ub300 \uc5c5\ub85c\ub4dc \ud06c\uae30\ub97c %s \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4.","io_error":"IO \uc624\ub958.","security_error":"\ubcf4\uc548 \uc624\ub958.","file_cancelled":"\ud30c\uc77c\uc774 \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.","upload_stopped":"\uc5c5\ub85c\ub4dc\uac00 \uc911\ub2e8\ub428.","dismiss":"\ubb34\uc2dc","crunching":"\ucc98\ub9ac\uc911 \u2026","deleted":"\ud734\uc9c0\ud1b5\uc73c\ub85c \uc774\ub3d9\ud568.","error_uploading":"\u201c%s\u201d \ub294 \uc5c5\ub85c\ub4dc\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."};
var _wpPluploadSettings = {"defaults":{"runtimes":"html5,flash,silverlight,html4","file_data_name":"async-upload","url":"\/wp-admin\/async-upload.php","flash_swf_url":"http:\/\/gangwon-fc.com\/wp-includes\/js\/plupload\/plupload.flash.swf","silverlight_xap_url":"http:\/\/gangwon-fc.com\/wp-includes\/js\/plupload\/plupload.silverlight.xap","filters":{"max_file_size":"83886080b","mime_types":[{"extensions":"jpg,jpeg,jpe,gif,png,bmp,tiff,tif,ico,asf,asx,wmv,wmx,wm,avi,divx,flv,mov,qt,mpeg,mpg,mpe,mp4,m4v,ogv,webm,mkv,3gp,3gpp,3g2,3gp2,txt,asc,c,cc,h,srt,csv,tsv,ics,rtx,css,vtt,dfxp,mp3,m4a,m4b,ra,ram,wav,ogg,oga,mid,midi,wma,wax,mka,rtf,js,pdf,class,tar,zip,gz,gzip,rar,7z,psd,xcf,doc,pot,pps,ppt,wri,xla,xls,xlt,xlw,mdb,mpp,docx,docm,dotx,dotm,xlsx,xlsm,xlsb,xltx,xltm,xlam,pptx,pptm,ppsx,ppsm,potx,potm,ppam,sldx,sldm,onetoc,onetoc2,onetmp,onepkg,oxps,xps,odt,odp,ods,odg,odc,odb,odf,wp,wpd,key,numbers,pages,hwp,ai"}]},"multipart_params":{"action":"upload-attachment","_wpnonce":"d937c456a2"}},"browser":{"mobile":false,"supported":true},"limitExceeded":false};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/plupload/wp-plupload.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/jquery/ui/core.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/jquery/ui/widget.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/jquery/ui/sortable.min.js?ver=1.11.4'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var mejsL10n = {"language":"ko-KR","strings":{"Close":"\ub2eb\uae30","Fullscreen":"\uc804\uccb4\ud654\uba74","Turn off Fullscreen":"\uc804\uccb4\ud654\uba74 \ub044\uae30","Go Fullscreen":"\uc804\uccb4\ud654\uba74 \uac00\uae30","Download File":"\ud30c\uc77c \ub0b4\ub824\ubc1b\uae30","Download Video":"\ube44\ub514\uc624 \ub0b4\ub824\ubc1b\uae30","Play":"\uc2e4\ud589","Pause":"\uc911\uc9c0","Captions\/Subtitles":"\ucea1\uc158\/\ubd80\uc81c\ubaa9","None":"None","Time Slider":"\ud0c0\uc784 \uc2ac\ub77c\uc774\ub354","Skip back %1 seconds":"%1\ucd08 \ub4a4\ub85c \uac00\uae30","Video Player":"\ube44\ub514\uc624 \ud50c\ub808\uc774\uc5b4","Audio Player":"\uc624\ub514\uc624 \ud50c\ub808\uc774\uc5b4","Volume Slider":"\ubcfc\ub968 \uc2ac\ub77c\uc774\ub354","Mute Toggle":"\ubb34\uc74c \ud1a0\uae00","Unmute":"\ubb34\uc74c\ud574\uc81c","Mute":"\uc870\uc6a9\ud788","Use Up\/Down Arrow keys to increase or decrease volume.":"\ubcfc\ub968\uc744 \ub192\uc774\uac70\ub098 \uc904\uc774\ub824\uba74 \uc0c1\/\ud558 \ubc29\ud5a5\ud0a4\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.","Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.":"1\ucd08\ub97c \uc9c4\ud589\ud558\ub824\uba74 \uc88c\/\uc6b0 \ubc29\ud5a5\ud0a4\ub97c \uc0ac\uc6a9\ud558\uace0 10\ucd08\ub97c \uc9c4\ud589\ud558\ub824\uba74 \uc0c1\/\ud558 \ubc29\ud5a5\ud0a4\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."}};
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/"};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=2.22.0'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=4.7.3'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var _wpMediaViewsL10n = {"url":"URL","addMedia":"\ubbf8\ub514\uc5b4 \ucd94\uac00","search":"\uac80\uc0c9","select":"\uc120\ud0dd","cancel":"\ucde8\uc18c","update":"\uc5c5\ub370\uc774\ud2b8","replace":"\uad50\uccb4","remove":"\uc0ad\uc81c","back":"\ub3cc\uc544\uac00\uae30","selected":"%d \uc120\ud0dd\ub428","dragInfo":"\ub04c\uc5b4\ub193\uae30\ub85c \ubbf8\ub514\uc5b4 \ud30c\uc77c\uc744 \uc815\ub82c\ud558\uc138\uc694.","uploadFilesTitle":"\ud30c\uc77c \uc5c5\ub85c\ub4dc","uploadImagesTitle":"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc","mediaLibraryTitle":"\ubbf8\ub514\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac","insertMediaTitle":"\ubbf8\ub514\uc5b4 \uc0bd\uc785","createNewGallery":"\uc0c8 \uac24\ub7ec\ub9ac \uc0dd\uc131\ud558\uae30","createNewPlaylist":"\uc0c8 \uc2e4\ud589 \ubaa9\ub85d \ub9cc\ub4e4\uae30","createNewVideoPlaylist":"\uc0c8 \ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ub9cc\ub4e4\uae30","returnToLibrary":"\u2190 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ub3cc\uc544\uac00\uae30","allMediaItems":"\ubaa8\ub4e0 \ubbf8\ub514\uc5b4 \uc544\uc774\ud15c","allDates":"\ubaa8\ub4e0 \ub0a0\uc9dc","noItemsFound":"\ud56d\ubaa9\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","insertIntoPost":"\uae00\uc5d0 \uc0bd\uc785\ud558\uae30","unattached":"\ucca8\ubd80\ub418\uc9c0 \uc54a\uc74c","trash":"\ud734\uc9c0\ud1b5","uploadedToThisPost":"\uc774 \uae00\uc5d0 \uc5c5\ub85c\ub4dc\ub41c \uac83","warnDelete":"\ud574\ub2f9 \ud56d\ubaa9\uc744 \uc601\uad6c\uc801\uc73c\ub85c \uc0ad\uc81c\ud558\ub824\ub294 \uc911\uc785\ub2c8\ub2e4.\n\uc911\uc9c0\ud558\ub824\uba74 '\ucde8\uc18c'\ub97c, \uc0ad\uc81c\ud558\ub824\uba74 'OK'\ub97c \ud074\ub9ad\ud558\uc138\uc694","warnBulkDelete":"\uc774\ub4e4 \uc544\uc774\ud15c\uc744 \uc601\uad6c\uc801\uc73c\ub85c \uc0ad\uc81c\ud558\ub824\uace0 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n  \uc911\uc9c0\ud558\ub824\uba74 '\ucde8\uc18c'\ub97c, \uc0ad\uc81c\ub294 'OK'.","warnBulkTrash":"\uc774\ub4e4 \uc544\uc774\ud15c\uc744 \ud734\uc9c0\ud1b5\uc73c\ub85c \ubcf4\ub0b4\ub824\uace0 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n  \uc911\uc9c0\ud558\ub824\uba74 '\ucde8\uc18c'\ub97c, \uc0ad\uc81c\ud558\ub824\uba74 'OK'.","bulkSelect":"\uc77c\uad04 \uc120\ud0dd","cancelSelection":"\uc120\ud0dd \ucde8\uc18c","trashSelected":"\uc120\ud0dd \ud56d\ubaa9 \ud734\uc9c0\ud1b5\uc73c\ub85c","untrashSelected":"\uc120\ud0dd \ud56d\ubaa9 \ud734\uc9c0\ud1b5\uc5d0\uc11c \ubcf5\uc6d0","deleteSelected":"\uc120\ud0dd \uc0ad\uc81c","deletePermanently":"\uc601\uad6c\uc801\uc73c\ub85c \uc0ad\uc81c\ud558\uae30","apply":"\uc801\uc6a9","filterByDate":"\ub0a0\uc9dc\ub85c \ud544\ud130","filterByType":"\ud615\uc2dd\uc73c\ub85c \ud544\ud130","searchMediaLabel":"\ubbf8\ub514\uc5b4 \uac80\uc0c9","searchMediaPlaceholder":"\ubbf8\ub514\uc5b4 \uc544\uc774\ud15c \uac80\uc0c9...","noMedia":"\ubbf8\ub514\uc5b4 \ud30c\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","attachmentDetails":"\ucca8\ubd80 \uc0c1\uc138","insertFromUrlTitle":"URL\uc5d0\uc11c \uc0bd\uc785\ud558\uae30","setFeaturedImageTitle":"\ud2b9\uc131 \uc774\ubbf8\uc9c0","setFeaturedImage":"\ud2b9\uc131 \uc774\ubbf8\uc9c0 \uc124\uc815","createGalleryTitle":"\uac24\ub7ec\ub9ac \uc0dd\uc131\ud558\uae30","editGalleryTitle":"\uac24\ub7ec\ub9ac \ud3b8\uc9d1","cancelGalleryTitle":"\u2190 \uac24\ub7ec\ub9ac \ucde8\uc18c","insertGallery":"\uac24\ub7ec\ub9ac \uc0bd\uc785","updateGallery":"\uac24\ub7ec\ub9ac \uc5c5\ub370\uc774\ud2b8","addToGallery":"\uac24\ub7ec\ub9ac\uc5d0 \ucd94\uac00","addToGalleryTitle":"\uac24\ub7ec\ub9ac\uc5d0 \ucd94\uac00\ud558\uae30","reverseOrder":"\uc21c\uc11c \ubc14\uafb8\uae30","imageDetailsTitle":"\uc774\ubbf8\uc9c0 \uc0c1\uc138","imageReplaceTitle":"\uc774\ubbf8\uc9c0 \uad50\uccb4","imageDetailsCancel":"\ud3b8\uc9d1 \ucde8\uc18c","editImage":"\uc774\ubbf8\uc9c0 \ud3b8\uc9d1","chooseImage":"\uc774\ubbf8\uc9c0 \uc120\ud0dd","selectAndCrop":"\uc120\ud0dd & \uc790\ub974\uae30","skipCropping":"\uc790\ub974\uae30 \uc0dd\ub7b5","cropImage":"\uc774\ubbf8\uc9c0 \uc790\ub974\uae30","cropYourImage":"\uc774\ubbf8\uc9c0 \uc790\ub974\uae30","cropping":"\uc790\ub974\uae30\u2026","suggestedDimensions":"\uc81c\uc548\ub41c \uc774\ubbf8\uc9c0 \ud06c\uae30:","cropError":"\uc774\ubbf8\uc9c0\ub97c \uc790\ub974\ub294\ub370 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.","audioDetailsTitle":"\uc624\ub514\uc624 \uc0c1\uc138","audioReplaceTitle":"\uc624\ub514\uc624 \uad50\uccb4","audioAddSourceTitle":"\uc624\ub514\uc624 \uc18c\uc2a4 \ucd94\uac00","audioDetailsCancel":"\ud3b8\uc9d1 \ucde8\uc18c","videoDetailsTitle":"\ube44\ub514\uc624 \uc0c1\uc138","videoReplaceTitle":"\ube44\ub514\uc624 \uad50\uccb4","videoAddSourceTitle":"\ube44\ub514\uc624 \uc18c\uc2a4 \ucd94\uac00","videoDetailsCancel":"\ud3b8\uc9d1 \ucde8\uc18c","videoSelectPosterImageTitle":"\ud3ec\uc2a4\ud130 \uc774\ubbf8\uc9c0 \uc120\ud0dd","videoAddTrackTitle":"\ubd80\uc81c \ucd94\uac00","playlistDragInfo":"\ud2b8\ub799\uc758 \uc21c\uc11c\ub97c \uc7ac\uc815\ub82c\ud558\ub7ec\uba74 \ub04c\uc5b4\ub193\uae30 \ud558\uc138\uc694.","createPlaylistTitle":"\uc790\ub3d9 \uc2e4\ud589 \ubaa9\ub85d \ub9cc\ub4e4\uae30","editPlaylistTitle":"\uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ud3b8\uc9d1","cancelPlaylistTitle":"\u2190 \uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ucde8\uc18c","insertPlaylist":"\uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \uc0bd\uc785","updatePlaylist":"\uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \uc5c5\ub370\uc774\ud2b8","addToPlaylist":"\uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d\uc5d0 \ucd94\uac00","addToPlaylistTitle":"\uc624\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d\uc5d0 \ucd94\uac00","videoPlaylistDragInfo":"\ube44\ub514\uc624 \uc21c\uc11c\ub97c \uc7ac\uc815\ub82c\ud558\ub7ec\uba74 \ub04c\uc5b4\ub193\uae30 \ud558\uc138\uc694.","createVideoPlaylistTitle":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ub9cc\ub4e4\uae30","editVideoPlaylistTitle":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ud3b8\uc9d1","cancelVideoPlaylistTitle":"\u2190 \ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \ucde8\uc18c","insertVideoPlaylist":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \uc0bd\uc785","updateVideoPlaylist":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d \uc5c5\ub370\uc774\ud2b8","addToVideoPlaylist":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d\uc5d0 \ucd94\uac00","addToVideoPlaylistTitle":"\ube44\ub514\uc624 \uc2e4\ud589 \ubaa9\ub85d\uc5d0 \ucd94\uac00","settings":{"tabs":[],"tabUrl":"http:\/\/gangwon-fc.com\/wp-admin\/media-upload.php?chromeless=1","mimeTypes":{"image":"\uc774\ubbf8\uc9c0","audio":"\uc624\ub514\uc624","video":"\ube44\ub514\uc624"},"captions":true,"nonce":{"sendToEditor":"56fa51685f"},"post":{"id":0},"defaultProps":{"link":"none","align":"","size":""},"attachmentCounts":{"audio":1,"video":1},"embedExts":["mp3","ogg","wma","m4a","wav","mp4","m4v","webm","ogv","wmv","flv"],"embedMimes":{"mp3":"audio\/mpeg","ogg":"audio\/ogg","wma":"audio\/x-ms-wma","m4a":"audio\/mpeg","wav":"audio\/wav","mp4":"video\/mp4","m4v":"video\/mp4","webm":"video\/webm","ogv":"video\/ogg","wmv":"video\/x-ms-wmv","flv":"video\/x-flv"},"contentWidth":840,"months":[{"year":"2018","month":"7","text":"2018\ub144 7\uc6d4"},{"year":"2018","month":"6","text":"2018\ub144 6\uc6d4"},{"year":"2018","month":"5","text":"2018\ub144 5\uc6d4"},{"year":"2018","month":"4","text":"2018\ub144 4\uc6d4"},{"year":"2018","month":"3","text":"2018\ub144 3\uc6d4"},{"year":"2018","month":"2","text":"2018\ub144 2\uc6d4"},{"year":"2018","month":"1","text":"2018\ub144 1\uc6d4"},{"year":"2017","month":"12","text":"2017\ub144 12\uc6d4"},{"year":"2017","month":"11","text":"2017\ub144 11\uc6d4"},{"year":"2017","month":"10","text":"2017\ub144 10\uc6d4"},{"year":"2017","month":"9","text":"2017\ub144 9\uc6d4"},{"year":"2017","month":"8","text":"2017\ub144 8\uc6d4"},{"year":"2017","month":"7","text":"2017\ub144 7\uc6d4"},{"year":"2017","month":"6","text":"2017\ub144 6\uc6d4"},{"year":"2017","month":"5","text":"2017\ub144 5\uc6d4"},{"year":"2017","month":"4","text":"2017\ub144 4\uc6d4"}],"mediaTrash":0}};
/* ]]> */
</script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/media-views.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/media-editor.min.js?ver=4.7.3'></script>
<script type='text/javascript' src='http://gangwon-fc.com/wp-includes/js/media-audiovideo.min.js?ver=4.7.3'></script>
</div>
<!-- 탑버튼 -->
<a href="#top" class="top_btn">
	<span class="icon_item"><span class="arrow_basic"></span><span class="arrow_one"></span><span class="arrow_two"></span></span>
	<span class="text">TOP</span>
</a>
<!-- .탑버튼 -->
</body>
</html>
