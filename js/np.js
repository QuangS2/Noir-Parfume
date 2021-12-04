$(function () {
  //-menubar
  $(".-menubar li,.-brand-logo a").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
  $(".-menubar li,.-brand-logo a").click(function (e) { 
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  //slide
  $(".-leftBtn").click(function () {
    var limit = Number($(".-img-sp").attr("max-slot"));
    var now = Number($(".-img-sp")[0].slot);
    var pre = now - 1;
    if (pre < 1) pre = limit;
    $(".-img-sp-content.rightSide").removeClass("rightSide top effect");
    $(".-img-sp-content[slot=" + pre + "]").addClass("leftSide");
    $(function () {
      $(".-img-sp-content[slot=" + now + "]").addClass("rightSide effect");
      $(".-img-sp-content[slot=" + pre + "]").addClass("top effect");
      $(".-img-sp-content[slot=" + pre + "]").removeClass("leftSide");
    });
    $(".-img-sp").attr("slot", pre);
    $(".-sp-pro>.-bar-stick >span.active").removeClass("active");
    $(".-sp-pro>.-bar-stick >span[slot=" + pre + "]").addClass("active");
  });
  $(".-rightBtn").click(function () {
    changSlide(Number($(".-img-sp").attr("slot")) + 1, "-img-sp");
  });
  $(".-bar-stick span").click(function () {
    var slot = Number($(this)[0].slot);
    var clParent = $(this).parent().parent().attr("class").replace(/\s/g, ".");
    var target = $("." + clParent + ">div.-slide-img")
      .attr("class")
      .replace(/\s/g, ".");
    changSlide(slot, target);
  });
  setInterval(function () {
    changSlide(Number($(".-img-sp").attr("slot")) + 1, "-img-sp");
    changSlide(Number($(".-img-ad").attr("slot")) + 1, "-img-ad");
  }, 5000);
  //-btn
  $(".-btn").hover(function () {
      $(this).addClass("hover");
    }, function () {
      $(this).removeClass("hover");
    }
  );
  $(".-btn").click(function (e) { 
    $(".-btn.active").removeClass("active");
    $(this).addClass("active");
  });
});
function changSlide(n, clName) {
  var limit = Number($("." + clName).attr("max-slot"));
  var now = Number($("." + clName)[0].slot);
  if (n != now) {
    if (n > limit) n = 1;
    $("." + clName + ">div.leftSide").removeClass("leftSide top effect");
    $("." + clName + ">div[slot=" + n + "]").addClass("rightSide");
    $(function () {
      $("." + clName + ">div[slot=" + now + "]").addClass("leftSide effect");
      $("." + clName + ">div[slot=" + n + "]").addClass("top effect");
      $("." + clName + ">div[slot=" + n + "]").removeClass("rightSide");
    });
    $("." + clName).attr("slot", n);
    var clParent = $("." + clName)
      .parent()
      .attr("class")
      .replace(/\s/g, ".");
    $("." + clParent + ">.-bar-stick >span.active").removeClass("active");
    $("." + clParent + ">.-bar-stick >span[slot=" + n + "]").addClass("active");
  }
}
