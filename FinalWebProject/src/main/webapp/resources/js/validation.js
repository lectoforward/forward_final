// Validation
// data-validation="required filesize"
function isValid(tform, isOnChange, field){
	var valPass = true;
	var $validation = tform ? tform.find('input[data-validation], textarea[data-validation]') : jQuery('input[data-validation], textarea[data-validation]');
	if(field){
		$validation = tform ? tform.find('input[name="'+field+'"], textarea[name="'+field+'"]') : jQuery.find('input[name="'+field+'"], textarea[name="'+field+'"]');
	}

	$validation.each(function(){
		var errorMsg = [];
		var inputName = jQuery(this).attr('name');
		var inputIndex = jQuery(this).data('input-index');

		var alertErrorElement = '.alert_error[data-input-name~="'+inputName+'"]';

		if(inputIndex)
			alertErrorElement += '[data-input-index="'+inputIndex+'"]';

		if(tform)
			tform.find(alertErrorElement).hide();
		else
			jQuery(alertErrorElement).hide();

		errorMsg[inputName] = [];
		var validation = jQuery(this).data('validation');
		if(validation.indexOf(' ') !== -1){
			validation = validation.split(' ');
		}

		if( !Array.isArray(validation) ){
			validation = [validation];
		}

		for(var i=0; i < validation.length; i++){
			switch(validation[i]){
				case 'check':
				if(!jQuery(this).is(':checked')){
					errorMsg[inputName].push('반드시 체크해주세요.');
					valPass = false;
				}
				break;

				case 'letter-number':
				var lnRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/
				var matched = jQuery(this).val().match(lnRegex);
				if(matched == null){
					errorMsg[inputName].push('반드시 문자와 숫자 조합으로 입력해주세요.');
					valPass = false;
				}
				break;

				case 'required':
				if(!jQuery(this).val()){
					errorMsg[inputName].push('반드시 입력해주세요.');
					valPass = false;
				}
				break;

				case 'number':
				if(jQuery(this).val().length && !jQuery.isNumeric(jQuery(this).val() ) ){
					errorMsg[inputName].push('숫자로만 입력해주세요.');
					valPass = false;
				}
				break;

				case 'user_id':
				var userRegex = /^[a-z0-9]+$/;
				var matched = jQuery(this).val().match(userRegex);
				if(matched == null || matched[0] != jQuery(this).val()){
					errorMsg[inputName].push('아이디는 영소문자와 숫자 조합으로 사용가능합니다.');
					valPass = false;
				}
				break;

				case 'match':
				var $matchTarget = tform.find('*[name="'+jQuery(this).data('match')+'"]');
				if($matchTarget.length){
					$matchTarget = $matchTarget.first();

					if($matchTarget.val() != jQuery(this).val()){
						var msg = '일치하지 않습니다.';

						if(jQuery(this).data('label') && jQuery(this).data('label') != 'undefined'){
							msg = jQuery(this).data('label')+'와(과) '+ msg;
						}

						errorMsg[inputName].push(msg);
						valPass = false;
					}
				}
				break;

				case 'max-length':
				var maxLength = jQuery(this).data('max-length');
				if(!maxLength)
					break;
				if( jQuery(this).val().length > 0 && jQuery(this).val().length > maxLength){
					errorMsg[inputName].push(maxLength+'자 이하로 입력해주세요.');
					valPass = false;
				}
				break;

				case 'min-length':
				var minLength = jQuery(this).data('min-length');
				if(!minLength)
					break;

				if( jQuery(this).val().length > 0 && jQuery(this).val().length < minLength){
					errorMsg[inputName].push(minLength+'자 이상으로 입력해주세요.');
					valPass = false;
				}
				break;

				case 'fileext':
				if( !jQuery(this).val() ){
					break;
				}

				var ext = jQuery(this).val().split('.').pop();
				if(!ext){
					valPass = false;
					errorMsg[inputName].push('허용하지 않는 파일 형식입니다.');
					break;
				}


				var accepts = jQuery(this).data('fileext');
				if(accepts.indexOf(' ') !== -1)
					accepts = accepts.split(' ');

				if( !Array.isArray(accepts) )
					accepts = [accepts];

					// 허용하지 않는다.
					if(accepts.indexOf(ext) === -1){
						errorMsg[inputName].push('허용하지 않는 파일 형식입니다.');
						valPass = false;
					}

					break;

					case 'filesize':
					if(jQuery(this).attr('type') != 'file'){
						// file 인 경우에만 체크가능
						break;
					}

					var filesize = jQuery(this).data('filesize');

					break;
				}
			}

			if(errorMsg[inputName].length > 0 && (!isOnChange || (isOnChange && jQuery(this).hasClass('validation_error') ) ) ){
				// 변경을 하는 경우 submit을 한다음에만 오류 출력
				var $alertError = inputIndex ? jQuery('.alert_error[data-input-name~="'+inputName+'"][data-input-index="'+inputIndex+'"]') : jQuery('.alert_error[data-input-name~="'+inputName+'"]');
				$alertError.show().text(errorMsg[inputName].join(', '));

				jQuery(this).addClass('validation_error');
			}
		});

	return valPass;
}

function scrollToErrorMsg(){
	var $alert = jQuery('.alert_error:visible').first();
	if(!$alert.length)
		return ;

	var inputIndex = $alert.data('input-index');

	window.previousActiveElement = null;

	var inputName = $alert.data('input-name');
	if(inputName.indexOf(' ') != -1 ){
		inputName = inputName.split(' ')[0];
	}

	var $input;
	if(inputIndex){
		$input = jQuery('*[name="'+inputName+'"][data-input-index="'+inputIndex+'"]');
	}

	if(!$input || !$input.length){
		$input = jQuery('*[name="'+inputName+'"]');
	}

	if($input && $input.length){
		if(!$input.is(":visible")){
			jQuery(document).scrollTop($alert.offset().top-300);
		}
		else {
			$input.focus();
			jQuery(document).scrollTop($input.offset().top-300);
		}
	}
}