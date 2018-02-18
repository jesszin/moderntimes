$(function(){

	//menu
	$('.tap').click(function(){
		$('.menu_bottom').slideDown()
		$('.menu>ul>li').slideDown(1000)
		});
	$('.close').click(function(){
		$('.menu_bottom').fadeOut()
		$('.menu>ul>li').fadeOut()
		});
		
	//main 글자	
	$('.ser_main_ment>ul').innerfade({
		animationtype: 'slide',
		speed: 750,
		timeout: 2000,
		type: 'random',
		containerheight: '1em'
		});
			
	
	//top버튼
	$(window).scroll(function(){
			if($(this).scrollTop()>100){
			$('.tri_box').fadeIn()}
			
			else{
				$('.tri_box').fadeOut()
				}
			});
		
		$('.tri_box').click(function(){
			$('body,html').animate({
				scrollTop:0
				},500);
					});	
		


	//application 버튼 
	
		
		$('.apply').mouseenter(function(){
			
			$('.apply_o').animate({
				left:0
				},500 )	
			});			 
		
		$('.apply').mouseleave(function(){
			
			$('.apply_o').animate({
				left:-400
				},500 )	
			});	//-------------------------------------1
	

		$('.apply2').mouseenter(function(){
			$('.apply_o2').animate({
				left:0
				},600 )	
			});	
			
		$('.apply2').mouseleave(function(){
			
			$('.apply_o2').animate({
				left:-400
				},600 )	
			});	//-------------------------------------------2	
			
	
			
			$('.apply3').mouseenter(function(){
			
			$('.apply_o3').animate({
				left:0
				},600 )	
			});	
			
			$('.apply3').mouseleave(function(){
			
			$('.apply_o3').animate({
				left:-400
				},600 )	
			});	//----------------------------------------------3
	

			
			$('.apply4').mouseenter(function(){
			
			$('.apply_o4').animate({
				left:0
				},600 )	
			});	
			
			$('.apply4').mouseleave(function(){
			
			$('.apply_o4').animate({
				left:-400
				},600 )	
			});	//----------------------------------------------------4

	
			$('.apply5').mouseenter(function(){
			
			$('.apply_o5').animate({
				left:0
				},600 )	
			});	
			
			$('.apply5').mouseleave(function(){
			
			$('.apply_o5').animate({
				left:-400
				},600 )	
			});	//5
		
		
		
		});//완전끝
			