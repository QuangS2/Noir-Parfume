$(function () {
  //img
  $(".list-img img").click(function () {
    $(".main-img>img").attr("src", $(this).attr("src"));
  });
  //detail rieng sp

  //mota-danhgia
  $(".descrition").click(function (e) {
    $(".content-description").css("display", "block");
    $(".content-evaluate").css("display", "none");
  });
  $(".evalutate").click(function (e) {
    $(".content-description").css("display", "none");
    $(".content-evaluate").css("display", "block");
  });
  loadDetail();
});
function loadDetail() {
  var targetItem = listPro.find((pro) => pro.id === loadId);
  $(".main-img img").attr("src", targetItem.img[0]);
  $(".list-img img").each(function (index) {
    $(this).attr("src", targetItem.img[index]);
  });
  $(".item-name h1").append(targetItem.name);
  $(".brief-infor h3").append(targetItem.name);
  if (targetItem.mlit != "")
    $(".brief-infor").append("<p>" + targetItem.mlit + "ml</p>");
  if (targetItem.from != "")
    $(".brief-infor").append("<p>Xuất xứ: " + targetItem.from + "</p>");
  if (targetItem.author != "")
    $(".brief-infor").append("<p>Sáng tạo bởi: " + targetItem.author + "</p>");
  if (targetItem.style != "")
    $(".brief-infor").append("<p>Phong cách: " + targetItem.style + "</p>");
  $(".price-item").append(targetItem.price + "vnđ");
  $(".brief-introduct p").append(targetItem.intro[0]);
  $(".introduct").append(targetItem.intro[1]);
  if (targetItem.mlit != "")
    $(".item-detail").append("<p>" + targetItem.mlit + "ml</p>");
  if (targetItem.from != "")
    $(".item-detail").append("<p>Xuất xứ: " + targetItem.from + "</p>");
  if (targetItem.author != "")
    $(".item-detail").append("<p>Sáng tạo bởi: " + targetItem.author + "</p>");
  if (targetItem.style != "")
    $(".item-detail").append("<p>Phong cách: " + targetItem.style + "</p>");
  $(".item-short-infor").attr("value", targetItem.id);
}
