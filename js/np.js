//data
var listPro = [];
var listSell = JSON.parse(sessionStorage.getItem("listSell"));
if (listSell === null) listSell = [];
var id = 0;
var gender = "all";
var branch = "all";
var loadId = Number(sessionStorage.getItem("loadId"));
if (loadId === 0) {
  loadId = 1;
}
var countCart = listSell.length;
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
  "Francis Kurkdjian",
  "Sang trọng, quý phái, quyến rũ",
  [
    "Nước Hoa My Burberry Limited Edition ra mắt năm 2014 do Francis Kurkdjian sáng tạo lên. Được lấy cảm hứng từ những chiếc áo choàng thanh lịch, hương thơm ngọt ngào, có độ tỏa hương rất xa. Là dòng nước hoa phiên bản giới hạn.",
  ]
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
  [
    "Nước hoa nữ My Burberry ra mắt năm 2014 do nhà sáng chế Francis Kurkdjian sáng tạo lên. My Burberry được lấy cảm hứng từ những chiếc áo choàng thanh lịch và hình ảnh khu vườn xanh ngát tại London. Hương thơm ngọt ngào cùng thiết kế nhỏ xinh chính là nét độc đáo của sản phẩm này.",
  ]
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
  [
    "Nước hoa nữ Burberry London được sáng tạo nhờ sự hợp tác của thương hiệu cùng hai nhà pha chế tài hoa Dominique Ropion và Jean-Marc Chaillan vào năm 2006. Burberry London đại diện cuộc sống tự do thoải mái tại thành phố xinh đẹp London.",
  ]
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
  [
    "Ra mắt vào năm 1995, nước hoa Burberry For Women Eau De Parfum được giới thiệu như một phiên bản dịu dàng đầy nữ tính thuộc bộ đôi Burberry perfume. Sự pha trộn độc đáo giữa những nốt hương trái cây và hoa cỏ tươi mát chính là nguồn cảm hứng bất tận để tạo nên Burberry For Women.",
  ]
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
  //-menubar
  $(".cart-link").append('<div class="count-cart">' + countCart + "</div>");
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

  //click cart btn
  $(".items,.cart-item-bar").on("click", ".cart-btn", function () {
    var proId = Number($(this).parent().parent().attr("value"));
    if ($(this).hasClass("active")) {
      listSell = listSell.filter((item) => item != proId); //remove
    } else {
      if (listSell.indexOf(proId) === -1) listSell.push(proId);
    }
    countCart = listSell.length;
    sessionStorage.setItem("listSell", JSON.stringify(listSell));
    $(".count-cart").html(countCart);
    $(this).toggleClass("active");
  });
});
function loadActive() {
  $(".cart-btn").each(function () {
    var idTmp = Number($(this).parent().parent().attr("value"));
    if (listSell.indexOf(idTmp) !== -1) $(this).addClass("active");
  });
}