jQuery(document).ready(function($){
	//네비게이션
	$(".nav_headbx .site-header-menu").hover(function(){
		$(".site-header").addClass("nav_on");
	},function(){
		$(".site-header").removeClass("nav_on");
	});

	// 모바일
	$('.m_nav .menu-main_nav-container > ul > li.menu-item-has-children > a').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).closest('li').find('.sub-menu').slideToggle();
	});

	// Top 버튼
	$(window).scroll(function(){
		if(	$(document).scrollTop() > 700 )
			$('.top_btn').fadeIn('slow');
		else 
			$('.top_btn').fadeOut('slow');

	});

	$('.top_btn').click(function(){
		$("body, html").animate({
			scrollTop: 0,
		}, 500);
	});

	//헤더 서치
	$(".top_headbx .search_btn").click(function(){
		$(".site-header").addClass("search_on");
	});
	
	//서치 닫기
	$(".head_searchbx .close_btn").click(function(){
		$(".site-header").removeClass("search_on");
	});

	//모바일 메뉴 열기
	$(".m_menubox").toggle(function(){
		$(".site_wrap").addClass("m_nav_on");
	},function(){
		$(".site_wrap").removeClass("m_nav_on");
	});

	// 드랍다운 셀렉트
	$('.form_selectbx .textbx, .pg_select_headbx .textbx, .basic_select_bx .textbx').live('click', function(){
		if(!$(this).next().is(':visible'))
			$(this).next().slideDown(200);
		else 
			$(this).next().slideUp(200);
	});

	// 게시판 검색
	$('.basic_select_bx.board_select_bx .select_ul a').click(function(){
		var $searchForm = $('form[name="board_search"]');
		if($searchForm.length){
			$searchForm.find('input[name="c"]').val($(this).data('value'));
		}
		$(this).closest('ul').slideUp(200);
		$(this).closest('.basic_select_bx').find('.textbx').text($(this).text());
	});

	// 년도 변경
	$('.pg_select_headbx.year_select_bx .select_ul a').click(function(){
		$(this).closest('ul').slideUp(200);

		location.href="?y="+$(this).data('value');
	});

	// 폼 셀렉트 변경
	$('.form_selectbx:not(.email_selectbx) .select_ul a').live('click', function(){
		var $form = $(this).closest('form');
		if($form.length){
			$form.find('input[name="'+$(this).data('field')+'"]').val($(this).data('value'));
		}

		$(this).closest('ul').slideUp(200);
		$(this).closest('.form_selectbx').find('.textbx').text($(this).text());
	});

	// 이메일 뒷문구
	$('.form_selectbx.email_selectbx .select_ul a').click(function(){
		var $form = $(this).closest('form');
		$(this).closest('ul').slideUp(200);
		$(this).closest('.form_selectbx').find('.textbx').text($(this).text());
		$form.find('input[name="email_last"]').val($(this).data('value'));
	});

	// 클럽 소개
	$('.post-54 .target_linkbx.btn_seat').click(function(){
		var $basic_popup = '<div class="basic_popup"></div>';
		var html = '<div class="bg"></div>'+
			'<div class="popup_content">'+
				'<div class="max_container">'+
					'<a href="#;" class="close_btn">close</a>'+
					'<div class="photobx club_bx">'+
						'<div class="photobx_contbx">'+
							'<div class="thum"><img src="/wp-content/uploads/2017/04/information.jpg" alt="종합안내도"></div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';

		if(!$('body').find('.basic_popup').length){
			$('body').append($basic_popup);
		}

		$('.basic_popup').html(html);
		$('.basic_popup').show();
	});

	// 팝업 닫기
	$('.basic_popup .popup_content .close_btn').live('click', function(){
		$(this).closest('.basic_popup').hide();
	});
		
});
