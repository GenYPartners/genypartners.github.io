$(".logo").click(function(){
	var closed = $(".bar2").attr("id");

	if (closed != "closed"){
	$(".bar2").animate({"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	});

} else{
		$(".bar2").animate({"left":"20%"}, "slow", function(){
		$(this).attr("id","open")
	});
};
});

$(".close").click(function(){
	$(".bar2").animate({"left":"0"}, "slow", function(){
		$(this).attr("id","closed")
	})
})