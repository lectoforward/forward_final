var $win = $(window);
var viewMode,
    resizeTimer = null;

$(function(){
    visualSlide();
    slidePause()
    gnbNav ();
    dimHover();
    lightbox(".frame-list",".pop-close"); //인쇄광고 -lightbox
})

/* 인쇄광고 -lightbox */
function lightbox(wrap, close){  //ex : lightbox("#greenskill-allconts",".layer-close")

	var $event = $(wrap).find("ul").children("li").children("a"),
		$eventClose = $(close),
        $href;

	$event.click(function(event){
		event.preventDefault();
        $href = $(this).attr("href");
        $($href).eq(0).css({'display' : 'block' });
    
        if ( $(".tab-menu3").length > 0 ) {
            var htmlTit = $(".tab-menu3").find("a.on").html();
        } else {
            var htmlTit = $("h3.tit").html();
        }

        var htmlStr = $(this).html();
        $(".pop-wrap>div").find("h2").html(htmlTit);
        $('.pop-ct > p').html(htmlStr);

        var pop_x = $($href).eq(0).find('div').width()/2;
        var pop_y = $($href).eq(0).find('div').height()/2;
        $(".pop-wrap>div").css({
            'margin-top':-pop_y,
            'margin-left':-pop_x
        });
	})
	$eventClose.click(function(event){
		event.preventDefault();
        $($href).find('div').css('display' , '');
        $(this).parent().prev().focus();	
	});
};

function visualSlide () {
    $('.visual .visual-slide').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

function slidePause() { 
    var xpaused = false;
    var previous = 0;
    var poh = true;
    var pof = true;

    $(".pause").on("click", function(e) {
        if( xpaused ) {
        $(".visual .visual-slide").slick("play");
      } else {
        $(".visual .visual-slide").slick("pause");
      }
      xpaused = !xpaused;
      $(this).toggleClass("paused");
        //e.preventdefault();
    });
}

function gnbNav () {
       var cnt = 0
       $('.header-des a,.dep2 a, .dep1 > li a').on("click",function(cnt){
            if(cnt = true){
            cnt++;
                $('.dep2, .header-des + .gnb-dep2,.logo-des').toggle();
                //$('#header').toggleClass('gnb_dim');
                //$('#container').toggleClass('gnb_dim');
                return false;
            }
       });
       $('.logo-des,.dep2,.gnb-dep2,.header-des a , .dep1 > li a').on("mouseover focusin",function(cnt){
            if(cnt = true){
            cnt++;
                $('.gnb .dep2,.header-impo .header-des + .gnb-dep2,.logo-des, .headerdes-wrap .dep2').show();
                //$('#header').addClass('gnb_dim');
                //$('#container').addClass('gnb_dim');
                return false;
            }
            
       });
        $('gnb-dep2 a, .dep1 li:last-child .dep2:last-child li:last-child').on("focusout",function(cnt){
            if(cnt = true){
            cnt++;
                $('.gnb .dep2, .header-impo .header-des + .gnb-dep2,.logo-des .headerdes-wrap .dep2').hide();
                //$('#header').removeClass('gnb_dim');
                //$('#container').removeClass('gnb_dim');
                $('.dep1 > li > a').removeClass('on');
                return false;
            }
       });
       $('.dep1 li ul, .gnb-dep2, .logo-des, .header-impo').on("mouseleave",function(cnt){
            if(cnt = true){
            cnt++;
                $('.gnb-dep2, .dep2, .header-des + .gnb-dep2,.logo-des .headerdes-wrap .dep2').hide();
                //$('#header').removeClass('gnb_dim');
                //$('#container').removeClass('gnb_dim');
                $('.dep1 > li > a').removeClass('on');
                return false;
            }
       });


		$('.dep1 > li > a').on('click mouseover',function(){
			$('.dep2').removeClass('on');
			$(this).siblings('.dep2').addClass('on');
        });
        
        $('.dep2 > li > a').on('click mouseover',function(){
            $('.dep2').removeClass('on');
            $('.dep1 > li > a').removeClass('on');
            $(this).parents('.dep2').addClass('on').prev().addClass('on');
        });


}

function dimHover () {

  $('.part-wrap').on('mouseover',function(){
    $('.dim-wrap').css('z-index','-1')
    $(this).next('.dim-wrap').css('z-index','2');
  })

}


// 익스 분기
var agent = navigator.userAgent.toLowerCase(); 
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
 $('#wrap').addClass('msie');
}
else {
//익스가 아닐때
}

$(function(){
    // $('.main-content .impact ul li > a').on('mouseleave', function(){
    //   var imgSrc = $(this).find('img').attr('src');
    //   $(this).find('img').attr('src' , $(this).find('img').attr('src').replace("-on.jpg" , ".jpg"))
    // });
    // $('.main-content .impact ul li > a').on('mouseenter', function(){
    //   var imgSrc = $(this).find('img').attr('src');
    //   $(this).find('img').attr('src' , $(this).find('img').attr('src').replace(".jpg" , "-on.jpg"))
    // });

    //슬릭 아이콘 변경
      $('.slick-prev , .slick-next').on('mouseenter click',function(){
       //$(this).addClass('on');
      });

      $('.slick-prev , .slick-next').on('mouseleave',function(){
       //$(this).removeClass('on');
      });

      //gnb 랜드마크 버튼 변경 
     $('.landmark > a').on('mouseleave', function(){
      var imgSrc = $(this).find('img').attr('src');
      $(this).find('img').attr('src' , $(this).find('img').attr('src').replace("-on.png" , ".png"))
    });
    $('.landmark > a').on('mouseenter', function(){
      var imgSrc = $(this).find('img').attr('src');
      $(this).find('img').attr('src' , $(this).find('img').attr('src').replace(".png" , "-on.png"))
    });

});



