$(document).ready(function () {

  var container = $('.container');
  var grid = $('.btn-grid');
  var video = $('.news-video');
  video.get(0).volume = 0.0;

  video.on('mouseover focusin', function () {
    this.play();
    this.volume = 1.0;
  });


  video.on('mouseout focusout', function () {
    this.pause();
  });


  grid.click(function () {
    container.toggleClass('is-act');
  });

});