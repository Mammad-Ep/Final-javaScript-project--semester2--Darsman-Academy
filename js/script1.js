
// ______________________________________________________________________

function scroll_page() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('fixed-top')
    } else {
        $('.navbar').removeClass('fixed-top');
    };


    if (currentScroll >= 700) {
        $('#navigation-top').fadeIn(1, () => {
            $('#navigation-top').attr('style', 'margin-bottom:0px; transition:all 0.7s')
        });

    } else {
        $('#navigation-top').fadeOut(100, () => {
            $('#navigation-top').css('margin-bottom', '-20px')
        });
    }


}

// ______________________________________________________________________

function carousel_slider_header() {
    $('.carousel').carousel({
        interval: 3000
    });
}

// ______________________________________________________________________

function show_shop_cart() {
    $('.card-subtitle button').after('<i class="fa-solid fa-cart-plus"></i>');
    $('.fa-cart-plus').css('left', '30px');

}

// ______________________________________________________________________

// function tooltip_func() {
//     $('[data-toggle="tooltip"]').tooltip(

//         { 'delay': { 'hide': 50, 'show': 200 } }
//     );


//     $('.tooltip-arrow').css('display', 'hidden')
// }
// ______________________________________________________________________


// function chnage_css_questions() {
//     $('.answer-questions-frequently .card-header').click(function () {
//         $(this).toggleClass('active-header');
//     })
// }
// ______________________________________________________________________

function chat_support_site() {

    $('.support-site-icon').click(function () {
        $(this).hide(1, function () {
            $('.support-site-container').show(500, function () {
                $('.support-site-container').animate({ 'bottom': "-50px" })
            });
        });
    });


    $('.close-chat-site').click(function () {
        $('.support-site-container').hide(300, function () {
            $('.support-site-icon').show(500, function () {
                $('.support-site-icon').animate({ 'bottom': 0 })
            });
        });
    });


}
// ______________________________________________________________________

function scroll_anchor_link() {
    $("a[href^='#']").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
}
// ______________________________________________________________________

function navigation_top() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll >= 300) {
        $('#navigation-top').fadeIn();

    } else {
        $('#navigation-top').fadeOut(1, () => {

        });
    }

}
// ______________________________________________________________________

function toggle_search_nav() {
    $('.search-nav i:nth-of-type(2)').click(function () {
        $('#form-search').animate({ bottom: "-100px" },100);
        $('#form-search').show();
        $('.search-nav i:nth-of-type(2)').hide()
        $('.search-nav i:nth-of-type(1)').show()
        
    });

    $('.search-nav i:nth-of-type(1)').click(function () {
        $('#form-search').animate({ bottom: "-130px" },100);
        $('#form-search').hide(300);
        $('.search-nav i:nth-of-type(2)').show()
        $('.search-nav i:nth-of-type(1)').hide()
        
    });
}
// ______________________________________________________________________

$(document).ready(function () {

    carousel_slider_header();

    // tooltip_func();
    // chnage_css_questions();

    chat_support_site();

    scroll_anchor_link();

    navigation_top();

    toggle_search_nav()
})