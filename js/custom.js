(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // REVIEWS CAROUSEL
  $(".reviews-carousel").owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 100,
      },
      1280: {
        items: 2,
        margin: 100,
      },
    },
  });

  // Banner Carousel
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1500,
  });

  // REVIEWS NAVIGATION
  function ReviewsNavResize() {
    $(".navbar").scrollspy({ offset: -94 });

    var ReviewsOwlItem = $(".reviews-carousel .owl-item").width();

    $(".reviews-carousel .owl-nav").css({ width: ReviewsOwlItem + "px" });
  }

  $(window).on("resize", ReviewsNavResize);
  $(document).on("ready", ReviewsNavResize);

  // HREF LINKS
  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 74,
          },
          1000
        );
      }
    }
  });
})(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".doctortext");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        // Adjust -100 to control when the animation triggers
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5, // Adjust if necessary
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(
        `.navbar-nav .nav-link[href="#${id}"]`
      );

      console.log(`Section: ${id}, isIntersecting: ${entry.isIntersecting}`); // Log status

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active")); // Remove active class from all links
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust scroll position threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const disclaimerContainer = document.querySelector('.disclaimer-container');

  function checkScroll() {
    const rect = disclaimerContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
      disclaimerContainer.classList.add('fade-in');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on page load in case the element is already in view
});
