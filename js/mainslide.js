$(function(){

	
	
	//메인 큰사진 slide
				n=0
		id=setInterval(function(){next()},3000);
		function change(){
			$('.mainpic div').fadeOut()
			$('.mainpic'+n).fadeIn()
		    }
		function next(){
			n++
			if(n==4){
				n=1
				}
				change()
			}
	
		
			function change(){
				$('.mainpic2').fadeOut(3000)
				$('.mainpic3').fadeOut(3000)
				$('.mainpic'+n).fadeIn(3000)
				}


	
			$('.mentblack').animate({
				top:50
				},500)
			$('.mentblack1').animate({
				top:50
				},700 )	

			});		


		 
