$(function () {
  //ページ内スクロール
  var navHeight = $(".c-nav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    
    // メインコンテンツ要素をスクロール
    $(".p-mc").animate({ scrollTop: position }, 800, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $(".p-mc").animate({ scrollTop: 0 }, 800);
    return false;
  });
});