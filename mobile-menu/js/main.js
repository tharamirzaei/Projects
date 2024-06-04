$(function () {
  /* js for header > h2 */
  $(window).on("scroll", function () {
    let scrollPos = $(this).scrollTop();
    let scale = 1 + scrollPos / 1000;
    $("h2").css(
      "transform",
      "translate(-50% , calc(-50% - " + scrollPos + "px)) scale(" + scale + ")"
    );
  });
  /* js for li */
  $("li").click(function () {
    $("body , html").animate({ scrollTop: "0" }, 1000);
  });

  function scrollMenu(id) {
    $(id).prevAll().animate({ top: "-100%", right: "0" }, 1000);
    $(id).animate({ top: "0%", right: "0%" }, 1000);
    $(id).nextAll().animate({ top: "100%", right: "0" }, 1000);
  }
  $("li:nth-child(1)").click(function () {
    let menu = $("#breakfast");
    scrollMenu(menu);
  });
  $("li:nth-child(2)").click(function () {
    let menu = $("#starter");
    scrollMenu(menu);
  });
  $("li:nth-child(3)").click(function () {
    let menu = $("#stake");
    scrollMenu(menu);
  });
  $("li:nth-child(4)").click(function () {
    let menu = $("#pfood");
    scrollMenu(menu);
  });
  $("li:nth-child(5)").click(function () {
    let menu = $("#pizza");
    scrollMenu(menu);
  });
  $("li:nth-child(6)").click(function () {
    let menu = $("#burger");
    scrollMenu(menu);
  });
  $("li:nth-child(7)").click(function () {
    let menu = $("#sandwich");
    scrollMenu(menu);
  });
  $("li:nth-child(8)").click(function () {
    let menu = $("#salad");
    scrollMenu(menu);
  });
  $("li:nth-child(9)").click(function () {
    let menu = $("#dessert");
    scrollMenu(menu);
  });
  $("li:nth-child(10)").click(function () {
    let menu = $("#hdrink");
    scrollMenu(menu);
  });
  $("li:nth-child(11)").click(function () {
    let menu = $("#cdrink");
    scrollMenu(menu);
  });

  /* js for p */
  function typeText(element) {
    var text = $(element).data("text");
    var i = 0;

    function typeWriter() {
      if (i < text.length) {
        $(element).append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 7);
      }
    }

    typeWriter();
  }

  function checkVisibility() {
    $("p").each(function () {
      if ($(this).is(":visible") && !$(this).data("typed")) {
        var windowHeight = $(window).height();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + windowHeight;

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          $(this).data("typed", true);
          typeText(this);
        }
      }
    });
  }

  $(window).on("scroll", checkVisibility);
  checkVisibility();

  /* js for paint */
  function paintScale() {
    $(".paint").each(function () {
      let imgTop = $(this).offset().top;
      let imgBottom = $(this).outerHeight() + imgTop;

      let windowTop = $(window).scrollTop();
      let windowBottom = $(window).height() + windowTop;

      if (imgTop < windowBottom && imgBottom > windowTop) {
        $(this).addClass("paintscale");
      }
    });
  }
  $(window).scroll(paintScale);

  /* js for imgfood */

  $(window).scroll(function () {
    let scrollRotate = $(window).scrollTop() / 10;
    console.log(scrollRotate);
    let nunrotate = 0;

    if (scrollRotate > 0 && scrollRotate < 135) {
      $("figure > img:first-child").css("rotate", scrollRotate + "deg");
      $("figure > .revrotate").css("rotate", "-" + scrollRotate + "deg");

      $(
        "#burger > .child > figure > img:first-child ,  #hdrink > .child > figure > img:first-child , #cdrink > .child > figure > img:first-child  "
      ).css("rotate", nunrotate + "deg");
    }
  });

  /* js for h4 */
  function scaleH4() {
    $("h4").each(function () {
      let h4Top = $(this).offset().top;
      let h4Bottom = $(this).outerHeight() + h4Top;

      let windowTop = $(window).scrollTop();
      let windowBottom = $(window).height() + windowTop;

      if (h4Top < windowBottom && h4Bottom > windowTop) {
        $(this).addClass("h4scale");
      }
    });
  }

  $(window).scroll(scaleH4);
});
