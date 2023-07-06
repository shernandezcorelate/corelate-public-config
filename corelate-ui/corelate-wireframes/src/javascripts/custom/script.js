$(document).ready(function(){
    
    /** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
    // $(document).on('click', function (e){
    //     var menu_opened = $('#main-navigation').hasClass('in');
    //     if(!$(e.target).closest('#main-navigation').length &&
    //         !$(e.target).is('#main-navigation') &&
    //         menu_opened === true){
    //             $('#main-navigation').collapse('toggle');
    //     }
        
    // });

    /** TRANSFORM <IMG> TO BACKGROUND IMAGES WITH COVER BACKGROUND SIZE SINCE OBJECT FIT IS NOT YET FULLY SUPPORTED**/
    $(".box,.item").each(function(){
        var imgPath = $(this).find("img").attr("src");
        $(this).css({
            'background-image' : 'url(' + imgPath + ')',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center center',
            '-webkit-background-size' : 'cover',
            '-moz-background-size' : 'cover',
            '-o-background-size' : 'cover',
            'background-size' : 'cover'
        });
        $(this).find("img").remove();
    });

    /** STICKY HEADER STUFF **/

    // $('a[href*=#]:not([href=#])').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //             || location.hostname == this.hostname) {

    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });
    
    var mn = $('.main-nav'),
            mns = 'main-nav-scrolled',
            hdr = $("#partner-header").height() + mn.height();
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }

        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
    });


    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })

    /** END STICKY HEADER STUFF **/    




});

