$(function(){

	//menu
	$('.tap').click(function(){
		$('.menu_bottom').slideDown()
		$('.menu>ul>li').fadeIn(1000)
		});
	$('.close').click(function(){
		$('.menu_bottom').fadeOut()
		$('.menu>ul>li').fadeOut()
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
	
	//main글자
	$('.pmain_ment>ul').innerfade({
		animationtype: 'slide',
		speed: 750,
		timeout: 2000,
		type: 'random',
		containerheight: '1em'
		});
	
		
	//sort by/category
        $('.sub').click(function(){
			$(this).children('.sub>ul').stop().slideDown(500)
			});
		$('.sub').mouseleave(function(){
			$(this).children('.sub>ul').stop().slideUp(500)
			});	
   
   
   //more products 효과
		var n=1
		$('#btn').click(function(){
			n++
			$('.sale_product'+n).fadeIn()
			if(n===3)
			$('#btn').fadeOut()
			});
		
		
		$('.tri_box').click(function(){
			$('body,html').animate({
				scrollTop:0
				},500);
		$('.sale_product1').fadeIn()
		$('.sale_product2,.sale_product3').fadeOut()	
		$('.tri_box').fadeIn()	
		$('#btn').fadeIn()
		
		
			});
		
		
		
	//제품 hover
	
	$('.first_ment1').mouseenter(function(){
				$('.line_black1,.view1,.first_black1').fadeOut()
				$('.first_box1').css('background-color','rgba(138,138,138,1)')
					})	
	
	$('.first_line_pic1').mouseleave(function(){
				$('.line_black1,.view1,.first_black1').fadeIn()
				$('.first_box1').css('background-color','rgba(138,138,138,0)')
					})	//1	
		
	$('.first_ment2').mouseenter(function(){
				$('.line_black2,.view2,.first_black2').fadeOut()
				$('.first_box2').css('background-color','rgba(43,61,80,1)')
					})	
	
	$('.first_line_pic2').mouseleave(function(){
				$('.line_black2,.view2,.first_black2').fadeIn()
				$('.first_box2').css('background-color','rgba(43,61,80,0)')
					})	//2	
			
	$('.first_ment3').mouseenter(function(){
				$('.line_black3,.view3,.first_black3').fadeOut()
				$('.first_box3').css('background-color','rgba(109,198,53,1)')
					})	
	
	$('.first_line_pic3').mouseleave(function(){
				$('.line_black3,.view3,.first_black3').fadeIn()
				$('.first_box3').css('background-color','rgba(109,198,53,0)')
					}) //3
					
	$('.first_ment4').mouseenter(function(){
				$('.line_black4,.view4,.first_black4').fadeOut()
				$('.first_box4').css('background-color','rgba(44,43,39,1)')
					})	
	
	$('.first_line_pic4').mouseleave(function(){
				$('.line_black4,.view4,.first_black4').fadeIn()
				$('.first_box4').css('background-color','rgba(44,43,39,0)')
					})	//4						
		
	$('.second_ment1').mouseenter(function(){
				$('.line_black5,.view5,.second_black1').fadeOut()
				$('.second_box1').css('background-color','rgba(207,174,129,1)')
					})	
	
	$('.second_line_pic1').mouseleave(function(){
				$('.line_black5,.view5,.second_black1').fadeIn()
				$('.second_box1').css('background-color','rgba(207,174,129,0)')
					})	//2-1
					
	$('.second_ment2').mouseenter(function(){
				$('.line_black6,.view6,.second_black2').fadeOut()
				$('.second_box2').css('background-color','rgba(149,107,63,1)')
					})	
	
	$('.second_line_pic2').mouseleave(function(){
				$('.line_black6,.view6,.second_black2').fadeIn()
				$('.second_box2').css('background-color','rgba(149,107,63,0)')
					})	//2-2						
	
	$('.second_ment3').mouseenter(function(){
				$('.line_black7,.view7,.second_black3').fadeOut()
				$('.second_box3').css('background-color','rgba(43,61,80,1)')
					})	
	
	$('.second_line_pic3').mouseleave(function(){
				$('.line_black7,.view7,.second_black3').fadeIn()
				$('.second_box3').css('background-color','rgba(43,61,80,0)')
					})	//2-3	
		
	$('.second_ment4').mouseenter(function(){
				$('.line_black8,.view8,.second_black4').fadeOut()
				$('.second_box4').css('background-color','rgba(193,50,62,1)')
					})	
	
	$('.second_line_pic4').mouseleave(function(){
				$('.line_black8,.view8,.second_black4').fadeIn()
				$('.second_box4').css('background-color','rgba(193,50,62,0)')
					})	//2-4
					
					
	//click 넘어가기
	
	$('.first_line_pic1,.first_line_pic3,.second_line_pic1,.second_line_pic3').click(function(){
		$(location).attr("href","subone2.html")
		});				
					
	$('.first_line_pic2,.first_line_pic4,.second_line_pic2,.second_line_pic4').click(function(){
		$(location).attr("href","subone.html")
		});				
						
			});//완전끝
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			