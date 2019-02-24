$(document).ready(function(){
	$("#slideImg").rotate();
	$(".fa-bars").click(function(){
		$(".navRWD ul li ul").css("opacity","1")
		$(".navRWD ul li ul li").animate({
				marginTop:"0%"
		},200);
		$(".menuIn").animate({
				opacity:"0"
		},500);
		$(".menuOut").animate({
				opacity:"1"
		},500);
		$(".menuOut").css("zIndex","3");
	});
	$(".fa-times").click(function(){
		$(".navRWD ul li ul li").animate({
				marginTop:"-12%"
		},200);
		$(".menuIn").animate({
				opacity:"1"
		},500);
		$(".menuOut").animate({
				opacity:"0"
		},500);
		$(".navRWD ul li ul").animate({
				opacity:"0"
		},200);
		$(".menuOut").css("zIndex","1");
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$(".logow").css("display","none");
			$(".logoscrool").css("display","block");
			$(".nav_bar_container").addClass("nav_bar_container_scrool")
			$("nav").addClass("nav_scrool")
			$(".navRWD ul li").css("color","#d8232a")
			if ($(window).width() > 768){
			$("nav ul li a").addClass("menu_scrool")
			};
		}
		else{
			$(".logow").css("display","block");
			$(".logoscrool").css("display","none");
			$("nav").removeClass("nav_scrool")
			$("nav ul li a").removeClass("menu_scrool")			
			$(".nav_bar_container").removeClass("nav_bar_container_scrool")
			$(".navRWD ul li").css("color","#ffda1a")
			if ($(window).width() > 768){
			$(".nav ul li a").css("color","#FFFFFF")
			};
		}
	});

	$(".first_previous").mouseenter(function(){
		$(".second_previous").animate({
			opacity:"1",
			marginLeft:"-15px",
		},500);
	});
		$(".first_previous").mouseleave(function(){
		$(".second_previous").animate({
			opacity:"0",
			marginLeft:"100px",
		},500);
	});	
	$(".first_next").mouseenter(function(){
		$(".second_next").animate({
			opacity:"1",
			marginRight:"0px",
		},500);
	});
		$(".first_next").mouseleave(function(){
		$(".second_next").animate({
			opacity:"0",
			marginRight:"100px",
		},500);
	});
	$(".first_boxes").mouseenter(function(){
		$(this).find (".picture11").animate({
			opacity:"1",
		},500);
	});
		$(".first_boxes").mouseleave(function(){
		$(this).find (".picture11").animate({
			opacity:"0",
		},500);
	});	
		$(".first_boxes").mouseenter(function(){
		$(this).find (".picture21").animate({
			opacity:"1",
		},500);
	});
		$(".first_boxes").mouseleave(function(){
		$(this).find (".picture21").animate({
			opacity:"0",
		},500);
	});	
		$(".first_boxes").mouseenter(function(){
		$(this).find (".picture31").animate({
			opacity:"1",
		},500);
	});
		$(".first_boxes").mouseleave(function(){
		$(this).find (".picture31").animate({
			opacity:"0",
		},500);
	});	
		$(".first_boxes").mouseenter(function(){
		$(this).find (".picture41").animate({
			opacity:"1",
		},500);
	});
		$(".first_boxes").mouseleave(function(){
		$(this).find (".picture41").animate({
			opacity:"0",
		},500);
	});	
	
})