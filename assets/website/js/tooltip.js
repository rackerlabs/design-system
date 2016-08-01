var attachTipTimer;
var removeTipTimer;
var hideTipTimeout = 1500;
var toolTipPointerHeight = 8;
var tooltipPointerWidth = 16;
var toolTipPointerSpace = 20;

var removeTooltips = function() {
	$('.ds-tooltip').remove();
}

var attachTooltip = function(params) {
		var newLeft = params.left - toolTipPointerSpace - (tooltipPointerWidth/2) + (params.jqObj.width()/2);
		var newTop =  params.top + toolTipPointerHeight + params.jqObj.height();
		var tooltip = $('<div class="ds-tooltip invisible" style="top: '+newTop+'px; left: '+newLeft+'px">'+
												'<div class="ds-tooltip-inner">'+
    											params.contents+
  											'</div>'+
											'</div>');
		var timeOut = 0;
		if(params.delay){
			timeOut = eval(params.delay)*1000;
		}
		attachTipTimer = setTimeout(function(){
			$('body').append(tooltip);
			tooltip.css('left',newLeft).css('top',newTop).removeClass('invisible').addClass('visible')
		}, timeOut);

		tooltip.hover(function() {
			clearTimeout(removeTipTimer);
			clearTimeout(attachTipTimer);
		}, function() {
			clearTimeout(attachTipTimer);
			removeTipTimer = setTimeout(function(){removeTooltips();}, hideTipTimeout);
		});

		return tooltip;
}

$(document).ready(function() {

	$('.icon-help, .ds-tooltip-source').each(function() {
		$(this).attr('data-title',$(this).attr('title')).removeAttr('title');
	});

	$('body').on('mouseenter','.icon-help, .ds-tooltip-source',function(event) {
		removeTooltips();
		clearTimeout(removeTipTimer);
		clearTimeout(attachTipTimer);
		var tooltip = new Object();
		tooltip.contents = $(this).attr('data-title');
		tooltip.delay = $(this).attr('data-delay');
		tooltip.left = Math.round($(this).offset().left);
		tooltip.top = Math.round($(this).offset().top);
		tooltip.jqObj = $(this);
		attachTooltip(tooltip);
	});

	$('body').on( 'mouseleave', '.icon-help, .ds-tooltip-source', function(e) {
		clearTimeout(attachTipTimer);
		removeTipTimer = setTimeout(function(){removeTooltips();}, hideTipTimeout);
	});

});