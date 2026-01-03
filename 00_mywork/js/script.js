$(function () {
/*=================================================
スクロールアニメーション
===================================================*/
  //ページ内スクロール
  var navHeight = $(".c-nav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    
    // .p-mc要素が存在する場合と存在しない場合で分岐
    if ($(".p-mc").length > 0) {
      // メインコンテンツ要素をスクロール
      $(".p-mc").animate({ scrollTop: position }, 800, "swing");
    } else {
      // ウィンドウをスクロール（about.html用）
      $("html, body").animate({ scrollTop: position }, 800, "swing");
    }
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $(".p-mc").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

/*=================================================
ハンバーガーメニュー
===================================================*/
$('.c-hamburger').on('click', function() {
    if ($('#l-header').hasClass('c-open')) {
    $('#l-header').removeClass('c-open');
    } else {
    $('#l-header').addClass('c-open');
    }
});

// #maskのエリアをクリックした時にメニューを閉じる
$('#mask').on('click', function() {
    $('#l-header').removeClass('c-open');
});

// リンクをクリックした時にメニューを閉じる
$('#l-nav a').on('click', function() {
    $('#l-header').removeClass('c-open');
});

/*=================================================
ヘッダー固定
===================================================*/
$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var fixedHeader = $('#l-fixed-about__header');
    
    if (scrollTop > 300) {
        if (!fixedHeader.hasClass('is-show-about')) {
            fixedHeader.addClass('is-show-about');
        }
    } else {
        if (fixedHeader.hasClass('is-show-about')) {
            fixedHeader.removeClass('is-show-about');
        }
    }
});

