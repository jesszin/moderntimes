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
		
		
	//main 글자	
	$('.lookbook_ment>ul').innerfade({
		animationtype: 'slide',
		speed: 750,
		timeout: 2000,
		type: 'random',
		containerheight: '1em'
		});
		
	
	//design
	
	$('.table').mouseenter(function(){
				$('.black_table').fadeIn()
				$('.table_light').fadeIn()
					})

			
	$('.black_table').mouseleave(function(){
				$('.black_table').fadeOut()
				$('.table_light').fadeOut()
					})
	
	
	$('.stand').mouseenter(function(){
				$('.black_stand').fadeIn()
				$('.stand_light').fadeIn()
					})

			
	$('.black_stand').mouseleave(function(){
				$('.black_stand').fadeOut()
				$('.stand_light').fadeOut()
					})
	
	$('.chair').mouseenter(function(){
				$('.black_chair').fadeIn()
				$('.chair_light').fadeIn()
					})

			
	$('.black_chair').mouseleave(function(){
				$('.black_chair').fadeOut()
				$('.chair_light').fadeOut()
					})				
	
	$('.light').mouseenter(function(){
				$('.black_light').fadeIn()
				$('.light_light').fadeIn()
					})

			
	$('.black_light').mouseleave(function(){
				$('.black_light').fadeOut()
				$('.light_light').fadeOut()
					})
	
	
	//누르면 products로 넘어가기
	
	$('.black_table,.black_stand,.black_light,.black_chair').click(function(){
		$(location).attr("href","products.html")
		});
	
	
	
	//interior
	$('.btn_p').click(function(){
				$('.inpic_p').fadeIn()
				$('.inpic_mt').hide()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});	
		
	$('.btn_p').mouseleave(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').fadeIn()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});	
				
	
	$('.btn_g').click(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').hide()
				$('.inpic_g').fadeIn()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});	
		
	$('.btn_g').mouseleave(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').fadeIn()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});		
		
	$('.btn_gray').click(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').hide()
				$('.inpic_g').hide()
				$('.inpic_gray').fadeIn()
				$('.inpic_y').hide()
				});	
		
	$('.btn_gray').mouseleave(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').fadeIn()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});		
	
	$('.btn_y').click(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').hide()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').fadeIn()
				});	
		
	$('.btn_y').mouseleave(function(){
				$('.inpic_p').hide()
				$('.inpic_mt').fadeIn()
				$('.inpic_g').hide()
				$('.inpic_gray').hide()
				$('.inpic_y').hide()
				});		
		
		
	//charitable
	$('.remodeling').click(function(){
			$('#black_chari').show()
			$('.remodeling2').fadeIn()
			$('.chari_close').show()
			$('.chari_close2').hide()
			$('.chari_close3').hide()
			});
		$('.chari_close').click(function(){
			$('#black_chari').hide()
			$('.remodeling2').hide()
			$('.chari_close').hide()
			$('.chari_close2').hide()
			$('.chari_close3').hide()
			});
			
			
	$('.chlidren').click(function(){
			$('#black_chari').show()
			$('.children2').fadeIn()
			$('.chari_close2').show()
			$('.chari_close').hide()
			$('.chari_close3').hide()
			});
		$('.chari_close2').click(function(){
			$('#black_chari').hide()
			$('.children2').hide()
			$('.chari_close2').hide()
			$('.chari_close').hide()
			$('.chari_close3').hide()
			});	
			
			
	$('.interior_chari').click(function(){
			$('#black_chari').show()
			$('.interi_chari2').fadeIn()
			$('.chari_close3').show()
			$('.chari_close1').hide()
			$('.chari_close2').hide()
			});
		$('.chari_close3').click(function(){
			$('#black_chari').hide()
			$('.interi_chari2').hide()
			$('.chari_close3').hide()
			$('.chari_close1').hide()
			$('.chari_close2').hide()
			});	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
				
		});//완전끝
		