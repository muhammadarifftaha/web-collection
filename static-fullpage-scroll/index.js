$(document).ready(function () {
  $("#fullpage").fullpage({
    licenseKey: "gplv3-license",
    anchors: ["landing", "features", "reviews", "download"],
    sectionsColor: ["#ffffff", "#81c6ff", "#35A3FF", "#AEDAFF"],
    lockAnchors: true,
    fitToSection: true,
    autoScrolling: true,
    continuousVertical: true,
    continuousHorizontal: true,
    navigation: true,
    navigationTootips: ["Home", "Features", "Reviews", "Download"],
    controlArrows: false,
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,
    scrollOverflow: false,
  });

  $(".prev-slide").on("click", function () {
    fullpage_api.moveSlideLeft();
  });
  $(".next-slide").on("click", function () {
    fullpage_api.moveSlideRight();
  });
});
