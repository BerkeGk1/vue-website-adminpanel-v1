$(document).ready(function () {
  $(" #a1").click(function (e) {
    $("#sub1").slideUp(),
      $(this).next().is(":visible") || $(this).next().slideDown(),
      e.stopPropagation();
  });
  $("#a2").click(function (e) {
    $("#sub2").slideUp(),
      $(this).next().is(":visible") || $(this).next().slideDown(),
      e.stopPropagation();
  });
});
