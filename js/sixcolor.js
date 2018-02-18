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
		

	$('.box_c1.').mouseenter(function(){
		$('.box_c1_black').fadeIn()
		});
	$('.box_c1').mouseleave(function(){
		$('.box_c1_black').fadeOut()
		});	//1
	
	
	$('.box_c2.').mouseenter(function(){
		$('.box_c2_black').fadeIn()
		});
	$('.box_c2').mouseleave(function(){
		$('.box_c2_black').fadeOut()
		});	//2
	
	
	$('.box_c3.').mouseenter(function(){
		$('.box_c3_black').fadeIn()
		});
	$('.box_c3').mouseleave(function(){
		$('.box_c3_black').fadeOut()
		});	//3
	
	
	$('.box_c4.').mouseenter(function(){
		$('.box_c3_black').fadeIn()
		});
	$('.box_c4').mouseleave(function(){
		$('.box_c4_black').fadeOut()
		});	//4	
		
		
	$('.box_c5.').mouseenter(function(){
		$('.box_c5_black').fadeIn()
		});
	$('.box_c5').mouseleave(function(){
		$('.box_c5_black').fadeOut()
		});	//5

	
	$('.box_c6.').mouseenter(function(){
		$('.box_c6_black').fadeIn()
		});
	$('.box_c6').mouseleave(function(){
		$('.box_c6_black').fadeOut()
		});	//6
		
		
		
	$(document).ready(function() {
	$("#example1").zAccordion({
		timeout: 4000,
		slideWidth: 600,
		width: 960,
		height: 270
	});
});
		
		

		});//완전끝		