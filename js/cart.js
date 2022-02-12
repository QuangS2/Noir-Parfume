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
          '        <input type="number" value="1" min ="1" readonly>' +
          "    </div>" +
          '    <div class="-total-cost total-tittle">2.890.000 ₫</div>' +
          "</div>" +
          "</li>"
      );
    });
  }
  $(".cart-list").on("click", ".delete-item", function () {
    var proId = Number($(this).parent().parent().attr("value"));
    // console.log
    $($(this).parent().parent().parent()).css("display", "none");
    listSell = listSell.filter((item) => item != proId); //remove
    countCart = listSell.length;
    sessionStorage.setItem("listSell", JSON.stringify(listSell));
    $(".count-cart").html(countCart);
    if (countCart === 0) {
      $(".no-item").css("display", "block");
      $(".cart-list").css("display", "none");
    }
  });
});
