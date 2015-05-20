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
	var top = $(".top").attr("id");
	if (top != "home") {
		console.log(top)
		$("#"+top).animate(
			{"z-index":"0"}, "slow"
		);
		$("#home").animate(
			{"z-index":"300"}, "slow"
		);
		$("#home").addClass("top");
		$(top).removeClass("top");
	}
})

$(".why_millenials").click(function(){
	var top = $(".top").attr("id");
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
	$("#facts").animate(
		{"z-index":"300"}, "slow"
	);
	$("#"+top).animate(
		{"z-index":"0"}, "slow"
	);
	$("#facts").addClass("top");
	$("#"+top).removeClass("top");
});

$(".learn").click(function(){
	var top = $(".top").attr("id");
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
	$("#services").animate(
		{"z-index":"300"}, "slow"
	);
	$("#"+top).animate(
		{"z-index":"0"}, "slow"
	);
	$("#services").addClass("top");
	$("#"+top).removeClass("top");
});

$(".services").click(function(){
	var top = $(".top").attr("id");
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
	$("#services").animate(
		{"z-index":"300"}, "slow"
	);
	$("#"+top).animate(
		{"z-index":"0"}, "slow"
	);
	$("#services").addClass("top");
	$("#"+top).removeClass("top");
});

$(".team").click(function(){
	var top = $(".top").attr("id");
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
	$("#team").animate(
		{"z-index":"300"}, "slow"
	);
	$("#"+top).animate(
		{"z-index":"0"}, "slow"
	);
	$("#team").addClass("top");
	$("#"+top).removeClass("top");
});

$(".contact").click(function(){
	var top = $(".top").attr("id");
	$(".bar2").animate(
		{"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
	$("#contact").animate(
		{"z-index":"300"}, "slow"
	);
	$("#"+top).animate(
		{"z-index":"0"}, "slow"
	);
	$("#contact").addClass("top");
	$("#"+top).removeClass("top");
});

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
	$(title).css("top","72%")
	if (eid == "web") {
		$(title).css("color","white");
		$(text).css("color","white");
	} else if (eid == "content") {
		$(title).css("top","50%");
	} else if (eid == "engagement") {
		$(title).css("color","black");
		$(text).css("color","black");
		$(text).css("top","55%");
		$(title).css("top","15%");
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
			$(this).css("left", "1%")
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
			$(this).css("left", "1%")
		} else if (eid == "ellen") {
			$(this).css("left", "34.33%")
		} else if (eid == "luke") {
			$(this).css("left", "67.66%");
		};
	}

})

$("#next1").click(function(){
	$("#line1").css("display","inline")
	$("#line1").animate(
			{"width":"32.5%"}, "slow", function(){
				$("#line2").css("display","inline")
				$("#line2").animate(
					{"height":"14%"}, "slow", function(){
						$("#box2").css("visibility","visible")
							})})})

$("#next2").click(function(){
	$("#line3").css("display","inline")
	$("#line3").animate(
			{"animation-direction":"reverse", "width":"32.5%","left": "22.5%"}, "slow", function(){
				$("#line4").css("display","inline")
				$("#line4").animate(
					{"height":"14.5%"}, "slow", function(){
						$("#box3").css("visibility","visible")
							})})})

$("#next3").click(function(){
	$("#line5").css("display","inline")
	$("#line5").animate(
			{"animation-direction":"reverse", "width":"32.5%"}, "slow", function(){
				$("#line6").css("display","inline")
				$("#line6").animate(
					{"height":"15%"}, "slow", function(){
						$("#box4").css("visibility","visible")
							})})})

$("#next4").click(function(){
	$("#line7").css("display","inline")
	$("#line7").animate(
			{"animation-direction":"reverse", "width":"32.5%","left": "22.5%"}, "slow", function(){
				$("#line8").css("display","inline")
				$("#line8").animate(
					{"height":"15%"}, "slow", function(){
						$("#facts").css("overflow-x", "scroll")
						$("#box5").css("visibility","visible")
							})})});



