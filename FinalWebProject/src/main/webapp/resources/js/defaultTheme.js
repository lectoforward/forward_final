




var device = (function(){
	function check(){
		var userAgent = navigator.userAgent.toLowerCase();
		if( userAgent.search("android") > -1 ){
			return "android";
		}
		else if( userAgent.search("iphone") > -1 ){
			return "iphone";
		}
		else if( userAgent.search("ipad") > -1 ){
			return "ipad";
		}
		else{
			return "pc";
		}
	}
	function ieCheck(){
		var IEIndex = navigator.appVersion.indexOf("MSIE");         // MSIE를 찾고 인덱스를 리턴
		var IE8Over = navigator.userAgent.indexOf("Trident");      // MS IE 8이상 버전 체크

		if( IEIndex > 0 || IE8Over > 0 )  {
			var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
			var strVer = "";
			if (trident != null){
				switch (trident[1]) {
					case "7.0" :
						strVer = 11 // "11.0";
						break;
					case "6.0" :
						strVer = 10 // "10.0";
						break;
					case "5.0" :
						strVer = 9 // "9.0";
						break;
					case "4.0" :
						strVer = 8 // "8.0";
						break;
					default :
						break;
				}
				$('html').addClass("ie");
			}
		} else {
			strVer = 12;

		}
		return strVer
	}

	function Width(){
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
	}

	$(window).resize(function(){
		check();
		Width();
	})

	return{
		check : check,
		ieCheck : ieCheck,
		Width : Width
	}
})();


var header = (function(){
	var el = $("header");
	function init(){
		if(location.host.indexOf('192.168.0.30') != -1 || location.host.indexOf('192.168.0.10') != -1){
			el = $("header");

			if(el.children().length <= 0){
				window.header = $.get("/include/layout/header.html");
				window.header.done(function(data){
					el.html(data);
					setTimeout(function(){
						complete();
						//thisCheck();
					}, 1);
				});

			}else{
				complete();
				//thisCheck();
			}
		} else {
			complete();
		}
	}

	function complete(){
		if( !$("#logo .hide_txt").text() == "부동산챔프") {
			$("#logo").addClass("hh");
		}
	}


	return {
		init: init
	}

})();

var footer = (function(){
	function init(){
		el = $("footer");
		if(location.host.indexOf('192.168.0.30') != -1){
			if(el.children().length <= 0){
				window.header = $.get("/include/layout/footer.html");
				window.header.done(function(data){
					el.html(data);
					setTimeout(function(){
						complete();
					}, 1);
				});

			}else{
				complete();
			}
		} else {
			complete();
		}
	}

	function complete(){

		var fontChange = function(){
			$(".ui-font").on("click", function(e){
				e.preventDefault();
				if( $(this).hasClass("nsb") ){
					$("body").removeClass();
				} else if($(this).hasClass("nsq")){
					$("body").addClass("nsq");
				}
			})
		}
		fontChange();
	}

	return {init: init};
})();



var content = (function(){
	var dimm;

	var init = function(){
		dimm = ".dimm";
		$(document).on("click", dimm, function(e){
			e.preventDefault();
			dimmHide();
		});


		suInfoBtn();
		uiAccoSet();
		uiTabSet();
		uiMotSelect();
	}

	function dimmHide(){
		$(dimm).removeClass("on");
		$(dimm).parents(".on").removeClass("on");
	}

	function uiAccoSet(){
		var btn = "[data-ui-acco-btn]";
		var con = "[data-ui-acco-con]";


		$(document).on("click", btn, function(e){
			e.preventDefault();
			clickSet(this);
		});

		function set(){
			$(con).each(function(){
				if( $(this).attr("data-ui-acco-con-open") == "Y" ){
					$("[data-ui-acco-btn=" + $(this).attr("data-ui-acco-con") + "]").removeClass("close");
				} else {
					$("[data-ui-acco-btn=" + $(this).attr("data-ui-acco-con") + "]").addClass("close")
				}
			});
		}

		function clickSet(btn){
			var $value = $(btn).attr("data-ui-acco-btn");
			if( $(btn).hasClass("close") ){
				$("[data-ui-acco-con=" + $value + "]").attr("data-ui-acco-con-open", "Y");
				$(btn).removeClass("close");
			} else {
				$("[data-ui-acco-con=" + $value + "]").attr("data-ui-acco-con-open", "N");
				$(btn).addClass("close");
			}
		}

		set();
	}

	function uiTabSet(){
		var btn = "[data-ui-tab-menu] a";
		var contentAttr = "[data-ui-tab-content]";

		$(document).on("click", btn , function(e){
			e.preventDefault();
			clickSet(this);
		})
		function init(){
			$("[data-ui-tab-menu]").each(function(){
				var _index = $(this).find("a.on").index();
				var _attr = $(this).attr("data-ui-tab-menu");
				$("[data-ui-tab-content=" + _attr + "]").removeClass("tab_on").eq(_index).addClass("tab_on");
			})
		}
		function clickSet(el){
			var _index = $(el).index();
			var _attr = $(el).parents("[data-ui-tab-menu]").attr("data-ui-tab-menu");
			$(el).parents("[data-ui-tab-menu]").find("a").removeClass("on");
			$(el).addClass("on");
			$("[data-ui-tab-content=" + _attr + "]").removeClass("tab_on").eq(_index).addClass("tab_on");
		}

		init();

	}

	var uiMotSelect = function(){
		var select = ".ui_mot_select";
		var tac = ".ui_mot_select .tac a"
		var _txt;

		$(select).each( function(){
			if($(".on").length){
				_txt = $(this).find(".on").text();

				$(this).find(".this").text( _txt );
			}
		});

		$(document).on("click", select, function(e){
			e.preventDefault();
			_txt = $(this).find(".this").text();
			if($(this).hasClass("on")){
				$(this).removeClass('on');
			} else {
				$(this).addClass('on');
			}
		});
		$(document).on("click",tac, function(e){
			e.preventDefault();
			_txt = $(this).text();
			$(this).parents(".ui_mot_select").find(".this").text( _txt );
			$(this).parent().find("a").removeClass("on");
			$(this).addClass("on");
		})
		$(select).on("mouseleave", function(){
			$(this).removeClass("on");
		});
	}


	var suInfoBtn = function(){
		var btn = $(".su_info_maparea .btnarea .btn");
		var allbtn = $(".su_info_maparea .btnarea .all");
		btn.on("click", function(e){
			e.preventDefault();

			if ( $(this).hasClass("all") ){
				if( $(this).hasClass("off") ){
					btn.removeClass("off");
				} else {
					btn.addClass("off");
				};
			} else {
				if( $(this).hasClass("off") ){
					$(this).removeClass("off");
					if(!btn.not(".all").hasClass("off")){
						allbtn.removeClass("off");
					}
				} else {
					$(this).addClass("off");
					allbtn.addClass("off");
				};
			};
		});
	};

	function photoViewer(){

	}

	return {
		init:init,
	}
})();











$.fn.popSet = function(options){
	var defaults = {
		pop : "",
		pop_close_btn : '.ui_pop_close',
		animation : true,
		popIng : true,
		dimm : true,
		NoneWindowScroll : false,
		autoOpen : false,
		autoClose : false,
		ui_pop_txt : "",
		ui_title : '',
		header_ico : "bad", // "bad","happy","ques","none",
		zIndex : 1000,
		popOpen : function(){
			//console.log("열기")
		},
		popClose : function(){
			//console.log("닫기")
		},
		popLoadComplete : function(){

		}
	}

	var el = $(this);
	var pop;
	var goBtn;
	var closeBtn;
	var ops;
	var init = function(){
		ops = $.extend(defaults, options);
		pop = $(ops.pop);
		closeBtn = ops.pop_close_btn;

		if(ops.autoClose){
			if(ops.pop){
				console.log("스크립트 에러, 버튼선택이 아닌 선택자를 팝업으로 바꿔야 합니다.");
			} else {
				pop = el;
				popClose();
				return false
			};
		};

		if(ops.autoOpen){
			if(ops.pop){
				console.log("스크립트 에러, 버튼선택이 아닌 선택자를 팝업으로 바꿔야 합니다.");
			} else {
				pop = el;

				popOpen();
				el.off().on("click", closeBtn, function(e){
					e.preventDefault();
					popClose();
				});
			};
		} else {
			el.off().on("click", function(e){
				e.preventDefault();
				popOpen();
			});
			$(document).find(ops.pop).off().on("click", closeBtn, function(e){
				e.preventDefault();

				popClose();
			});
		};
		pop.find(".pop_content").on("DOMSubtreeModified",function(){
			popPosition();
		});

	};

	var popOpen = function(){
		ops.popOpen();
		$("body").css("overflow-y","hidden");
		if(ops.ui_pop_txt){

			if(pop.find(".ui_pop_txt").length){
				pop.find(".ui_pop_txt").html(ops.ui_pop_txt)
			}
		};
		if(ops.ui_title){
			pop.find(".ui_title").text(ops.ui_title)
		};
		if( ops.header_ico == "none"){
			pop.find(".pop_header .dc").removeClass("bad happy ques none");
		} else {
			pop.find(".pop_header .dc").removeClass("bad happy ques none");
			pop.find(".pop_header .dc").addClass(ops.header_ico);
		};

		if(ops.dimm){
			pop.addClass("pop_dimm");
		};
		if(ops.animation){
			pop.addClass("pop_ani");
		};
		if(ops.zIndex){
			pop.css("z-index",ops.zIndex)
		}
		pop.addClass("on");
		pop.css({
			"width" : pop.attr("data-width")
		});
		pop.find("a").first().focus();
		popPosition();
		pop.find(".pop_content").mCustomScrollbar({
        	scrollInertia: 0
        });
		ops.popLoadComplete();
	};
	var popClose = function(){
		if(!ops.NoneWindowScroll){
			$("body").css("overflow-y","auto");
		}

		pop.removeClass("on");
		pop.removeClass("pop_dimm");
		pop.removeClass("pop_ani");
		pop.removeAttr("style");
		ops.popClose();
	};


	var popPosition = function(){
		pop.css({
			"height" : "auto"
		});
		if(pop.innerHeight() >= $(window).height()){
			pop.height($(window).height());
		}
		pop.css({
			top : $(window).height()/2 - pop.innerHeight()/2,
			left : $(window).width()/2 - pop.width()/2
		});

	};
	$(window).resize(function(){
		popPosition();
	});

	init();
};

$.extend({
	dimmSet: function(){

		function hide(){
			alert("test");
		}

		return{
			test : test
		}
	},
	scrollSet: function(el){
        var myScroll = new IScroll(el, {
            mouseWheel: true,
            scrollbars: true,
            scrollbars: 'custom',
            bounce : false,

        });

        myScroll.on('beforeScrollStart', function(){
        	myScroll.refresh();
        })

		function reset(){
		    myScroll.refresh();
		}
        return{
            reset : reset
        }
	}
})




$.fn.pageLoading = function(options){
	var defaults = {
		type : "open", // "open", "close"
		style : "style01" // style02, style03
	};

	var el = $(this);
	var ops;
	var init = function(){
		ops = $.extend(defaults, options);
		if(ops.type == "open"){
			destroy();
			create();
		} else if( ops.type == "close"){
			destroy();
		};
	};

	var create = function(){
		el.append( "<div class='ui-loading-wrap'><span><em></em></span></div>")
		$(".ui-loading-wrap").find("em").addClass(ops.style);
	};

	var destroy = function(){
		$(".ui-loading-wrap").stop().animate({
			opacity:0
		},200,function(){
			$(this).remove();
		})
	};

	init();
};


$.fn.popCenter = function(options){
	var defaults = {
		animate : false,
		duration : 300
	};

	var el = $(this);
	var ops;
	var init = function(){
		ops = $.extend(defaults, options);
		centerSet();
	};

	var centerSet = function(){
		el.css({
			"height" : "auto"
		});
		if(ops.animate){
			el.stop().animate({
				top : $(window).height()/2 - el.height()/2,
				left : $(window).width()/2 - el.width()/2
			}, ops.duration);
		} else {
			el.css({
				top : $(window).height()/2 - el.height()/2,
				left : $(window).width()/2 - el.width()/2
			});
		}

		if(el.height() >= $(window).height()){
			el.height($(window).height());
		} else {
			el.css({
				"height" : "auto"
			});
		}
	};

	init();
};




var mapCategory = (function(){
	var mapCategory;
	var btn;
	var btn_category_close;
	var init = function(){
		mapCategory = $(".map_tac.category_tac");
		btn = $(".map_tac.category_tac .btn");
		btn.off().on("click", function(e){
			e.preventDefault();
			if($(".y_map_loaction").length){
				mapLocation.allHide();
			}
			if($(this).parent().hasClass("on")){
				if($(this).parents(".map_filter_area").length){
					$(".headerdimm").removeClass("on");
				}

				$(this).parent().removeClass("on");
			} else {
				if($(this).parents(".map_filter_area").length){
					$(".headerdimm").addClass("on");
				}
				btn.parent().removeClass("on");
				$(this).parent().addClass("on");
			}
			$(".tpop").removeClass("on");
		});
		mapCategory.find(".closebtn").on("click", function(e){
			e.preventDefault();
			allHide();
			$(".tpop").removeClass("on");
		})
		$(".ltfi_con").mCustomScrollbar({
        	scrollInertia: 0
        });
		// btn.next().find(".closebtn").off().on("click", function(e){
		// 	e.preventDefault();
		// 	$(this).parents(".map_tac").removeClass("on");
		// });
		$(".upjong-box .seh .ar").mCustomScrollbar({
        	scrollInertia: 0,
			theme:"ytp-m10"
        });
	};
	var close = function(){
		btn.parent().removeClass("on");
		$(".headerdimm").removeClass("on");
	}
	var allHide = function(){
		btn.parent().removeClass("on");
		$(".headerdimm").removeClass("on");
	}
	return{
		init:init,
		allHide:allHide
	}
})();












var pdDetail = (function(){
	var rl;
	var wt;
	function init(){
		rl = $(".agent_info.spc");

		rl.find(".btn_top_go").on("click", function(e){
			e.preventDefault();
			$(window).scrollTop(0);
		})
		$(window).on("scroll", function(){
			wt = $(window).scrollTop();
			scrollEventGo();
		});
	}
	function scrollEventGo(){
		// if(wt > 400 + (rl.find(".cot").height() - 600) ){
		// 	rl.find(".cot").addClass("move");
		// } else {
		// 	rl.find(".cot").removeClass("move");
		// }
		if(wt > 420 ){
			rl.find(".cot").addClass("move");
		} else {
			rl.find(".cot").removeClass("move");
		}
		if(wt > $("#content>.default_c").innerHeight() - $("footer").innerHeight() - 21 ){
			rl.find(".cot").removeClass("move");
			rl.addClass('end');
		} else {
			rl.removeClass('end');
		}
	}

	return{
		init:init
	}
})();






$(function(){
	header.init();
	footer.init();
	content.init();
})








var samsiklib_config = {
	dimm: {
		style: {
			backgroundColor: "#000000"
			, opacity: 0.7
		}
		, animate: true
	}
};

(function(root, doc, factory){
	if (typeof define === "function" && define.amd){
		// AMD. Register as an anonymous module.
		define(["jquery"], function($) {
			factory($, root, doc);
			return $.samsiklib;
		});
	}else{
		// Browser globals
		factory(root.jQuery, root, doc);
	}
}(this, document, function(jQuery, window, document, undefined) {
(function($) {
	$.samsiklib = {};
	var extend = $.extend;
	extend($.samsiklib, {ui:{}});
	extend($.samsiklib, {net:{}});
	extend($.samsiklib, {util:{}});
	extend($.samsiklib, {config:{}});
})(jQuery);
(function($) {
	if(samsiklib_config){
		$.extend(true, $.samsiklib.config, {
			dimm: {
				style: {
					backgroundColor: "#000000"
					, opacity: 0.7
				}
				, animate: true
				, callback: undefined
			}
		}, samsiklib_config);
	}
})(jQuery);

(function($, window, document, undefined){
	$.extend($.samsiklib.ui, {
		dimm: (function(){
			var _instance;
			var $dom;
			var _domId = "samsikui_dimm";
			var _options = $.samsiklib.config.dimm;


			function _init(c){
				_create(c);

			}

			function _create(s){
				$dom = $("<div/>").hide();
				$dom.attr({"class": _domId});
				if( s == null ) {
					$("body").append($dom);

				} else {
					$("" + s).append($dom);
				}


				$dom.css({position: "fixed", top: 0, bottom: 0, left: 0, right: 0, zIndex:10001});
			}

			function _destroy(){

				$dom.remove();
			}

			function _show(s,options){
				if(_instance){
					//console.log("중복?")
					return;

				}
				_instance = true;

				var dfd = new $.Deferred();

				_init();

				var duration = s
				var tmpOptions = $.extend(true, {}, _options, options);

				$dom.css($.extend({}, tmpOptions.style));

				if(tmpOptions.animate){
					dfd = $dom.css({display: "block", opacity: 0}).animate({opacity: tmpOptions.style.opacity}, duration).promise();
				}else{
					$dom.show();
				}

				dfd.always(function(){
					if(tmpOptions && $.isFunction(tmpOptions.callback)){
						tmpOptions.callback();
					}
				});
			}


			function _showAppend(s,time, options){
				if(_instance){
					//console.log("중복?")
					return;
				}
				_instance = true;

				var dfd = new $.Deferred();

				_init(s);

				var el = $("" + s)
				var duration = time;
				var tmpOptions = $.extend(true, {}, _options, options);


				$dom.css($.extend({}, tmpOptions.style));

				if(tmpOptions.animate){
					dfd = $dom.css({display: "block", opacity: 0}).animate({opacity: tmpOptions.style.opacity}, duration).promise();
				}else{
					$dom.show();
				}

				dfd.always(function(){
					if(tmpOptions && $.isFunction(tmpOptions.callback)){
						tmpOptions.callback();
					}
				});
			}

			function _hide(s,options){
				if(!_instance){
					return;
				}
				_instance = false;

				var dfd = new $.Deferred();

				var el = $("" + s)
				var duration = s
				var tmpOptions = $.extend(true, {}, _options, options);
				//console.log(s)

				if(_options.animate){
					dfd = $dom.animate({opacity: 0}, duration).promise().done(function(){
						$(this).css({display: "none"});
					});
				}else{
					dfd = $dom.hide().promise();
				}

				dfd.always(function(){
					_destroy();

					if($.isFunction(tmpOptions.callback)){
						tmpOptions.callback();
					}
				});
			}
			return {
				init: _init
				, show: _show
				, hide: _hide
				, showAppend : _showAppend
			};
		})()
	});
})(jQuery, window, document);
}));
