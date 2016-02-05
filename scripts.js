$(function() {
  $("a[href=#menuExpand]").click(function(e) {
    $(".nav").toggleClass("navo");
    e.preventDefault();
  });
});
