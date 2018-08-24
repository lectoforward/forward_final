jQuery.browser={};(function(){jQuery.browser.msie=false;jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})(); 

//jQuery 사용자정의 메서드 추가
$.fn.extend({ 
    digitchker: function () {                   
        $(this).on("keyup", function () { //keyup, focus 이벤트 등록
        	$(this).val( $(this).val().replace(/[^0-9]/gi,"") );
        });
    }
});

$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};


String.prototype.replaceAll = function(searchStr, replaceStr) {
	var str = this.valueOf().toString();
    return str.split(searchStr).join(replaceStr);
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

Number.prototype.moneyToHangul = function(){
	arrayNum=new Array("","1","2","3","4","5","6","7","8","9");
	arrayUnit=new Array("","십","백","천","만 ","십만 ","백만 ","천만 ",
                    "억 ","십억 ","백억 ","천억 ","조 ","십조 ","백조");
	arrayStr= new Array();
	str = this.valueOf().toString();
	len = str.toString().length;
	
	//대표님 요청으로 월세보증금이 없을 경우 0표시 공통사용으로 오류발견 시 수정 할것  2016.08.05 by woodems
	if(str == undefined || str == "" || str == "0"){
		return "0";
	}
	//대표님 요청으로 천단위는 숫자로 출력 2016.06.22
	if(len<9) return str.substring(0,len-4);
	
	hanStr = "";
	for(i=0;i<len;i++) { arrayStr[i] = str.substr(i,1) }
	code = len;
	for(i=0;i<len;i++) {
		code--;
		tmpUnit = "";
		if(arrayNum[arrayStr[i]] != ""){
			tmpUnit = arrayUnit[code];
			if(code>4) {
				if(( Math.floor(code/4) == Math.floor((code-1)/4)
			     && arrayNum[arrayStr[i+1]] != "") || 
			     (Math.floor(code/4) == Math.floor((code-2)/4) 
			     && arrayNum[arrayStr[i+2]] != "")) {
					tmpUnit=arrayUnit[code].substr(0,1);
				} 
			}
		}
		hanStr +=  arrayNum[arrayStr[i]]+tmpUnit;
	}
	return hanStr;
};

Number.prototype.toHangul = function() {		// 단위 만원
//function trans_han(sour, targ){ 
	
	if(isNaN(this.valueOf().toString())){
		return '';
	}
	
    s = this.valueOf().toString() + '0000';
    //0입력하면 
   // if(s='00000'){
   // 	return ''; 
    //}
     
    if(s.length > 16){ 
//        alert('숫자가 너무 큽니다'); 
        return; 
    } else if(isNaN(s)){ 
//        alert('숫자가 아닙니다'); 
        return; 
    } 
    b1 = ' 일이삼사오육칠팔구'; 
    b2 = '천백십조천백십억천백십만천백십원'; 
    tmp = ''; 
    cnt = 0; 
    while(s != ''){ 
        cnt++; 
        tmp1 = b1.substring(s.substring(s.length-1,s.length), Number(s.substring(s.length-1,s.length))+1); // 숫자 
        tmp2 = b2.substring(b2.length-1,b2.length); // 단위 
        if(tmp1==' '){ // 숫자가 0일때 
            if(cnt%4 == 1){ // 4자리로 끊어 조,억,만,원 단위일때만 붙여줌 
                tmp = tmp2 + tmp; 
            } 
        } else{ 
            if(tmp1 == '일' && cnt%4 != 1){ // 단위가 조,억,만,원일때만 숫자가 일을 붙여주고 나머지는 생략 ex) 삼백일십만=> 삼백십만 
                tmp = tmp2 + tmp; 
            } else{ 
                tmp = tmp1 + tmp2 + tmp; // 그외에는 단위와 숫자 모두 붙여줌 
            } 
        } 
        b2 = b2.substring(0, b2.length-1); 
        s = s.substring(0, s.length-1); 
    } 
    tmp = tmp.replace('억만','억').replace('조억','조'); // 조,억,만,원 단위는 모두 붙였기 때문에 필요없는 단위 제거 
    return tmp.substring(0, tmp.length - 1); 
};

Number.prototype.moneyToSemiHangul = function(){	
	str = this.valueOf().toString();
	len = str.toString().length;
	//만원 절삭
	if(len > 4){
		str = str.substring(0,len - 4) + "0000";		
	}
	
	hanStr = "";
	commStr = "";
	endStr = "";
	
	if (len > 8) {
		hanStr = str.substring(0, len - 8) + '억 '; 
		commStr = str.substring(len - 8);
	} else {
		commStr = str;
	}
	
	if (str.substring(len - 4) == "0000") {
		endStr = '만';
		commStr = commStr.substring(0, commStr.length - 4);
	}
	
	commStr = parseInt(commStr, 10).comma();
		
	return hanStr + commStr + endStr;
};

/**
 * 금액 형태 변환 함수
 * @param addPos 자릿수 추가(ex : 4 // 맨뒤 0000 추가)
 * @param startBlockUnit 시작 단위 ("" : 전체 ,M : 만 ,U : 억 ,J : 조)
 * @param endWordPos '원' 글자 추가 위치 (M : 만 ,U : 억 ,J : 조 // 해당 단위로 끝날 시 '원' 글자 추가 // 배열로 여러 위치 선택 가능)
 * @param spaceYN 단위간 공백 추가 여부
 */
Number.prototype.moneyToSemiHangulFlx = function(addPos, startBlockUnit, endWordPos, spaceYN){

	var dObj = {
		_M : "M",
		_U : "U",
		_J : "J",
		orgPrice : this.valueOf(),
		conPrice : this.valueOf().toString(),
		blockUnit : ["원", "만", "억", "조"],
		blockRecord : 4,
		startBlockUnitN : -1,
		quotient : 0,
		remainder : 0,
		tmpVal : 0,
		addEndWord : false,
		endWord : "",
		rtnPrice : ""
	}
	
	if("" == startBlockUnit){
		dObj.startBlockUnitN = -1;
	}else if(dObj._M == startBlockUnit){
		dObj.startBlockUnitN = 1;
	}else if(dObj._U == startBlockUnit){
		dObj.startBlockUnitN = 2;
	}else if(dObj._J == startBlockUnit){
		dObj.startBlockUnitN = 3;
	}
	
	if(dObj.orgPrice > 0){
		
		for(var i = 0; i < addPos; i++){
			dObj.conPrice += "0";
		}

		dObj.quotient = parseInt(dObj.conPrice.length / dObj.blockRecord);
		dObj.remainder = dObj.conPrice.length % dObj.blockRecord;
		
		if(dObj.remainder > 0){
			dObj.rtnPrice = dObj.conPrice.substring(0, dObj.remainder);
			if(dObj.quotient >= dObj.startBlockUnitN){
				dObj.rtnPrice += dObj.blockUnit[dObj.quotient];
			}
		}

		for(var i = 0; i < dObj.quotient; i++){
			dObj.tmpVal = parseInt(dObj.conPrice.substring((i*dObj.blockRecord)+dObj.remainder, ((i*dObj.blockRecord)+dObj.remainder)+dObj.blockRecord));
			
			if(dObj.tmpVal > 0){
				if(spaceYN == "Y" && "" != dObj.rtnPrice){
					dObj.rtnPrice += " ";
				}
				
				dObj.rtnPrice += dObj.tmpVal.comma();
				if(dObj.quotient-1-i >= dObj.startBlockUnitN){
					dObj.rtnPrice += dObj.blockUnit[dObj.quotient-1-i];
				}
			}
		}
		
		if("" != endWordPos && endWordPos != null){
			dObj.endWord = dObj.rtnPrice.substring(dObj.rtnPrice.length-1);
			if("만" == dObj.endWord){
				dObj.endWord = dObj._M;
			}else if("억" == dObj.endWord){
				dObj.endWord = dObj._U;
			}else if("조" == dObj.endWord){
				dObj.endWord = dObj._J;
			}
			
			for(var i = 0; i < endWordPos.length; i++){
				if(dObj.endWord == endWordPos[i]){
					dObj.addEndWord = true;
					break;
				}
			}
			
			if(dObj.addEndWord){
				dObj.rtnPrice += "원";
			}
		}
	}else{
		dObj.rtnPrice = "0";
	}
	
	
	return dObj.rtnPrice;
};


//2018.04.02 추가 (검색필터에 가격쪽에 사용)
Number.prototype.num2KorWon = function(){
	if(isNaN(this.valueOf().toString())){
		return '0';
	}
	var won = (this.valueOf().toString() + '0000').replace(/,/g, "");
	var arrayWon = ["원", "만", "억", "조", "경"];
	var changeWon = "";
	var numPattern = /(-?[0-9]+)([0-9]{4})/;
	while(numPattern.test(won)) { 
		won = won.replace(numPattern,"$1,$2");
	}
	var arrayCnt = won.split(",").length-1;
	for(var ii=0; ii<won.split(",").length-1; ii++) {
		var tmpwon=0;
		for(var i=0;i<won.split(",")[ii].length;i++){
			var num1 = won.split(",")[ii].substring(i,i+1);
			tmpwon = tmpwon+Number(num1);
		}
		if(tmpwon > 0){
			if(arrayCnt==1 && won.split(",")[ii].length==4){
				changeWon += won.split(",")[ii].substring(0,1)>0?won.split(",")[ii].substring(0,1)+"천":"";
				if(parseInt(won.split(",")[ii].substring(1,4))>0){
					changeWon += parseInt(won.split(",")[ii].substring(1,4));
				}
				changeWon += arrayWon[arrayCnt]; 
			}else{
				changeWon += won.split(",")[ii]+arrayWon[arrayCnt]; 
			}
		}
		arrayCnt--;
	}
	return changeWon;
};

function isNumObj(event) {
    var key = window.event ? event.keyCode : event.which;    

    if ((event.shiftKey == false) && ((key  > 47 && key  < 58) || (key  > 95 && key  < 106)
    || key  == 35 || key  == 36 || key  == 37 || key  == 39  // 방향키 좌우,home,end  
    || key  == 8  || key  == 46 ) // del, back space
    ) {
        return true;
    }else {
        return false;
    }    
};

function isNumeric(s) {
	s += ''; // 문자열로 변환
	s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
	if (s == '' || isNaN(s)) return false;
	return true;
}

Number.prototype.commaFix = function(){
	var parts= this.valueOf().toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
};

Number.prototype.comma = function(){
	var res = '';
	try {
		var num = this.valueOf().toString();
		var suffix = '';
		if (num.indexOf('.') >= 0) {
			suffix = num.substr(num.indexOf('.'));
		}
		
		re = /(\d+)/;
		
		if(re.test(num)){ 
			re.exec(num); num = RegExp.$1; 
			re = /(\d+)(\d{3})/;
			while(re.test(num)){ num = num.replace(re,"$1,$2"); }
		}
		
		res = (num + suffix);
		
	} catch(e) {
		res = '';		
	}
	
	if (res == 'NaN')
		res = '';
    return res;
};

String.prototype.unComma = function(){
	var str = this.valueOf().toString();
	return str.replace(/,/g,"");		/* todo: 숫자로 리턴이 필요할수도? */
};

function nvl(obj, rep) {
	if (isNull(obj)) 
		return rep;
	else
		return obj;
}

function isNull(obj) {
	return (typeof obj != "undefined" && obj != null && obj != '') ? false : true;
}

function isNullChane(obj, str) {	
	return (typeof obj == "undefined" || obj == null || obj == '') ? str : obj;
}

function calcDistance(lat1, lon1, lat2, lon2){
    var EARTH_R, Rad, radLat1, radLat2, radDist; 
    var distance, ret;


    EARTH_R = 6371000.0;
    Rad 		= Math.PI/180;
    radLat1 = Rad * lat1;
    radLat2 = Rad * lat2;
    radDist = Rad * (lon1 - lon2);
    
    distance = Math.sin(radLat1) * Math.sin(radLat2);
    distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
    ret 		 = EARTH_R * Math.acos(distance);
				
    var rtn = Math.round(Math.round(ret) / 1000);
    
   	if(rtn <= 0)
   	{
   		rtn = Math.round(ret) + "m";
   	}else
   	{
   		rtn = rtn + "km";
   	}
    
    return rtn;
};

function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test( $email );
}

function chkPassword(userId, inputPassword) {
	if (inputPassword.length < 6) {
		return "비밀번호는 문자, 숫자, 특수문자의 조합으로 6~16자리로 입력해주세요.";
	} 

	if (!inputPassword.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {		
		return "비밀번호는 문자, 숫자, 특수문자의 조합으로 6~16자리로 입력해주세요.";
	} 

	if (userId.indexOf(inputPassword) > -1) {
		return "비밀번호에 아이디를 사용할 수 없습니다.";
	} 

	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드

	var chr_pass_0;
	var chr_pass_1;

	for ( var i = 0; i < inputPassword.length; i++) {
		chr_pass_0 = inputPassword.charAt(i);
		chr_pass_1 = inputPassword.charAt(i + 1);

		//동일문자 카운트
		if (chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1;
		} 

		//연속성(+) 카운드
		if (chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1;
		} 

		//연속성(-) 카운드
		if (chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1;
		} 
	} 

	if (SamePass_0 > 1) {
		return "동일문자를 3번 이상 사용할 수 없습니다.";
	} 

	if (SamePass_1 > 1 || SamePass_2 > 1) {
		return "연속된 문자열을 3자 이상 사용 할 수 없습니다.";
	} 
	return "";
}

$.scrollToElement = function (elem, delay) {
	if (delay == null || delay == undefined)
		delay = 500;
	
	$('html, body').animate({
		scrollTop: elem.offset().top
	}, delay);	
};

$.fn.setComboValue = function(val, attribute) {
	if ($.trim(val) == '')
		return;
	
	if ($(this).find('.select-items').length < 1)
		return;
	var element = $(this);
	$(this).find('li').removeClass('selected');
	$(this).find('.select-items li').each(function() {
		if (!isNull(attribute)) {
			if ($(this).attr(attribute) == val) {
				$(this).addClass('selected');
				element.find('.label').html($(this).html());			
				return false;					
			}
		} else if ($(this).html() == val) {
			$(this).addClass('selected');
			element.find('.label').html(val);			
			return false;					
		}
	});	
};

;(function ($) {
	var oAddClass = $.fn.addClass;
	$.fn.addClass = function () {
		if (this.selector.indexOf('dimmed') > -1 && arguments[0] == 'on')
			$('html').css('overflow', 'hidden');
			
	    return oAddClass.apply(this, arguments);
	};
	var oRemoveClass = $.fn.removeClass;
	$.fn.removeClass = function () {
		if (this.selector.indexOf('dimmed') > -1 && arguments[0] == 'on')
			$('html').css('overflow-y', 'auto');
		
		return oRemoveClass.apply(this, arguments);
	};
})(jQuery);

var setMeterBindingChangePy = function(elem_m2, elem_pyung) {
	if (isNumeric(elem_m2.val()))		
		//elem_pyung.val(Math.round(parseFloat(elem_m2.val()) * 0.3025).toFixed(2));
		elem_pyung.val(parseFloat(elem_m2.val() * 0.3025).toFixed(2));
};


var setMeterBindingChangeM2 = function(elem_pyung, elem_m2) {
	if (isNumeric(elem_pyung.val()))
		elem_m2.val(parseFloat(elem_pyung.val() * 3.3058).toFixed(2));
};


var setMeterBinding = function(elem_m2, elem_pyung) {
	elem_m2.off();
	elem_pyung.off();
	elem_m2.on('keyup', function() {
		//console.log(parseFloat(elem_m2.val() * 0.3025).toFixed(2));		
		if (isNumeric($(this).val()))
			elem_pyung.val(parseFloat(elem_m2.val() * 0.3025).toFixed(2));
			//elem_pyung.val(Math.round(parseFloat(elem_m2.val()) * 0.3025).toFixed(2));
	});
	elem_pyung.on('keyup', function() {
		if (isNumeric($(this).val()))
			elem_m2.val(parseFloat(elem_pyung.val() * 3.3058).toFixed(2));
	});
};

var setTagAction = function(src_checkbox, tar_text, tar_view) {
	src_checkbox.find('input[type=checkbox]').on('click', function() {
		if ($(this).is(':checked')) {
			if (tar_text.val().indexOf('#' + $(this).attr('tag')) > -1) {
				// 이미 있음
			} else {
				//tar_text.focus();
				tar_text.val(tar_text.val() + ' #' + $(this).attr('tag'));
				tar_view.append('<li><div><span value='+$(this).attr('tag').replaceAll(' ', '')+'>#'+$(this).attr('tag')+'</span><a href="#none"></a></div></li>');
				tar_view.find('a').off('click').on('click', function(){
					var tagValue = $(this).parent().find('span').attr('value');
					if(src_checkbox.find('input:checkbox[tagsub="'+tagValue+'"]').is(':checked')){
						src_checkbox.find('input:checkbox[tagsub="'+tagValue+'"]').click();
					}
				});
			}
		} else {
			if (tar_text.val().indexOf('#' + $(this).attr('tag')) > -1) {
				tar_text.val(tar_text.val().replace(' #' + $(this).attr('tag'), '').replace('#' + $(this).attr('tag'), ''));
				tar_view.find('li:has(span[value="'+$(this).attr('tag').replaceAll(' ', '')+'"])').remove();
			} else {
				// 이미 없음
			}
		}
	});
	tar_view.find('a').off('click').on('click', function(){
		var tagValue = $(this).parent().find('span').attr('value');
		if(src_checkbox.find('input:checkbox[tagsub="'+tagValue+'"]').is(':checked')){
			src_checkbox.find('input:checkbox[tagsub="'+tagValue+'"]').click();
		}
	});
};

function addSerialToJson(serialData, obj) {
	if (serialData == null || serialData == undefined || serialData == 'undefined' || serialData == '')
		return obj;
	
    var data = serialData.split("&");
    
    if (obj == null || obj == undefined)
        obj={};
    
    for(var i = 0; i < data.length; i++)
        obj[data[i].split("=")[0]] = data[i].split("=")[1];
    
    return obj;
}

function browserCheck(){
	var rtn=true;
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("msie") != -1) { //익스플로러
		if(agent.indexOf("msie 10") != -1 || agent.indexOf("msie 9") != -1 || agent.indexOf("msie 8") != -1 || agent.indexOf("msie 7") != -1 || agent.indexOf("msie 6") != -1){ //익스플로러 9이하
			rtn=false;
		}else{
		}
	}
	return rtn;
}

function placeSelect(targetElement, selectFunction, filterFunction, categoryCode) {
	targetElement.on('keyup', function(e) {
		document.search_keyword = $(this).val();
		clearTimeout(keywordSearchTimer);
		
		if ($(this).val().trim() == '') {
			$(this).trigger("blur");
			$(this).focus();
			return;
		}
		
		if (e.keyCode >= 37 && e.keyCode <= 40)
			return false; 
		
		if (e.KeyCode == 13)
			return;
		 
		var callBackFunction = function(status, data, pagination) {
			if (status === daum.maps.services.Status.OK) {
				console.log(data.places)
				$.each(data.places, function() {
					this.label = this.title+'  (' + this.address+')';
				});
				
				targetElement.autocomplete({
					minLength : 0,
					source : []
				});
				
				targetElement.data().term = null;
				targetElement.autocomplete("instance").term = null;
				targetElement.autocomplete("search", "");
				
				if (filterFunction != null)
					data.places = filterFunction(data.places);
				
				targetElement.autocomplete({
					minChars: 1,
					minLength : 0,
					source : data.places,
					selectFirst: true,
					matchContains: false,
					cacheLength: 0,
					focus : function(event, ui) {
						return false;
					},
					select : selectFunction
				});
				
				targetElement.trigger("keydown");
			}
		};
		
		keywordSearchTimer = setTimeout(function() {
			if (categoryCode != null) 
				ps.categorySearch(categoryCode, callBackFunction, {
					location: map.getCenter()
				});
			else 
				ps.keywordSearch(document.search_keyword, callBackFunction);
		}, 300);
	});
}

//로드뷰 에러시 플래시플레이어 다운로드 (daum.net 참고)
//daum.maps.Roadview requires Flash Player 10 or above or a browser with CSS Transform 3D.
function goFlashPlayer(){
	window.open('http://get.adobe.com/flashplayer/');
}

function openPopup(url){
	window.open(encodeURI(url), 'test', 'width:550, status=yes, resizable=yes, scrollbars=yes');
}

$.fn.extend({ 
	datepickerCstm: function (ops) {   
		$(this).datepicker($.extend({
			dateFormat : 'yymmdd',
			prevText : '이전 달',
			nextText : '다음 달',
			monthNames : [ '1월', '2월','3월', '4월', '5월','6월', '7월', '8월','9월', '10월', '11월','12월' ],
			monthNamesShort : [ '1월','2월', '3월', '4월','5월', '6월', '7월','8월', '9월', '10월','11월', '12월' ],
			dayNames : [ '일', '월', '화','수', '목', '금', '토' ],
			dayNamesShort : [ '일', '월','화', '수', '목', '금','토' ],
			dayNamesMin : [ '일', '월','화', '수', '목', '금','토' ],
			showMonthAfterYear : true,
			yearSuffix : '년',
			showOn : "button",
			buttonImage : "/images/icon_btn_calendar-n.png",
			buttonImageOnly : true	
			} ,ops
		));
	}
});

//공통으로 뺌
function addDefaultComboAction(target) {
	$('.select').data('open', 'false').on('click', function(){

		$('.select').data('open', 'false').next('.select-items').removeClass('on');

		if( $(this).data('open') == 'false' ) {
			$(this).data('open', 'true').next('.select-items').addClass('on');
		} else {
			$(this).data('open', 'false').next('.select-items').removeClass('on');
		}
	});

	$(target + ' .select-items li').on('click', function(){

		var selectedItem = $(this).text();
		var $selectLabel = $(this).parents('.select-items').prev('.select').find('.label');

		$(this).addClass('selected')
			.siblings().removeClass('selected')
			.parents('.select-items').removeClass('on')
			.prev('.select').data('open', 'false');

		$selectLabel.html(selectedItem);

		$(this).parents('.select-items').removeClass('on');
	});

	$(target + ' .select .label').html($($(target + ' .select-items li')[0]).html());
	$($(target + ' .select-items li')[0]).addClass('selected');
}

//바이트계산
Number.prototype.calcByte = function(){
	var bytes = parseInt(this.valueOf().toString());
	var s = ['bytes', 'KB', 'MB'];
	var e = Math.floor(Math.log(bytes)/Math.log(1024));
	
	if(e == "-Infinity") return "0 "+s[0]; 
	else 
	return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
};

String.prototype.toRegExpText = function(){
	var searchText = "";
	var searchArray = this.valueOf().toString().split(' ');
	$.each(searchArray, function( key, value ) {
		if(key==0){
			searchText = value;
		}else{
			searchText += '+.*'+value;
		}
	});
	searchText += '+';
	return searchText;
};

String.prototype.dateFormat422 = function(){
	return this.valueOf().toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
};

function emptyValueSwitching(orgValue ,endWord ,switchingValue){
	var rtnVal = orgValue+endWord;
	if(orgValue == "" || (/(^(\s|0){1}$|(null|undefined))/gi).test(orgValue)){
		rtnVal = switchingValue;
	}
	
	
	return rtnVal;
}


//전화번호 자릿수 맞추기
function fnPhonNumStr(str){
	var RegNotNum =/[^0-9]/g;
	var RegPhonNum ="";
	var DataForm ="";
	if( str ==""|| str == null ) return "";
	str = str.replace(RegNotNum,'');
	if( str.length < 4 ) return str;
	if( str.length > 3 && str.length < 7 ){
		DataForm ="$1-$2";
		RegPhonNum =/([0-9]{3})([0-9]+)/;
	} else if(str.length == 7 ){
		DataForm ="$1-$2";
		RegPhonNum =/([0-9]{3})([0-9]{4})/;
	} else if(str.length == 10 ){
		DataForm ="$1-$2-$3";
		RegPhonNum =/([0-9]{3})([0-9]{3})([0-9]+)/;
	} else {
		DataForm ="$1-$2-$3";
		RegPhonNum =/([0-9]{3})([0-9]{4})([0-9]+)/;
	}

	while( RegPhonNum.test(str)){
		str = str.replace(RegPhonNum, DataForm);
	}
	return str;
}

//전화번호 자릿수 function
function fnMaskPhone( obj ){
	obj.value = fnPhonNumStr( obj.value );
}

//요일 to kor
var dayOfWeekToKor = {
	"MON":"월",
	"TUES":"화",
	"WED":"수",
	"THUR":"목",
	"FRI":"금",
	"SAT":"토",
	"SUN":"일"
};


$.fn.disableDisplay = function(dis) {
	if(dis){
		$(this).css({
			"pointer-events":"none",
			"opacity":"0.5"
		});
	}else{
		$(this).css({
			"pointer-events":"auto",
			"opacity":"1"
		});
	}
};