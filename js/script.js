/* Start carousel owl */
$('.portfolio .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: true,
    dots:false,
    smartSpeed:1000,
    margin:24,
    navText: ["PREV", "NEXT"],
    dots: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1140:{
            items:2,
            center:true
        }
    }
})
/* End carousel owl */

/* Start nicescroll */
$('html').niceScroll({

    cursorcolor: 'var(--main-color)',
    cursorwidth: 10,
    cursorborderradius: 0,
    cursorborder: '1px solid var(--main-color)',
    zindex: 10000,

});
/* End nicesroll */

/* Start laoding-overlay */

$(document).ready(function () {
    $(".laoding-overlay .spinner").fadeOut(5000,function () {
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(5000, function () {
            $(this).remove()
        });
    });
});
/* End laoding overlay */

/* Scoll to top */

$(document).ready(function () {
    var scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    })
    scrollButton.click(function () {
        $("html,body").animate({scrollTop:0},600)
    })
})

/* Scroll to top */

/* Start sticky top */
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
})
/* End sticky top */

/* Start wow.js */
new WOW().init();
/* End wow.js */