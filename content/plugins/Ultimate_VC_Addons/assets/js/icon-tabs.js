jQuery(document).ready(function() {
//<div class="smile_icon_tabs_wrap" data-type="br" data-color="#d8d8d8" data-icon-color="#258cc4" data-auto-slide="off" data-auto-slide-duration="3" data-focus-action="hover" data-slide-num="0"><div class="tabs-containter-wrapper"><div class="tabs-container">

	jQuery('.smile_icon_tabs_wrap').each(function(){
		var bg_type = jQuery(this).data('type');
		var bg_color = jQuery(this).data('color');
		var color = jQuery(this).data('icon-color');
		var tabs_len = jQuery(this).find('.icon-solution-tabs').length;
		var $tab_wrap = jQuery(this);
		if(bg_type=='bg'){
			jQuery(this).find('.tabs-icon').css({'color':color,'background-color':bg_color})
		}else if(bg_type=='br'){
			jQuery(this).find('.tabs-icon').css({'color':color})
		}
		jQuery(this).find('.smile_icon_tabs').each(function(){
			var bg = jQuery(this).data('color');
			var cl = jQuery(this).data('icon-color');			
			jQuery(this).find('.tabs-icon').css({'color':cl,'background-color':bg});
		})
		$tab_wrap.hover(function(){
			$tab_wrap.data('auto-slide','off');
		},function(){
			$tab_wrap.data('auto-slide','on');
		})
		jQuery(this).find('.icon-solution-tabs').each(function(){
			jQuery(this).css('width',(99/tabs_len)+'%');
			if($tab_wrap.data('focus-action')=='hover'){				
				jQuery(this).hover(function(){					
					if(bg_type=='bg'){
						$tab_wrap.find('.tabs-pin').css("background-color", jQuery(this).find('.tabs-icon').css("background-color"));
					}
					else if (bg_type=='br'){
						$tab_wrap.find('.tabs-pin').css("background-color", '#eee');
					}
					jQuery(this).find('.tabs-pin').css("background-color", jQuery(this).find('.tabs-icon i').css("color"));
					show_next_icon_tab(jQuery(this));
				},function(){})
			}
			else{
				jQuery(this).click(function(e){
					e.preventDefault();
					jQuery(this).find('.tabs-pin').css("background-color", jQuery(this).find('.tabs-icon i').css("color"));
					show_next_icon_tab(jQuery(this));
				})
			}
			jQuery(this).find('.tabs-pin').css("background-color", jQuery(this).find('.tabs-icon').css("background-color"));
			
		})
		if(jQuery(this).data('auto-slide')=='on'){			
			start_auto_slide_tabs(jQuery(this),parseInt(jQuery(this).data('auto-slide-duration'))*1000);
		}

	})
	function start_auto_slide_tabs(tab_wrap_obj,delay){		
		setInterval(function(){						
			if(tab_wrap_obj.data('auto-slide')=='on'){
				var len_num = tab_wrap_obj.find('.icon-solution-tabs').length;				
				var num_to_set = parseInt(tab_wrap_obj.attr('data-slide-num'))+1;
				if(num_to_set == len_num){
					num_to_set=0;
				}
				tab_wrap_obj.attr('data-slide-num',num_to_set);
				var tab_to_disp = tab_wrap_obj.find('.icon-solution-tabs').eq(num_to_set)
				show_next_icon_tab(tab_to_disp);
			}
		},delay)

	}
	function show_next_icon_tab(obj){
		if(obj.parents('.smile_icon_tabs_wrap').data('type')=='br'){
			obj.parents('.smile_icon_tabs_wrap').find('.tabs-pin').css("background-color", '#eee');
		}
		else if(obj.parents('.smile_icon_tabs_wrap').data('type')=='bg'){
			obj.parents('.smile_icon_tabs_wrap').find('.tabs-pin').css("background-color", obj.find('.tabs-icon').css("background-color"));
		}
		obj.find('.tabs-pin').css("background-color", obj.find('.tabs-icon i').css("color"));
		var targt = obj.parents('.smile_icon_tabs_wrap').find('.tabs-container');
		targt.fadeOut('slow',function(){			
			targt.html(obj.find('.tabs-content').html());			
			targt.fadeIn('slow');
		})		
	}
	//VIRAJ JS
	/*jQuery('.smile_icon_tabs_wrap').each(function(index,element){
		var tab_item = jQuery(this).find('.icon-solution-tabs');
		var item_len = tab_item.length;
		tab_item.css('width',(99/item_len)+'%');
		var d_id = 'tabs-wrap-'+index;
		jQuery(this).attr('id', d_id);
		var $icon_wrap = jQuery('#'+d_id);
		
		$icon_wrap.find('.icon-solution-tabs').click(function(e){
			e.preventDefault();
			$icon_wrap.find('.tabs-container').html(jQuery(this).find('.tabs-content').html());
			
			$icon_wrap.find('.tabs-container').fadeOut(0, function(){
				$icon_wrap.find('.tabs-container').fadeIn(600);
			});
		})
		$icon_wrap.find('.icon-solution-tabs').eq(0).trigger('click');
	});*/
	
}); 