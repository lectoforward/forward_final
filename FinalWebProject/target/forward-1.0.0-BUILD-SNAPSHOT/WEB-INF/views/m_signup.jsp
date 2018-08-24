<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%-- <%@ include file="/userheader.jsp" %> --%>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="format-detection" content="telephone=no">
<title>회원가입</title>
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


.max_container{
	width: 100%;
	text-align:center;
} 
.max_container > ul{
	padding: 0 0 0 40%;
}
.top{
	padding: 0 0 0 87%;
}

.radio_bx{
	padding:0 50% 0 0;
}
</style>
<link rel='stylesheet' id='dashicons-css'  href='./css/dashicons.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='post-views-counter-frontend-css'  href='./css/frontend.css?ver=4.7.3' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-fonts-css'  href='https://fonts.googleapis.com/css?family=Montserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
<link rel='stylesheet' id='genericons-css'  href='./css/genericons.css?ver=3.4.1' type='text/css' media='all' />
<link rel='stylesheet' id='twentysixteen-style-css'  href='./css/styleSmash.css?ver=4.7.3' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-ui-css'  href='./jquery-ui.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='unslider-css'  href='./unslider.css' type='text/css' media='all' />
<!--[if lt IE 9]>
<script type='text/javascript' src='./js/html5'></script>
<![endif]-->
<script type='text/javascript' src='./js/jquerySmash.js'></script>
<script type='text/javascript' src='./js/jquery-migrate.min.js'></script>
<script type='text/javascript' src='//code.jquery.com/ui/1.11.4/jquery-ui.min.js'></script>
<script type='text/javascript' src='./js/unslider.js'></script>
<link rel="alternate" type="text/xml+oembed" href="./json/embed.json" />
<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
	<link rel="stylesheet" href="http://gangwon-fc.com/wp-content/themes/gangwonfc/css/template.css?20170607" type="text/css" media="all">
	<link rel="stylesheet" href="./css/metabrain-editor.css" type="text/css" media="all">
	<script type="text/javascript" src="./js/common.js"></script>
</head>


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
					<div class="head_linkbx">
						<ul>
							<li><a href="login.jsp">LOGIN</a></li>
							<li><a href="signup.jsp">JOIN</a></li>
						</ul>
					</div>
					<!-- .링크박스 -->
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
</ul></div>								</nav><!-- .main-navigation -->
													</div><!-- .site-header-menu -->
						
				</div>
			</div>
			<!-- .하단헤더 -->
		</div>
<!-- .헤더 -->




<body class="page-template page-template-templates page-template-signup page-template-templatessignup-php page page-id-322 group-blog">
<div class="site_wrap">
<div id="page" class="site">
	<div class="site-inner">
		<div id="content" class="site-content">
<div id="primary" class="content-area">
	<div id="main" class="site-main" role="main">
		<div class="content_rowbx">
			<div class="max_container">
				<article id="post-322" class="post-322 page type-page status-publish hentry">
					<div class="entry-content">
						<!-- 컨텐츠 시작 -->
						<div id="signup_content">
							<form name="form_signup" action="index.jsp" method="POST">
	<input type="hidden" name="action" value="gangwon_signup">
	<input type="hidden" name="signup_nonce" value="1153c11567"/>
	<input type="hidden" name="step" value="three"/>
	<!-- <input type="hidden" name="name" value="이름 기본값"> -->
	<input type="hidden" name="user_id_verify" value="">
	<div class="container" style="height:130px;"><br/></div>
	<h3 class="s_titlebx">회원기본 정보</h3>
	<!-- 리스트 -->
	<div class="form_listbx wide" >
		<div class="form_container">
			
			<!-- 아이디 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_3" class="label_dt">아이디</label></dt>
					<dd>
						<div class="inputbx max_475 pr_130">
							<input type="text" class="text_inputbx" id="input_3" name="user_login" data-validation="required min-length max-length user_id" data-min-length="3" data-max-length="18">
							<a href="#;" class="form_btn_basic search_user_login">중복확인</a>
							<p class="form_allet error alert_error" style="display:none" data-input-name="user_login"></p>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .아이디 -->
			
			
			<!-- 비밀번호 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_4" class="label_dt">비밀번호</label></dt>
					<dd>
						<div class="inputbx max_345 br_text">
							<input type="password" class="text_inputbx" id="input_4" name="password" data-validation="required min-length max-length letter-number" data-min-length="6" data-max-length="12">
						</div>
						<p class="form_subtext password_subtext">*6~12자의 영문과 숫자를 조합</p>
						<p class="form_allet error alert_error" style="display:none" data-input-name="password"></p>
					</dd>
				</dl>
			</div>
			<!-- .비밀번호 -->
			<!-- 비밀번호 확인 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_5" class="label_dt">비밀번호 확인</label></dt>
					<dd>
						<div class="inputbx max_345 br_text">
							<input type="password" class="text_inputbx" id="input_5" name="password_confirm" data-validation="match" data-match="password" data-label="비밀번호" data-min-length="6" data-max-length="12">
						</div>
						<p class="form_allet error alert_error" style="display:none" data-input-name="password_confirm"></p>
					</dd>
				</dl>
			</div>
			<!-- .비밀번호 확인 -->
			
			<!-- 닉네임 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_8" class="label_dt">닉네임</label></dt>
					<dd>
						<div class="inputbx max_475 pr_130">
							<input type="text" class="text_inputbx" id="input_7" name="user_nickname" data-validation="required min-length max-length user_id" data-min-length="3" data-max-length="18">
							<a href="#;" class="form_btn_basic search_user_login">중복확인</a>
							<p class="form_allet error alert_error" style="display:none" data-input-name="user_login"></p>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .닉네임 -->
			
			<!-- 이름 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label class="label_dt" for="input_0">이름</label></dt>
					<dd>
						<div class="inputbx max_475 pr_130">
						<!-- <div class="inputbx"> -->
							<input type="text" class="text_inputbx" id="input_0" name="name" data-validation="required">
							<p class="form_allet error alert_error" style="display:none" data-input-name="name"></p>
							<!-- <div class="d_textbx">홍길동(남)</div> -->
						</div>
					</dd>
				</dl>
			</div>
			<!-- .이름 -->
			<!-- 생일 -->
			<div class="form_itembx basic">
				<dl>
					<dt><span class="label_dt">생일</span></dt>
					<dd>
						<div class="inputbx max_475 pr_130">
							<input type="text" class="text_inputbx" id="input_1" name="name" data-validation="required">
							<p class="form_allet error alert_error" style="display:none" data-input-name="birth"></p>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .생일 -->
			<!-- 휴대폰 번호 -->
			<div class="form_itembx basic">
				<dl>
					<dt><span class="label_dt">휴대폰 번호</span></dt>
					<dd>
						<div class="inputbx max_475 pr_130">
							<input type="text" class="text_inputbx" id="input_2" name="name" data-validation="required">
							<p class="form_allet error alert_error" style="display:none" data-input-name="birth"></p>
						</div>
						<div class="radio_bx radio_sort">
							<div class="title">문자 수신 동의</div>
							<div class="radio_itembx">
								<div class="form_radiobx">
									<input type="radio" id="radio_1" checked="checked" name="allow_sms" value="1">
									<label for="radio_1">네</label>
								</div>
								<div class="form_radiobx">
									<input type="radio" id="radio_2" name="allow_sms" value="0">
									<label for="radio_2">아니오</label>
								</div>
							</div>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .휴대폰 번호 -->
			
			
			
			<!-- 주소 -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_6" class="label_dt">주소</label></dt>
					<dd>
						<div class="inputbx max_345 pl_130">
							<input type="text" class="text_inputbx" id="input_6" name="zipcode" data-validation="required">
							<a href="#;" class="form_btn_basic left search_zipcode">우편번호</a>
							<p class="form_allet error alert_error" style="display:none" data-input-name="zipcode"></p>
						</div>
						<div class="form_adrress_bx">
							<div class="inputbx max_475">
								<label class="hidden_label" for="signup_three1">주소1</label>
								<input type="text" id="signup_three1" class="text_inputbx" name="addr1" data-validation="required">
								<p class="form_allet error alert_error" style="display:none" data-input-name="addr1"></p>
							</div>
							<div class="inputbx max_475">
								<label class="hidden_label" for="signup_three2">주소2</label>
								<input type="text" id="signup_three2" class="text_inputbx" name="addr2" data-validation="required">
								<p class="form_allet error alert_error" style="display:none" data-input-name="addr2"></p>
							</div>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .주소 -->
			<!-- E-mail -->
			<div class="form_itembx basic">
				<dl>
					<dt><label for="input_7" class="label_dt">E-mail</label></dt>
					<dd>
						<div class="input_w_bx max_670">
							<div class="inputbx row50 left">
								<input type="text" class="text_inputbx" id="input_7" name="email_first" data-validation="required">
								<p class="form_allet error alert_error" style="display:none" data-input-name="email_first"></p>
							</div>
							<div class="inputbx row50 right">
								<label class="hidden_label" for="signup_three3">이메일</label>
								<input type="text" id="signup_three3" class="text_inputbx" placeholder="직접입력" name="email_last" data-validation="required">
								<p class="form_allet error alert_error" style="display:none" data-input-name="email_last"></p>
							</div>
							<div class="form_selectbx email_selectbx">
								<div class="arrow_select_bx">
									<a class="textbx" href="#;">선택</a>
									<ul class="select_ul">
										<li><a href="#;" data-value="naver.com">naver.com</a></li>
										<li><a href="#;" data-value="daum.net">daum.net</a></li>
										<li><a href="#;" data-value="hanmail.net">hanmail.net</a></li>
										<li><a href="#;" data-value="gmail.com">gmail.com</a></li>
										<li><a href="#;" data-value="">직접입력</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="radio_bx static">
							<div class="title">메일 수신 동의</div>
							<div class="radio_itembx">
								<div class="form_radiobx">
									<input type="radio" id="radio_3" checked="checked" name="allow_email" value="1">
									<label for="radio_3">네</label>
								</div>
								<div class="form_radiobx">
									<input type="radio" id="radio_4" name="allow_email" value="0">
									<label for="radio_4">아니오</label>
								</div>
							</div>
						</div>
					</dd>
				</dl>
			</div>
			<!-- .E-mail -->
			<!-- 하단박스 -->
			<div class="form_bottombx in_btnbx">
				<input type="submit" class="basic_btn mr10" value="가입 완료">
				<a href="#;" class="basic_btn gray btn_cancel"><span class="text">취소</span></a>
			</div>
			<!-- .하단박스 -->
		</div>
	</div>
	<!-- .리스트 -->
</form>

<script type="text/javascript">
jQuery(document).ready(function($){
	if(!admin_ajax || admin_ajax == "undefined"){
		var admin_ajax =  "admin-ajax.php";
	}

	var $form = $('form[name="form_signup"]');

	$form.on('change', function(){
		isValid($(this), true);
	});

	$form.find('input[name="user_login"]').on('change', function(){
		$form.find('input[name="user_id_verify"]').val('');
	});

	// 취소버튼
	$form.find('.btn_cancel').click(function(){
		if(confirm('가입을 취소하시고 처음화면으로 돌아가시겠습니까?')){
			location.href='/';
		}
	});

	// 주소
	$form.find('.search_zipcode').click(function(){
		new daum.Postcode({
			oncomplete: function(data) {
				if(!data){
					alert('우편번호 찾기 시 오류가 발생했습니다.');
					return ;
				}

				$form.find('input[name="zipcode"]').val(data.zonecode);
				$form.find('input[name="addr1"]').val(data.address);
				$form.find('input[name="addr2"]').val(data.buildingName);
			}
		}).open();
	});

	// 중복확인
	$form.find('.search_user_login').click(function(){
		//if$(.user_nicname)()
		alert('사용 가능합니다.');		
		/* if($('#input_3').attr('name')=="user_name")
		{
			alert("사용가능한 아이디 입니다.")
		}
		else if($('#input_3').attr('name')=="user_nickname")
		{
			alert("사용가능한 닉네임  입니다.")
		}
		return ; */
		
		if(!isValid($form, false, 'user_login')){
			$('.alert_error[data-input-name="user_login"]').removeClass('ok').addClass('error').show();
			$form.find('input[name="user_id_verify"]').val('');
			alert('사용 가능한 아이디 입니다.');
			return ;
		} 
		
		$.ajax({
			url: admin_ajax,
			type: 'POST',
			data: 'action=search_user_login&signup_nonce='+$form.find('input[name="signup_nonce"]').val()+'&user_login='+$form.find('input[name="user_login"]').val(), 
			success: function(data){
				
				$form.find('input[name="user_id_verify"]').val('1');
				$('.alert_error[data-input-name="user_login"]').text(data.msg).removeClass('error').addClass('ok').show();
			
				/* if(data.success){
					$form.find('input[name="user_id_verify"]').val('1');
					$('.alert_error[data-input-name="user_login"]').text(data.msg).removeClass('error').addClass('ok').show();
				}
				else {
					$form.find('input[name="user_id_verify"]').val('');
					$('.alert_error[data-input-name="user_login"]').text(data.msg).removeClass('ok').addClass('error').show();
				} */
			}
		});
	});

	$form.submit(function(e){
		
		var self = $(this);
		e.preventDefault();
		e.stopPropagation();

		
		if($form.find('input[name="user_id_verify"]').val()){
			
		
			//alert('사용 가능한 아이디 입니다.')
			
			 $form.find('.alert_error[data-input-name="user_login"]').show().text('아이디 중복확인을 해주세요.');
			scrollToErrorMsg();
			//return false; 
		}
		alert("회원가입을 완료 하였습니다.");
		location.replace('index.jsp');
		return true;
		if(!$form.find('input[name="user_id_verify"]').val()){
			/* alert('아이디 중복확인을 해주세요.'); */
			//alert('사용 가능한 아이디 입니다.')
			$form.find('.alert_error[data-input-name="user_login"]').show().text('아이디 중복확인을 해주세요.');
			scrollToErrorMsg();
			return false;
		}

		if(!isValid($(this), false) ) {
			if($form.find('input[name="password"]').hasClass('validation_error')){
				$form.find('.form_subtext.password_subtext').hide();
			}
			scrollToErrorMsg();
			return false;
		}

		// Ajax
		$.ajax({
			url: $form.attr('action'),
			type: 'POST',
			data: $form.serialize()+'&next_step=four',
			success: function(data){
				if(data.success){
					if(data.body_html){
						$('#signup_content').html(data.body_html);
						$(document).scrollTop(0);
					}
				}
				else {
					if(data.error_code == 3){
						// validation error
						// 정상적으로 자바스크립트에서 미리 처리함.
						// 스크립트 수정하여 입력한 경우를 대비하여 저장단계 error 발생
						if(data.validation){
							$.each(data.validation, function(inputName, value){
								if(inputName == 'password'){
									self.find('.form_subtext.password_subtext').hide();
								}
								self.find('.alert_error[data-input-name~="'+inputName+'"]').show().text(value['msg']);
							});

							scrollToErrorMsg();
						}

						alert(data.error_msg);
					}
				}
			},
		});
	});
});
</script>						</div>
						<!-- .컨텐츠 시작 -->
					</div><!-- .entry-content -->
				</article><!-- #post-## -->
			</div>
		</div>
	</div><!-- .site-main -->
</div>

		</div>
<!-- .site-content -->
	</div><!-- .site-inner -->
</div><!-- .site -->
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script type='./js/skip-link-focus-fix.js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var screenReaderText = {"expand":"\ud558\uc704 \uba54\ub274 \ud655\uc7a5","collapse":"\ud558\uc704 \uba54\ub274 \ucd95\uc18c"};
/* ]]> */
</div>
</body>
</html>