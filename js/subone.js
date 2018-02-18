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
	
	
	
	//top_menu hover
	$('.table1').mouseenter(function(){
		$('.subsub1').show()
		$('.table1').fadeIn(300)
	})
	$('.table1').mouseleave(function(){
		$('.subsub1').fadeOut(100)
		$('.table1').show()
		}); //1
		
	
	$('.chair1').mouseenter(function(){
		$('.subsub2').show()
		$('.chair1').fadeIn(300)
	})
	$('.chair1').mouseleave(function(){
		$('.subsub2').fadeOut(100)
		$('.chair1').show()
		});	//2
		
	$('.bed1').mouseenter(function(){
		$('.subsub3').show()
		$('.bed1').fadeIn(300)
	})
	$('.bed1').mouseleave(function(){
		$('.subsub3').fadeOut(100)
		$('.bed1').show()
		});	//3
	
	$('.light1').mouseenter(function(){
		$('.subsub4').show()
		$('.light1').fadeIn(300)
	})
	$('.light1').mouseleave(function(){
		$('.subsub4').fadeOut(100)
		$('.light1').show()
		});	//4	
		
	
	$('.fabric1').mouseenter(function(){
		$('.subsub5').show()
		$('.fabric1').fadeIn(300)
	})
	$('.fabric1').mouseleave(function(){
		$('.subsub5').fadeOut(100)
		$('.fabric1').show()
		});	//5	
		
	$('#last_menu1').mouseenter(function(){
		$('.subsub6').show()
		$('#last_menu1').fadeIn(300)
	})
	$('#last_menu1').mouseleave(function(){
		$('.subsub6').fadeOut(100)
		$('#last_menu1').show()
		});	//6		
		
	
	//information 클릭
	
	$('.moreinfo').click(function(){
		$('.all_black').show()
		});
	
	$('.pro_black_pic2').click(function(){
		$('.all_black').hide()
		});
	
	//goback products
	$('#goproducts').click(function(){
		$(location).attr("href","products.html")
		});
	
	
	
	
	
		
	
			});//완전끝