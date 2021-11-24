$('#services-carusel').carousel({
	interval: 0
});
function setIndicator(ind) {
	$("#service-slide-1").removeClass("ico-tool-active");
	$("#service-slide-1").addClass("ico-tool");
	$("#service-slide-2").removeClass("ico-design-active");
	$("#service-slide-2").addClass("ico-design");	
	$("#service-slide-3").removeClass("ico-game-active");
	$("#service-slide-3").addClass("ico-game");
	$("#service-slide-4").removeClass("ico-plug-active");
	$("#service-slide-4").addClass("ico-plug");
	if(ind == 1) {
		$("#service-slide-1").addClass("ico-tool-active");
	} else if(ind == 2) {
		$("#service-slide-2").addClass("ico-design-active");
	} else if(ind == 3) {
		$("#service-slide-3").addClass("ico-game-active");
	} else if(ind == 4) {
		$("#service-slide-4").addClass("ico-plug-active");
	}
}
