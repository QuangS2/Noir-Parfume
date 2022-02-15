$(function () {
  //selection bar
  $(".selection-type li").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
  $("li>input[type = 'radio']")
    .parent()
    .click(function () {
      $(this).children().prop("checked", true);
      $(this).addClass("active");
      $("li>input[type = 'radio']").each(function () {
        if (!$(this).is(":checked")) {
          $(this).parent().removeClass("active");
        }
      });
      loadSort();
    });
  //sort items
  $(".drop-down li").click(function () {
    $(".drop-top span").html($($(this).children()[1]).html());
    loadSort();
  });
  $(".drop-bar-sort").hover(
    function () {
      $(".drop-down").addClass("active");
    },
    function () {
      $(".drop-down").removeClass("active");
    }
  );
  $(".drop-bar-sort").click(function () {
    $(".drop-down").toggleClass("active");
  });
  //click detail
  $(".items").on("click", ".cart-item-bar .detail", function () {
    loadId = Number($(this).parent().parent().attr("value"));
    sessionStorage.setItem("loadId", loadId);
  });

  $(".cart-item-bar .detail").hover(
    function () {
      console.log(2);
    },
    function () {
      console.log(3);
    }
  );
  loadSort();
  

});
function loadPro() {
  $(".items").html('');
  var gender = $(".sex-selection li.active").attr("value");
  var branch = $(".brand-selection li.active").attr("value");
  listPro.forEach((pro) => {
    if (
      (gender === "all" || gender === pro.gender) &&
      (branch === "all" || branch === pro.branch)
    )
      $(".items").append(
        '<div class="one-item" value="' +
          pro.id +
          '">' +
          '<div class="item-img"><img src="' +
          pro.img[0] +
          '"></div>' +
          '<div class="item-name">' +
          pro.name +
          "</div>" +
          '<div class="item-value">' +
          '<div class="item-cost">' +
          pro.price +
          "₫</div>" +
          '<div class="item-star">' +
          '<i class="fas fa-star"></i>' +
          '<i class="fas fa-star"></i>' +
          '<i class="fas fa-star"></i>' +
          " </div>" +
          "</div>" +
          ' <div class="cart-item-bar">' +
          '     <a href="item-detail.html" class="detail">Detail</a>' +
          '<div class="cart-btn"><i class="fas fa-shopping-cart"></i></div>' +
          "</div>"
      );
  });
}
function loadSort(){
  var kind = $(".drop-down input:checked").attr("kind");
    if(kind==="priceup"){
      listPro.sort((a,b)=>a.price>b.price?1:((a.price<b.price)?-1:0));
    }
    if(kind==="pricedown"){
      listPro.sort((a,b)=>a.price<b.price?1:((a.price>b.price)?-1:0));
    }
    if(kind==="name"){
      listPro.sort((a,b)=>a.name>b.name?1:((a.name<b.name)?-1:0));
    }
    loadPro();
    loadActive();
}