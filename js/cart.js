var totalPrice = 0;
listSell.forEach((proId) => {
  var targetItem = listPro.find((pro) => pro.id === proId);
  totalPrice += Number(targetItem.price);
});
$(function () {
  if (listSell.length !== 0) {
    $(".no-item").css("display", "none");
    $(".cart-list").css("display", "flex");
    listSell.forEach((proId) => {
      var targetItem = listPro.find((pro) => pro.id === proId);
      $(".infor-table ul").append(
        "<li>" +
          '<div class="item-info-block" value="' +
          targetItem.id +
          '">' +
          '    <div class="del-item"><i class="fas fa-trash-alt delete-item"></i></div>' +
          '    <div class="item-infor item-tittle">' +
          '        <div class="item-img"><img' +
          '                src="' +
          targetItem.img[0] +
          '">' +
          "        </div>" +
          '       <div class="item-name">' +
          targetItem.name +
          "</div>" +
          "    </div>" +
          '    <div class="-item-cost cost-tittle">' +
          targetItem.price +
          "₫</div>" +
          '    <div class="value-number value-tittle">' +
          '        <p option="plus"><i class="fas fa-caret-up"></i></p>' +
          '        <input type="number" value="1" min ="1" readonly>' +
          '        <p option="minus"><i class="fas fa-caret-down"></i></p>' +
          "    </div>" +
          '    <div class="total-cost total-tittle">' +
          targetItem.price +
          "₫</div>" +
          "</div>" +
          "</li>"
      );
    });
    $(".total-price").html(totalPrice+'₫');
  }
  $(".cart-list").on("click", ".delete-item", function () {
    var proId = Number($(this).parent().parent().attr("value"));
    // $(selector).html();
    // console.log();
    totalPrice-=Number($(this).parent().parent().children().last().html().slice(0,-1));
    $($(this).parent().parent().parent()).css("display", "none");
    listSell = listSell.filter((item) => item != proId); //remove
    countCart = listSell.length;
    sessionStorage.setItem("listSell", JSON.stringify(listSell));
    $(".count-cart").html(countCart);
    if (countCart === 0) {
      $(".no-item").css("display", "block");
      $(".cart-list").css("display", "none");
    }
    $(".total-price").html(totalPrice+'₫');
  });
  $(".cart-list").on("click", ".value-number p", function () {
    var valueEml = $(this).parent()[0].children[1];
    var nValue = Number($(valueEml).attr("value"));
    var proId = Number($(this).parent().parent().attr("value"));
    var targetItem = listPro.find((pro) => pro.id === proId);
    if ($(this).attr("option") === "plus") {
      nValue++;
      totalPrice+=Number(targetItem.price);
    } else if (nValue > 1) {
      nValue--;
      totalPrice-=Number(targetItem.price);
    }
    $(valueEml).attr("value", nValue);
    $($(this).parent().next()).html(nValue * targetItem.price + "₫");
    $(".total-price").html(totalPrice+'₫');
  });
  $(".drop").hover(function () {
      $(this).children().last().addClass("active");
    }, function () {
      $(this).children().last().removeClass("active");
    }
  );
  $(".drop").click(function (e) { 
    $($(this).children().last()).toggleClass("active");
  });
  $(".drop li").hover(function () {
      $(this).addClass("active");
    }, function () {
      $(this).removeClass("active");
    }
  );
  $(".drop li").click(function (e) { 
    $($(this).children().first()).prop("checked",true);
    $(this).parent().parent().children().first().html($(this).children().last().html());
  });
});