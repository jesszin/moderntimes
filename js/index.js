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
	
		
		//연결하기	
		$('.red-name-hover,.green-name-hover,.brown-name-hover,.purple-name-hover,.gray-name-hover,.bluish-name-hover').click(function(){
			$(location).attr("href","six_colors.html")
			}); // jqeury클릭하면 메인넘어가기 
			
			
			$('.menu_top>h3').click(function(){
			$(location).attr("href","index.html")
			});	
			
			
	
			
		//product-list li 6개
		$('.red-product').mouseenter(function(){
				$('.red-name-hover').fadeIn()
				$('.red-bg-hover').fadeIn()
					})

			
			$('.red-name-hover').mouseleave(function(){
				$('.red-name-hover').fadeOut()
				$('.red-bg-hover').fadeOut()
					})
			
		
			$('.green-product').mouseenter(function(){
				$('.green-name-hover').fadeIn()
				$('.green-bg-hover').fadeIn()
					})

			
			$('.green-name-hover').mouseleave(function(){
				$('.green-name-hover').fadeOut()
				$('.green-bg-hover').fadeOut()
					})
	
			$('.brown-product').mouseenter(function(){
				$('.brown-name-hover').fadeIn()
				$('.brown-bg-hover').fadeIn()
					})
				
			$('.brown-name-hover').mouseleave(function(){
				$('.brown-name-hover').fadeOut()
				$('.brown-bg-hover').fadeOut()
					})		
			
			$('.purple-product').mouseenter(function(){
				$('.purple-name-hover').fadeIn()
				$('.purple-bg-hover').fadeIn()
					})
				
			$('.purple-name-hover').mouseleave(function(){
				$('.purple-name-hover').fadeOut()
				$('.purple-bg-hover').fadeOut()
					})
			
			$('.gray-product').mouseenter(function(){
				$('.gray-name-hover').fadeIn()
				$('.gray-bg-hover').fadeIn()
					})
				
			$('.gray-name-hover').mouseleave(function(){
				$('.gray-name-hover').fadeOut()
				$('.gray-bg-hover').fadeOut()
					})
		
			$('.bluish-product').mouseenter(function(){
				$('.bluish-name-hover').fadeIn()
				$('.bluish-bg-hover').fadeIn()
					})
				
			$('.bluish-name-hover').mouseleave(function(){
				$('.bluish-name-hover').fadeOut()
				$('.bluish-bg-hover').fadeOut()
					})				
	
	
		
		
		
		//time everywhere 지도 호버------------------------------------------
			$('.seoul').hover(function(){
				$('.office-seoul').fadeIn()
				$('.office-newyork').hide()
				$('.office-tokyo').hide()
				$('.office-osaka').hide()
				});
				
			
			$('.newyork').hover(function(){
				$('.office-newyork').fadeIn()
				$('.office-seoul').hide()
				$('.office-tokyo').hide()
				$('.office-osaka').hide()
				});
			
			$('.tokyo').hover(function(){
				$('.office-tokyo').fadeIn()
				$('.office-newyork').hide()
				$('.office-seoul').hide()
				$('.office-osaka').hide()
				});
			
			$('.osaka').hover(function(){
				$('.office-osaka').fadeIn()
				$('.office-newyork').hide()
				$('.office-tokyo').hide()
				$('.office-seoul').hide()
				});
			
			
			
				
				
			//time collection 작은 slide----------------------------------------
			   /* var idx = 0;
				var slidemax = 4;
				var pos = 778;
			 
				function sliding(add) {
					idx = idx + add;
					if(idx < 0) idx = slidemax;
					else if(idx > slidemax) idx = 0;
					$('.creative_pic>ul').stop().animate({'left' : -(idx*pos)+"px"}, "slow");
				}
				 
				autoslide = setInterval(function() { sliding(1) }, 3000);
				 
				function after() {
					setTimeout(function() {
						clearInterval(autoslide);  
						autoslide = setInterval(function() { sliding(1) }, 3000);
					}, 2000);
				}
				 
				$('.left_btn, .right_btn').click(function() {
					clearInterval(autoslide);  
					if($(this).attr('class') == "left_btn") sliding(-1);
					else sliding(1);
					after();
				});
			
			$('.creative_pic').mouseenter(function(){
				clearInterval(id)
				
				});	
				*/
				
	/*			
		n=1
		id=setInterval(function(){next()},2500);
			function change(){
				$('.creative_pic>ul').animate({'left':(n-1)*-778})
				
				}
		
			function next(){
				n+=1
				if(n==7){
					$('.creative_pic>ul').css('left',(1-1)*-778)
					n=2
					
					}
					change()
				}
				
			$('.right_btn').click(function(){
				next()
				});
				
			$('.left_btn').click(function(){
				n-=1
				if(n==0){
					$('.con').css('left',(6-1)*-100+'%')
					n=6
					}
					change()
				})*/
				
			// top button -----------------------------------------------------------
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
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		