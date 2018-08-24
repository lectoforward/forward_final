// LzString 압축 멀티 ajax 통신을 위한 prototype
// getLzJSON proto 를 이용하여 통신할때
// 서버쪽에도 jcs 파일캐쉬가 설정되어있으므로 (디펄트 5초)
// 쿼리의 반복호출등은 걱정없이 콜하시면됩니다
$.support.cors = true;
var getLzJSON = function() {
	this.params = [];	
	this.prefix	= "com.ytp.champ";
	this.url	= "/common/getJson.ytp";
	
    for (var i = 0; i < arguments.length; i++) {        
    	if (arguments[i].prefix == undefined)
    		arguments[i].prefix = this.prefix;
    	if (arguments[i].url != undefined)
    		this.url = arguments[i].url;
    	this.params.push(arguments[i]);
    }
    
    this.type	= "post";
    
    this.result = undefined;
};

getLzJSON.prototype.addItem = function(args) {
	if (args.prefix == undefined)
		args.prefix = this.prefix;
	this.params.push(args);
};

getLzJSON.prototype.removeItem = function(args) {
	var deleteIndex = -1;
	for (var i = 0; i < this.params.length; i++) {
		if (this.params[i] == args) {
			deleteIndex = i;
			break;
		}
	}
	
	this.params.remove(deleteIndex);
};

getLzJSON.prototype.removeItemFromIndex = function(index) {
	this.params.remove(index);
};

/**
 * 
 * 
 * Uncaught SyntaxError: Unexpected number 라는 오류 발생시
 * {"EVENT_TIME":2014-11-03 18:45:00.0 } 와 같은 형태로 number가 아닌 값이 " 없이 들어오지 않는지 체크
 * 
 * */
getLzJSON.prototype.callback = function(callback_function) {
	var instance = this;
	
	$.ajax({      
        type:	this.type,
        url:	this.url,
        data: 	JSON.stringify({params:this.params}), 		// JavaScript 객체를 JSON 객체로 변환하여 서버 요청시 전송
        cache: false,
//        async: false,
        contentType:"application/json; charset=utf-8",		// 서버 요청시 전송할 데이터가 UTF-8 형식의 JSON 객체임을 명시
        dataType:"json", 		// 서버로부터 응답받을 데이터가 JSON 객체임을 명시하여 수작업 없이 응답 데이터를 JavaScript 객체로 획득
//        type: "post",
        success:function(args){   
//        	console.log(args);
        	
            var decomp = LZString.decompressFromBase64(args._rslt);
            try {
            	var list = $.parseJSON(decomp);            
            	instance.result = list;							// 객체자체도 결과를 갖고 있도록 하고            	
            } catch(e) {
            	console.log('getLzJson json parse error');
            }
            
            if (args.RESULT_CODE == "SUCCESS")
        		callback_function(list);					// 콜백함수에게 결과를 던져주며 호출도 하고
        },   
        error:function(e) {  
//        	if(e.status = '404'){
//        		window.location.replace("http://"+$(location).attr("host")+"/imap/login.do");
//        	}
//            alert("getLzJSON callback exeption!! - " + e.responseText);
        	console.log("getLzJSON callback exeption!! - " + e.responseText + instance.params);
        }  
    });  
}

var getJSON = function() {
	this.params = [];	
	this.prefix	= "com.ytp.champ";
	
	this.url	= "/common/getJsonNoLz.ytp";
	
    for (var i = 0; i < arguments.length; i++) {        
    	if (arguments[i].prefix == undefined)
    		arguments[i].prefix = this.prefix;
    	if (arguments[i].url != undefined)
    		this.url = arguments[i].url;
    	this.params.push(arguments[i]);
    }
    
    this.type	= "post";
    
    this.result = undefined;
};

getJSON.prototype.addItem = function(args) {
	if (args.prefix == undefined)
		args.prefix = this.prefix;
	this.params.push(args);
};

getJSON.prototype.removeItem = function(args) {
	var deleteIndex = -1;
	for (var i = 0; i < this.params.length; i++) {
		if (this.params[i] == args) {
			deleteIndex = i;
			break;
		}
	}
	
	this.params.remove(deleteIndex);
};

getJSON.prototype.removeItemFromIndex = function(index) {
	this.params.remove(index);
};

getJSON.prototype.callback = function(callback_function) {
	var instance = this;
	
	$.ajax({      
        type:	this.type,
        url:	this.url,
        data: 	JSON.stringify({params:this.params}), 		// JavaScript 객체를 JSON 객체로 변환하여 서버 요청시 전송
        cache: false,
//        async: false,
        contentType:"application/json; charset=utf-8",		// 서버 요청시 전송할 데이터가 UTF-8 형식의 JSON 객체임을 명시
        dataType:"json", 		// 서버로부터 응답받을 데이터가 JSON 객체임을 명시하여 수작업 없이 응답 데이터를 JavaScript 객체로 획득
//        type: "post",
        success:function(args){   
//        	console.log(args);
        	
//            var decomp = LZString.decompressFromBase64(args._rslt);
            var list = $.parseJSON(args._rslt);
            
            instance.result = list;							// 객체자체도 결과를 갖고 있도록 하고
            
            if (args.RESULT_CODE == "SUCCESS")
        		callback_function(list);					// 콜백함수에게 결과를 던져주며 호출도 하고
        },   
        error:function(e){
//        	if(e.status = '404'){        		
//        		window.location.replace("http://"+$(location).attr("host")+"/imap/login.do");
//        	}
//            alert("getJSON callback exeption!! - " + e.responseText);
        	console.log("getJSON callback exeption!! - " + e.responseText);
        }
        
    });  
}