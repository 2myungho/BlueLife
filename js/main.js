$(function(){
				var $bnnNum=0;
				$('.prev').click(function(){
					if($bnnNum<=0) return false;
					$bnnNum--;
					$top_img=$('#main-top-content').width();
					$('#main-top-rolling').animate({left:-$top_img*$bnnNum},600,function(){
						$('#content-top_roll img').attr('src','images/rolling-off.png');
						$('#content-top_roll img').eq($bnnNum).attr('src','images/rolling-on.png');
					});
				});

				$('.next').click(function(){
					if($bnnNum>=1) return false;
					$bnnNum++;
					$top_img=$('#main-top-content').width();
					$('#main-top-rolling').animate({left:-$top_img},600,function(){
						$('#content-top_roll img').attr('src','images/rolling-off.png');
						$('#content-top_roll img').eq($bnnNum).attr('src','images/rolling-on.png');
					});
				});

				/*swipe 연결*/

				/*$('#main-top-content').bind("swipeleft",function(){
					$(".next").trigger("click");
				});
				$('#main-top-content').bind("swiperight",function(){
					$(".prev").trigger("click");
				});
				$(window).bind("orientationchange",function(){
				  $top_img=$('#main-top-content').width();
				  $('#main-top-rolling').animate({left:-$top_img*$bnnNum},300);
				});*/

				/************데스크탑 검색창******************/
				$('.main-serch-box').click(function(e){
					e.preventDefault();
					$('#main-search-all').stop().toggle(100,function(){
						$('.main-logo').stop().toggle(1);
					});
				});
				$('.main-serch-close').click(function(e){
					e.preventDefault();
					$('#main-search-all').stop().slideUp('slow',function(){
						$('.main-logo').stop().toggle(1);
					});
				});

			/*************************nav*******************************/

				$('#lnb').hover(function(e){
					e.preventDefault();
					$('#allmenu').stop().slideDown('fast');
				},function(e){
					e.preventDefault();
					$('#allmenu').stop().slideUp('fast');
				});

			/*************************tab*******************************/

				$("#main-tab-product div").hide();
				$("#main-tab li").eq(0).attr("id","current");
				$("#main-tab-product div").eq(0).fadeIn();
				$("#main-tab li a").eq(0).attr("class",'tab-color');/*초기 값*/

				$("#main-tab li a").click(function(){
					$("#main-tab li a").removeClass('tab-color'); /*전체 지우기*/
					$(this).addClass('tab-color'); /*선택 실행*/
				});

				$("#main-tab a").click(function(e){
					e.preventDefault();
					$("#main-tab-product div").hide();
					$("#main-tab li").attr("id","");
					$(this).parent().attr("id","current");
					$('#' + $(this).attr('title')).fadeIn();
				});

			/************************폰 nav*************************/

				$('.main-nav-3bar img').click(function(e){
					e.preventDefault();
					if(	$('#allmenu').css('display') === 'none'){
						$('#allmenu').slideDown(200);
					} else{
						$('#allmenu').slideUp(200);
					}
				});

				var m = $('.all-tit>a');
				var ul = $('.all-tit>ul');
				m.each(function(){
					if($(window).width() < 1100){
						$(this).click(function(e){
							e.preventDefault();
							$(m).css('color','#666');
							$(this).css('color','#ffa646');
							
							if($(this).next().css('display') === 'none'){
								$(this).css('color','#ffa646');
							}else{
								$(this).css('color','#666');
							}
							$(this).next().slideToggle('fast').parent().parent().siblings().find('ul:visible').slideUp();
						});
					};
				});





/***********************************************2030 tab*************************************************/


	$("#sub-tab-production section").hide();
	/*$("#tab-all-2030 ul li li").eq(0).attr("id","current");*/
	$("#sub-tab-production section").eq(0).fadeIn();
	$("#tab-all-2030 ul li a").eq(0).addClass('tab-color');/*초기 값*/

	$("#tab-all-2030 ul li a").click(function(){
		$("#tab-all-2030 ul li a").removeClass('tab-color'); /*전체 지우기*/
		$(this).addClass('tab-color'); /*선택 실행*/
	});

	$("#tab-all-2030 ul li a").click(function(e){
		e.preventDefault();
		$("#sub-tab-production section").hide();
		/*$("#tab-all-2030 ul li").attr("id","");
		$(this).parent().attr("id","current");*/
		$('#' + $(this).attr('title')).fadeIn();
	});


});

