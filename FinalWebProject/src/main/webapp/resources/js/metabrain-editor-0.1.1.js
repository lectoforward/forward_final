/*
* Metabrain Editor v0.1.1 - 10.18.2016 Released
* Copyright 2016 Metabrain. Licensed
* 무단 복제, 변조하여 사용하여 생기는 모든 사항에 대해서는 Metabrain 및 제작자에게 책임이 없습니다.
*/

(function($, w){
	// DONE :
	// 크기
	// 글꼴
	// 굵게
	// 밑줄
	// 취소
	// 기울이기
	// 글자색
	// 배경색
	// 정렬
	// URL 자동 링크, 글 입력시
	// URL 링크
	// 본문에 이미지 추가
	// 인용
	// 
	// TODO :
	// URL 자동 링크, 붙여넣기 시
	// 리스트 타입
	// 되돌리기, 원래대로
	// 로그인 아이디(WP)
	// 파일이나 이미지 첨부(WP)
	// 임시 저장(WP)
	// 등록 형태(WP, draft, publish)
	// 탭으로 여백 조정(indent, outdent)
	// 코드
	// 보안, 허용 태그
	// 오픈그래프, 비디오 모듈
	// 아이콘 관련 함수, 적용
	
	$.fn.metabraineditor = function(options){
		return this.each(function(){
			new MetaBrainEditor(this, options).init();
		});
	};

	var MetaBrainEditor = function(container, options){
		this.$body = $('body');
		this.container = container;
		this.$container = $(container);
		this.options = options;
	};

	(function(Editor){
		Editor.PLUGINS = {},
		Editor.prototype = {
			defaults: {
				USER: {},
				// options
				mode: 'inline',
				buttons: ['fontFamily', 'fontSize', 'foreColor', 'backColor', 'bold', 'italic', 'underline', 'link', 'citation', 'align'],
				// externalButtons : ['cover'],
				externalButtons : [],
				fontSizes: {
					'제목 1': '1.6em',
					'제목 2': '1.4em',
					'제목 3': '1.2em',
					"본문": "default",
					// "기본크기": "default",
				},
				fontFamily: {
					"나눔바른고딕": "나눔바른고딕, Nanum Barun Gothic",
					"나눔고딕": "나눔고딕, Nanum Gothic",
					"나눔스퀘어": "나눔스퀘어, Nanum Square",
					"나눔명조": "나눔명조, nanummyeongjo",
					"Arial": "Arial",
					"Helvetica": "Helvetica, Sans-serif",
					"Verdana": "Verdana, Sans-Serif",
					"sans-serif": "Sans-Serif",
					"Times": "times, serif",
					"기본글꼴": "default",
				},
				foreColors: ["#60717f", "#959595", "#333333", "#f4c216", "#16b06d", "#f6665b", "#00c3bd", "#5c5cb2", "#ffffff", "initial"], //, "initial"
				backColors: ["#ffffff", "#959595", "#333333", "#f4c216", "#16b06d", "#f6665b", "#00c3bd", "#ec4c6a", "#5c5cb2", "initial"],
				citations: ["style_one", "style_two", "style_three"],
				aligns: ["justifyLeft", "justifyRight", "justifyCenter", "justifyFull"],
				paragraphy: false,
				placeholder: '글을 입력해주세요. Shift + Enter: 위로 줄바꿈, Ctrl + Enter: 강제 줄바꿈'
			},
			commandContext: {
				justifyLeft: {
					name: 'justify_left',
					title: '좌측 정렬',
					icon: '',
					shortcut: '',
				},
				justifyCenter: {
					name: 'justify_center',
					title: '중앙 정렬',
					icon: '',
					shortcut: '',
				},
				justifyRight: {
					name: 'justify_right',
					title: '우측 정렬',
					icon: '',
					shortcut: '',
				},
				justifyFull: {
					name: 'justify_full',
					title: '꽉찬 정렬',
					icon: '',
					shortcut: '',
				},
				fontFamily: {
					name: 'font_family',
					title: '글꼴',
					icon: '',
					shortcut: '',
					dropdown: 'fontFamily'
				},
				fontSize: {
					name: 'font_size',
					title: '크기',
					icon: '',
					shortcut: '',
					dropdown: 'fontSizes'
				},
				bold: {
					name: 'font_bold',
					title: '굵게',
					icon: true,
					shortcut: ''
				},
				underline: {
					name: 'font_underline',
					title: '밑줄',
					icon: true,
					shortcut: ''
				},
				strikeThrough: {
					name: 'strike_through',
					title: '취소선',
					icon: false,
				},
				italic: {
					name: 'font_italic',
					title: '기울이기',
					icon: true,
					shortcut: ''
				},
				foreColor: {
					name: 'font_color',
					title: '글자색',
					icon: true,
					shortcut: '',
					dropdown: 'foreColors',
					append: '<span class="color_codebx" style="background:#fff;"></span>',
					displayValue: '#fff',
					withSelector: {
						// 해당 엘레멘트의 속성 값도 변경한다.
						'.tool_font_color .tool_select_bx .color_codebx': 'background-color'
					},
					propertyName: 'color',
				},
				backColor: {
					name: 'font_back',
					title: '배경색',
					icon: true,
					shortcut: '',
					dropdown: 'backColors',
					append: '<span class="color_codebx" style="border:solid 1px #fff;"></span>',
					displayValue: '#fff',
					withSelector: {
						// 해당 엘레멘트의 속성 값도 변경한다.
						'.tool_font_back .tool_select_bx .color_codebx': 'border-color',
					},
					propertyName: 'background-color',
				},
				link: {
					name: 'link',
					title: '링크',
					icon: true,
					shortcut: '',
					dropdown: 'link',
				},
				citation: {
					name: 'citation',
					title: '인용',
					icon: true,
					dropdown: 'citations',
					shortcut: '',
				},
				align: {
					name: 't_align',
					title: '정렬',
					icon: true,
					dropdown: 'aligns',
					shortcut: '',
				},
				cover: {
					name: 'cover',
					title: '구분선',
					icon: true,
					dropdown: 'cover',
					shortcut: '',
				}
			},
			regEx: {
				urlEX: /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/,
			},
			lastRange: null,
			init: function(){
				// rangy dependency
				rangy.init();
				this.load(Editor.PLUGINS);

				// mobile actions
				this.isMobile() ? (this.mousedown = 'touchstart', this.mouseup = 'touchend', this.move = 'touchmove') : (this.mousedown = 'mousedown', this.mouseup = 'mouseup', this.move = '');
				this.browser = this.getBrowser();
				this.isHtml5 = this.isSupportHtml5();
				this.config = $.extend({}, this.defaults, this.options);

				this.initEditor();

				// initilize menu buttons
				this.initButtons();
				this.initSelection();
				this.displayMessage();
				this.onLoad(Editor.PLUGINS);

				return this;
			},
			displayMessage: function(){
				this.defaultHtml();
			},
			registerCommand: function(cmd, context){
				this.commandContext[cmd] = context;
			}
		},
		Editor.prototype.load = function(plugins){
			for(var plugin in plugins){
				this[plugin] = new plugins[plugin](this);
			}
		},
		Editor.prototype.onLoad = function(plugins){
			for(var plugin in plugins){
				this[plugin].onLoad(this);
			}
		},
		// Utility
		Editor.prototype.isMobile = function(){
			// TODO
			return false;
		},
		Editor.prototype.getIEversion = function() {
			var userAgent = navigator.userAgent.toLowerCase();
			return (userAgent.indexOf('msie') != -1) ? parseInt(userAgent.split('msie')[1]) : false;
		},
		Editor.prototype.isSupportHtml5 = function(){
			var i = document.createElement("input");
			i.setAttribute("type", "color");
			return i.type !== "text";
		},
		Editor.prototype.getBrowser = function() {
			var uagent = navigator.userAgent.toLowerCase(),
			browser = {},
			match = '';

			browser.chrome  = /webkit/.test(uagent) && /chrome/.test(uagent) && !/edge/.test(uagent);
			browser.firefox = /mozilla/.test(uagent) && /firefox/.test(uagent);
			browser.msie    = /msie/.test(uagent) || /trident/.test(uagent) || /edge/.test(uagent);
			browser.safari  = /safari/.test(uagent)  && /applewebkit/.test(uagent) && !/chrome/.test(uagent);
			browser.opera   = /mozilla/.test(uagent) && /applewebkit/.test(uagent) && /chrome/.test(uagent)  && /safari/.test(uagent) && /opr/.test(uagent);
			browser.webkit  = /webkit/.test(uagent);
			browser.mozilla  = /mozilla/.test(uagent);

			browser.version = '';

			for (x in browser) {
				if (browser[x]) {

					match = uagent.match(
						new RegExp("(" + (x === "msie" ? "msie|edge" : x) + ")( |\/)([0-9]+)")
						);

					if (match) {
						browser.version = match[3];
						if(browser.version < 9)
							browser.oldMsie = true;
					} else {
						match = uagent.match(new RegExp("rv:([0-9]+)"));
						browser.version = match ? match[1] : "";
					}
					break;
				}
			}
			return browser;
		},
		// Initialize
		Editor.prototype.initEditor = function(){
			var self = this;
			var tool_wrapper = '<div class="h_toolbx"></div>';
			if(this.config.mode == 'inline')
				this.$body.append(tool_wrapper);
			else {
				this.$container.before(tool_wrapper);
			}
			this.$toolbx = $('.h_toolbx');

			if(this.config.externalButtons.length > 0){
				var ext_tool_wrapper = '<div class="tool_menubx"></div>';
				this.$body.append(ext_tool_wrapper);
				this.$exttoolbx = $('.tool_menubx');
			}


			if(this.config.mode == 'inline'){
				this.$toolbx.hide();
				this.$toolbx.css('left', this.$container.offset().left).css('top', this.$container.offset().top-80);
			}
			else {
				this.$toolbx.css('position', 'inherit');
				this.$toolbx.show();
			}

			this.$container.attr('contenteditable', true);
			this.$container.attr('placeholder', this.config.placeholder);

			var container_wrapper = '<div class="meta_writebx"></div>';
			this.$container.wrap(container_wrapper);
			this.$editor_body = this.$container.parent();

			this.bindKeys();
			
		},
		Editor.prototype.initButtons = function(){
			this.displayButtons(this.config.buttons);
			if(this.config.externalButtons.length > 0)
				this.displayExternalButtons(this.config.externalButtons);
			this.bindDropdownButtons();
			if(this.config.externalButtons.length > 0)
				this.bindExternalDropdownButtons();
			this.bindCommandButtons();
			this.bindInputLink();
			this.bindCloseDropdown();
			if(this.config.externalButtons.length > 0)
				this.bindExternalButton();
		},
		Editor.prototype.initSelection = function(){
			var self = this;

			// Keep text selection even click on toolbx
			this.$toolbx.on(this.mousedown, function(e){
				if(self.isSelectionInToolBox()){
					// 이전에도 toolbox 에 있었으면 상태 저장 X
					return ;
				}
				self.saveRange();
				setTimeout(function(){
					var anchorElement = $(self.getAnchorElement());
					var isInput = anchorElement.hasClass('mbe_input') || anchorElement.find('.mbe_input').length;
					if(isInput){
						self.recordRange(self.loadRange());
					}
					// selection 복구
					if(!isInput && self.isSelectionInToolBox()){
						self.selectByRange(self.loadRange());
					}
				}, 1);
			});

			this.$toolbx.find('.mbe_input').on('blur', function(e){
				if(self.didRecordedRange()){
					self.recoverRange();
				}
			});

			this.$body.on(this.mouseup, function(e){
				self.toggleToolbar(e);
				self.toggleExternalButton(e);
				self.selectionAction(e);
			});

			$(window).resize(function(e){
				self.toggleToolbar(e);
				self.toggleExternalButton(e);
			});			
		},
		Editor.prototype.refreshExternalButtonPosition = function(){
			if(this.config.externalButtons.length == 0)
				return ;

			// 현재 위치로 이동시킨다
			if(this.isSelectionInEditor() && this.getSelection().isCollapsed){
				var wrappingElement = this.getWrappingElement();
				var wrappingOffset = $(wrappingElement).offset();

				// Wordpress admin bar height
				var htmlMarginTop = parseInt($('html, body').css('margin-top'));
				var toolbxMarginTop = wrappingOffset.top-7;
					if(!isNaN(htmlMarginTop) )
						toolbxMarginTop -= htmlMarginTop;

				this.$exttoolbx.css('top', toolbxMarginTop);
				this.$exttoolbx.css('left', this.$container.offset().left-40);

			}
		},
		Editor.prototype.toggleExternalButton = function(){
			if(this.config.externalButtons.length == 0)
				return ;

			var self = this;
			setTimeout(function(){
				if(self.isSelectionInEditor()){
					if(self.config.externalButtons.length > 0)
						self.refreshExternalButtonPosition();
					var wrappingElement = self.getWrappingElement();

					var contentHtml = $(wrappingElement).hasClass('editbx_text') ? $(wrappingElement).html() : $(wrappingElement).html();
					var hasImage = $(wrappingElement).find('img').length;
					var isEmptyHtml = !hasImage;
					if( !isEmptyHtml || $(wrappingElement).text().length ){
						self.$exttoolbx.removeClass('t_list_on');
						self.$exttoolbx.fadeOut();
						if(self.didRecordedRange()){
							self.removeMarkers();
						}
					}
					else {
						self.$exttoolbx.fadeIn();

						if(typeof self.lastExternalAnchor == 'undefined' || self.lastExternalAnchor != wrappingElement){
							self.lastExternalAnchor = wrappingElement;
						}
					}
				}
				
			}, 1);
		},
		Editor.prototype.bindExternalButton = function(){
			var self = this;
			this.$exttoolbx.find('.tool_menu_btn a').click(function(e){
				// 펼치기
				self.$exttoolbx.toggleClass('t_list_on');
				if(self.$exttoolbx.hasClass('t_list_on')){

					var range = self.getRange();
					if(self.didRecordedRange()){
						self.removeMarkers();
					}
					else {
						var maxId = 0;
						self.$container.find('.mbe_marker[data-marker="start"]').each(function(){
							if(maxId < $(this).data('id')){
								maxId = $(this).data('id');
							}
						});

						self.recordMarker(range, false);	
						self.recordMarker(range, true);
					}
					
					self.deselect();
				}
				else {
					if(self.didRecordedRange()){
						self.removeMarkers();
					}
				}
			});
		},
		Editor.prototype.selectionAction = function(e){
			var self = this;
			setTimeout(function(){
				// toggle on inline editor
				if(!self.getSelectionText() || self.getSelectionText().length == 0){
					return false;
				}
				// Toolbar menu match style
				var anchorElement = $(self.getAnchorElement());

				var sfontFamily = anchorElement.css('font-family');
				if(sfontFamily){
					sfontFamily = sfontFamily.replace(/"/gi, '');
				}
				self.matchToolbarDropdownStyle('fontFamily', sfontFamily);	
				
				var sfontForeColor = anchorElement.css('color');
				self.matchToolbarDropdownStyle('foreColor', self.getRgb2Hex(sfontForeColor));

				var sfontBackColor = anchorElement.css('background-color');
				self.matchToolbarDropdownStyle('backColor', self.getRgb2Hex(sfontBackColor));

				// px 대신에 em 으로 사이즈를 받는다.
				var sfontSize = self.getFontSizeAsEm(anchorElement);
				self.matchToolbarDropdownStyle('fontSize', sfontSize);

				// 정렬
				var sAlign = anchorElement.css('text-align');
				switch(sAlign){
					default:
					case 'start':
					case 'left':
					sAlign = 'justifyLeft';
					break;
					case 'right':
					sAlign = 'justifyRight';
					break;
					case 'center':
					sAlign = 'justifyCenter';
					break;
					case 'justify':
					sAlign = 'justifyFull';
					break;
				}
				
				self.matchToolbarDropdownStyle('align', sAlign);
			});
		},
		Editor.prototype.getRgb2Hex = function(rgb){
			var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

			var hex = function(x) {
				return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
			}

			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			if(!rgb)
				return null;

			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		},
		Editor.prototype.getFontSizeAsEm = function(element){
			var sfontSize = '';
			var styleString = element.attr('style');
			if(styleString && typeof styleString !== 'undefined'){

				// px 대신에 em 으로 사이즈를 받는다.
				var sfontSize = '';
				var styleArray = styleString.split(';');
				for(var i in styleArray){
					if(!styleArray[i])
						continue;
					var stylePair = styleArray[i].split(':');
					if(stylePair.length > 1){
						if(stylePair[0] == 'font-size');
						sfontSize = stylePair[1].trim();
					}

				}
			}
			return sfontSize;
		},
		Editor.prototype.matchToolbarDropdownStyle = function(cmd, styleValue){
			if(!cmd || typeof cmd == 'undefined')
				return ;

			var self = this;
			var context = self.commandContext[cmd];
			var dropdowns = self.config[context.dropdown];

			var matched = false;
			$.each(dropdowns, function(k, v){

				if(styleValue && styleValue.toLowerCase() == v.toLowerCase()){
					self.$toolbx.find('.tool_'+context.name+' .textbx').attr('data-key', k);
					// 정렬인 경우 클래스로
					if(cmd == 'align'){
						self.$toolbx.find('.tool_'+context.name+' .textbx').addClass(v.toLowerCase());
					}
					

					if(!$.isNumeric( k ) ){
						self.$toolbx.find('.tool_'+context.name+' .textbx').find('.mbe_button_title').text(k);
					}

					// active
					self.$toolbx.find('.tool_'+context.name+' .tool_select_ul li a[data-value="'+v+'"]').closest('li').addClass('active');

					if(context.withSelector){
						$.each(context.withSelector, function(selector, propertyName){
							if(self.$toolbx.find(selector).length)
								self.$toolbx.find(selector).css(propertyName, styleValue);
							if(self.$editor_body.find(selector).length)
								self.$editor_body.find(selector).css(propertyName, styleValue);
						} );
					}

					matched = true;
					// return false;
				}
				else {
					// 정렬인 경우 클래스로
					if(cmd == 'align'){
						self.$toolbx.find('.tool_'+context.name+' .textbx').removeClass(v.toLowerCase());
					}

					// remove active
					self.$toolbx.find('.tool_'+context.name+' .tool_select_ul li a[data-value="'+v+'"]').closest('li').removeClass('active');
				}
			});

			if(!matched){
				self.$toolbx.find('.tool_'+context.name+' .tool_select_ul > li').removeClass('active');
				self.$toolbx.find('.tool_'+context.name+' .textbx .mbe_button_title').text(context.title);
				if(context.withSelector){
					$.each(context.withSelector, function(selector, propertyName){
						if(self.$toolbx.find(selector).length && context.displayValue)
							self.$toolbx.find(selector).css(propertyName, context.displayValue);
						if(self.$editor_body.find(selector).length && context.displayValue)
							self.$editor_body.find(selector).css(propertyName, context.displayValue);
					} );
				}

			}
		},
		Editor.prototype.toggleToolbar = function(e){
			if(this.config.mode != 'inline' ){
				this.$toolbx.show();
				return ;
			}

			var self = this;
			setTimeout(function(){
				// toggle on inline editor, tool box
				if(!self.isSelectionInToolBox() && !self.isSelectionInExternalToolBox() && (!self.isSelectionInEditor() ||  self.getSelectionText().length == 0)){
					self.$toolbx.find('.tool_select_bx').removeClass('on');
					self.$toolbx.hide();
				}
				else if(self.isSelectionInEditor()){
					console.log('test');
					var wrappingElement = self.getWrappingElement(),
					anchorElement = self.getAnchorElement();
					var wrapperOffset = $(wrappingElement).offset(),
					anchorOffset = $(anchorElement).offset();
					// Wordpress admin bar height
					var htmlMarginTop = parseInt($('html, body').css('margin-top'));
					var toolbxTop = wrapperOffset.top-self.$toolbx.height()-25;
					if(!isNaN(htmlMarginTop) )
						toolbxTop -= htmlMarginTop;

					self.$toolbx.css('top', toolbxTop);
					// there are position in right
					
					var editorWidth = self.$container.width(),
					editorOffset = self.$container.offset(),
					toolbxWidth = self.$toolbx.width();

					var toolbxLeft = anchorOffset.left-5;
					// 에디터를 벗어나면
					if(editorOffset.left+editorWidth < anchorOffset.left+toolbxWidth){
						toolbxLeft  = editorOffset.left+editorWidth-toolbxWidth;
					}

					self.$toolbx.css('left', toolbxLeft);
					self.$toolbx.show();
				}
			}, 1);
		},
		Editor.prototype.displayButtons = function(buttons){
			var button_html = '';
			// build default buttons
			for (var i = 0; i < buttons.length; i++) {
				var buttonName = buttons[i];
				var context = this.commandContext[buttonName];
				if(!context.cmd)
					context.cmd = buttonName;

				button_html += context.html && typeof context.html === "function" ? context.html() : context.dropdown ? this.buildDropdownButton(context) : this.buildDefaultButton(context);
			}

			button_html = '<ul class="toolbx_ul">'+button_html+'</ul>';
			this.$toolbx.html(button_html);
		},
		Editor.prototype.displayExternalButtons = function(buttons){
			var button_html = '';
			// build default buttons
			for (var i = 0; i < buttons.length; i++) {
				var buttonName = buttons[i];
				var context = this.commandContext[buttonName];
				if(!context.cmd)
					context.cmd = buttonName;
				button_html += context.html && typeof context.html === "function" ? context.html() : context.dropdown ? this.buildExternalDropdownButton(context) : this.buildExternalButton(context);
			}

			button_html = ''+
			'<div class="tool_menu_btn">'+
				'<a href="#;" class="tool_icon">menu</a>'+
			'</div>'+
			'<div class="tool_menu_listbx">'+
				'<div class="tool_cellbx">'+
					'<ul>'+button_html+'</ul>'+
				'</div>'+
			'</div>';
			this.$exttoolbx.html(button_html);
		},
		// Button HTML
		Editor.prototype.buildDefaultButton = function(context){
			var layout = context.icon ? 'i_layout' : 'p_layout';
			var append = context.append ? context.append : '';
			var button = '<li class="tool_'+context.name+'">'+
			'<div class="tool_select_bx">'+
			'<a href="#;" class="textbx '+layout+' mbe_button" data-cmd="'+context.cmd+'" title="'+context.title+'">'+
			'<span class="mbe_button_title">'+context.title+'<span>'+
			append+
			'</a>'+
			'</div>'+
			'</li>';			
			return button;
		},
		Editor.prototype.buildDropdownButton = function(context){
			var layout = context.icon ? 'i_layout' : 'p_layout';
			var append = context.append ? context.append : '';
			var button = '<li class="tool_'+context.name+'">'+
			'<div class="tool_select_bx" data-dropdown="true">'+
			'<a href="#;" class="textbx '+layout+' mbe_button" title="'+context.title+'">'+
			'<span class="mbe_button_title">'+context.title+'</span>'+
			append+
			'</a>'+
			this.buildDropdownPanel(context)+
			'</div>'+
			'</li>';
			return button;
		},
		Editor.prototype.buildExternalButton = function(context){
			var layout = context.icon ? 'i_layout' : 'p_layout';
			var append = context.append ? context.append : '';
			var button = '<li class="'+context.name+'" data-dropdown="true"><a href="#;" data-cmd="'+context.cmd+'">'+context.name+'</a>'+
			'</li>';
			return button;
		},
		Editor.prototype.buildExternalDropdownButton = function(context){
			var layout = context.icon ? 'i_layout' : 'p_layout';
			var append = context.append ? context.append : '';
			var button = '<li class="'+context.name+'" data-dropdown="true"><a href="#;">'+context.name+'</a>'+
			this.buildDropdownPanel(context)+
			'</li>';		
			return button;
		},
		Editor.prototype.buildDropdownPanel = function(context){
			if(!context.dropdown)
				return ;

			var dropdownCallBack = this.build_dropdown_callback[context.dropdown],
			dropdownHtml = dropdownCallBack ? dropdownCallBack.apply(this, [context]) : '';
			return dropdownHtml;
		},
		Editor.prototype.buildDropdownFontFamily = function(context){
			var fontFamilies = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';

			if('object' != typeof fontFamilies){
				// TODO : Throw Exception error. must be object type.
			}

			Object.keys(fontFamilies).forEach(function (key) {
				var fontFamily = fontFamilies[key];
				dropdownHtml += '<li>'+
				'	<a href="#;" data-cmd="fontFamily" data-key="'+key+'" data-value="'+fontFamily+'" style="font-family:'+fontFamily+'">'+key+'</a>'+
				'</li>';
			});

			return dropdownHtml += '</ul>';
		},
		Editor.prototype.buildDropdownFontSize = function(context){
			var fontSizes = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';

			if('object' != typeof fontSizes){
				// TODO : Throw Exception error. must be object type.
			}

			Object.keys(fontSizes).forEach(function (key) {
				var fontSize = fontSizes[key];
				dropdownHtml += '<li>'+
				'	<a href="#;" data-cmd="'+context.cmd+'" data-key="'+key+'" data-value="'+fontSize+'" style="font-size:'+fontSize+';">'+key+'</a>'+
				'</li>';
			});

			return dropdownHtml += '</ul>';
		},
		Editor.prototype.buildDropdownForeColor = function(context){
			var colors = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';

			for(i=0; i < colors.length; i++){
				var color = colors[i];
				var displayColor = color == 'initial' ? 'url(/wp-content/themes/skku/metabrain-editor/images/edit_de_icon.png) no-repeat;background-size: 22px 22px;' : color;
				dropdownHtml += '<li>'+
				'	<a href="#;" data-cmd="'+context.cmd+'" data-key="'+i+'"  data-value="'+color+'" style="background:'+displayColor+'">'+color+'</a>'+
				'</li>';
			}
			return dropdownHtml += '</ul>';
		},
		Editor.prototype.buildDropdownBackColor = function(context){
			var colors = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';

			for(i=0; i < colors.length; i++){
				var color = colors[i];
				var displayColor = color == 'initial' ? 'url(/wp-content/themes/skku/metabrain-editor/images/edit_de_icon.png) no-repeat;background-size: 22px 22px;' : color;
				dropdownHtml += '<li>'+
				'	<a href="#;" data-cmd="'+context.cmd+'" data-key="'+i+'" data-value="'+color+'" style="background:'+displayColor+'">'+color+'</a>'+
				'</li>';
			}
			return dropdownHtml += '</ul>';
		},
		Editor.prototype.buildDropdownLink = function(context){
			var dropdownHtml = '<div class="tool_ab_linkbx tool_select_panel">'+
			'<input class="textbx mbe_input" type="url" placeholder="이곳에 링크 주소를 붙여주세요." value="">'+
			'<a class="close" href="#;">취소</a>'+
			'<a href="#;" class="ok_btnbx">확인</a>'+
			'</div>';
			
			return dropdownHtml;
		},
		Editor.prototype.buildDropdownCitation = function(context){
			var citations = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';
			for (var i = 0; i < citations.length; i++) {
				dropdownHtml += '<li><a class="item_citation '+citations[i]+'" href="#;" data-cmd="'+context.cmd+'" data-value="'+citations[i]+'">'+citations[i]+'</a></li>';
			}
			dropdownHtml += '</ul>';
			
			return dropdownHtml;
		},
		Editor.prototype.buildDropdownAlign = function(context){
			var aligns = this.config[context.dropdown],
			dropdownHtml = '<ul class="tool_select_ul">';
			for (var i = 0; i < aligns.length; i++) {
				dropdownHtml += '<li><a class="item_align_tool '+aligns[i].toLowerCase()+'" href="#;" data-cmd="'+aligns[i]+'" data-key="'+i+'" data-value="'+aligns[i]+'">align '+aligns[i]+'</a></li>';
			}
			dropdownHtml += '</ul>';
			
			return dropdownHtml;
		},
		Editor.prototype.buildDropdownCover = function(context){
			// var covers = this.config[context.dropdown],
			var dropdownHtml = '<div class="hover_cover_bx">'+
				'<div class="h_cont_coverbx">'+
					'<h3>선을 선택하세요.</h3>'+
					'<ul>'+
						'<li class="step1"><a href="#;" data-cmd="'+context.cmd+'" data-value="step1">line type1</a></li>'+
						'<li class="step2"><a href="#;" data-cmd="'+context.cmd+'" data-value="step2">line type2</a></li>'+
						'<li class="step3"><a href="#;" data-cmd="'+context.cmd+'" data-value="step3">line type3</a></li>'+
						'<li class="step4"><a href="#;" data-cmd="'+context.cmd+'" data-value="step4">line type4</a></li>'+
						'<li class="step5"><a href="#;" data-cmd="'+context.cmd+'" data-value="step5">line type5</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>';
			
			return dropdownHtml;
		},
		Editor.prototype.build_dropdown_callback = {
			fontFamily: function(context){
				return this.buildDropdownFontFamily(context);
			},
			fontSizes: function(context){
				return this.buildDropdownFontSize(context);
			},
			foreColors: function(context){
				return this.buildDropdownForeColor(context);
			},
			backColors: function(context){
				return this.buildDropdownBackColor(context);
			},
			link: function(context){
				return this.buildDropdownLink(context);
			},
			citations: function(context){
				return this.buildDropdownCitation(context);
			},
			aligns: function(context){
				return this.buildDropdownAlign(context);
			},
			cover: function(context){
				return this.buildDropdownCover(context);
			}

		},
		// set Key actions
		Editor.prototype.bindKeys = function(){
			this.bindKeyDown();
		},
		Editor.prototype.bindKeyDown = function(){
			var self = this;
			$(window).on("keydown", function(e){
				self.keydownAction(e);
			});
			$(window).on("keyup", function(e){
				self.keyupAction(e);
			});
		},
		Editor.prototype.keydownAction = function(event){
			var key = this.getPressedKey(event);
			this.toggleToolbar();

			if(key.isBlank()){
				if(!this.isSelectionInToolBox()){
					this.makeLinkKeyDown();
				}
			}
			else if(key.isBack()){
				this.removeLinkByKeydown("backSpace");
				if(this.config.externalButtons.length > 0)
					this.refreshExternalButtonPosition();
			}

			if(key.isNewLine()){
				// force new line
				var success = this.replaceNewLineTag(true, '<br>');
				if(success){
					event.stopPropagation();
					event.preventDefault();	
				}
			}
			else if(key.isUpLine()){
				// force new line
				var success = this.replaceNewLineTag(true, '<br>', true);
				if(success){
					event.stopPropagation();
					event.preventDefault();	
				}
			}
			else if(key.isEnter()){
				this.refreshExternalButtonPosition();
			}
		},
		Editor.prototype.keyupAction = function(event){
			var key = this.getPressedKey(event);
			if(this.isSelectionInEditor() && !this.isSelectionInToolBox() && (key.isBack() || key.isDel())){
				this.defaultHtml();
				this.removeEmptyElement(event);
			}

			if(!this.$container.is(':empty')){
				this.$container.removeClass('empty');
			}

			if(this.config.externalButtons.length > 0)
				this.toggleExternalButton();
		},
		Editor.prototype.defaultHtml = function(){
			if(!this.$container.is(':focus')){
				this.$container.focus();
			}

			if(this.$container.is(':empty')){
				// if empty show placeholder, act by css
				this.$container.addClass('empty');

				var $newLineElement = this.getNewLineElement('<br>');
				this.$container.append($newLineElement);
				this.selectByElement($newLineElement[0], 0);
				
				var self = this;
				// focus refresh button position
				setTimeout(function(){
					self.refreshExternalButtonPosition();
				}, 1);
				return true;
			}
			return false;
		},
		Editor.prototype.removeEmptyElement = function(event){
			var textNode = this.getAnchorTextNode();
			if(!$(textNode).is(':empty')){
				var anchorNode = this.getAnchorNode();					
				if(anchorNode && anchorNode.nodeType == Node.ELEMENT_NODE && $(anchorNode).is(':empty')){
					$(anchorNode).remove();
					event.stopPropagation();
					event.preventDefault();
				}
			}
		},
		Editor.prototype.replaceNewLineTag = function(force, innerContent, before){
			var anchorElement = this.getAnchorElement(true);
			if(!anchorElement || !this.isSelectionInEditor())
				return ;

			innerContent = innerContent ? innerContent : '<br>';

			var wrappingElement = this.getWrappingElement(anchorElement);
			if(wrappingElement && force){
				while(wrappingElement.parentNode && wrappingElement.parentNode.nodeType == Node.ELEMENT_NODE && wrappingElement.parentNode != this.container) {
					wrappingElement = wrappingElement.parentNode;
				}
			}

			if(wrappingElement.nodeType == Node.ELEMENT_NODE){
				var $newLineElement = this.getNewLineElement(innerContent);
				if(before)
					$(wrappingElement).before($newLineElement);
				else 
					$(wrappingElement).after($newLineElement);

				this.selectByElement($newLineElement[0], 0);

				return true;
			}

			return false;
		},
		Editor.prototype.getNewLineElement = function(innerContent){
			var newLineTag = this.config.paragraphy ? "p" : "div",
			innerContent = innerContent ? innerContent : '',
			$newLineElement = $("<"+newLineTag+">"+innerContent+"</"+newLineTag+">").addClass("editbx_text");
			return $newLineElement;
		},
		Editor.prototype.removeLinkByKeydown = function(deleteType){
			var selection = this.getSelection();
			if(!selection || !selection.isCollapsed)
				return;
			var anchorNode = this.getAnchorElement();

			if(!anchorNode)
				return ;

			if(anchorNode.tagName == "A"){
				this.recordRange();
				$(anchorNode).contents().unwrap();
				this.recoverRange();
			}
		},
		Editor.prototype.makeLinkKeyDown = function(){
			var selection = this.getSelection();
			if(!selection || !selection.isCollapsed)
				return;

			var	anchorNode = this.getAnchorTextNode();
			if(!anchorNode)
				return ;

			var textContent = anchorNode.textContent;
			if(textContent && this.regEx.urlEX.test(textContent) && anchorNode.nodeType == Node.TEXT_NODE && $(anchorNode).closest("a").length === 0){
				var url = textContent.match(this.regEx.urlEX)[0];
				var position = textContent.indexOf(url);
				
				this.recordRange();
				var range = this.getRange();
				range.setStart(anchorNode, position);
				range.setEnd(anchorNode, position+url.length);
				this.selectByRange(range);
				document.execCommand("createLink", false, url);
				// anchorNode.parentElement.target = '_blank';
				this.recoverRange();
			}
		},
		Editor.prototype.makeLink = function(url){
			var selection = this.getSelection();
			if(!selection)
				return;

			var	anchorNode = this.getAnchorTextNode();
			if(!anchorNode)
				return ;

			if(url){
				url = url.trim();
				var patt = new RegExp("/^htt[p|ps]:\/\//");
				if(!patt.test(url)){
					url = 'http://'+url;
				}
			}

			var textContent = url ? url : anchorNode.textContent;
			if(textContent && this.regEx.urlEX.test(textContent) && anchorNode.nodeType == Node.TEXT_NODE && $(anchorNode).closest("a").length === 0){
				var url = textContent.match(this.regEx.urlEX)[0];

				this.recordRange();
				document.execCommand("createLink", false, url);
				this.recoverRange();
			}
		}
		Editor.prototype.getPressedKey = function(event){
			var code = event ? event.which : -1,
			ctrl = event ? event.ctrlKey : false,
			shift = event ? event.shiftKey : false,
			type = event.type;

			var codeName = {
				backSpace: 8,
				tab: 9,
				enter: 13,
				esc: 27,
				space: 32,
				del: 46,
				b: 66,
				c: 67,
				i: 73,
				s: 83,
				u: 85,
				v: 86,
				x: 88,
				z: 90
			};
			return {
				getCode: function() {
					return code;
				},
				getType: function() {
					return type;
				},
				isKeydown: function() {
					return "keydown" == type;
				},
				isKeyup: function() {
					return "keyup" == type;
				},
				isTab: function() {
					return code == codeName.tab;
				},
				isEnter: function() {
					return code == codeName.enter;
				},
				isNewLine: function(){
					return ctrl && this.isEnter();
				},
				isUpLine: function(){
					return shift && this.isEnter();
				},
				isSpacebar: function() {
					return code == codeName.space;
				},
				isBlank: function() {
					return this.isSpacebar() || this.isEnter() ||  this.isTab();
				},
				isDel: function() {
					return code == codeName.del;
				},
				isBack: function() {
					return code == codeName.backSpace;
				},
				isEsc: function() {
					return code == codeName.esc;
				},
				isShift: function() {
					return shift;
				},
				isCtrl: function() {
					return ctrl;
				},
				isCopy: function() {
					return this.isCtrl() && code == codeName.c;
				},
				isCut: function() {
					return this.isCtrl() && code == codeName.x;
				},
				isPaste: function() {
					return this.isCtrl() && code == codeName.v;
				},
				isShortcutBold: function() {
					return this.isCtrl() && code == codeName.b;
				},
				isShortcutItalic: function() {
					return this.isCtrl() && code == codeName.i;
				},
				isShortcutUnderline: function() {
					return this.isCtrl() && code == codeName.u;
				},
				isShortcutStrikeThrough: function() {
					return this.isCtrl() && code == codeName.s;
				},
				isRedo: function() {
					return this.isShift() && this.isUndo();
				},
				isUndo: function() {
					return this.isCtrl() && code == codeName.z;
				}
			};
		},
		// Bind event
		Editor.prototype.bindInputLink = function(){
			var self = this;
			if(self.config.buttons.indexOf('link') === -1){
				return ;
			}

			self.$toolbx.find('.tool_link .mbe_input').keyup(function(event){
				var key = self.getPressedKey(event);
				var url = $(this).val();

				if(key.isEnter()){
					self.recoverRange();
					if(url && url.length){
						self.makeLink(url);
						self.$toolbx.find('.tool_select_bx').removeClass('on');
					}
					event.preventDefault();
					event.stopPropagation();
				}
			});

			self.$toolbx.find('.tool_link .ok_btnbx').click(function(e){
				var url = $(this).parent().find('.mbe_input').val();
				self.makeLink(url);
				self.$toolbx.find('.tool_select_bx').removeClass('on');
			});

			self.$toolbx.find('.tool_link .close').click(function(e){
				self.$toolbx.find('.tool_select_bx').removeClass('on');
			});
		},
		Editor.prototype.bindCloseDropdown = function(){
			var self = this;
			// self.$toolbx.find('.tool_select_bx').removeClass('on');
		},
		Editor.prototype.bindDropdownButtons = function(){
			var self = this;
			this.$toolbx.find('.tool_select_bx[data-dropdown=true] > a').click(function(e){
				e.stopPropagation(), e.preventDefault(), self.displayDropdown(this, e);
			});
		},
		Editor.prototype.bindExternalDropdownButtons = function(){
			var self = this;
			this.$exttoolbx.find('.tool_cellbx *[data-dropdown=true] > a').click(function(e){
				e.stopPropagation(), e.preventDefault(), self.displayExternalDropdown(this, e);
			});
		},
		Editor.prototype.bindCommandButtons = function(){
			var self = this;

			this.$toolbx.find('a[data-cmd], button[data-cmd], li[data-cmd], span[data-cmd]').on('click', function(e){
				// is dropdown
				if($(this).parent().parent().hasClass('tool_select_ul')){
					self.matchToolbarDropdownStyle($(this).data('cmd'), $(this).data('value'));
				}
				self.$toolbx.find('.tool_select_bx').removeClass('on');
				e.stopPropagation(), e.preventDefault(), self.executeButtons(this);
			});

			if(this.config.externalButtons.length > 0){
				this.$exttoolbx.find('a[data-cmd], button[data-cmd], li[data-cmd], span[data-cmd]').on('click', function(e){
					// is dropdown
					var parentClass = $(this).data('cmd');

					self.$exttoolbx.find('*[data-dropdown="true"]').removeClass('on');
				
					if($(this).closest('.tool_cellbx').find('*.'+parentClass+'[data-dropdown=true]').length ){
						$(this).closest('.tool_cellbx').find('*.'+parentClass+'[data-dropdown=true]').addClass('on');
					}

					e.stopPropagation(), e.preventDefault(), self.executeButtons(this);
				});
			}

		},
		// Execute event
		Editor.prototype.displayDropdown = function(dropdownSelector, event){
			$(dropdownSelector).parent().toggleClass('on'),this.$toolbx.find('.tool_select_bx').not($(dropdownSelector).parent()).removeClass('on');
		},
		Editor.prototype.displayExternalDropdown = function(dropdownSelector, event){
			$(dropdownSelector).parent().toggleClass('on'),this.$exttoolbx.find('*[data-dropdown=true]').not($(dropdownSelector).parent()).removeClass('on');
		},
		Editor.prototype.executeButtons = function(buttonSelector){
			var action = $(buttonSelector).data('cmd'),
			value = $(buttonSelector).data('value');

			this.executeDefault(action, value);
		},
		Editor.prototype.executeDefault = function(execution, value){
			if(!value) value = true;

			var defaultExecutions = ['bold', 'underline', 'strikeThrough', 'italic', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'];
			if(defaultExecutions.indexOf(execution) !== -1){
				if(value == 'default'){
					if(this.browser.msie || this.browser.chrome){
						value = "";
					}
					else {
						value = "inherit";
					}
				}
				return document.execCommand(execution,false,value);
			}

			var executeCallback = this.execute_callback[execution];
			if(!executeCallback)
				return false;
			else
				executeCallback.apply(this, [value]);
		},
		Editor.prototype.isInlineElement = function(node) {
			if (node.nodeType == Node.TEXT_NODE) {
				return true;
			}
			if (node.nodeType != Node.ELEMENT_NODE) {
				return false;
			}
			var win = rangy.dom.getWindow(node);
			var styleObj = rangy.util.isHostMethod(win, "getComputedStyle") ?
			win.getComputedStyle(node, null) : node.currentStyle;

			return styleObj["display"] == "inline";
		},
		Editor.prototype.replaceTag = function(currentElemObj, newTagObj, keepProps){
			// http://stackoverflow.com/a/20469901
			var $currentElem = currentElemObj;

			var i, $newTag = newTagObj.clone();
			if (keepProps) {
				$newTag = this.copyAttributes($currentElem, $newTag);
			}
			$currentElem.wrapAll($newTag);
			var $newElem = $currentElem.parent();
			$currentElem.contents().unwrap();

			return $newElem;
		},
		Editor.prototype.copyAttributes = function(source, dest){
			// Place holder for all attributes
			var allAttributes = (source && source.length > 0) ?	source.prop("attributes") : null;

			// Iterate through attributes and add    
			if (allAttributes && dest && dest.length == 1) {
				$.each(allAttributes, function() {
						// Ensure dest class names are not copied but rather added
						if (this.name == "class") {
							dest.addClass(this.value);
						} else {
							dest.attr(this.name, this.value);
						}
					});
			}
			return dest;
		},
		Editor.prototype.selectByElement = function(startContainer, startOffset, endContainer, endOffset){
			var selection = this.getSelection();
			if(selection){
				this.deselect();
				if(!endContainer)
					endContainer = startContainer;
				if(!endOffset)
					endOffset = startOffset;

				var range = document.createRange();
				range.setStart(startContainer, startOffset);
				range.setEnd(endContainer, endOffset);
				this.selectByRange(range);
			}
		},


		Editor.prototype.selectByRange = function(range){
			if(this.browser.msie && range.select){
				range.select();
			}
			else if(this.browser.msie || this.browser.mozilla || this.browser.opera){
				this.getSelection().removeAllRanges();
				this.getSelection().addRange(range);
			}
			else if(this.browser.safari){
				this.getSelection().setBaseAndExtent(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
			}
		},
		Editor.prototype.deselect = function(){
			if(document.selection) {
				document.selection.empty();
			}
			else if(window.getSelection) {
				if(window.getSelection().empty)
					window.getSelection().empty();
				else 
					window.getSelection().removeAllRanges();
			}
		},
		Editor.prototype.executeStyle = function(command, options){
			var self = this;
			var range = this.getRange();
			if(!range)
				return;


			if(value == "default")
				value = "";

			var propertyName = options.propertyName,
			value = options.value, toTag = options.toTag, addClass = options.addClass, blockType = options.blockType;

			if(this.browser.webkit && command != 'fontSize'){
				this.$container.find("span").each(function(){
					if ($(this).attr("style") && $(this).attr("style").indexOf("font-size") != -1){
						// jquery css를 사용하면 em이 아닌 px로 가져오게 된다. em 으로 가져오도록 한다.
						var fontSize = self.getFontSizeAsEm($(this));
						if(fontSize){
							$(this).attr("data-font-size", fontSize);
						}
						$(this).css("font-size", "");
					}
				});
			}

			var replaced = false,
			startContainer = range.startContainer,
			startOffset = range.startOffset,
			endContainer = range.endContainer,
			endOffset = range.endOffset;

			var mbeClass = blockType ? 'mbe_b mbe_'+command : 'mbe_s';
			var mbeClassSelector = blockType ? '.mbe_b.mbe_'+command : '.mbe_s';

			var nodes = range.getNodes(Node.ELEMENT_NODE);
			$.each(nodes, function(k, node){
				if($(node).hasClass(mbeClass)){
					var isStartContainer = isEndContainer = false;
					if(node == endContainer) isEndContainer = true;
					if(node == startContainer) isStartContainer = true;
					var $replacedElement;

					// remove Class
					if(blockType){
						$(node).attr('class', '');
						$replacedElement = $(node).contents().unwrap();
					}
					else {
						$replacedElement = self.replaceTag($(node), $('<font>'), true);
						
					}
					replaced = true;
					if(isEndContainer) endContainer = $replacedElement[0];
					if(isStartContainer) startContainer = $replacedElement[0];
				}
			});
			
			// reselection by new range
			if(replaced){
				range.setStart(startContainer, startOffset);
				range.setEnd(endContainer, endOffset);
				this.selectByRange(range);
			}
	
			// temporary tag to font for changing style
			if(blockType){
				var changeHtml = '<font size="2">'+self.getSelection().toHtml()+'</font>';
				var changed = this.replaceNewLineTag(true, changeHtml);
				if(changed){
					range.deleteContents();
				}
			}
			else {
				document.execCommand("fontSize", false, 2);
			}
			
			// replace font to span that adjusted style
			var $firstElement, $lastElement;
			this.$container.find("font").each(function(index){

				// font to span
				var $replacedElement = blockType ? $(this) : self.replaceTag($(this), $('<span>'), true);
				// elements in range are has size
				if($replacedElement.attr('size')){

					if(toTag)
						$replacedElement = self.replaceTag($replacedElement, $('<'+toTag+'>'), true);

					if(addClass)
						$replacedElement.addClass(addClass);

					$replacedElement.addClass(mbeClass);	

					if(propertyName)
						$replacedElement.css(propertyName, value);	
					
					// delete same-style children span 
					var $childrenElement = $replacedElement.find('*');

					if($childrenElement.length > 0){
						$childrenElement.each(function(){
							if(propertyName)
								$(this).css(propertyName, "");

							if(!$(this).hasClass(mbeClass))
								return true;

							if(!$(this).html()){
								$(this).contents().unwrap();
								return true;
							}

							if($(this).prop("tagName").toUpperCase() == 'FONT' && !$(this).attr("style")){
								$(this).contents().unwrap();
							}
						});
					}


					if(!$firstElement)
						$firstElement = $replacedElement;

					$lastElement = $replacedElement;
				}

				$replacedElement.removeAttr('size');
			});

			// recover font-size style
			if(this.browser.webkit && command != 'fontSize'){
				this.$container.find("*[data-font-size]").each(function(){
					$(this).css("font-size", $(this).data("font-size"));
					$(this).removeAttr("data-font-size");
				});
			}

			// reselection by new range
			if($firstElement){
				range.setStart($firstElement.get(0), 0);
				range.setEndAfter($lastElement.get(0));
				this.selectByRange(range);
			}
		},
		Editor.prototype.execute_callback = {
			fontFamily: function(value){
				this.executeStyle('fontFamily', { propertyName: 'font-family', value: value });
			},
			fontSize: function(value){
				this.executeStyle('fontSize', { propertyName: 'font-size', value: value});
			},
			foreColor: function(value){
				this.executeStyle('foreColor', {propertyName: 'color', value: value});
			},
			backColor: function(value){
				this.executeStyle('backColor', {propertyName: 'background-color', value: value});
			},
			citation: function(value){
				var addClass = '';
				switch(value){
					case 'style_one':
					addClass = 'item_citation_one item_align_c';
					break;
					case 'style_two':
					addClass = 'item_citation_two item_align_j';
					break;
					case 'style_three':
					addClass = 'item_citation_three item_align_c';
					break;
				}

				this.executeStyle('citation', {blockType: true, toTag: 'p', addClass: addClass });
			},
			cover: function(value){
				this.recoverRange();
				var appendElement;
				if(this.isSelectionInEditor() && this.getAnchorElement()){
					appendElement = this.getAnchorElement();
				}
				else if(this.$container.children().length > 0) {
					appendElement = this.$container.children().last();
				}
				else if(this.defaultHtml()){
					appendElement = this.$container.children().last();
				}
				else {
					// TODO throw out error;
				}
				
				var newLineTag = this.config.paragraphy ? "p" : "div";
				var wrappingElement = this.getWrappingElement(appendElement);

				var addClass = '';
				switch(value){
					case 'step1':
					addClass = 'item_line_one';
					break;
					case 'step2':
					addClass = 'item_line_two';
					break;
					case 'step3':
					addClass = 'item_line_three';
					break;
					case 'step4':
					addClass = 'item_line_four';
					break;
					case 'step5':
					addClass = 'item_line_five';
					break;
				}

				$(wrappingElement).before('<'+newLineTag+' class="'+addClass+'"></'+newLineTag+'>');

			},
		},
		// Selection
		// 안의 값이 틀려지는 경우 recordRange, 그대로인 경우 saveRange를 쓰면 된다
		Editor.prototype.recordRange = function(range){
			var range = range ? range : this.getRange();
			if(range){
				this.removeMarkers();
				var cloneRange = range.cloneRange();
				var maxId = 0;
				this.$container.find('.mbe_marker[data-marker="start"]').each(function(){
					if(maxId < $(this).data('id')){
						maxId = $(this).data('id');
					}
				});

				this.recordMarker(range, false, (maxId+1));
				this.recordMarker(range, true, (maxId+1));

			}
		},
		Editor.prototype.recoverRange = function(){
			var $startMarker = this.$container.find('.mbe_marker[data-marker="start"]'),
			$endMarker = this.$container.find('.mbe_marker[data-marker="end"]');
			if($startMarker.length > 0 && $endMarker.length > 0){
				var newRange = document.createRange();
				newRange.setEndBefore($endMarker[0]);
				newRange.setStartAfter($startMarker[0]);
				this.selectByRange(newRange);
			}
			if($startMarker.length > 0){
				this.removeMarkers();	
			}
		},
		Editor.prototype.didRecordedRange = function(){
			return this.$container.find('.mbe_marker[data-marker="start"]').length ? true : false;
		},
		Editor.prototype.buildMarker = function(isStart, dataAppend, id){
			if(!dataAppend)
				dataAppend = "";

			var marker = isStart ? 'start' : 'end';
			return $('<span class="mbe_marker"'+dataAppend+' style="display:none;" data-id="'+id+'" data-marker="'+marker+'">', document)[0];
		},
		Editor.prototype.recordMarker = function(range, isStart, id){
			var dataAppend = "";
			if(range.collapsed)
				dataAppend = ' data-collapsed="true"';

			if(!range)
				return ;
			
			try {
				var cloneRange = range.cloneRange();
				if(range.collapsed)
					cloneRange.collapse(isStart);

				if(!isStart){
					var endOffset = range.endOffset;
					cloneRange.setStart(range.endContainer, endOffset);
					cloneRange.setEnd(range.endContainer, endOffset);
				}

				cloneRange.insertNode(this.buildMarker(isStart, dataAppend, id));

			} catch (errorMessage) {
				console.error(errorMessage);
			}
		},
		Editor.prototype.removeMarkers = function(){
			this.$container.find('.mbe_marker').remove();
		},
		Editor.prototype.saveRange = function(){
			this.lastRange = this.getRange();
		},
		Editor.prototype.loadRange = function(){
			return this.lastRange;
		};
		Editor.prototype.isSelectionInEditor = function(){
			var getAnchorElement = this.getAnchorElement();
			if(!getAnchorElement)
				return false;

			var editorElement = this.$container.get(0);
			if(getAnchorElement == editorElement && this.getSelection().isCollapsed)
				return true;

			var anchorParentElement = getAnchorElement.parentNode;
			if(anchorParentElement == editorElement)
				return true;

			var isIn = false;

			var self = this;
			$(getAnchorElement).parents().each(function(){
				if($(this).is(self.$container)){
					isIn = true;
					// break;
					return false;
				}
			});

			return isIn;
		},
		Editor.prototype.isSelectionInToolBox = function(){
			var getAnchorElement = this.getAnchorElement();
			if(!getAnchorElement){
				return false;
			}

			var toolBxElement = this.$toolbx.get(0);
			if(getAnchorElement == toolBxElement && this.getSelection().isCollapsed)
				return true;

			var anchorParentElement = getAnchorElement.parentNode;
			if(anchorParentElement == toolBxElement)
				return true;

			var isIn = false;

			var self = this;
			$(getAnchorElement).parents().each(function(){
				if($(this).is(self.$toolbx)){
					isIn = true;
					// break;
					return false;
				}
			});

			return isIn;
		},
		Editor.prototype.isSelectionInExternalToolBox = function(){
			if(this.config.externalButtons.length == 0){
				return this.isSelectionInToolBox();
			}

			var getAnchorElement = this.getAnchorElement();
			if(!getAnchorElement){
				return false;
			}

			var toolBxElement = this.$exttoolbx.get(0);
			if(getAnchorElement == toolBxElement && this.getSelection().isCollapsed)
				return true;

			var anchorParentElement = getAnchorElement.parentNode;
			if(anchorParentElement == toolBxElement)
				return true;

			var isIn = false;
			var self = this;
			$(getAnchorElement).parents().each(function(){
				if($(this).is(self.$exttoolbx)){
					isIn = true;
					// break;
					return false;
				}
			});

			return isIn;
		},
		Editor.prototype.getSelection = function(){
			return rangy.getSelection ? rangy.getSelection() : null;
		},
		Editor.prototype.getSelectionText = function(){
			return this.getSelection() ? this.getSelection().toString() : null;
		},
		Editor.prototype.getRange = function(){
			if(!this.getSelection().rangeCount)
				return false;
			return this.getSelection().getRangeAt(0);
		},
		Editor.prototype.getRanges = function(){
			var selection = this.getSelection();
			if(!selection.rangeCount){
				return false;
			}
			var ranges = [];
			for(var i=0;i<selection.rangeCount;i++)
				ranges.push(selection.getRangeAt(i));
			return ranges;
		},
		Editor.prototype.getAnchorTextNode = function(){
			var selection = this.getSelection(),
			anchorNode = selection.anchorNode;
			if(!anchorNode)
				return null;
			if(anchorNode.nodeType == Node.ELEMENT_NODE) {
				var anchorOffset = selection.anchorOffset;
				if(anchorNode.childNodes.length <= anchorOffset) return null;
				var textNode = anchorNode.childNodes[anchorOffset];
				if (textNode && textNode.nodeType == Node.TEXT_NODE) return textNode;
				
			}
			else if(anchorNode.nodeType == Node.TEXT_NODE)
				return anchorNode;

			return null;
		},
		Editor.prototype.getAnchorNode = function(reverse){
			var selection = this.getSelection();
			if(!selection)
				return null;

			var anchorNode = null;

			var isBackwards = selection.isBackwards();
			if(reverse)
				isBackwards = !isBackwards;
			
			anchorNode = isBackwards ? selection.focusNode : selection.anchorNode;
			
			if(!anchorNode && this.browser.msie){
				// anchorNode do not load input elements in IE 
				anchorNode = document.activeElement;
			}

			if(!anchorNode)
				return null;

			if(anchorNode.nodeType == Node.ELEMENT_NODE || anchorNode.nodeType == Node.TEXT_NODE){
				return anchorNode;
			}
			return null;
		},
		Editor.prototype.getAnchorElement = function(reverse){
			var anchorNode = this.getAnchorNode(reverse);
			if(!anchorNode)
				return null;
			anchorNode = anchorNode.nodeType == anchorNode.TEXT_NODE ? anchorNode.parentNode : anchorNode;
			return anchorNode;
		},
		Editor.prototype.getWrappingElement = function(element, reverse){
			if(!element)
				element = this.getAnchorElement(reverse);
			if(!element)
				return null;

			for(var loopElement = element; loopElement; loopElement = loopElement.parentNode){
				if(loopElement.className && loopElement.className.indexOf("editbx_text") > -1){
					return loopElement;
				}

				if(loopElement == this.$container.get(0)){
					return element;
				}
			}
			return element;
		};
	})(MetaBrainEditor);


	w.MetaBrainEditor = MetaBrainEditor;
})(jQuery, window);

var mbe_frame;
(function($, w){
	(function(Editor){
		Editor.PLUGINS.WPImage = function(editor){
			this.init(editor);
		},
		Editor.PLUGINS.WPImage.prototype = {
			editor: null,
			init: function(editor){
				this.editor = editor;
				editor.defaults.buttons.push('img_add');
				var context = {
					name: 'img_add',
					title: 'img_add',
					shortcut: '',
					icon: true,
				};
				editor.registerCommand('img_add', context);
			},
			onLoad: function(editor){
				this.editor = editor;

				var tool_align = '<span class="align_images_bx" unselectable="on" style="display:none">'+
					'<span class="align_images_container" unselectable="on">'+
						'<span class="images_left i_item_bx" unselectable="on"><a href="#;" data-mbe-image-align="left">left</a></span>'+
						'<span class="images_center i_item_bx" unselectable="on"><a href="#;" data-mbe-image-align="center">center</a></span>'+
						'<span class="images_right i_item_bx" unselectable="on"><a href="#;" data-mbe-image-align="right">right</a></span>'+
					'</span>'+
				'</span>';

				this.editor.$body.append(tool_align);
				this.$toolalign = $('.align_images_bx');

				this.bindImage();
			}
		},
		Editor.PLUGINS.WPImage.prototype.bindImage = function(){
			var editor = this.editor;
			var self = this;
			editor.$container.find('.images_itembx img').live('focus', function(){
				$(this).blur();
			});


			editor.$container.find('.images_itembx img').live(editor.mousedown, function(e){
				e.stopPropagation();
				e.preventDefault();
				
				var $image = $(this);

				var imageAlign = function(imageEle, align){
					imageEle.closest('.editbx_text').css('text-align', align);		
					followPopupToImage(imageEle);
				}

				var followPopupToImage = function(imageEle){
					var imageWidth = imageEle.width();
					var toolBxWidth = self.$toolalign.width();
					
					var imageCenter = imageEle.offset().left + imageWidth/2 - toolBxWidth/2;
					var imageTop = imageEle.offset().top;
					if($.isNumeric(imageCenter)){

						self.$toolalign.css('left', imageCenter+'px');	
						self.$toolalign.css('top', (imageTop-50)+'px');	
						self.$toolalign.show();
					}
				}

				// Align
				var align = 'center';
				if($(this).closest('.editbx_text').css('text-align'))
					align = $(this).closest('.editbx_text').css('text-align');

				followPopupToImage($image , align);
				self.$toolalign.find('a').on('focus', function(){$(this).blur()});
				self.$toolalign.find('a').on(editor.mousedown, function(eve){
					eve.stopPropagation();
					eve.preventDefault();
					editor.deselect();

					align = $(this).data('mbe-image-align');
					imageAlign($image, align);
				});

				if(editor.config.externalButtons.length > 0)
					editor.$exttoolbx.hide();
				editor.deselect();
			});

			// Remove popup
			editor.$container.on('click', function(e){
				var anchorElement = editor.getAnchorElement();
				if(anchorElement){
					var isImageAlign = anchorElement.closest('.align_images_container');
					if(!isImageAlign)
						self.$toolalign.hide();
				}
			});
			
		},
		Editor.PLUGINS.WPImage.prototype.execute_callback = $.extend(Editor.prototype.execute_callback, {
			img_add: function(){
				var self = this;
				

				if ( mbe_frame ) {
					mbe_frame.open();
					return;
				}

				// Create a new media frame
				if(!wp.media)
					return ;

				mbe_frame = wp.media({
					title: '본문에 첨부할 이미지를 선택하거나 업로드해주세요.',
					button: {
						text: '본문에 첨부하기'
					},
					multiple: false
				});

				// When an image is selected in the media frame...
				mbe_frame.on( 'select', function() {

					// Get media attachment details from the frame state
					var attachment = mbe_frame.state().get('selection').first().toJSON();

					// Send the attachment URL to our custom image input field.
					self.recoverRange();
					var appendElement;
					if(self.isSelectionInEditor() && self.getAnchorElement()){
						appendElement = self.getAnchorElement();
					}
					else if(self.$container.children().length > 0) {
						appendElement = self.$container.children().last();
					}
					else if(self.defaultHtml()){
						appendElement = self.$container.children().last();
					}
					else {
						// TODO throw out error;
					}

					var newLineTag = self.config.paragraphy ? "p" : "div";
					var wrappingElement = self.getWrappingElement(appendElement);

					$(wrappingElement).after('<'+newLineTag+' class="editbx_text images_itembx" style="text-align:center"><img src="'+attachment.url+'" alt="" style="max-width:100%;"/></'+newLineTag+'>');
					if(self.config.externalButtons.length > 0)
						self.$exttoolbx.fadeOut();
				} );

				// Finally, open the modal on click
				mbe_frame.open();
			}
		});
	})(MetaBrainEditor);
})(jQuery, window);



// var mbe_frame;
// (function($, w){
// 	(function(Editor){
// 		Editor.PLUGINS.Video = function(editor){
// 			this.init(editor);
// 		},
// 		Editor.PLUGINS.Video.prototype = {
// 			regEx: {
// 				youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
// 				vimeo: /^((?:https?:)?\/\/)?((?:www|m)\.)?(vimeo.com)\/([\w\-]+)(?:.*\?|.*\/?|$)(.*)$/,
// 			},
// 			editor: null,
// 			init: function(editor){
// 				this.editor = editor;
// 				editor.defaults.externalButtons.push('video');
// 				var context = {
// 					name: 'video',
// 					title: 'video',
// 					shortcut: '',
// 					icon: true,
// 					dropdown: 'video',
// 				};
// 				editor.registerCommand('video', context);
// 			},
// 			onLoad: function(editor){
// 				this.editor = editor;

// 				var self = this;
// 				$(window).on("keydown", function(e){
// 					var key = self.editor.getPressedKey(event);

// 					if(key.isEnter()){
// 						var anchorElement = self.editor.getAnchorElement();

// 						if($(anchorElement).is('.mbe_video_conatiner')){
// 							// force new line
// 							var success = self.editor.replaceNewLineTag(true, '');
// 							if(success){
// 								event.stopPropagation();
// 								event.preventDefault();	
// 							}
// 						}
// 					}
					
// 				});
// 				this.bindInputVideo();
// 			}
// 		},
// 		Editor.PLUGINS.Video.prototype.bindInputVideo = function(){
// 			var self = this;
// 			if(self.editor.config.externalButtons.indexOf('video') === -1){
// 				return ;
// 			}

// 			self.editor.$exttoolbx.find('.tool_video_linkbx .mbe_input').keyup(function(event){
// 				var key = self.editor.getPressedKey(event);
// 				var url = $(this).val();

// 				if(key.isEnter()){
// 					self.editor.recoverRange();
// 					if(url && url.length){
// 						self.appendVideo(url);
// 						self.editor.$exttoolbx.find('.video').removeClass('on');
// 					}
// 					event.preventDefault();
// 					event.stopPropagation();
// 				}
// 			});

// 			self.editor.$exttoolbx.find('.tool_video_linkbx .ok_btnbx').click(function(e){
// 				var url = $(this).parent().find('.mbe_input').val();
// 				self.appendVideo(url);
// 				self.editor.$exttoolbx.find('.video').removeClass('on');
// 			});
// 			self.editor.$exttoolbx.find('.tool_video_linkbx .close').click(function(e){
// 				self.editor.$exttoolbx.find('.video').removeClass('on');
// 			});
// 		},
// 		Editor.PLUGINS.Video.prototype.youtubeUrl = function(matchedGroup){
// 			var id = matchedGroup[5];
// 			return '//youtube.com/embed/'+id;
// 		},
// 		Editor.PLUGINS.Video.prototype.vimeoUrl = function(matchedGroup){
// 			var id = matchedGroup[4];
// 			return '//player.vimeo.com/video/'+id;
// 		},
// 		Editor.PLUGINS.Video.prototype.appendVideo = function(url){
// 			var selection = this.editor.getSelection();
// 			if(!selection)
// 				return;

// 			if(!url)
// 				return ;

// 			// Security filter
// 			var platform = {};
// 			platform.youtube = url.match(this.regEx.youtube);
// 			platform.vimeo = url.match(this.regEx.vimeo);

// 			var pass = false;
// 			$.each(platform, function(k, v){
// 				if(v)
// 					pass = true;
// 			});

// 			if(!pass)
// 				return ;

// 			var embedHtml;
// 			if(this.editor.isHtml5 && platform.youtube){
// 				embedHtml = '<div class="mbe_video_conatiner">'+
// 				'<object class="mbe_video" data="'+this.youtubeUrl(platform.youtube)+'" style="width:100%;height:100%"></object>'
// 				'</div>';
// 			}
// 			else if(platform.youtube){
// 				embedHtml = '<div class="mbe_video_conatiner">'+
// 				'<iframe style="width:100%;height:100%;" class="mbe_video" src="'+this.youtubeUrl(platform.youtube)+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>'+
// 				'</div>';
// 			}
// 			else if(platform.vimeo){
// 				embedHtml = '<div class="mbe_video_conatiner">'+
// 				'<iframe style="width:100%;height:100%;" class="mbe_video" src="'+this.vimeoUrl(platform.vimeo)+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>'+
// 				'</div>';
// 			}

// 			if(this.editor.didRecordedRange()){
// 				this.editor.recoverRange();
// 				var range = this.editor.getRange();
// 				var cloneRange = range.cloneRange();
// 				cloneRange.insertNode($(embedHtml)[0]);
// 			}
// 			else {
// 				this.editor.$container.append(this.editor.getNewLineElement(embedHtml));
// 			}

// 			$('.mbe_video_conatiner').each(function(){
// 				var videoWidth = $(this).find('.mbe_video').width();
// 				$(this).find('.mbe_video').css('max-height', (videoWidth*0.5625)+'px');
// 			});
// 		},
// 		Editor.PLUGINS.Video.prototype.build_dropdown_callback = $.extend(Editor.prototype.build_dropdown_callback, {
// 			video: function(context){
// 				var dropdownHtml = '<div class="tool_video_linkbx">'+
// 				'<input class="textbx mbe_input" type="url" placeholder="이곳에 영상 주소를 붙여주세요. YouTube, Vimeo">'+
// 				'<a class="close" href="#;">취소</a><a href="#;" class="ok_btnbx">확인</a>'+
// 				'</div>';

// 				return dropdownHtml;
// 			}
// 		});
// 	})(MetaBrainEditor);
// })(jQuery, window);