// var container = document.querySelector(".container");
// var grid = document.querySelector(".btn-grid");

// grid.addEventListener("click", function() {
//   container.classList.toggle("is-act");
// });

// $(document).ready(function() {
//   var video = $(".news-video");
//   video.on("mouseover focusin", function() {
//     $(this).attr("autoplay", "");
//   });
//   video.on("mouseout focusout", function() {
//     $(this).attr("autoplay", "false");
//   });
// });

var video1 = document.querySelector("video");
video1.addEventListener("click", function() {
  video1.autoplay = "true";
  video1.load();
});

