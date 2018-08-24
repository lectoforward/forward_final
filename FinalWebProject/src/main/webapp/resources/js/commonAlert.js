var commonAlert = (function(){
	
	//로그인 팝업
	function login(callback){
		$.get("/popup/pop_login.ytp", function(resultPage) {
			$(".pop.pop_alert01").empty().append(resultPage);
			$(".pop.pop_alert01").popSet({
				pop_close_btn : ".ui_pop_close",
				animation : true,
				dimm : true,
				NoneWindowScroll : ($("html").css("overflow-y")=='hidden'||$("body").css("overflow-y")=='hidden')?true:false,
				autoOpen : true,
				zIndex : 1001,
				header_ico : "none",
				popOpen : function(){},
				popClose : function(){$(".pop.pop_alert01").empty().off('keyup');}
			});
			$(".pop.pop_alert01 .btnOk").on('click', function(){callback(true);});
			$(".pop.pop_alert01").focus();
			$(".pop.pop_alert01").off('keyup').on('keyup', function(e) {
				if (e.keyCode == 27 || e.keyCode == 32 || e.keyCode == 13){
					$(".pop.pop_alert01 .btnOk").trigger('click');
				}
			});
		});
	}
	
	///공통팝업 alert
	function alert(message, callback){
		$.get("/popup/alert.ytp", function(resultPage) {
			$(".pop.pop_alert01").empty().append(resultPage);
			$(".pop.pop_alert01").popSet({
				pop_close_btn : ".ui_pop_close",
				animation : true,
				dimm : true,
				NoneWindowScroll : ($("html").css("overflow-y")=='hidden'||$("body").css("overflow-y")=='hidden')?true:false,
				autoOpen : true,
				zIndex : 1001,
				ui_pop_txt : message,
				header_ico : "none",
				popOpen : function(){},
				popClose : function(){$(".pop.pop_alert01").empty().off('keyup');}
			});
			//확인
			$(".pop.pop_alert01 .btnOk, .pop.pop_alert01 .pop_close").on('click', function(){
				callback(true);
			});
			$(".pop.pop_alert01").focus();
			$(".pop.pop_alert01").off('keyup').on('keyup', function(e) {
				if (e.keyCode == 27 || e.keyCode == 32 || e.keyCode == 13){
					$(".pop.pop_alert01 .btnOk").trigger('click');
				}
			});
			
		});
	}

	//공통팝업 confirm
	function confirm(title, message, callback){
		$.get("/popup/confirm.ytp", function(resultPage) {
			$(".pop_alert01").empty().append(resultPage);
			$(".pop_alert01").popSet({
				pop_close_btn : ".ui_pop_close",
				animation : true,
				dimm : true,
				zIndex : 1001,
				NoneWindowScroll : ($("html").css("overflow-y")=='hidden'||$("body").css("overflow-y")=='hidden')?true:false,
				autoOpen : true,
				ui_pop_txt : message,
				ui_title : title,
				header_ico : "none",
				popOpen : function(){},
				popClose : function(){$(".pop_alert01").empty();}
			});
			//확인
			$(".pop_alert01 .btnOk").on('click', function(){
				callback(true);
			});
			//취소
			$(".pop_alert01 .btnCancel").on('click', function(){
				callback(false);
			});
		});
	}
	
	
	/**
	 * 시스템 공통팝업 
	 * messageShowView에서 호출됨
	 */
	function systemAlert(text, closeYn ,locUrl){
		commonAlert.alert(text, function(flag){ if(flag){
			if(closeYn=="1"){
				window.close();
			}else{
				if(locUrl == ""){
					history.go(-1);
				}else{
					location.replace(locUrl);
				}
			}
		}});
		return false;
	}
	
	/**
	 * 공통 PDF popup
		commonAlert.pdf("PDF 보기" ,"happy" ,[] ,callback ,checkEvent);
	 */
	function pdf(title ,ico ,params ,callback ,cEvt){
		if($(".popcon_pdf_check_list").length == 0){
			$.get("/popup/commonPdf.ytp" ,{viewChkbox : JSON.stringify(params)} ,function(resultPage) {

				$(".pop_pdf_check").empty().append(resultPage);

				cEvt();
				pdfPop(title ,ico);
				
				//확인
				$(".pop_pdf_check .pop_btn_area > .ui_pop_close").on('click', function(){
					callback(true);
				});
			});
		}else{
			pdfPop(title ,ico);
		}
	}
	
	var pdfPop = function(title ,ico){
		$(".pop_pdf_check").popSet({
			pop_close_btn : ".ui_pop_close",
			animation : true,
			dimm : true,
			autoOpen : true,
			zIndex : 99,
			ui_title : title,
			header_ico : ico,
			popOpen : function(){
    			$("input[name='chkboxPdfPrint']").prop("checked" ,false);
			}
		});
	};
	
	/**
	 * 패스워드 변경
	 */
	function passwordChange(callback){
		$.get("/popup/passwordChange.ytp", function(resultPage) {
			$(".pop_password_change").empty().append(resultPage);
			$(".pop_password_change").popSet({
				pop_close_btn : ".ui_pop_close",
				animation : true,
				dimm : true,
				autoOpen : true,
				zIndex : 99,
				ui_pop_txt : "",
				ui_title : "비밀번호 변경",
				header_ico : "ques",
				popOpen : function(){},
				popClose : function(){
					$(".pop_password_change").empty();	
				}
			});
			
			//확인
			$(".pop_password_change .btnOk").on('click', function(){
				callback(true);
			});
			//취소
			$(".pop_password_change .btnCancel").on('click', function(){
				callback(false);
			});
		});	
	}

	return {
		login : login,
		alert : alert,
		confirm : confirm,
		systemAlert : systemAlert,
		pdf : pdf,
		passwordChange : passwordChange
	};
})();