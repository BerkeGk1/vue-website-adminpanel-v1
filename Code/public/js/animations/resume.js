$(document).ready(function () {
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,

        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  });
});

/* photoswipe
 * ----------------------------------------------------- */
const ssPhotoswipe = function () {
  const items = [],
    $pswp = $(".pswp")[0],
    $folioItems = $(".folio-item");

  // get items
  $folioItems.each(function (i) {
    let $folio = $(this),
      $thumbLink = $folio.find(".folio-item__thumb-link"),
      $title = $folio.find(".folio-item__title"),
      $caption = $folio.find(".folio-item__caption"),
      $titleText = "<h4>" + $.trim($title.html()) + "</h4>",
      $captionText = $.trim($caption.html()),
      $href = $thumbLink.attr("href"),
      $size = $thumbLink.data("size").split("x"),
      $width = $size[0],
      $height = $size[1];

    let item = {
      src: $href,
      w: $width,
      h: $height,
    };

    if ($caption.length > 0) {
      item.title = $.trim($titleText + $captionText);
    }

    items.push(item);
  });

  // bind click event
  $folioItems.each(function (i) {
    $(this)
      .find(".folio-item__thumb-link")
      .on("click", function (e) {
        e.preventDefault();
        let options = {
          index: i,
          showHideOpacity: true,
        };

        // initialize PhotoSwipe
        let lightBox = new PhotoSwipe(
          $pswp,
          PhotoSwipeUI_Default,
          items,
          options
        );
        lightBox.init();
      });
  });
};
