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
	$(".bar2").css("left","0")
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
	$(".bar2").css("left","0")
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
	$(".bar2").css("left","0")
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
