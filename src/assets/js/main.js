(function () {
  "use strict";

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll("#navbar a");

  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });



  // 
  document.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    // var banner = document.getElementById('hero');
    // var bannerHeight = banner.offsetHeight;
    // console.log(bannerHeight);
    if (window.scrollY > 50) {
      header.classList.add('fixed-top');
    } else {
      header.classList.remove('fixed-top');
    }
  });
  

  // Service_read_more

  //    $('.Service_read_more').click(function() {
  //      $(this).prev().slideToggle();
  //      if (($(this).text()) == "expend ") {
  //          $(this).text("collapse");
  //      } else {
  //          $(this).text("expend ");
  //      }
  //  });



  //  $(document).ready(function() {
  //   $("#Solutions_toggle").click(function() {
  //     var elem = $("#Solutions_toggle").html();
  //     if (elem == '<span> EXPAND</span> <span class="bi bi-chevron-down Expand-chevron-down"></span>') {
  //       $("#Solutions_toggle").html('<span> COLLAPSE</span> <span class="bi bi-chevron-up Expand-chevron-up"></span>');
  //       $("#Solutions_text").slideDown("slow");
  //     } else {
  //       $("#Solutions_toggle").html('<span> EXPAND</span> <span class="bi bi-chevron-down Expand-chevron-down"></span>');
  //       $("#Solutions_text").slideUp("slow");
  //     }
  //   });
  // });

// Collapse
// Expand


  // back to top button

  var swiper1 = new Swiper(".PRESENCE_slider", {
    slidesPerView: 5,
    spaceBetween: 2,
    dynamicBullets: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    breakpoints: {
      300: {
        slidesPerView: 4,
       
      },
      400: {
        slidesPerView: 4,
       
      },
      640: {
        slidesPerView: 4,
       
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper1", {
    spaceBetween: 1,
    spaceBetween: 1,
    loop: true,
    speed:1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".SolutionsPage-Swiper", {
    // effect: "cards",
    // grabCursor: true,

    slidesPerView: 1,
    spaceBetween: 3,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },


    grabCursor: true,
    effect: "creative",
    loop: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
});


AOS.init();




// --------------------------------------------- headquarter








})();

