// フェード
function fadeAnime(){
//動きの指定
$('.fadeInTrigger').each(function(){ 
  var elemPos = $(this).offset().top-50;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadeIn');
  }else{
  $(this).removeClass('fadeIn');
  }
});
}

// 画面をスクロールをしたら動く
$(window).scroll(function (){

  fadeAnime();

});

// 画面が読み込まれたらすぐに動く
$(window).on('load', function(){
  fadeAnime();

});


$(window).resize(function(){
  var $window = $(this).width();
  var bp = 1024;
  if($window > bp){
    $('.drawer-bars,.drawer-nav').removeClass('is-checked');
  };
});

/* ハンバーガーメニュー */
$(function() {
  $('.drawer-bars').on('click', function(){
    $(this).toggleClass('is-checked');
    if($(this).hasClass('is-checked')){
      $('.drawer-nav').addClass('is-checked');
      $('body').addClass('is-checked');
    } else {
      $('.drawer-nav').removeClass('is-checked');
      $('.drawer-bars').removeClass('is-checked');
      $('body').removeClass('is-checked');
    }
  });
});

$(function() {
  $('.drawer-nav a[href]').on('click', function() {
    $('.drawer-bars,.drawer-nav').trigger('click');
  });
});

// 要素の高さ揃える
function matchHeight(targetElement) {
  const targetElements = document.querySelectorAll(targetElement)

  if (targetElements.length > 1) {
    let heightArray = []
    targetElements.forEach((element) => {
      const height = element.clientHeight
      heightArray.push(height)
    })
    const maxHeight = Math.max(...heightArray)

    targetElements.forEach((column) => {
      column.style.height = maxHeight + 'px'
    })
  }
}
window.addEventListener('load', () => {
  matchHeight('.kidney-check-icon')
})

//  要素を非表示
$(function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    jQuery(function() {
      var footer = $('footer').innerHeight(); // footerの高さを取得
      
      window.onscroll = function () {
        var point = window.pageYOffset; // 現在のスクロール地点 
        var docHeight = $(document).height(); // ドキュメントの高さ
        var dispHeight = $(window).height(); // 表示領域の高さ
      
        if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
          $('.fixed-menu').addClass("is-hidden"); //footerより下にスクロールしたらis-hiddenを追加
        }else{
          $('.fixed-menu').removeClass("is-hidden"); //footerより上にスクロールしたらis-hiddenを削除
        }
      };
    });
  };
});

//  要素を非表示
$(function(){
  var $header = $('.header');

  $(window).scroll(function() {
    if($(this).scrollTop() > 120) {
      $header.addClass("fixed");
    } else {
      $header.removeClass("fixed"); 
    }
  });
});