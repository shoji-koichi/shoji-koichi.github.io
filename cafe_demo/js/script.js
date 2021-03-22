/* Lightbox Luminous */
// new LuminousGallery(document.querySelectorAll(".grid-gallery"));
new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

/* Fadeup Animation AOS */
// AOS.init();
AOS.init({
  duration: 1000
});

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".mobile-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".closebtn").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".mobile-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
