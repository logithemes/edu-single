$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-book i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu .mobile-menu-close").on("click", function(){
        $(".menu").removeClass("menuact");
    })

   //WHO WE ARE VIDEO
   $(".comm-video i").on("click", function(){
    $(".video").addClass("act");
   })


  //BANNER4
  $(".programs-inner").mousemove(function(){
    $(".programs-inner").removeClass("act");
      $(".programs-inner h3").removeClass("act");
      $(".programs-inner h4").removeClass("act");
         $(".programs-inner a").removeClass("act");
      $(".programs-inner p").removeClass("act");
    $(this).addClass("act");
   })


    //EDUCATION VIDEO ACT ICONS
    $(".edu-ban-lhs .rhs-btn i").on("click", function () {
        $(".video").addClass("act");
    })

    //EDUCATION VIDEO ACT BUTTON
    $(".edu-ban-lhs .rhs-btn").on("click", function () {
        $(".video").addClass("act");
    })


    //COURSES ADD CLASS DETAILS
    $(".learnpress-video .video-icon").on("click", function () {
        $(".cou-det-video").addClass("act");
    })



    //COURSES DEATILS REMOVECLASS   
    $(".cou-det-video1 .co-close").on("click", function () {
        $(".cou-det-video").removeClass("act");
    })

    //COURSES DEATILS VIDEO POSITION STICKY
    $(".learnpress-video .video-icon").on("click", function () {
        $(".learnpress-det").addClass("position");
    })

    //COURSES DEATILS VIDEO POSITION RELATIVE
    $(".cou-det-video1 .co-close").on("click", function () {
        $(".learnpress-det").removeClass("position");
    })


    //COMM BANNER HEADING ANIMATION
    $(".comm-banner-head h2").addClass("head-ani");
    $(".comm-banner-head h3").addClass("head-ani1");



    //SUB MENU ADD CLASS
    $(".menu ul li.sub").mouseover(function () {
        $(this).children().siblings(".menu ul li .sub-menu").addClass("act");
    });

    //SUB MENU MOUSELEAVE REMOVECLASS
    $(".menu ul li.sub").mouseleave(function () {
        $(this).children().siblings(".menu ul li .sub-menu").removeClass("act");
    })


    $(".sub-menu .sub-menu-close").on("click", function () {
        $(".menu ul li .sub-menu.act").removeClass("act");
    })


    //EDUCATION VIDEO REMOVE CLASS
    $(".video i").on("click", function () {
        $(".video").removeClass("act");
    })

    //EDUCATION BANNER ANI
    $(".edu-ban-lhs").addClass("bann-ani");
    $(".round-ani .bg-shape").addClass("back-ani");
    $(".round-ani .bg-shape1").addClass("back-ani1");
    $(".round-ani .bg-shape2").addClass("back-ani2");
    $(".edu-ban-rhs img").addClass("bann-im-ani");
    $(".courses").addClass("ani2");
    $(".courses1").addClass("ani3");


    //TAB LATEST COURSES 
    $(".tab-courses li").on("click", function () {
        $(".tab-courses li").removeClass("act");
        $(this).addClass("act");
        var _add = $(this).attr("id");
        $(".top-rated").hide();
        $("#" + _add + "_view").show();
    })



    //PRICING PLAN ADD & REMOVE BACKGROUND COLOR
    $(".pricing-plan-inner").mouseover(function () {
        $(".pricing-plan-inner").removeClass("act");
        $(this).addClass("act");
    })


    //SHARE COURSES SOCIAL ICONS ADDCLASS
    $(".learnpress-details .share-btn").mouseover(function () {
        $(".share-courses").addClass("act");
    })

    //SHARE COURSES SOCIAL ICONS REMOVECLASS
    $(".share-courses").mouseleave(function () {
        $(".share-courses").removeClass("act");
    })

    //NUMBER COUNDOWN 
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

  


      

       /*$(".edu-banner").mousemove(function(event){
            var _pointX = event.pageX;
            var _poi3 = '-' + _pointX/8 + 'px';
            var _pointY = event.pageY;
            var _poi4 = '-' + _pointY/8 + 'px';
      
           $(".bann-im-ani").css({"left": _poi3,"top": _poi4, "transform": "rotateY(-20deg)"})
          
        
          });*/

    //ON WINDOW SCROOL FUNCTION
    $(window).on("scroll", function () {
        var _topval = $(window).scrollTop();

       


        //MENU FIXED ACTIVE
        if (_topval >= 100) {
            $(".menu-head").addClass("fix-menu");
        } else {
            $(".menu-head").removeClass("fix-menu");
        }





        //GO TO TOP BUTTON
        if (_topval >= 400) {
            $(".go-to-top").addClass("act");
        } else {
            $(".go-to-top").removeClass("act");
        }


        //ALL SECTION COMM-ANIMATION
        if ($(".ani-eql").length > 0) {
            $(".ani-eql").each(function () {
                var _seccom = $(this).offset().top + $(this).outerHeight() - 250;
                var _window = $(window).scrollTop() + $(window).height();
                if (_window >= _seccom) {
                    $(this).addClass("ani-strt");
                }

            })

        }

      

       

          


        //ALL SECTION TITLE COMM-ANIMATION
        if ($(".comm-tit-ani").length > 0) {
            $(".comm-tit-ani").each(function () {
                var _tit1 = $(this).offset().top + $(this).outerHeight() - 100;
                var _titcom = $(window).scrollTop() + $(window).height();
                if (_titcom >= _tit1) {
                    $(this).addClass("ani-tit");
                }
            })
        }


        //AVAILABLE COURSES ARROW 
         if ($(".comm-tit-ani").length > 14) {
        var _arrow = $(".more-featured").offset().top - 250;
        if (_topval >= _arrow) {
            $(".more-courese1 .arrow").addClass("act");
        }
             }

        //AVAILABLE COURSES BUTTON
         if ($(".comm-tit-ani").length > 14) {
        var _btn = $(".more-featured").offset().top - 250;
        if (_topval >= _btn) {
            $(".tit .more-btn").addClass("act");
        }
             }
    });


    //GOOGLE MAP - SCROLL REMOVE
    $(".contact-map")
        .on('click', function () {
            $(this).find("iframe").addClass("clicked")
        })
        .on('mouseleave', function () {
            $(this).find("iframe").removeClass("clicked")
        });

    //ADD SIDE BAR
    $(".click-sid-bar i").on("click", function () {
        $(".side-bar").addClass("act");
    })

    


    //REMOVE SIDE BAR
    $(".side-bar-im i").on("click", function () {
        $(".side-bar").removeClass("act");
    })

    // TOP SEARCH BOX ADD
    $(".cl-func span").on("click", function () {
        $(".top-cl-fun").addClass("act");
    })

    // TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function () {
        $(".top-cl-fun").removeClass("act");
    })



    //ADD SUB MENU & REMOVE
    $(".add-menu .arrow1").on("click", function () {
        $(".sub-menu.typ-menu").toggleClass("menuact");
    })

    //FAQ CLICK FUNCTION
    $(".faq-rhs ul li h3").on("click", function () {
        $(".faq-rhs p").slideUp(500);
        $(this).siblings(".faq-rhs p").slideDown(500);
        $(".faq-rhs ul li h3").removeClass("act");
        $(this).addClass("act");
    })

    //FOLLOWERS ICONS BLOG POST & DETAILS ADDCLASS 
    $(".share-all").mouseover(function () {
        $(this).siblings().closest(".follow-us li").addClass("act");
    });


    //FOLLOWERS ICONS BLOG POST & DETAILS REMOVECLASS 
    $(".follow-us").mouseleave(function () {
        $(".follow-us li").removeClass("act");
    });

    // GO TO TOP
    $('#scrolltop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });



    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>');
    var $exitButton = $('<div id="exitButton"> <i class="fa fa-times" aria-hidden="true"></i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function (event) {
        event.preventDefault();
        var imageLocation = $(this).prev().attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function () {
        $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").next().find("img"));
        var $images = $("#image-gallery img");
        if ($nextImg.length > 0) {
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").prev().find("img"));
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        event.stopPropagation();
    });

    $exitButton.click(function () {
        $("#overlay").fadeOut("slow");
    });


    //MOUSE MOVE1 
$(document).mousemove(function(event){
    var _mtop = event.pageY + "px";
    var _mleft = event.pageX + "px";
    $(".move-cursor1").css("top", _mtop);
    $(".move-cursor1").css("left", _mleft);
});

 //MOUSE MOVE2
$(document).mousemove(function(event){
    var _mtop = event.pageY + "px";
    var _mleft = event.pageX + "px";
    $(".move-cursor2").css("top", _mtop);
    $(".move-cursor2").css("left", _mleft);
});

});

