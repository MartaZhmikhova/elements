
$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '<span class="icon-arrow-right"></span>',
        prevArrow: '<span class="icon-arrow-left"></span>',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    /* header-menu-nav */
    $(".header-menu-burger").click(function() {
        $(this).next().toggleClass("openMenu");
    });

    /*  widget */
    $(".widget").click(function() {
        $(this).toggleClass("widget-info-following");
    });
    
    /* open form popup */
    $('.open-popup').click(function() { 
    
        $('.popup').fadeIn();
        $("body").css("overflow", "hidden");
        $('.popup-box').addClass("popup-box-animate");

        $(document).mouseup(function (e) { 
            var popup = $('.popup-box');
            if (e.target!=popup[0]&&popup.has(e.target).length === 0){ 
              $('.popup').fadeOut();
                $("body").css("overflow", "auto");
                $('.popup-box').removeClass("popup-box-animate");
            }
        });
        
    });
    
    /* Validation popup */
    $(".popup-form").validate({
        rules:{
            name:{
              required: true,
              minlength: 1,
              maxlength: 50,
            },
           mail:{
             required: true,
             minlength: 4,
             maxlength: 100,
           },
           question:{
            required: true,
            minlength: 10,
            maxlength: 1000,
          },
        },
        messages:{
            name:{
              required: "This field is required",
              minlength: "Name must be at least 1 character",
              maxlength: "The maximum number of characters is 50",
            },
          mail:{
            required: "This field is required",
            minlength: "Login must be at least 4 characters",
            maxlength: "The maximum number of characters is 100",
        },
          question:{
            required: "This field is required",
            minlength: "Question must be at least 10 characters",
            maxlength: "The maximum number of characters is 1000", 
          },
        }
     });

     /* Validation Join the Newsletter */
     $(".form").validate({
        rules:{
           mail:{
             required: true,
             minlength: 4,
             maxlength: 100,
           },
          },
        messages:{
          mail:{
            required: "This field is required",
            minlength: "Login must be at least 4 characters",
            maxlength: "The maximum number of characters is 100",
        },
        }
     });
    
});