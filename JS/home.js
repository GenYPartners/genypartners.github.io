$(".expand-b").click(function(){
	var closed = $(".bar2").attr("id");

	if (closed != "closed"){
	$(".bar2").animate({"left":"0"}, "fast", function(){
		$(this).attr("id","closed")
	});

} else{
		$(".bar2").animate({"left":"20%"}, "fast", function(){
		$(this).attr("id","open")
	});
};
});

$(".close").click(function(){
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
})

$(".go-home").click(function(){
	$(".main_content").animate({
    	scrollTop: $("#facts").offset().top
	}, 1000);
	analytics.track('Menu Click', {
  		section:"home"
	});
})

$(".why_millenials").click(function(){
	$(".main_content").animate({
    scrollTop: $("#facts").offset().top
}, 1000);
})

$(".services").click(function(){
	$(".main_content").animate({
    	scrollTop: $("#services").offset().top
	}, 1000);
	analytics.track('Menu Click', {
  		section:"services"
	});
})

$(".team").click(function(){
	$(".main_content").animate({
    	scrollTop: $("#team").offset().top
	}, 1000);
	analytics.track('Menu Click', {
  		section:"team"
	});
})


$(".contact").click(function(){
	$(".main_content").animate({
    	scrollTop: $("#contact").offset().top
	}, 1000);
	analytics.track('Menu Click', {
  		section:"contact"
	});
})




//Millenials Page
var test = "it works";
var id;
var num;
$(".hover-square").hover(function(){
	id = $(this).attr("id");
	num = id[2];
	$("#"+id).css("background","white");
	$("#"+id).css("color","black");
	$("#"+id).css("z-index","15");
	$(".mcover").css("display","initial");
	$("#f"+num).css("display","initial");
	
},function(){
	$("#"+id).css("background","black");
	$("#"+id).css("color","white");
	$("#"+id).css("z-index","initial");
	$(".mcover").css("display","none");
	$("#f"+num).css("display","none");

})

//Services
$(".service").click(function(){
	var eid = $(this).attr("id");
	var eclass = $(this).attr("class");
	var text = "#"+eid+"-text";
	var title = "#"+eid+"-title";
	console.log(eid + " " + eclass);
	if (eclass.indexOf("open") < 1){
	$(this).addClass("open");
	$(text).css("display","initial");
	$(this).css("left", "5%");
	$(title).css("font-weight","400");
	$(title).css("margin-left","1.5%");
	$(title).css("top","70%");
	analytics.track('Service Open', {
  		service: eid
	});
	if (eid == "web") {
		$(title).css("color","white");
		$(text).css("color","white");
	} else if (eid == "content") {
		$(title).css("color","black")
	} else if (eid == "engagement") {
		$(title).css("color","white");
		$(text).css("color","white");
	};
	}else{
		$(this).removeClass("open");
		$(text).css("display","none")
		$(title).css("font-weight","100");
		$(title).css("margin-left","0");
		$(title).css("top","30%")
		if (eid == "web") {
			$(title).css("color","white");
			$(this).css("left", "3.5%")
		} else if (eid == "content") {
			$(title).css("color","white");
			$(this).css("left", "35.33%")
		} else if (eid == "engagement") {
			$(this).css("left", "67.66%");
			$(title).css("color","white");
		};
	}

})

$(".team-member").click(function(){
	var eid = $(this).attr("id");
	if (eid == "garrett"){
		window.open("https://www.linkedin.com/in/gmgoehring")
	} else if (eid == "ellen"){
		window.open("https://www.linkedin.com/pub/ellen-erpenbeck/68/6ab/6a0")
	} else if (eid == "luke"){
		window.open("https://www.linkedin.com/pub/luke-zhang/94/b90/875")
	}
	analytics.track('Team Open', {
  		team_member:eid
	});
})

/*$(".team-member").click(function(){
	var eid = $(this).attr("id");
	var eclass = $(this).attr("class");
	var text = "#"+eid+"-text";
	var title = "#"+eid+"-title";
	console.log(eid + " " + eclass);
	if (eclass.indexOf("open") < 1){
	$(this).addClass("open");
	$(text).css("display","initial");
	$(this).css("left", "5%");
	$(title).css("font-weight","400");
	$(title).css("margin-left","1.5%");
	$(title).css("top","50%");
	$(this).css("background-size","100% auto")
	analytics.track('Team Open', {
  		team_member:eid
	});
	if (eid == "garrett") {
		$(title).css("color","white");
		$(text).css("color","white");
	} else if (eid == "ellen") {
		$(text).css("color","white");
	} else if (eid == "luke") {
		$(text).css("color","white");
	};
	}else{
		$(this).removeClass("open");
		$(text).css("display","none")
		$(title).css("font-weight","100");
		$(title).css("margin-left","0");
		$(title).css("top","30%")
		if (eid == "garrett") {
			$(this).css("left", "3.5%")
		} else if (eid == "ellen") {
			$(this).css("left", "35.33%")
		} else if (eid == "luke") {
			$(this).css("left", "67.66%");
		};
	}

})*/




