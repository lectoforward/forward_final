jQuery(document).ready(function($){
	/*Editor*/
	var $editor = $("#content_editor");
	var editor;

	if(!$editor.length){
		return ;
	}
	editor = $editor.metabraineditor({mode: 'fix'});
	// - 글자수
	$editor.keyup(function(e){
		var vlength = $editor.text().length;
		$('.wirte_textcount dd').text(vlength);
	});

	// 미리보기
	$('.meta_editbx .btn_view').on('mouseup', function(e){
		$('body').removeClass('write_edit');
		$('.edit_headnav, .h_toolbx, .tool_menubx, .images_itembx').hide();
		$('body').append('<div id="bg_preview" style="z-index:999999;position:absolute;top:0;left:0;width:100%;height:100%;"></div>');
		e.stopPropagation();
		e.preventDefault();
		
		$(this).hide();$('li.btn_view_re').show();

		$('#bg_preview').on('click', function(){
			$('body').addClass('write_edit');
			$('.edit_headnav').show();
			$editor.focus();
			$(this).remove();
			
			$('li.btn_view_re').hide();$('li.btn_view').show();
		});

	});

	// 에디터 카테고리
	$('.edit_headnav .pg_basic_selectbx li a').on('click', function(){
		var value = $(this).data('value');
		if(value == 23){
			$('#form_write input[name="action"]').val('write_august');
			$('body').addClass('edit_two');
			$('.meta_editbx .btn_temporary').hide();
		}
		else {
			$('#form_write input[name="action"]').val('write_review');
			$('body').removeClass('edit_two');
			$('.meta_editbx .btn_temporary').show();
		}

		$('#form_write input[name="category"]').val(value);
	});
	
	var $edit_hover_cover_bx = $('span.edit_hover_cover_bx');
	
	$('body').click(function(){
		$edit_hover_cover_bx.stop().fadeOut('fast');
	});
	
});
