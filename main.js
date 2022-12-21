// fadein
$(function ($) {
    const fadeIn = $('.fade-in');
    $(fadeIn).each(function () {
      const offset = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
});

// smoothScroll(page内)
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 950;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'easeInOutBack');
    return false;
  });
});

// smoothScroll(セクション間スクロール)
$(function() {
  const scrollerObf = $("#section-scroller-button"),
        scrollEnd = $("#section-2").offset().top,
              pagetop = $('#page_top');
	$(".section-scroll").sectionScroller({
		scrollerButton: "#section-scroller-button",
		scrollType: "easeInOutBack",
		scrollDuration: 900,
		});
    $(window).scroll(function () {
      if ($(this).scrollTop() > scrollEnd) {
        scrollerObf.fadeOut();
      } 
   }); 
});

//page-top-scroll
$(function(){
  const pagetop = $('#page_top');
  const speed = 600
  const easing = 'easeInQuart'
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 60) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, speed, easing);
     return false;
  });
});

