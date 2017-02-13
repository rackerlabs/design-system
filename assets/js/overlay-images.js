var overlay = $('<div class="overlay"></div>');
var overlayImage = $('<img src="" class="overlay-image" >');

overlayImage.load(function() {
  resizeOverlay();
  $(this).fadeIn('fast',function() {
    $(this).addClass('visible');
  });
});

var showOverlay = function() {
  console.log('showOverlay()');
  if(!$('.overlay').length) {
    $('body').append(overlay).append(overlayImage);
    overlay.fadeIn('fast', function() {
      $(this).addClass('visible');
    });
  } else {
    overlay.fadeIn('fast', function() {
      $(this).addClass('visible');
    });
  }

  $('body').css('overflow-y','hidden');
}

var hideOverlay = function() {
  console.log('hideOverlay()');

  overlay.fadeOut('fast', function() {
    $(this).removeClass('visible');
  });
  overlayImage.fadeOut('fast', function() {
    $(this).removeClass('visible');
  });

  $('body').css('overflow-y','auto');
}

var resizeOverlay = function() {
  console.log('resizeOverlay()');

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var overlayImageWidth = overlayImage.width();
  var overlayImageHeight = overlayImage.height();

  var newLeft = ((windowWidth/2) - (overlayImageWidth/2))+'px';
  var newTop = ((windowHeight/2) - (overlayImageHeight/2))+'px';

  overlayImage.css('left',newLeft).css('top',newTop);
}

var loadOverlayImage = function(src) {
  console.log('loadOverlayImage('+src+')');
  showOverlay();
  $('.overlay-image').attr('src',src);
}

var showOverlayImage = function() {
  console.log('showOverlayImage()');
}

$(document).ready(function(){

  $('body').on('click','.overlay-source',function(e) {
    e.preventDefault();
    var thumbnail = $(this).attr('href');
    loadOverlayImage(thumbnail);
  });


  $('body').on('click','.overlay, .overlay-image', function() {
    hideOverlay();
  });

  $(window).resize( function() {
    if($('.overlay.visible').length) {
      resizeOverlay();
    }
  });

});