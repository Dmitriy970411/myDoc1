$(document).ready(function() {
  let controller = new ScrollMagic.Controller();

  if ($(".index-page").length) {
    //=================================================================================================

    let html = document.documentElement;
    let body = document.body;

    //  option----

    let scroller = {
      target: document.querySelector("#scroll-container"),
      ease: 0.06, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0
    };

    //  option----

    // do not touch-----

    let requestId = null;

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        let height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      // do not touch-----
      let vheigt = $("body").height(),
        scrollerS2 = scroller.y - vheigt,
        scrollerS3 = scroller.y - vheigt * 2,
        scrollerS4 = scroller.y - vheigt * 3,
        scrollerS5 = scroller.y - vheigt * 4,
        tLSlider = new TimelineMax();
      if (scroller.y < vheigt) {
        //-----------------------slide
        let tLSection2 = new TimelineMax();

        tLSection2
          .set(".leasing_right", {
            rotation: 0.01,
            y: -scrollerS2,
            ease: Linear.easeNone,
            force3D: true
          })
          .set(".leasing_left", {
            rotation: 0.01,
            y: scrollerS2,
            ease: Linear.easeNone,
            force3D: true
          });

        var sceneSection2 = new ScrollMagic.Scene({
          triggerElement: "#triggerS2",
          triggerHook: 0,
          duration: "100%"
        })
          .setTween(tLSection2)
          // .addIndicators()
          .addTo(controller);

        //-----------------------slide
      }

      if (scroller.y < vheigt) {
        //-----------------------slide
        let tLSection2 = new TimelineMax();

        tLSection2
          .set(".leasing_right", {
            rotation: 0.01,
            y: -scrollerS2,
            ease: Linear.easeNone,
            force3D: true
          })
          .set(".leasing_left", {
            rotation: 0.01,
            y: scrollerS2,
            ease: Linear.easeNone,
            force3D: true
          });

        var sceneSection2 = new ScrollMagic.Scene({
          triggerElement: "#triggerS2",
          triggerHook: 0,
          duration: "100%"
        })
          .setTween(tLSection2)
          // .addIndicators()
          .addTo(controller);

        //-----------------------slide
      }

      // custom-set------

      tLSlider

        // 1

        // 2
        .set(".achieve_right", {
          rotation: 0.01,
          y: -scrollerS3,
          ease: Linear.easeNone,
          force3D: true
        })
        .set(".achieve_left", {
          rotation: 0.01,
          y: scrollerS3,
          ease: Linear.easeNone,
          force3D: true
        })

        // 3
        .set(".about_right", {
          rotation: 0.01,
          y: -scrollerS4,
          ease: Linear.easeNone,
          force3D: true
        })
        .set(".about_left", {
          rotation: 0.01,
          y: scrollerS4,
          ease: Linear.easeNone,
          force3D: true
        })

        // 4
        .set(".contact_left", {
          rotation: 0.01,
          y: scrollerS5,
          ease: Linear.easeNone,
          force3D: true
        })
        .set(".contact_right", {
          rotation: 0.01,
          y: -scrollerS5,
          ease: Linear.easeNone,
          force3D: true
        });

      let sceneSlider = new ScrollMagic.Scene({
        triggerElement: "#triggerS2",
        triggerHook: 0,
        duration: "400%"
      })
        .setTween(tLSlider)
        // .addIndicators()
        .addTo(controller);

      // custom-set------

      // do not touch-----

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    // do not touch-----

    //==================================================================================

    $(window).on("load", function() {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: 0
          },
          10
        );
    });

    //---------------------first-slide-enter

    let tlsIndex = new TimelineMax();

    tlsIndex
      .to(".hero", 0.1, { className: "+=Zindex" })
      .to(".hero_left", 1, {
        rotation: 0.01,
        x: "0",
        autoAlpha: 1,
        ease: Cubic.easeOut,
        force3D: true
      })
      .to(
        ".hero_right",
        1,
        {
          rotation: 0.01,
          x: "0",
          autoAlpha: 1,
          ease: Cubic.easeOut,
          force3D: true
        },
        "-=1"
      )
      .to(".header__link-logo", 0.1, { className: "+=show" }, "+=.4")
      .to(".nav__item", 0.3, { className: "+=show" })
      // .to(".hero-leave", .8, {y: 0, autoAlpha: 1}, "-=2.2")
      .to("body", 0.1, { className: "-=overflow-hidden" }, "-=1");

    let scene00 = new ScrollMagic.Scene({
      triggerElement: "#triggerS1",
      triggerHook: 0.1
    })

      .setTween(tlsIndex)
      // .addIndicators()
      .addTo(controller);

    //-----------------------first-slide-enter

    //---------------------first-content

    let tlsIndex_1 = new TimelineMax();

    tlsIndex_1
      // .to(".hero", 2, {autoAlpha: 0})
      .to(".hero", 0.001, { className: "-=Zindex" });

    let scene01 = new ScrollMagic.Scene({
      triggerElement: ".hero-trigger-content",
      triggerHook: 0.3,
      duration: "35%"
    })

      .setTween(tlsIndex_1)
      // .addIndicators()
      .addTo(controller);

    //-----------------------first-content

    //-----------------------second-content
    let tlsIndex_2 = new TimelineMax();

    tlsIndex_2
      .to("#multiscroll-nav", 0.001, { className: "+=right" })
      .to(".section-index-01", 0.001, { className: "+=bg-white" })
      .to(".logo-leave", 0.1, { className: "+=blue-logo" })
      .to(".leasing", 0.001, { className: "+=Zindex" }, "+=1");
    // .to(".leasing-leave", .3, {autoAlpha: 1},"+=1.1")
    //  .to("#multiscroll-nav", .3, {autoAlpha: 1}, "-=.5")
    //  .to("#slideLeasing", .1, {autoAlpha: 1})

    let scene03 = new ScrollMagic.Scene({
      triggerElement: "#triggerS2",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlsIndex_2)
      // .addIndicators()
      .addTo(controller);
    //-----------------------second-content

    //-----------------------third-content
    let tlsIndex_3 = new TimelineMax();

    tlsIndex_3

      .to(".leasing", 0.01, { className: "-=Zindex" })
      .to(".achieve", 0.01, { className: "+=Zindex" })
      .to(".logo-leave", 0.1, { className: "-=blue-logo" });
    // .to("#slideLeasing", .4, {autoAlpha: 0})
    // .to(".leasing-leave",.3, {autoAlpha: 0},"-=.4")
    //  .to("#multiscroll-nav", .3, {autoAlpha: 0}, "-=.75")
    // .to(".achieve-leave",.3, {autoAlpha: 1},"+=.7")
    //  .to("#slideEstate", .1, {autoAlpha: 1}, "-=.1")

    let scene04 = new ScrollMagic.Scene({
      triggerElement: "#triggerS3",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlsIndex_3)
      // .addIndicators()
      .addTo(controller);
    //-----------------------third-content

    //-----------------------third-content-slider

    // let tlAchieveContentSlider = new TimelineMax({repeat: -1}),
    //     $slideAchieveContentFrom = $(".achieve-slide-content-from"),
    //     $slideAchieveContentTo = $(".achieve-slide-content-to");
    //
    // tlAchieveContentSlider
    //     .set(".empty", {onComplete: activeSlideProgressLine, onCompleteParams: ["5.5"]})
    //     .staggerTo($slideAchieveContentFrom, .4, {autoAlpha: 0}, ".08", "+=5")
    //     .to(".empty", .01, {onComplete: activeSlideProgressLine, onCompleteParams: ["6.2"]}, "+=.8")
    //     .staggerTo($slideAchieveContentTo, .8, {autoAlpha: 1}, ".08", "-=.3")
    //
    //     .staggerTo($slideAchieveContentTo, .3, {autoAlpha: 0}, ".08", "+=5")
    //     .to(".empty", .01, {onComplete: activeSlideProgressLine, onCompleteParams: ["6.4"]})
    //     .staggerTo($slideAchieveContentFrom, .8, {autoAlpha: 1}, ".08");
    //
    //
    // let scene05 = new ScrollMagic.Scene({
    //     triggerElement: "#triggerS3",
    //     triggerHook: 0
    // })
    //     .setTween(tlAchieveContentSlider)
    //     // .addIndicators()
    //     .addTo(controller);
    //
    // function activeSlideProgressLine(time) {
    //     let tlAchieveLineActive = new TimelineMax(),
    //         $afterLineElement = $(".middleline_size_max");
    //     tlAchieveLineActive
    //         .to($afterLineElement, time, {scaleX: 1})
    //         .set($afterLineElement, {scaleX: 0});
    // }

    //-----------------------third-content-slider

    //-----------------------fourth-content
    let tlsIndex_4 = new TimelineMax();

    tlsIndex_4
      .to("#multiscroll-nav", 0.01, { className: "-=right" })
      .to(".section-index-01", 0.1, { className: "-=bg-white" })
      .to(".section-index-03", 0.1, { className: "+=bg-white" })
      .to(".achieve", 0.1, { className: "-=Zindex" })
      .to(".about", 0.1, { className: "+=Zindex" });
    // .to("#slideEstate", .1, {autoAlpha: 0})
    // .to(".achieve-leave",.3, {autoAlpha: 0} ,"-=.3")
    // .to(".about-leave",.3, {autoAlpha: 1},"+=.3")
    // .to("#multiscroll-nav", .4, {autoAlpha: 1}, "-=.65")

    let scene06 = new ScrollMagic.Scene({
      triggerElement: "#triggerS4",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlsIndex_4)
      // .addIndicators()
      .addTo(controller);

    //-----------------------fourth-content

    //-----------------------fifth-content
    let tlsIndex_5 = new TimelineMax();

    tlsIndex_5
      //  .to("#multiscroll-nav", .4, {autoAlpha: 0})
      // .to(".about-leave", .8, {autoAlpha: 0})
      .to(".about", 0.01, { className: "-=Zindex" })
      .to(".contact", 0.01, { className: "+=Zindex" })
      .to(".header", 0.1, { className: "+=line_bottom" })
      .to(".contact__col_size_small", 0.1, { className: "+=line_middle" });
    // .to(".contact-leave-2", 0.3, {autoAlpha: 1},"+=1")
    // .to(".contact-leave", 0.3, {autoAlpha: 1},"-=.7")
    // .to(".footer", .1, {autoAlpha: 1})

    let scene07 = new ScrollMagic.Scene({
      triggerElement: "#triggerS5",
      triggerHook: 0,
      duration: "105%"
    })
      .setTween(tlsIndex_5)
      // .addIndicators()
      .addTo(controller);
    //-----------------------fifth-content

    // scroll menu

    let lastId,
      topMenu = $("#multiscroll-nav"),
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function() {
        let item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    menuItems.click(function(e) {
      let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: offsetTop
          },
          1200
        );
      e.preventDefault();
    });

    //  videoBtn

    let leftVideo = $("#left-video");
    let rightVideo = $("#right-video");

    $("#brokers").on("mouseenter", null, { video: leftVideo }, videoPlay);
    $("#multifamily").on("mouseenter", null, { video: rightVideo }, videoPlay);
    $("#brokers").on("mouseleave", null, { video: leftVideo }, videoPause);
    $("#multifamily").on("mouseleave", null, { video: rightVideo }, videoPause);

    function videoPlay(event) {
      let videoEl = event.data.video[0];
      videoEl.play();
    }

    function videoPause(event) {
      let videoEl = event.data.video[0];
      videoEl.pause();
    }
  }

  // ticker

  let infiniteFirst = new TimelineMax({ repeat: -1 });
  let infiniteSecond = new TimelineMax({ repeat: -1 });
  let time = 20;

  function anime(tickerWrapper, tickerList, direction, infinite, listWidth) {
    let $tickerWrapper = $(tickerWrapper);
    let $list = $tickerWrapper.find(tickerList);
    $($tickerWrapper).addClass(direction);

    if (listWidth) {
      listWidth;
    } else {
      let listWidth = $list.width();
    }

    let $clonedList = $list.clone();

    $list.add($clonedList).css({
      width: listWidth + "px"
    });
    $clonedList.addClass("cloned").appendTo($tickerWrapper);

    infinite
      .fromTo(
        $list,
        time,
        { rotation: 0.01, x: 0 },
        { force3D: true, x: -listWidth, ease: Linear.easeNone },
        0
      )
      .fromTo(
        $clonedList,
        time,
        { rotation: 0.01, x: listWidth },
        { force3D: true, x: 0, ease: Linear.easeNone },
        0
      )
      .set($list, { force3D: true, rotation: 0.01, x: listWidth });
    // .to($clonedList, time, {force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone}, time)
    // .to($list, time, {force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone}, time);
  }

  anime(
    "#slideEstate",
    ".tickerwrapper__list",
    "right",
    infiniteSecond,
    "4785.65"
  );
  anime(
    "#slideLeasing",
    ".tickerwrapper__list",
    "left",
    infiniteFirst,
    "4206.22"
  );
  anime("#WilliamPty", ".tickerwrapper__list", " ", infiniteFirst, "2924.88");
  anime("#ZillowReal", ".tickerwrapper__list", " ", infiniteFirst, "3901.47");
  anime(
    "#SothebysReality",
    ".tickerwrapper__list",
    " ",
    infiniteFirst,
    "4262.73"
  );

  // let listWidth = "4785.65"// estate
  //  let listWidth = "4206.22"//leasing

  // infiniteFirst.pause();
  // infiniteSecond.pause();

  function tweenTickerStart() {
    infiniteFirst.play();
  }

  function tweenTickerStop() {
    infiniteFirst.pause();
  }

  if ($(".portfolio-page").length) {
    // first-par

    let tlmPortfolioParallax = new TimelineMax(),
      firstParallax = $("#firstParallax");

    tlmPortfolioParallax.fromTo(
      firstParallax,
      4,
      { y: "200px" },
      {
        y: "-400px",
        rotation: 0.01,
        ease: Power0.easeNone
      }
    );

    let scene08 = new ScrollMagic.Scene({
      triggerElement: "#firstAchieveCard",
      triggerHook: 1,
      duration: "230%"
    })
      .setTween(tlmPortfolioParallax)
      // .addIndicators()
      .addTo(controller);

    let tlmPortfolio = new TimelineMax();

    tlmPortfolio
      .staggerTo(".item1-leave", 2, { autoAlpha: 1 }, ".2")
      .to("#WilliamPty", 0.5, { autoAlpha: 1 });

    let scene09 = new ScrollMagic.Scene({
      triggerElement: "#firstAchieveCard",
      triggerHook: 0.7,
      reverse: false
    })

      .setTween(tlmPortfolio)
      // .addIndicators()
      .addTo(controller);

    // second-par

    let tlmPortfolioParallax_1 = new TimelineMax(),
      secondParallax = $("#secondParallax");

    tlmPortfolioParallax_1.fromTo(
      secondParallax,
      4,
      { y: "-100px" },
      {
        y: "150px",
        rotation: 0.01,
        ease: Power0.easeNone
      }
    );

    let scene10 = new ScrollMagic.Scene({
      triggerElement: "#secondAchieveCard",
      triggerHook: 1,
      duration: "200%"
    })
      .setTween(tlmPortfolioParallax_1)
      // .addIndicators()
      .addTo(controller);

    let tlmPortfolio_1 = new TimelineMax();

    tlmPortfolio_1
      .staggerTo(".item2-leave", 2, { autoAlpha: 1 }, ".2")
      .to(".tickerwrapper#ZillowReal", 0.5, { autoAlpha: 1 });

    let scene11 = new ScrollMagic.Scene({
      triggerElement: "#secondAchieveCard",
      triggerHook: 0.7,
      reverse: false
    })

      .setTween(tlmPortfolio_1)
      // .addIndicators()
      .addTo(controller);

    // third-par

    let tlmPortfolioParallax_2 = new TimelineMax(),
      thirdParallax = $("#thirdParallax");

    tlmPortfolioParallax_2.fromTo(
      thirdParallax,
      4,
      { y: "150px" },
      {
        y: "-250px",
        rotation: 0.01,
        ease: Power0.easeNone
      }
    );

    let scene12 = new ScrollMagic.Scene({
      triggerElement: "#thirdAchieveCard",
      triggerHook: 1,
      duration: "200%"
    })
      .setTween(tlmPortfolioParallax_2)
      // .addIndicators()
      .addTo(controller);

    let tlmPortfolio_2 = new TimelineMax();

    tlmPortfolio_2
      .staggerTo(".item3-leave", 2, { autoAlpha: 1 }, ".2")
      .to(".tickerwrapper#SothebysReality", 0.5, { autoAlpha: 1 });

    let scene13 = new ScrollMagic.Scene({
      triggerElement: "#thirdAchieveCard",
      triggerHook: 0.7,
      reverse: false
    })

      .setTween(tlmPortfolio_2)
      // .addIndicators()
      .addTo(controller);
  }

  if ($(".internal-page").length) {
    // 1---------------------------

    let tlmInternalParallax = new TimelineMax(),
      firstParallax = $("#firstInternalParallax");

    tlmInternalParallax.to(firstParallax, 6, {
      y: "-400px",
      rotation: 0.01,
      ease: Power0.easeNone
    });

    let scene14 = new ScrollMagic.Scene({
      triggerElement: "#firstInternalParallax",
      triggerHook: 0.4,
      duration: "200%"
    })
      .setTween(tlmInternalParallax)
      // .addIndicators()
      .addTo(controller);

    // 2-----------------------------------

    let tlmInternal_4 = new TimelineMax();

    tlmInternal_4.staggerTo(".introduction-leave", 2, { autoAlpha: 1 }, ".2");

    let scene19 = new ScrollMagic.Scene({
      triggerElement: "#introduction",
      triggerHook: 0.85,
      reverse: false
    })

      .setTween(tlmInternal_4)
      // .addIndicators()
      .addTo(controller);

    let tlmInternalParallax_2 = new TimelineMax(),
      thirdParallax = $("#introductionParallax");

    tlmInternalParallax_2.to(thirdParallax, 2, {
      backgroundPositionY: "100%",
      ease: Power0.easeNone
    });

    let scene20 = new ScrollMagic.Scene({
      triggerElement: "#introductionParallax",
      triggerHook: 1,
      duration: "200%"
    })
      .setTween(tlmInternalParallax_2)
      // .addIndicators()
      .addTo(controller);

    // 3-----------------------------------

    let tlmInternal_3 = new TimelineMax();

    tlmInternal_3.staggerTo(".slide-leave", 2, { autoAlpha: 1 }, ".2");

    let scene18 = new ScrollMagic.Scene({
      triggerElement: "#slider-section",
      triggerHook: 0.85,
      reverse: false
    })

      .setTween(tlmInternal_3)
      // .addIndicators()
      .addTo(controller);

    // 4-----------------------------------

    let tlmInternal_2 = new TimelineMax();

    tlmInternal_2.staggerTo(".solution-leave", 2, { autoAlpha: 1 }, ".2");

    let scene16 = new ScrollMagic.Scene({
      triggerElement: "#solution",
      triggerHook: 0.85,
      reverse: false
    })

      .setTween(tlmInternal_2)
      // .addIndicators()
      .addTo(controller);

    let tlmInternalParallax_1 = new TimelineMax(),
      secondParallax = $("#solutionParallax");

    tlmInternalParallax_1.to(secondParallax, 2, {
      backgroundPositionY: "100%",
      ease: Power0.easeNone
    });

    let scene17 = new ScrollMagic.Scene({
      triggerElement: "#solutionParallax",
      triggerHook: 1,
      duration: "200%"
    })
      .setTween(tlmInternalParallax_1)
      // .addIndicators()
      .addTo(controller);

    // 5-----------------------------------

    let tlmInternal_1 = new TimelineMax();

    tlmInternal_1.staggerTo(".outcome-leave", 2, { autoAlpha: 1 }, ".2");

    let scene15 = new ScrollMagic.Scene({
      triggerElement: "#outcome",
      triggerHook: 0.65,
      reverse: false
    })

      .setTween(tlmInternal_1)
      // .addIndicators()
      .addTo(controller);

    let mySwiper = new Swiper(".slider-section__swiper", {
      speed: 400,
      spaceBetween: 180,
      slidesPerView: 1,
      initialSlide: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  if ($("#wrapSmoothScroll").length) {
    //scroll
    let Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector("#my-scrollbar"), {});

    let tlHeader = new TimelineMax();
    tlHeader
      .to(".header__link-logo", 0.1, { className: "+=show" }, "+=.4")
      .staggerTo(".nav__item", 2, { className: "+=show" }, ".2")
      .staggerTo(".hero-leave", 0.8, { y: 0, autoAlpha: 1 }, ".08", "-=2.2");

    let sceneHeader = new ScrollMagic.Scene({
      triggerElement: "#main",
      triggerHook: 0,
      reverse: false
    })

      .setTween(tlHeader)
      // .addIndicators()
      .addTo(controller);
  }
});
