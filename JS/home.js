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
	if (eclass.includes("open") == false){
	$(this).addClass("open");
	$(text).css("display","initial");
	$(this).css("left", "5%");
	$(title).css("font-weight","400");
	$(title).css("margin-left","1.5%");
	$(title).css("top","72%");
	analytics.track('Service Open', {
  		service: eid
	});
	if (eid == "web") {
		$(title).css("color","white");
		$(text).css("color","white");
	} else if (eid == "content") {
		$(title).css("top","50%");
	} else if (eid == "engagement") {
		$(title).css("color","black");
		$(text).css("color","white");
		$(text).css("top","3%");
		$(title).css("top","75%");
	};
	}else{
		$(this).removeClass("open");
		$(text).css("display","none")
		$(title).css("font-weight","100");
		$(title).css("margin-left","0");
		$(title).css("top","30%")
		if (eid == "web") {
			$(title).css("color","black");
		};
		if (eid == "web") {
			$(this).css("left", "3.5%")
		} else if (eid == "content") {
			$(this).css("left", "34.33%")
		} else if (eid == "engagement") {
			$(this).css("left", "67.66%");
			$(title).css("color","black");
		};
	}

})

$(".team-member").click(function(){
	var eid = $(this).attr("id");
	var eclass = $(this).attr("class");
	var text = "#"+eid+"-text";
	var title = "#"+eid+"-title";
	console.log(eid + " " + eclass);
	if (eclass.includes("open") == false){
	$(this).addClass("open");
	$(text).css("display","initial");
	$(this).css("left", "5%");
	$(title).css("font-weight","400");
	$(title).css("margin-left","1.5%");
	$(title).css("top","72%");
	$(this).css("background-size","100% auto")
	analytics.track('Team Open', {
  		team_member:eid
	});
	if (eid == "garrett") {
		$(title).css("color","white");
		$(text).css("color","white");
	} else if (eid == "ellen") {
		$(title).css("top","50%");
		$(text).css("top","40%");
		$(text).css("color","white");
	} else if (eid == "luke") {
		$(text).css("color","white");
		$(text).css("top","5%");
		//$(text).css("left","0%");
		$(title).css("top","15%");
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
			$(this).css("left", "34.33%")
		} else if (eid == "luke") {
			$(this).css("left", "67.66%");
		};
	}

})




