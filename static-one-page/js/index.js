const landingImg = $("#landing-img");
const landingText = $(".landing-text");

const navbar = $(".navbar");
const navlink = $(".nav-link");

landingText.hide();

$(document).ready(() => {
  landingImg.fadeIn(1700);
  landingText.show("slide", 2000);

  function slideshow() {
    const slideImages = $(".feat-img");
    let currentSlide = slideImages.first();
    currentSlide.show("fade", 750);
    setInterval(() => {
      currentSlide.hide("fade", 750, function () {
        if (currentSlide.index() === slideImages.length - 1) {
          currentSlide = slideImages.first();
        } else {
          currentSlide = currentSlide.next();
        }
        currentSlide.show("fade", 750);
      });
    }, 5000);
  }

  slideshow();

  navlink.on("click", function () {
    navlink.removeClass("active");
    $(this).addClass("active");
    const target = $($(this).data("target"));
    $([document.body, document.documentElement]).animate(
      { scrollTop: target.offset().top },
      500
    );
  });

  $(document).scroll(function () {
    navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
  });
});
