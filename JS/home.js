$(".expand").click(function(){
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

$(".logo").click(function(){
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
