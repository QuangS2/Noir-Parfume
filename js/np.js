//data
var listPro = [];
var id = 0;
var gender = "all";
var branch = "all";
var loadId = Number(sessionStorage.getItem("loadId"));
function proData(
  name,
  price,
  img,
  branch,
  gender,
  mlit,
  from,
  author,
  style,
  intro
) {
  var newPro = {};
  newPro.id = ++id;
  (newPro.name = name),
    (newPro.price = price),
    (newPro.img = img),
    (newPro.mlit = mlit),
    (newPro.from = from),
    (newPro.branch = branch),
    (newPro.gender = gender),
    (newPro.author = author),
    (newPro.style = style),
    (newPro.intro = intro);
  listPro.push(newPro);
}
proData(
  "My Burberry Limited Edition",
  500000,
  [
    "./images/product/My-Burberry-Limited-Edition-1-2.jpg",
    "./images/product/My-Burberry-Limited-Edition-2.jpg",
  ],
  "Burberry",
  "female",
  90,
  "",
  "",
  "Francis Kurkdjian",
  "Sang trọng, quý phái, quyến rũ",
  "Nước Hoa My Burberry Limited Edition ra mắt năm 2014 do Francis Kurkdjian sáng tạo lên. Được lấy cảm hứng từ những chiếc áo choàng thanh lịch, hương thơm ngọt ngào, có độ tỏa hương rất xa. Là dòng nước hoa phiên bản giới hạn."
);
proData(
  "My Burberry Eau De Parfum",
  "2000000",
  [
    "./images/product/My-Burberry-1.jpg",
    "./images/product/my-burberry-2014-1.jpg",
    "./images/product/nuoc-hoa-my-burberry-1.jpg",
  ],
  "Burberry",
  "female",
  90,
  "Anh",
  "Francis Kurkdjian",
  "Sang trọng, thanh lịch, sành điệu",
  "Nước hoa nữ My Burberry ra mắt năm 2014 do nhà sáng chế Francis Kurkdjian sáng tạo lên. My Burberry được lấy cảm hứng từ những chiếc áo choàng thanh lịch và hình ảnh khu vườn xanh ngát tại London. Hương thơm ngọt ngào cùng thiết kế nhỏ xinh chính là nét độc đáo của sản phẩm này."
);
proData(
  "Burberry London Eau De Parfum",
  1940000,
  [
    "./images/product/london-1.jpg",
    "./images/product/burberry-london-3-340x340.jpg",
    "./images/product/burberry-london-1-1.jpg",
  ],
  "Burberry",
  "female",
  100,
  "Anh",
  "",
  "Gợi cảm, nữ tính, quyến rũ",
  "Nước hoa nữ Burberry London được sáng tạo nhờ sự hợp tác của thương hiệu cùng hai nhà pha chế tài hoa Dominique Ropion và Jean-Marc Chaillan vào năm 2006. Burberry London đại diện cuộc sống tự do thoải mái tại thành phố xinh đẹp London."
);
proData(
  "Burberry For Women Eau De Parfum",
  2070000,
  [
    "./images/product/burberry-for-women.png",
    "./images/product/nuoc-hoa-burberry-for-women.png",
    "./images/product/nuoc-hoa-burberry-for-women-eau-de-parfum.png",
  ],
  "Burberry",
  "female",
  50,
  "Pháp",
  "",
  "Cổ điển, dịu dàng, nữ tính",
  "Ra mắt vào năm 1995, nước hoa Burberry For Women Eau De Parfum được giới thiệu như một phiên bản dịu dàng đầy nữ tính thuộc bộ đôi Burberry perfume. Sự pha trộn độc đáo giữa những nốt hương trái cây và hoa cỏ tươi mát chính là nguồn cảm hứng bất tận để tạo nên Burberry For Women."
);
proData(
  "Burberry Touch for Men Eau De Toilette",
  1650000,
  [
    "./images/product/nuoc-hoa-Burberry-Touch-for-Men-1.jpg",
    "./images/product/Burberry-Touch-for-Men-2.jpg",
    "./images/product/BURBERRY-Touch-for-Men-Eau-de-Toilette-01-1.jpg",
  ],
  "Burberry",
  "male",
  50,
  "",
  "Jean-Pierre Bethouart",
  "Nam tính, lối cuốn, tinh tế, cá tính",
  [
    "Nước hoa Burberry Touch for Men là dòng thiết thế dành riêng cho phái mạnh. Với thành phần kết hợp từ hoa cỏ, gỗ, xạ hương sẽ tạo nên một khúc dạo đầu hoàn hảo, đầy tinh tế cho cánh mày râu.",
    "Nước hoa Burberry Touch for Men là dòng thiết thế dành riêng cho phái mạnh. Với thành phần kết hợp từ hoa cỏ, gỗ, xạ hương sẽ tạo nên một khúc dạo đầu hoàn hảo, đầy tinh tế cho cánh mày râu. Burberry Touch for Men được sáng tạo bởi Jean-Pierre Bethouart, mang lại mùi hương đầy sáng tạo cho người dùng cảm nhận sự trầm bổng của cuộc sống, đôi lúc dữ dội, đôi lúc lại trầm lắng, nhẹ nhàng.",
  ]
);
$(function () {
  loadPro();
  //-menubar
  $(".menubar li,.brand-logo a").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
  $(".menubar li,.brand-logo a").click(function (e) {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  //slide
  $(".leftBtn").click(function () {
    var limit = Number($(".img-sp").attr("max-slot"));
    var now = Number($(".img-sp")[0].slot);
    var pre = now - 1;
    if (pre < 1) pre = limit;
    $(".img-sp-content.rightSide").removeClass("rightSide top effect");
    $(".img-sp-content[slot=" + pre + "]").addClass("leftSide");
    $(function () {
      $(".img-sp-content[slot=" + now + "]").addClass("rightSide effect");
      $(".img-sp-content[slot=" + pre + "]").addClass("top effect");
      $(".img-sp-content[slot=" + pre + "]").removeClass("leftSide");
    });
    $(".img-sp").attr("slot", pre);
    $(".sp-pro>.bar-stick >span.active").removeClass("active");
    $(".sp-pro>.bar-stick >span[slot=" + pre + "]").addClass("active");
  });
  $(".rightBtn").click(function () {
    changSlide(Number($(".img-sp").attr("slot")) + 1, "img-sp");
  });
  $(".bar-stick span").click(function () {
    var slot = Number($(this)[0].slot);
    var clParent = $(this)
      .parent()
      .parent()
      .attr("class")
      .replace(/\s/g, ".");
    var target = $("." + clParent + ">div.slide-img")
      .attr("class")
      .replace(/\s/g, ".");
    changSlide(slot, target);
  });
  setInterval(function () {
    changSlide(Number($(".img-sp").attr("slot")) + 1, "img-sp");
    changSlide(Number($(".img-ad").attr("slot")) + 1, "img-ad");
  }, 5000);
  //-btn
  $(".btn").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
  $(".btn").click(function (e) {
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
    //
  });
  //Sell//
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
    });
  //sort items
  $(".drop-down li").click(function () {
    $(".drop-top span").html($($(this).children()[1]).html());
  });
  $(".drop-bar-sort").hover(
    function () {
      $(".drop-down").css("display", "block");
    },
    function () {
      $(".drop-down").css("display", "none");
    }
  );
  $(".drop-bar-sort").click(function () {
    $(".drop-down").css("display", "none");
  });
  //click detail
  $(".cart-item-bar .detail").click(function () { 
    loadId = $(this).parent().parent().attr("value")
    // console.log($(this).parent().parent().attr("value"));
    sessionStorage.setItem("loadId",loadId);
  });
  //detail-page//
  //img
  $(".list-img img").click(function () {
    $(".main-img>img").attr("src", $(this).attr("src"));
    
    console.log(1);
  });
  //detail rieng sp
  loadDetail();
  //mota-danhgia
  $(".descrition").click(function (e) {
    $(".content-description").css("display", "block");
    $(".content-evaluate").css("display", "none");
  });
  $(".evalutate").click(function (e) {
    $(".content-description").css("display", "none");
    $(".content-evaluate").css("display", "block");
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
    $("." + clParent + ">.bar-stick >span.active").removeClass("active");
    $("." + clParent + ">.bar-stick >span[slot=" + n + "]").addClass("active");
  }
};
function loadPro() {
  listPro.forEach((pro) => {
    $(".items").append(
      '<div class="one-item" value="'+pro.id+'">' +
        '<div class="item-img"><img src="' +
        pro.img[0] +
        '"></div>' +
        '<div class="item-name">'+pro.name+'</div>' +
        '<div class="item-value">' +
        '<div class="item-cost">'+pro.price+'₫</div>' +
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
};
function loadDetail(){
  var targetItem = listPro.find(pro => pro.id===loadId);
  $(".main-img img").attr("src", targetItem.img[0]);
  $(".list-img img").each(function (index) {
    $(this).attr("src", targetItem.img[index]);
  });
};