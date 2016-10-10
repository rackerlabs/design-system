var attachTipTimer;
var removeTipTimer;
var hideTipTimeout = 1500;
var toolTipPointerHeight = 8;
var tooltipPointerWidth = 14;
var toolTipPointerSpace = 20;

var removeTooltips = function() {
	$('.ds-tooltip').remove();
}


var attachTooltip = function(params) {
		var newLeft = params.left - toolTipPointerSpace - (tooltipPointerWidth/2) + (params.jqObj.width()/2);
		var newTop =  params.top + toolTipPointerHeight + params.jqObj.height();
		var tooltip = $('<div class="ds-tooltip invisible" style="top: 0px; left: 0px">'+
												'<div class="ds-tooltip-arrow top-left"></div>'+
												'<div class="ds-tooltip-inner">'+
    											params.contents+
  											'</div>'+
											'</div>');
		var containerScrollPosition = params.container.scrollTop();
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		var tooltipWidth;
		var tooltipHeight;
		var tooltipArrowClass = 'ds-tooltip-arrow';

		var timeOut = 0;
		if(params.delay){
			timeOut = eval(params.delay)*1000;
		}
		attachTipTimer = setTimeout(function(){
			$('body').append(tooltip);

			tooltipWidth = tooltip.width();
			tooltipHeight = tooltip.height();

			if(newTop + tooltipHeight - containerScrollPosition > screenHeight) {
				newTop =  (params.top - tooltipHeight) - (toolTipPointerHeight+2);
				tooltipArrowClass += '-bottom';
			} else {
				tooltipArrowClass += '-top';
			}

			if(newLeft + tooltipWidth > screenWidth) {
				newLeft = params.left - tooltipWidth + toolTipPointerSpace + (tooltipPointerWidth/2) + (params.jqObj.width()/2) - 2;
				tooltipArrowClass += '-right';
			} else {
				tooltipArrowClass += '-left';
			}

			tooltip.find('.ds-tooltip-arrow').addClass(tooltipArrowClass);
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

	$('body').on('click','.icon-help, .ds-tooltip-source',function(event) {
		removeTooltips();
		clearTimeout(removeTipTimer);
		clearTimeout(attachTipTimer);
		var tooltip = new Object();
		tooltip.contents = $(this).attr('data-title');
		tooltip.delay = $(this).attr('data-delay');
		tooltip.left = Math.round($(this).offset().left);
		tooltip.top = Math.round($(this).offset().top);
		tooltip.container = $('body');
		tooltip.jqObj = $(this);
		attachTooltip(tooltip);
	});

	$('body').on('mouseover','.ds-help-link',function(event) {
		removeTooltips();
		clearTimeout(removeTipTimer);
		clearTimeout(attachTipTimer);
		var tooltip = new Object();
		tooltip.contents = $(this).attr('data-title');
		tooltip.delay = $(this).attr('data-delay');
		tooltip.left = Math.round($(this).offset().left);
		tooltip.top = Math.round($(this).offset().top);
		tooltip.container = $('body');
		tooltip.jqObj = $(this);
		attachTooltip(tooltip);
	});

	$('body').on('click', function(e) {
		console.log(e);
		var tooltip = $(".ds-tooltip");
		if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0 && !$(e.target).hasClass('ds-tooltip-source')) {
			tooltip.remove();
			clearTimeout(removeTipTimer);
			clearTimeout(attachTipTimer);
		}
	});

	$('body').on( 'mouseleave', '.icon-help, .ds-tooltip-source', function(e) {
		clearTimeout(attachTipTimer);
		removeTipTimer = setTimeout(function(){removeTooltips();}, hideTipTimeout);
	});

});