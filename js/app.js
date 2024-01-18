$(".nav-toggle").click(function () {
  $(this).toggleClass("nav-toggle-active");
  $(".browser-preview").toggleClass("browser-preview-active");
  $("#top-navbar").toggleClass("navbar-active");
});

function refreshIframe() {
  var ifr = document.getElementsByName("Right")[0];
  ifr.src = ifr.src;
}
