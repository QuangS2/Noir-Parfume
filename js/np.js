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
  intro,
  hot,
  selling
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
  newPro.hot = hot;
  newPro.selling = selling;
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
  ],
  false,
  true
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
  ],
  false,
  true
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
  ],
  false,
  false
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
  ],
  false,
  false
);
proData(
  "Burberry Hero EDT",
  3700000,
  ["./images/product/hero-burberry.jpg","./images/product/hero.jpg","./images/product/hero-edit.jpg"],
  "Burberry",
  "male",
  100,
  "Anh",
  "",
  "Nam tính, Mạnh mẽ, Tự do",
  [
    "Trong năm 2021, hương thơm mới nhất của thương hiệu đình đám nước Anh - Burberry Hero EDT vừa được giới thiệu với toàn thể công chúng, đánh dấu sự trở lại của nhà mốt trong lãnh địa mùi hương. Burberry cũng chính thức tung thêm chiến dịch cho Burberry Hero EDT, nước hoa mới dành cho nam giới với sự tham gia của nam diễn viên được đề cử giải Oscar, Adam Driver.",
    "Một con người mới, một anh hùng mới. Khám phá ngay Burberry Hero EDT - hương thơm tràn đầy tinh thần mạnh mẽ và sự nam tính của quý ông Burberry, một người không chỉ đam mê, thoả sức khám phá sự tự do như một chủ nghĩa anh hùng hiện đại. Với hương thơm mở đầu đầy tươi mát và ngập tràn sức sống của cam bergamot, hương thơm được tiếp thêm sinh lực với cây bách xù và hạt tiêu đen, đến cuối cùng lại trở nên sâu lắng với gỗ tuyết tùng.",
  ],
  true,
  true
);
proData(
  "Mr. Burberry for men",
  1890000,
  ["./images/product/1536303597.7707.jpg","./images/product/1536303597.8402.jpg","./images/product/default_2017_07_15001924771.jpg"],
  "Burberry",
  "male",
  50,
  "Anh",
  "Francis Kurkdjian",
  "Cổ điển, mạnh mẽ, nam tính",
  [
    "Năm 2016, Mr.Burberry dành cho nam giới là cái tên gia nhập vào bộ sưu tập My Burberry của Burberry do nhà sáng chế Francis Kurkdjian chế tạo ra. Mr. Burberry thuộc hương gỗ thơm mang lại cảm giác tươi mới, mạnh mẽ và nam tính.",
    "Mr.Burberry mang một hương thơm rất đặc trưng, tiêu biểu ở lớp hương này là gỗ, thảo dược. Thấu hiểu tinh thần Anh quốc thấm đượm trong dòng nước hoa Mr. Burberry, chuyên gia nước hoa Francis Kurkdjian lựa chọn tinh dầu bưởi, ngải giấm và bạch đậu khấu ở lớp hương mở đầu. Mùi hương mạnh mẽ và nam tính gợi nhớ đến hình mẫu quý ông Anh quốc. Ở lớp hương thứ hai, lựa chọn cổ điển như tinh dầu lá bạch dương, hạt nhục đậu khấu và gỗ tuyết tùng mang lại cảm giác nhẹ dịu và thư thái. Với lớp hương cuối, tinh dầu cỏ hương lau, gỗ guaiac và cây đàn hương hòa quyện tạo nên mùi hương trầm giúp làm dịu sự căng thẳng.",
  ],
  false,
  false
);
proData(
  "Gucci Guilty Absolute for men",
  3010000,
  ["./images/product/1536303537.2658.jpg","./images/product/1536303537.3385.jpg","./images/product/1536303537.4112.jpg"],
  "Gucci",
  "male",
  100,
  "Italy",
  "Alberto Morillas",
  "Lịch lãm, lôi cuốn, bản lĩnh, tự tin",
  [
    "Thương hiệu thời trang nổi tiếng thế giới Gucci giới thiệu dòng nước hoa nam mới có tên Gucci Guilty Absolute vào đầu năm 2017. Dòng sản phẩm mới này chính là kết quả của sự hợp tác khá ăn ý của giám đốc sáng tạo nhà Gucci Alessandro và nhà sáng chế nước hoa Alberto Morillas.",
    "Hương thơm của Gucci Guilty Absolute thích hợp cho những chàng trai bản lĩnh, mạnh mẽ, yêu cái đẹp và thích sự tinh tế. Cỏ hương bài và da thuộc là hai chất xúc tác mãnh mẹ tạo nên độ lưu hương lâu và vẻ lôi cuốn, mời gọi cho hương thơm.",
  ],
  true,
  true
);
proData(
  "Gucci Made To Measure for men",
  2170000,
  ["./images/product/1536303347.1594.png","./images/product/1536303347.0928.png","./images/product/gucci-made-to-measure.png"],
  "Gucci",
  "male",
  50,
  "Italy",
  "",
  "Lịch lãm, nam tính, mạnh mẽ.",
  [
    "Gucci đã ra mắt nước hoa mới Made to Measure dành cho nam vào mùa thu 2013. Nó được tạo ra để dành cho mẫu người đàn ông “thời đại và được tôi luyện để yêu cầu điều tốt nhất”. Mùi hương là bạn đồng hành với nước hoa nữ tính Gucci Premiere từ năm 2012.",
    "Hương thơm mở đầu với sự pha trộn đầy mạnh mẽ của hương thơm cam Bergamot, hoa cam Tunisia, hoa oải hương và tiểu hồi hương. Phần tuyệt vời nhất của hương thơm là phần giữa của hương thơm, khi Made to Measure trở thành mùi hương nồng của quế, quả bách xù pha thêm chút hương của quả mận, nhục đầu khấu và hoa súng. Cuối cùng lưu lại trên da là hương thơm ấm áp, nhẹ nhàng của Labdanum, cây hoắc hương, hổ phách và da thuộc.",
  ],
  false,
  false
);
proData(
  "Gucci Bloom Acqua Di Fiori (W)",
  3260000,
  ["./images/product/avatar-82.jpg","./images/product/Set-nuoc-hoa-nu-Gucci-Bloom-Acqua-Di-Fiori-EDT-50ml-7-4ml-chinh-hang.jpg","./images/product/nuoc-hoa-gucci-bloom-acqua-di-fiori-edt-100ml-cho-nu-1-jpg-1595218169-20072020110929.jpg"],
  "Gucci",
  "female",
  150,
  "Italy",
  "",
  "Thời điểm thích hợp sử dụng: cả ngày, tone mùi hoa cỏ tươi mát nên rất thích hợp để dùng trong mùa xuân hè.",
  [
    "Gucci đã cho ra mắt loại nước hoa mới ‘Bloom Acqua di Fiori‘ dành cho phụ nữ vào năm 2018. Bloom Acqua di Fiori được định vị như một loại nước hoa thể hiện được mức năng lượng và sức sống của tuổi trẻ và trong tình bạn. Nó mang hương thơm tươi trẻ và xanh mát, nhấn mạnh nét đẹp ngây thơ trong trắng.",
    "Hương thơm nở rộ như một khu vườn ngát hương hoa. Note hương đầu là sự kết hợp của nhựa galbanum cùng lá hoa lý chua tạo một ấn tượng ban đầu thật độc đáo, lạ lẫm. Hoa nhài, hoa huệ Tuberose, hoa kim ngân là bộ ba ngọt ngào làm nên sức sống cho hương trung tâm. Hương cuối là sự trầm ấm quen thuộc, nhưng trưởng thành của xạ hương và gỗ đàn hương. Các note huong xoáy với nhau tạo ra một cảm xúc mãnh liệt cho tinh thần.",
  ],
  true,
  true
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
  $(".pro-line").on("mouseenter", ".link-product", function () {
    $($(this).children().last()).addClass("active");
  });
  $(".pro-line").on("mouseleave", ".link-product", function () {
    $($(this).children().last()).removeClass("active");
  });
  $(".top-product .btn").click(function (e) {
    loadTopProduct();
  });
  $(".pro-line").on("click",".link-product",function(){
    loadId = Number($(this).attr("value"));
    sessionStorage.setItem("loadId", loadId);
    console.log(loadId);
  })
  loadTopProduct();
  loadPromotion();
});
function loadActive() {
  $(".cart-btn").each(function () {
    var idTmp = Number($(this).parent().parent().attr("value"));
    if (listSell.indexOf(idTmp) !== -1) $(this).addClass("active");
  });
}
function loadTopProduct() {
  $(".pro-line div").html("");
  // var gender = $(".sex-selection li.active").attr("value");
  // var branch = $(".brand-selection li.active").attr("value");
  var count = 0;
  var kind = $(".top-product .btn.active").attr("value");
  listPro.forEach((pro) => {
    if (
      count < 5 &&
      ((kind === "selling" && pro.selling === true) ||
        (kind === "hot" && pro.hot === true))
    ) {
      $(".pro-line >div").append(
        '<div class="product">' +
          "<div>" +
          '<a href="item-detail.html" class="link-product" value="'+pro.id+'"><img ' +
          'src="' +
          pro.img[0] +
          '"' +
          'alt="">' +
          "<p>Chi tiết</p>" +
          "</a>" +
          "</div>" +
          '<a href="#">' +
          pro.name +
          "</a>" +
          "<p>" +
          pro.price +
          "vnđ</p>" +
          "</div>"
      );
      count++;
    }
  });
}
function loadPromotion(){
  $(".banner-promotion").html('');
  var count = 0;
  while(count<3){
    $(".banner-promotion").append(' <a href="#"><img src="./images/promotion/promotion'+count+'.jpg" alt=""></a>');
    count++;
  }
}