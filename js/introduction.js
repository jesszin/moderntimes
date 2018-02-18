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
		
	
	
	
	//main글자
	 $(function() {
          var txt = $('#txtlzr'); 
          txt.textualizer();
          txt.textualizer('start');
    })
	
	
	
	//cowork 5개 목표
	 $(window).scroll(function(){
		  if($(this).scrollTop()>900)
		  n=0;  
		 $('.aim_five>div').each(function(){
		   n++;
		   $(this).delay(280*n).animate({
			   opacity:1
			   })
		   });
		  
		  });

	
	
	//top버튼
	$(window).scroll(function(){
			if($(this).scrollTop()>200){
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
		
		
		
				
				
		});//완전끝
		