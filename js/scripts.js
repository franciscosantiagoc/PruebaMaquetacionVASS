// Escriba aquí el JS
$(".fold").click(function () {
  if ($(".content").hasClass("hide")) {
    $(".content").removeClass("hide");
  }else{
    $(".content").addClass("hide");
  }
});
