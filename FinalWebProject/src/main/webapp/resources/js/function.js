/******************
 * Class Function *
 ******************/

// Constant
var HEADER_FOOTER = 222;
var MAP_LIST_WIDTH = 600;

/* focus action for label on input */
var toggleLabel = function ($input) {
	$input.each(function () {
		var self = $(this);
		self.on({
			focus : function () {
				$('label[for=' + self.attr('id') +']').hide();
			},
			blur : function () {
				if (self.val() === '') {
					$('label[for=' + self.attr('id') +']').show();
				}
			}
		});
		if (self.val() !== '') {
			self.triggerHandler('focus');
		}
	});
};

var banner = (function(){

	var currentIndex = 0;
	var bannerSize;
	var done = true;
	var tId;

	function _setNext(){
		if(currentIndex + 1 >= bannerSize) moveDown(0);
		else moveDown(currentIndex+1);
	}

	function _setAuto() {
		clearInterval(tId);
		tId = setInterval(function () {
			_setNext();
		}, 5000);
	}

	function moveDown(index){
		done = false;

		$('.sort-result-item').eq(currentIndex).stop().animate({top:40}, 1200, 'easeOutQuint');
		$('.sort-result-item').eq(index).css({top:-40});
		$('.sort-result-item').eq(index).stop().animate({top:0}, 1200, 'easeOutQuint');

		currentIndex = index;

		setTimeout(function(){
			done = true;
			_setAuto();
		}, 1200);
	}

	function moveUp(index){
		done = false;

		$('.sort-result-item').eq(currentIndex).stop().animate({top:-40}, 1200, 'easeOutQuint');
		$('.sort-result-item').eq(index).css({top:40});
		$('.sort-result-item').eq(index).stop().animate({top:0}, 1200, 'easeOutQuint');

		currentIndex = index;

		setTimeout(function(){
			done = true;
			_setAuto();
		}, 1200);
	}

	return{

		init : function(){
			bannerSize = $('.sort-result-item').size();
			if( bannerSize < 2 ) return;
			$('.sort-result-item').css({top:-40});
			$('.sort-result-item').eq(0).css({top:0});

			tId = setInterval(function(){_setNext();}, 5000);

		},

		setNext : function(){
			if(!done) return;
			clearInterval(tId);
			if(currentIndex + 1 >= bannerSize) moveDown(0);
			else moveDown(currentIndex+1);
		},

		setPrev : function(){
			if(!done) return;
			clearInterval(tId);
			if(currentIndex <= 0) moveUp(bannerSize-1);
			else moveUp(currentIndex-1);
		}

	};

})();
/**************
 * Main Event *
 **************/

// Check UA
if( navigator.userAgent.indexOf('Safari') > 0 ){
	if( navigator.userAgent.indexOf('Chrome') > 0 ){
		$('html').addClass('chrome');
	} else {
		$('html').addClass('Safari');
	}
} else if( navigator.userAgent.indexOf('Firefox') > 0 ){
	$('html').addClass('firefox');
} else if( navigator.userAgent.indexOf('Trident/7.0') > 0 ){
	$('html').addClass('ie11');
} else if( navigator.userAgent.indexOf('MSIE 10.0') > 0 ){
	$('html').addClass('ie10');
} else if( navigator.userAgent.indexOf('Windows NT 5.1') > 0 ){
	$('html').addClass('os-xp');
}

$(function(){

	/*
	 * Common
	 */

	(function(){

		// Set height of main-content
		$(window).on('load resize', function(){
			var winHeight = $(window).outerHeight();
			var docHeight = $('body').outerHeight();
			var headerHeight = $('.header').outerHeight();
			var lnbHeight = $('.lnb').outerHeight();
			var footerHeight = $('.footer').outerHeight();
			var $contents = $('.contents');				
			if( winHeight >= docHeight ) {
				$contents.css({height: winHeight - headerHeight - lnbHeight - footerHeight});				
			}
			
		});

		// React about mouse-over event of GNB menu
		(function(){
			$('.js-main-link').on('mouseenter', function(){
				$('.js-main-link').removeClass('on');
				$('.gnb-sub-wrap').removeClass('on');
				$(this).addClass('on').next('.gnb-sub-wrap').addClass('on');
			});

			$('.js-gnb').on('mouseleave', function(){
				$('.js-main-link').removeClass('on');
				$('.gnb-sub-wrap').removeClass('on');
			});
		})();

		// React about mouse-over event of MY CHAMP menu
		(function(){
			$('.js-my').data('open', 'false').on('click', function(){
				if( $(this).data('open') == 'false' ) {
					$('.header-my-sub').addClass('on');
					$(this).data('open', 'true');
				} else {
					$('.header-my-sub').removeClass('on');
					$(this).data('open', 'false');
				}
			});

			$('.header-my').on('mouseleave', function(){
				$('.header-my-sub').removeClass('on');
				$('.js-my').data('open', 'false');
			});
		})();

		// React about mouse event of select box
		(function(){

			$('.select').data('open', 'false').on('click', function(){

				$('.select').data('open', 'false').next('.select-items').removeClass('on');

				if( $(this).data('open') == 'false' ) {
					$(this).data('open', 'true').next('.select-items').addClass('on');
				} else {
					$(this).data('open', 'false').next('.select-items').removeClass('on');
				}
			});

			$(document).on('click', function(e){
				if( $(e.target).closest('.select-wrapper').length > 0 ){
					return false;
				} else {
					$('.select').data('open', 'false').next('.select-items').removeClass('on');
				}
			});

			// select list
			$('.select-items li').on('click', function(){

				var selectedItem = $(this).text();
				var $selectLabel = $(this).parents('.select-items').prev('.select').find('.label');

				$(this).addClass('selected')
					.siblings().removeClass('selected')
					.parents('.select-items').removeClass('on')
					.prev('.select').data('open', 'false');

				$selectLabel.html(selectedItem);

			});			
			$('.select-wrapper').on('mouseleave', function(){
				$('.select-items').removeClass('on');				
			});

		})();

		// Focus in password input
		$('.pwd, .pwd-confirm').data('focus', 'false').on({
			focusin: function() {
				$(this).data('focus', 'true').addClass('focus');
			},

			focusout: function() {
				if( $(this).val().length > 0 ) {
					return false;
				} else {
					$(this).data('focus', 'false').removeClass('focus');
				}
			}
		});

		// toggle label when focus on input
		(function() {
			toggleLabel( $('.js-label-toggle') );
		})();

		// toggle label when focus on input
		(function() {
			$('.js-option-toggle').each(function () {
				var self = $(this),
					options = self.find('.js-toggle-item'),
					btn = self.find('.js-toggle-btn');

				btn.on('click', function(e) {
					e.preventDefault();

					if (btn.hasClass('on')) {
						btn.removeClass('on');
						btn.text('더보기');
						//options.hide();
						options.fadeOut(150);
					} else {
						btn.addClass('on');
						btn.text('숨기기');
						//options.show();
						options.fadeIn(250);
					}

				});

				options.hide();
			});
		})();

		// tab activation
		(function() {
			$('.js-tab').each(function() {
				var self = $(this),
					items = self.find('.js-tab-link'),
					hasSection = false,
					sections;

				if (items.attr('data-target')) {
					hasSection = true;
					sections = $('.js-tab-section');
				}

				items.on('click', function(e) {
					e.preventDefault();
					items.removeClass('on');
					$(this).addClass('on');

					if (hasSection) {
						sections.removeClass('on');
						sections.filter('.' + $(this).attr('data-target')).addClass('on');
					}
				});

			});
		})();





		// condition select activation
		(function() {
			$('.js-condition').each(function() {
				var self = $(this),
					items = self.find('.js-condition-item'),
					pannels = self.find('.js-condition-pannel');

				items.on('click change', function(e) {

					var crtCon = $(this).attr('data-condition'),
						crtPannel = pannels.filter('.' + crtCon);

					if (crtPannel.length > 0) {
						pannels.removeClass('on');
						crtPannel.addClass('on');
					}

				});

			});
		})();

		// basic on off
		(function() {
			var onoffBtn = $('.js-onoff');

			if (onoffBtn.length > 0) {
				onoffBtn.on('click', function() {
					$(this).toggleClass('on');
				});
			}
		})();

		// expand more area
		(function() {
			var more = $('.js-show-more');

			if (more.length > 0) {
				more.each(function() {
					var cont = $(this).find('.js-show-cont'),
						btn = $(this).find('.js-show-btn'),
						grad = $(this).find('.expandable-indicator');

					btn.on('click', function(e){
						e.preventDefault();
						$(this).toggleClass('on');
						cont.toggleClass('on');
						grad.toggleClass('on');
					});

				});
			}
		})();

	})();

	/*
	 * list
	 */

	// list sort menu toggle sub
	(function() {
		var sortMenu = $('.js-sort-menu');

		if (sortMenu.length > 0) {
			var menus = sortMenu.find('.sort-menu-item'),
				btns = sortMenu.find('.sort-menu-btn'),
				sub = sortMenu.find('.sort-menu-sub');

			btns.on('click', function() {
				var par = $(this).parents('.sort-menu-item');

				if (par.hasClass('on')) {
					par.removeClass('on');
				} else {
					menus.removeClass('on');
					par.addClass('on');
				}
			});

			sub.on('mouseleave', function() {
				//$(this).parents('.sort-menu-item').removeClass('on');
			});

		}

	})();

	// list sort menu toggle from to
	(function() {
		var subInput = $('.sort-menu-sub-input');

		if (subInput.length > 0) {

			subInput.each(function() {
				var input = $(this).find('.sort-input');

				input.on('focus', function() {
					var type = $(this).attr('data-type'),
						par = $(this).parents('.sort-menu-sub');

					par.removeClass('from').removeClass('to');
					par.addClass(type);
				});
				
				input.on('change', function() {
					var from, to;
					from = parseInt($(this).closest('.sort-menu-sub-input').find('input[data-type="from"]').val());
					to = parseInt($(this).closest('.sort-menu-sub-input').find('input[data-type="to"]').val());
					if (from > to) {
						$(this).closest('.sort-menu-sub-input').find('input[data-type="from"]').val(to);
						$(this).closest('.sort-menu-sub-input').find('input[data-type="from"]').trigger('click');
						// 선택 아이템 반전	settimeout 타이머를 걸어야할듯 
						$(this).closest('.sort-menu-sub').find('.sort-menu-sub-list.from').find('.sort-menu-sub-btn').removeClass('on');
					}
					
					
				});

				input.on('keydown', function(e) {
					var type = $(this).attr('data-type'),
					 toInput;
					if(type == 'from' && e.which == 13) {
						toInput = $(this).parents('.sort-menu-sub-input').find('.sort-input[data-type=to]');
						toInput.trigger('focus');
					}
				});

			});
		}

	})();

	// list sort detail toggle option
	(function() {
		var detail = $('.js-detail-toggle');

		if (detail.length > 0) {

			detail.each(function() {
				var self = $(this),
					btn = self.find('.js-detail-toggle-btn');

				btn.on('click', function() {
					self.toggleClass('on');
					$(this).toggleClass('on');
				});

			});
		}

	})();

	// tag list toggle option
	(function() {
		var allBtn = $('.js-tag-toggle');

		if (allBtn.length > 0) {
			allBtn.on('click', function() {
				$(this).toggleClass('on');
				$('.sort-tag-all').toggleClass('on');
			});

		}
	})();

	/*
	 * MAP
	 */

	// height & map init
	(function(){

		var winWidth = $(window).outerWidth();
		var winHeight = $(window).outerHeight();
		var docHeight = $('body').outerHeight();
		var headerHeight = $('.header').outerHeight();
		var lnbHeight = $('.lnb').outerHeight();
		var footerHeight = $('.footer').outerHeight();
		var $contents = $('.contents');
		var contHeight = winHeight - headerHeight - lnbHeight - footerHeight;


		if( $('html').hasClass('map') ) {
			$contents.css({height: contHeight});
			$('.section-map').css({
				width: winWidth - MAP_LIST_WIDTH,
				height: contHeight
			});
			$('.section-list').css({
				height:contHeight
			});
			$('.section-list-detail-popup').css({
				height:contHeight
			});
			$('.sort-detail-scroll').css({
				height:contHeight-126
			});
			$('.sale.map-detail-view, .sale-simple').css({
				height:contHeight-119
			});
			$('.land-popup-scroll').css({
				height:contHeight-311
			});
			
			$('.sale.user-sale-view').css({
				height:contHeight-79
			});

			$('.section-list-detail-popup-content').css({height: contHeight - 74});

		} else if( winHeight >= docHeight ) {
			$contents.css({height: contHeight});
		}

		// 다음 지도 API 관련 변수 선언
		var container = document.getElementById('map');

		if( container != null ) {
			var options = {
				center: new daum.maps.LatLng(37.5215971, 127.05771319999997),
				level: 3
			};
			var map = new daum.maps.Map(container, options);
		}

		// 다음 지도 API 관련 변수 선언
		var popupContainer = document.getElementById('popup-map');

		if( popupContainer != null ) {
			var options = {
				center: new daum.maps.LatLng(37.5215971, 127.05771319999997),
				level: 3
			};
			var map = new daum.maps.Map(popupContainer, options);
		}

		$(window).on('load resize', function(){

			var winWidth = $(window).width();
			var winHeight = $(window).outerHeight();
			var docHeight = $('body').outerHeight();
			var headerHeight = $('.header').outerHeight();
			var lnbHeight = $('.lnb').outerHeight();
			var footerHeight = $('.footer').outerHeight();
			var $contents = $('.contents');
			var contHeight = winHeight - headerHeight - lnbHeight - footerHeight;

			if( $('html').hasClass('map') ) {
				$contents.css({height: contHeight});
				$('.section-map').css({
					width: winWidth - MAP_LIST_WIDTH,
					height: contHeight
				});
				$('.section-list').css({
					height:contHeight
				});
				$('.section-list-detail-popup').css({
					height:contHeight
				});
				$('.sort-detail-scroll').css({
					height:contHeight-126
				});
				$('.sale.map-detail-view, .sale-simple').css({
					height:contHeight-119
				});
				$('.sale.user-sale-view').css({
					height:contHeight-79
				});
			} else if( winHeight >= docHeight ) {
				$contents.css({height: contHeight});
			}
		});

	})();

	// search result rolling
	(function(){

		$(window).on('load', function(){
			banner.init();
		});

		$('.js-btn-prev').on('click', function(){
			banner.setNext();
		});

		$('.js-btn-next').on('click', function(){
			banner.setPrev();
		});

	})();

	// draggable search
	(function(){

		var searchArea = $('.search-area');
		var isDrag = false;

		if (searchArea.length > 0) {
			$('.search-area').draggable({
				handle: '.search-drag-handle',
				containment: '.section-map',
				scroll: false,
				start: function(){
					isDrag = true;
				}
			});
		}

		$('.search-drag-handle').data('fold', 'false').on('click', function(){

			if( isDrag == false && $(this).data('fold') == 'false' ) {

				$(this).closest('.search-area').addClass('fold');
				$(this).closest('.search-area').find('.search-tab-area').addClass('hide');
				$(this).closest('.search-area').find('.search-form-area').addClass('hide');

				$(this).data('fold', 'true');

			} else if( isDrag == false && $(this).data('fold') == 'true' ){
				$(this).closest('.search-area').removeClass('fold');
				var instance = $(this);
				
				setTimeout(function() {
					instance.closest('.search-area').find('.search-tab-area').removeClass('hide');
					instance.closest('.search-area').find('.search-form-area').removeClass('hide');
				}, 500);		
				
				$(this).data('fold', 'false');

			}

			isDrag = false;
			
			$(this).closest('.search-area').css('width', '');
			$(this).closest('.search-area').css('height', '');
		});

	})();

	// draggable search - tab action
	(function(){

		$('.search-tab').on('click', function(){

			var index = $('.search-tab-area .search-tab').index( $(this) );

			$('.search-tab').removeClass('on');
			$('.search-area .search-form-area').removeClass('on');

			$(this).addClass('on');
			$('.search-area .search-form-area').eq(index).addClass('on');

		});

	})();

	// delete tag
	(function() {
		var tagDelBtn = $('.sort-option-btn-del');

		if (tagDelBtn.length > 0) {
			tagDelBtn.on('click', function() {
				$(this).parents('.sort-option-tag-item').remove();
			});

		}
	})();

	// select view type
	(function(){

		$('.btn-view').on('click', function(){

			$('.btn-view').removeClass('on');
			$(this).addClass('on');

			var classArr = $(this).attr('class').split(' ');

			$('.section-list .sale').removeClass('on');

			$('.' + classArr[1]).addClass('on');

		});

	})();

	// show tooltip
	(function() {
		var tooltipBtn = $('.js-show-tooltip');

		if (tooltipBtn.length > 0) {
			tooltipBtn.each(function() {
				var btn = $(this),
					tooltip = $(this).next('.tooltip');

				btn.on({
					'mouseenter': function() {
						$(this).addClass('on');
						tooltip.addClass('on');
					},
					'mouseleave': function() {
						$(this).removeClass('on');
						tooltip.removeClass('on');
					}
				});

				tooltip.on({
					'mouseenter': function() {
						btn.addClass('on');
						$(this).addClass('on');
					},
					'mouseleave': function() {
						btn.removeClass('on');
						$(this).removeClass('on');
					}
				});

			});
		}
	})();

	// slide in list
	(function() {
		$('.js-list-slide').each(function() {
			var self = $(this);

			self.slidesjs({
		    width: 177,
		    height: 133,
		    pagination: {
          active: false
        }
		  });
		});
	})();

	// view & hide detail popup by list
	(function(){

		$('.js-view-detail-popup').on('click', function(){
			$('.section-list-detail-popup').stop().animate({
				width:828,
				right:600
			}, 500, function(){
				$('.section-list-detail-popup .popup-top-action-group').addClass('on');
				$('.section-list-detail-popup .popup-top-menu').addClass('on');
			});
			$('#land-popup').stop().animate({
				width:0
			}, 300);
			$('#land-popup').css({
				"z-index":"800"
			});
			$('#land-popup').css({					
				"border":"none"
			});
			$('#land-popup .mid .icon-star').removeClass("on");

			//추가 부분
			setTimeout(function(){
			  var tableHeight = $(".detail-table").height();
			  var userHeight = $(".detail-user.bottom").height();
			  if( tableHeight >= userHeight ) {
				 $(".detail-user.bottom").css("height",tableHeight-2);
			  }
			}, 1000);
			// 추가부분 끝

		});

		$('.section-list-detail-popup .popup-top-menu-btn.close').on('click', function(){

			$('.section-list-detail-popup .popup-top-action-group').removeClass('on');
			$('.section-list-detail-popup .popup-top-menu').removeClass('on');

			$('.btn-map-area').removeClass('expand');

			$('.section-list-detail-popup').stop().animate({
				width:0
			}, 500);

			$('.section-list-content').stop().animate({
				width:600
			}, 500);

		});



		$('.estate-agent-more, .simple-estate-agent-more').on('click', function(){			
			$('#land-popup').stop().animate({
				width:785
			}, 300, function(){
				$('#land-popup').css({
					"z-index":"999"
				});
				$('#land-popup').css({					
					"border":"1px solid #ddd"
				});
				$('#land-popup .mid .icon-star').addClass("on");
			});
			$('.section-list-detail-popup').stop().animate({
				width:0
			}, 300);
		});
		$('#land-popup .close').on('click', function(){			
			$('#land-popup').stop().animate({
				width:0
			}, 300, function(){
				$('#land-popup').css({
					"z-index":"800"
				});
				$('#land-popup').css({					
					"border":"none"
				});
				$('#land-popup .mid .icon-star').removeClass("on");
			});
		});







	})();

	// view & hide detail popup by marker
	$('.js-marker').on('click', function(){

		$('.btn-map-area').addClass('expand');

		$('.section-list-detail-popup').stop().animate({
			//width:828,
			width:828,
			right:0
		}, 500, function(){
			$('.section-list-detail-popup .popup-top-action-group').addClass('on');
			$('.section-list-detail-popup .popup-top-menu').addClass('on');
		});

		//$('.section-list-content').stop().animate({
			//width:0
		//}, 500);

	});

	// view & hide ask pop in detail popup
	(function(){

		$('.js-ask').data('open', 'false').on('click', function(){
			if( $(this).data('open') == 'false' ) {
				$('.popup-top-ask').addClass('on');
				$(this).data('open', 'true');
			} else {
				$('.popup-top-ask').removeClass('on');
				$(this).data('open', 'false');
			}
		});

	})();

	// view & hide popup list item
//	$('.js-subtitle').data('open', 'false').on('click', function(){
//		if( $(this).data('open') == 'false' ) {
//			$(this).addClass('on');
//			$(this).closest('.part-top').next('.part-mid').removeClass('fold-content');
//			$(this).data('open', 'true');
//		} else {
//			$(this).removeClass('on');
//			$(this).closest('.part-top').next('.part-mid').addClass('fold-content');
//			$(this).data('open', 'false');
//		}
//		
//		return false;
//	});

	// view search education
	(function(){

		$('.js-edu-view').data('view', 'false').on('click', function(){

			if( $(this).data('view') == 'false' ) {
				$(this).addClass('view-on');
				$('.search-edu-popup').addClass('on');
				$(this).data('view', 'true');
			} else {
				$(this).removeClass('view-on');
				$('.search-edu-popup').removeClass('on');
				$(this).data('view', 'false');
			}

		});

	})();

	// delete list
	(function(){

		$('.js-del-list').on('click', function(){
			$(this).closest('.sale-list').stop().animate({left:'100%'}, 1000, 'easeOutQuint' ,function(){
				$(this).remove();
				if( $(this).attr('id') != undefined ) {
					$('#simple-' + $(this).attr('id')).remove();
				}
			});
		});

	})();

	// select subway line
	(function() {
		var subway = $('.js-select-subway-line'),
			type;

		if (subway.length > 0) {
			type = subway.find('.subway-type li');
			type.on('click', function() {
				var target = $(this).attr('data-type');

				subway.attr('class', 'pick-subway js-select-subway-line');
				subway.addClass(target);
				$('.pick-subway-line-' + target).find('.pick-subway-line-btn').eq(0).trigger('click');

			});
		}
	})();

	// toggle loc, subway
	(function() {
		var loc = $('.pick-loc'),
			subway = $('.pick-subway');

		if (loc.length > 0) {
			$('.js-toggle-pick-loc').on('click', function(e) {
				e.preventDefault();

				subway.hide();
				subway.data('open', false);
				$('.js-toggle-pick-subway').removeClass('on');

				if (loc.data('open') == true) {
					loc.fadeOut('fast');
					loc.data('open', false);
					$(this).removeClass('on');
				} else {
					loc.fadeIn('fast');
					loc.data('open', true);
					$(this).addClass('on');
				}
			});

			$('.js-toggle-pick-subway').on('click', function(e) {
				e.preventDefault();

				loc.hide();
				loc.data('open', false);
				$('.js-toggle-pick-loc').removeClass('on');

				if (subway.data('open') == true) {
					subway.fadeOut('fast');
					subway.data('open', false);
					$(this).removeClass('on');
				} else {
					subway.fadeIn('fast');
					subway.data('open', true);
					$(this).addClass('on');
				}
			});

			$('.js-close-loc').on('click', function(e) {
				e.preventDefault();

				$('.js-toggle-pick-loc').trigger('click');
			});

			$('.js-close-subway').on('click', function(e) {
				e.preventDefault();

				$('.js-toggle-pick-subway').trigger('click');
			});
		}
	})();

	/*
	 * detail
	 */

	// detail page slide
	(function (){
		var detailGallery = $('.js-detail-gallery');

		if (detailGallery.length > 0) {
			detailGallery.PikaChoose({
				carousel:true,
				showCaption:false,
				autoPlay:false,
				text: {
						previous: '이전',
						next: '다음'
					},
				thumbOpacity:1
			});
		}
	})();

	// scroll action
	(function() {
		var detailSide = $('.detail-sidebar1'),
			tTop = 0,
			btnTgHelp = $('.js-toggle-detail-help'),
			helpForm = $('.detail-user-help-wrap'),
			fixedMenu = $('.detail-user-help-fixed-menu');

		if (detailSide.length > 0) {
			tTop = $('.detail-user-body').offset().top - 50;

			$(window).on('scroll', function() {
				if ($(this).scrollTop() > tTop) {
					$('.detail-header-fixed').fadeIn('fast');
					$('.detail-sidebar1').addClass('fixed');
				} else {
					$('.detail-header-fixed').fadeOut('fast');
					$('.detail-sidebar1').removeClass('fixed');
				}
			});

			btnTgHelp.on('click', function(e) {
				e.preventDefault();

				helpForm.slideDown('fast');
				fixedMenu.addClass('open');

			});

			fixedMenu.find('.cancel').on('click', function(e) {
				e.preventDefault();

				helpForm.slideUp('fast');
				fixedMenu.removeClass('open');

			});
		}

	})();

	/* anchor scroll  */
	(function() {
		function initScrollTab(tabs, gap) {
			gap = gap || 0;

			tabs.on('click', function(e){
				var ty = $( $(this).attr('href') ).offset().top - gap;
				$('html').stop().animate({scrollTop : ty}, 700, 'easeOutCubic'); // for IE
				$('body').stop().animate({scrollTop : ty}, 700, 'easeOutCubic');
				e.preventDefault();
			});
		}

		initScrollTab($('.detail-side-link .js-tab-link'), 50);
	})();

	/*
	 * interior
	 */
	 // company detail slide
	(function() {
		var examSlide = $('.js-interior-exam');

		if (examSlide.length > 0) {
			examSlide.each(function() {
		    $(this).jcarousel({
	        itemFallbackDimension: 300
		    });
			});
		}
	})();

	// company info slide
	(function (){
		var listGallery = $('.js-list-gallery');

		if (listGallery.length > 0) {
			listGallery.PikaChoose({
				carousel:true,
				showCaption:false,
				autoPlay:false,
				text: {
						previous: '이전',
						next: '다음'
					},
				thumbOpacity:1
			});
		}
	})();

	/*
	 * popup
	 */

	// React about event of layer popup
	(function(){

		// Open general popup
		$('.js-open-popup').on('click', function(e) {
			var targetPop = $( $(this).attr('data-href') );
			if (targetPop.length > 0) {
				$('.dimmed').addClass('on');
				$('.popup').removeClass('on');
				targetPop.addClass('on');
			}
			e.preventDefault();
		});

		// Close general popup
		$('.js-close-popup').on('click', function(e) {
			$('.dimmed').removeClass('on');
			$('.popup').removeClass('on');
			e.preventDefault();
		});

		// Confirm OK
		$('.js-confirm-ok').on('click', function(e) {
			$('.dimmed').removeClass('on');
			$('.popup').removeClass('on');
			e.preventDefault();
		});

		// Confirm Cancel
		$('.js-confirm-cancel').on('click', function(e) {
			$('.dimmed').removeClass('on');
			$('.popup').removeClass('on');
			e.preventDefault();
		});

	})();

	// focus on input
	(function() {
		toggleLabel( $('.popup-join-form-input') );
	})();

	// pop post tab
	(function() {
		var tabBtn = $('.pop-tab-link'),
			tabCont = $('.pop-tab-cont');

		tabBtn.on('click', function(e) {
			tabBtn.removeClass('on');
			tabCont.removeClass('on');

			$(this).addClass('on');
			$($(this).attr('href')).addClass('on');
			e.preventDefault();
		});
	})();

	/* pop post toggle input label */
	(function() {
		var form = $('.pop-input-holder');

		$(window).on('load', function() {
			toggleLabel(form);
		});

		function toggleLabel (el) {
			el.each(function () {
				var that = $(this);
				that.on({
					focus : function () {
						$('label[for=' + that.attr('id') +']').hide();
					},
					blur : function () {
						if (that.val() === '') {
							$('label[for=' + that.attr('id') +']').show();
						}
					}
				});
				if (that.val() !== '') {
					that.triggerHandler('focus');
				}
			});
		}
	})();

	/*
	 * CS Center
	 */

	(function(){

		$('.faq-list-title').data('open', 'false').on('click', function(){

			if( $(this).data('open') == 'false' ) {
				$(this).next('.faq-list-content').addClass('open');
				$(this).data('open', 'true');
			} else {
				$(this).next('.faq-list-content').removeClass('open');
				$(this).data('open', 'false');
			}


		});

	})();

	// 맵 (실거래가, 주변정보, 주변 유사매물 funtion)
	
	(function(){
		$('.detail-map-tab-link.js-tab-link').click(function(){
		var aH1 = $(".contents-part").height();
		var aH2 = $(".detail-summary").height();
		var aH3 = $(".detail-info").height();
		var aH4 = $(".detail-building-info").height();
		var aH5 = $(".detail-option-info").height();
		var aH6 = $(".detail-description").height();
		var aH7 = $(".detail-loans").height();
		var aH8 = $(".detail-price-info").height();
		var aH9 = $(".detail-deal-info").height();
		var hblank = 70;
		var y = aH1+aH2+aH3+aH4+aH5+aH6+aH7+aH8+aH9+hblank;
		$('.section-list-detail-popup-content').animate({ scrollTop : y}, 300 );
		});
	})();


/*
	var aaa = $(".section-list-detail-popup-content")[0].scrollHeight
	var bbb= $(".detail-map").height()+50;
	var y1 = aaa-bbb;
	$('.section-list-detail-popup-content').animate({ scrollTop : y1}, 300 );
*/




});




$(function() {
	/* chage list */
	(function() {
		var btnWish = $('.js-view-list-wish'),
			btnRecent = $('.js-view-list-recent'),
			btnDefault,
			sectionLists;

		if (btnWish.length > 0 && btnRecent.length > 0) {
			btnDefault = $('.js-view-list-default');
			sectionLists = $('.section-list-content');

			btnWish.on('click', function(e) {
				e.preventDefault();
				btnWish.addClass('on');
				btnRecent.removeClass('on');
				sectionLists.removeClass('on');
				sectionLists.filter('.section-wish-list').addClass('on');
			});

			btnRecent.on('click', function(e) {
				e.preventDefault();
				btnWish.removeClass('on');
				btnRecent.addClass('on');
				sectionLists.removeClass('on');
				sectionLists.filter('.section-recent-list').addClass('on');
			});

			btnDefault.on('click', function(e) {
				document.listType = '';
				e.preventDefault();
				btnWish.removeClass('on');
				btnRecent.removeClass('on');
				sectionLists.removeClass('on');
				sectionLists.filter('.section-default-list').addClass('on');
			});

		}
	})();


	/* memo in list */
	(function() {
		var memos = $('.js-toggle-memo');

		if (memos.length > 0) {
			memos.each(function(){
				var self = $(this),
					memoRead = self.parents('.sale-list').find('.user-list-memo-read'),
					memoWrite = self.parents('.sale-list').find('.user-list-memo-write'),
					btnMemoEdit = memoRead.find('.edit'),
					hasComment = !!memoRead.find('.user-list-memo-cont').text().length;

				self.on('click', function(e) {
					e.preventDefault();

					if ($(this).hasClass('on')) {
						memoRead.removeClass('on');
						memoWrite.removeClass('on');
						$(this).removeClass('on');
					} else {
						if (hasComment) {
							memoRead.addClass('on');
							self.addClass('on');
						} else {
							memoWrite.addClass('on');
							self.addClass('on');
						}
					}
				});

				btnMemoEdit.on('click', function(e){
					e.preventDefault();

					memoRead.removeClass('on');
					memoWrite.addClass('on');
				});

			});
		}
	})();

	(function() {
		var form = $('.pop-input-holder');

		$(window).on('load', function() {
			toggleLabel(form);
		});

		function toggleLabel (el) {
			el.each(function () {
				var that = $(this);
				that.on({
					focus : function () {
						$('label[for=' + that.attr('id') +']').hide();
					},
					blur : function () {
						if (that.val() === '') {
							$('label[for=' + that.attr('id') +']').show();
						}
					}
				});
				if (that.val() !== '') {
					that.triggerHandler('focus');
				}
			});
		}
	})();

	(function(){
      var len = $('.carousel.carousel-stage').find("li").length;
      if(len == 1){
         $(".connected-carousels .prev-navigation, .connected-carousels .next-navigation").css("display","none");
      }
   })();

	// 이용약관 tab
	/*
	(function() {
		var tabBtn = $('.service-tab-link'),
			tabCont = $('.service-tab-cont');

		tabBtn.on('click', function(e) {
			tabBtn.removeClass('on');
			tabCont.removeClass('on');

			$(this).addClass('on');
			$($(this).attr('href')).addClass('on');
			e.preventDefault();
		});
	})();
	*/

	// 공동중개매물	
	(function(){
		$(".lnb-item").hover(function(){
			$(this).children(".js-smart-link").addClass("on").siblings(".smart-sub-wrap").addClass("on");
		},function(){
			$(this).children(".js-smart-link").siblings(".smart-sub-wrap").removeClass("on");
			$(this).children(".js-smart-link").removeClass("on");
		});
	})();

	// 전체체크
	(function(){
		$("#check_all").click(function() {
			if($("#check_all").prop("checked")){
				$("input:checkbox").prop("checked", true);
				//$("input:checkbox").addClass("checked");				
			}else{
				$("input:checkbox").prop("checked", false);
				//$("input:checkbox").removeClass("checked");				
			}
		});
	})();

	// Set height of main-content
	(function(){
		// Set height of main-content
		$(window).on('load resize', function(){
         var Ww = $(window).width();
         var Hh = $(window).height();
         var popW = $(".popup").width();
         var popH = $(".popup").height();		 
		$(".popup").css("top", (Hh - $(".popup").outerHeight())/2);
		$(".popup").css("left", (Ww - $(".popup").outerWidth())/2);
		return this;
		});
	})();


	// faq function
	(function(){
		$(".item-qna-box-wrap").hide();
		$(".item-qna-box-wrap").parent().css("border-bottom","none");
		$(".js-faq").click(function(){
			$(".item-qna-box-wrap").slideUp("fast");
			$(this).parent().parent().next().find(".item-qna-box-wrap").slideDown("normal");
		});
	})();


	//* window check 
	var client = function(keyword, spliter){  
		  var agent = navigator.userAgent.toLowerCase();  
		  return agent.indexOf(keyword)>-1 ?  
			  parseFloat(agent.split(spliter || keyword).pop().replace(/^[^\w;]+/, '')) :  
			  null;  
	};  
	var ie = client('msie') || client('trident', 'rv:');  
	if(ie && ie<8){ 
	   var openNewWindow = window.open("about:blank");
	   openNewWindow.location.href = 'http://windows.microsoft.com/ko-kr/internet-explorer/download-ie';
	   }else if(ie && ie<10){ 
	   // 8, 9 
	   }else{ 
	   // others 
	} 


	


	// 업종 toggle
	(function() {
		$('.js-option-store-toggle').each(function () {
			var self = $(this),
				options = self.find('.js-toggle-store-item'),
				btn = self.find('.js-toggle-store-btn');				

			btn.on('click', function(e) {
				//e.preventDefault();
				$('.js-toggle-store-item').slideUp(150);
				$('.sort-menu-sub.store .check-label-text.type-icon').removeClass('ona');				
				//$(".sort-menu-sub.store .check-label").removeClass('on');
				//$(".sort-menu-sub.store .check-box").addClass('no');

				if (btn.hasClass('ona')) {
					btn.removeClass('on');
					
					//btn.text('더보기');
					//options.hide();
					options.slideDown(150);
					
					
				} else {
					btn.addClass('ona');
					btn.parent("label").addClass('on');
					//btn.text('숨기기');
					//options.show();
					options.slideDown(250);
					//btn.parent("label").parent(".check-wrap").find(".check-box").removeClass('no');
				}

			});

			options.hide();
		});
	})();


	(function(){		
		$(".sort-menu-sub.store .check-label").click(function(){
			if( $(this).hasClass('on') ) {
				$(this).removeClass("on");
			} else{
				$(this).addClass("on");
			}
		});
	})();

	// 항목삭제 버튼01
	(function(){
		$('.js-del-btn').on('click', function(){
			$(this).parent().parent().parent().find("#js-table:last").stop().animate({left:'100%'}, 10, 'easeOutQuint' ,function(){
				$(this).remove();				
			});
		});
	})();
	// 항목삭제 버튼02
	(function(){
/*		$('.js-del-btn02').on('click', function(){
			$(this).closest("tr").stop().animate({left:'100%'}, 10, 'easeOutQuint' ,function(){
				$(this).remove();				
			});
		});*/
	})();


	 // 항목추가 버튼01
	(function(){	 
		$(".js-addBtn").on('click', function(){				
			var clickedRow = $(this).parent();
			var cls = clickedRow.attr("class");			
			var newrow = clickedRow.clone(true);			
			//newrow.find(".js-addBtn").remove();
			newrow.insertAfter($("#js-table ."+cls+":last"));			
		});
	})();

	// 항목추가 버튼02
	(function(){	  
/*		$(".js-addBtn02").on('click', function(){			
			var clickedRow = $(this).parent().parent();
			var cls = clickedRow.attr("class");			
			var newrow = clickedRow.clone(true);			
			//newrow.find(".js-addBtn02").remove();
			newrow.insertAfter($("#js-table ."+cls+":last"));
		});*/
	})();


	 // 상세정보 추가 버튼01
	(function(){	 
		$(".js-ddBtnTbl").on('click', function(){	
			var clickedRow = $(this).parent().parent().parent().find("#js-table");			
			var cls = clickedRow.attr("class");			
			var newrow = clickedRow.clone(true);
			newrow.find("#js-table:eq(0)").addClass('tr_child'); 		
			newrow.insertAfter($(".js-option-toggle ."+cls+":last"));						
		});
	})();

     // 상세정보 추가 버튼02
	(function(){
		/*$(".js-ddBtnTbl02").click(function(){			
			var lastItemNo = $("#js-table tr:last").attr("class").replace("item", "");

			var newitem = $("#js-table tr:eq(1)").clone(true);
			newitem.removeClass();
			newitem.find("td:eq(0)").attr("rowspan", "1");
			newitem.addClass("item"+(parseInt(lastItemNo)+1));
			$("#js-table").append(newitem);
		});*/
	})();






});





























