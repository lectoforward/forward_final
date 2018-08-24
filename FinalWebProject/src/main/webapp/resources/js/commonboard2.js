// console 객체가 없을 경우
if (!window.console) {
	window.console = {
		log : function(){},
		dir : function(){}
	};
} else if (!window.console.dir){
	window.console.dir = function(){};
}


(function(){
	$(document).ready(function(){
		var agents = [/(opr|opera)/gim,/(chrome)/gim,/(firefox)/gim,/(safari)/gim,/(msie[\s]+[\d]+)/gim,/(trident).*rv:(\d+)/gim];
		var agent = navigator.userAgent.toLocaleLowerCase();
		for(var ag in agents){
			if(agent.match(agents[ag])){
				$(document.body).addClass(String(RegExp.$1+RegExp.$2).replace(/opr/,'opera').replace(/trident/,'msie').replace(/\s+/,''));
				break;
			}
		}
	});
})();


$(document).ready(function(e) {

	// faq, qna
	var $toggleItems = $('.accordion dt > a');
	var $lastToggleItem = null;

	$toggleItems.off('click').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this).closest('dt');
		if( $this.is($lastToggleItem) && $this.hasClass("is-opened") ) {
			$this.removeClass("is-opened");
			return;
		}

		if( $lastToggleItem !== null ) {
			$lastToggleItem.removeClass("is-opened");
		}

		$this.addClass('is-opened');
		$lastToggleItem = $this;
	});

	/*
	var isTouch = 'ontouchstart' in window,
		CLICK_EV = isTouch ? 'touchend' : 'click';
	$('body').on(CLICK_EV, '[class*="layer"]', function(e) {
		var $t = $(e.target);
		//c.log($t.closest('[class*="layer"]').length);
		if($t.is('[class*="layer"].active') || $t.closest('[class*="layer"]').length > 0) {
			$t.removeClass('active');
			//e.preventDefault();
		}
	});
	*/
});

/*[mib170718] 클래스 2종 추가 //*/
//탭메뉴 클래스
function TabMenu(targetWrap){
	this.$target = null;
	this.$tapMenuNav = null;
	this.$tapMenuNavList = null;
	this.$tabMenuConts = null;
	this.$tab_contentList = null;
	this._$init(targetWrap);
	this._$initEvent();
}
TabMenu.prototype._$init = function(targetWrap){
	this.$target = $(targetWrap);
	this.$tapMenuNav = this.$target.find(".tabMenuNav");
	this.$tapMenuNavList = this.$tapMenuNav.find(".tabMenuNavList");
	this.$tabMenuConts = this.$target.find(".tabMenuConts");
	this.$tab_contentList = this.$tabMenuConts.find(".tab_content");
}
TabMenu.prototype._$initEvent = function(){
	var $this = this;
	//탭 클릭 이벤트
	this.$tapMenuNavList.click(function(){
		//init
		var _$contentsIndex = $(this).index();
		//event
		$this.$tapMenuNavList.removeClass("on");
		$(this).addClass("on");
		$this.$tab_contentList.removeClass("on");
		$this.$tab_contentList.eq(_$contentsIndex).addClass("on");
	});
}

function VideoMobile(targetID,wrap){
	this.$target = document.getElementById(targetID);
	this.jQueryTarget = $("#"+targetID);
	this.$player = $(wrap).find('.main_content_controller_play_m');
	this.$sound = $(wrap).find('.main_content_controller_sound_m');
	this._$checkPlayMobile = false; //재생중 체크
	this._$init(this.jQueryTarget);
	this._$initEvent();
}
VideoMobile.prototype._$init = function(target){
	target.prop('muted', false);//뮤트 체크
}
VideoMobile.prototype._$initEvent = function(){
	var $this = this;
	this.$player.click(function(){//재생 정지 토글
		if($this._$checkPlay){
			$this._$mainVideoPause();
			$this.$player.removeClass("on");
			$this._$checkPlay = false;
		}else{
			$this._$mainVideoPlay();
			$this.$player.addClass("on");
			$this._$checkPlay = true;
		}
	});
	this.$sound.click( function (){//사운드 뮤트 토글
		if( $this.jQueryTarget.prop('muted') ) {
			$this.jQueryTarget.prop('muted', false);
			$this.$sound.removeClass("on");
		} else {
			$this.jQueryTarget.prop('muted', true);
			$this.$sound.addClass("on");
		}
	});
	$('.subjectGroup_m').click(function(e){
		$this._$mainVideoPause();
		$this.$player.removeClass("on");
		$this.jQueryTarget.prop('muted', false);
		$this.$sound.removeClass("on");
		e.stopPropagation();
	});
}
VideoMobile.prototype._$mainVideoPlay = function() {
	this.$target.play();
}
VideoMobile.prototype._$mainVideoPause = function() {
	this.$target.pause();
}
VideoMobile.prototype._$mainVideoMute = function() {//미사용
	this.$target.muted = "muted";
}
/*//[mib170718] 클래스 2종 추가*/
