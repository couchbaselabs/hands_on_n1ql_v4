jQuery.fn.sameHeight = function () {
  /* Same Height Function*/
  var maxHeight = 0;
  return this.each(function (index, elem) {
    jQuery(elem).height('auto');
    var boxHeight = jQuery(elem).height();
    maxHeight = Math.max(maxHeight, boxHeight);
  }).height(maxHeight);
};
function searchPlaceholder() {
  //To focus on input field
  setTimeout(function () {
    var selector = jQuery('.ie9 .search-form input[type=text]');
    selector.attr('placeholder', 'Search couchbaase');
  }, 100);
}
jQuery(document).ready(function(){
  searchPlaceholder();
  /* Call search animate function */
  searchAnimate();
  jQuery(document).click(function () {
    /* Search icon animation */
    if (jQuery('.animate.clickable').hasClass('close')) {
      jQuery('.animate').addClass('active');
      jQuery('.circle').velocity('reverse', {duration: 250, easing: 'easeOutSine', complete: function () {
          jQuery('.circle').velocity({width: '16px', borderWidth: '2px', borderRadius: '50%'},{duration: 250, easing: 'easeOutSine'});
        }
      });
      jQuery('.line').velocity({rotateZ: '-45deg'},
      {duration: 500, easing: 'easeOutSine', complete: function () {
          jQuery('.animate').removeClass('active');
        }
      });
      jQuery('.animate').addClass('search').removeClass('close');
      if (jQuery(".top-navigation").hasClass("hide-top-nav")) {
        jQuery(".top-navigation").removeClass("hide-top-nav").addClass("show-top-nav");
      }
      setTimeout(function () {
        jQuery(".top-navigation").removeClass("hide-top-nav").removeClass("show-top-nav");
      }, 1000);
    }

  });
  /* To prevent from document click */
  jQuery('.search-form input').click(function (e) {
    e.stopPropagation();
  });
  /* Add scroll-up button */
  jQuery("body").append("<span class='scroll-top'></span>");
  /* SCROLL TOP BUTTON */
  if (jQuery('header').length) {
    var scrollTrigger = 100, // px
            backToTop = function () {
              var scrollTop = jQuery(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                jQuery('.scroll-top').addClass('show');
                jQuery(".scroll-top").css('opacity', '1');
              } else {
                jQuery('.scroll-top').removeClass('show');
                jQuery(".scroll-top").css('opacity', '0');
              }
            };
    backToTop();
    jQuery(window).on('scroll', function () {
      backToTop();
    });

    jQuery('.scroll-top').on('click', function (e) {
      e.preventDefault();
      jQuery('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
});
/* Window Load: Start */
jQuery(window).on("load", function () {
  var $windowWidth = jQuery(window).width();
          /*
   * Fix navigation on scroll
   */
   if ($windowWidth > 991) {
    jQuery('.platform-link').css("height", "auto");
    var maxHeight = 0;
    jQuery('.platform-link').each(function () {
      if (jQuery(this).outerHeight() > maxHeight) {
        maxHeight = jQuery(this).outerHeight();
      }
    });
    jQuery('.platform-link').css("height", maxHeight + "px");
  } else {
    jQuery('.platform-link').css("height", "auto");
  }
  var scroll = jQuery(document).scrollTop(),
          topnavHeight = jQuery(".top-menu").outerHeight(true),
          mainnavHeight = jQuery(".main-nav").outerHeight(true);
  var topSpace;
  if ($windowWidth >= 992) {
    topSpace = (topnavHeight + mainnavHeight);
  } else {
    topSpace = mainnavHeight;
  }
  var scrolled = jQuery(document).scrollTop();
  if (scrolled >= topSpace) {
    jQuery("header").addClass("fixed");
    jQuery('.animate.close').trigger("click");
    jQuery(".top-navigation").removeClass("hide-top-nav").removeClass("show-top-nav");
  }
  jQuery(window).scroll(function () {
    if ($windowWidth >= 992) {
      topSpace = (topnavHeight + mainnavHeight);
    } else {
      topSpace = mainnavHeight;
    }
    var scrolled = jQuery(document).scrollTop();
    if ((scrolled > scroll)) {
      if (scrolled >= topSpace) {
        jQuery("header").addClass("fixed");
        jQuery('.animate.close').trigger("click");
        jQuery(".top-navigation").removeClass("hide-top-nav").removeClass("show-top-nav");
      }
      jQuery("header").removeClass("off-canvas");
    } else if ((scrolled < scroll)) {
      if (scrolled > topnavHeight) {
        jQuery("header.fixed").addClass("off-canvas");
      } else if (scrolled < topnavHeight) {
        jQuery("header").removeClass("off-canvas");
        jQuery("header").removeClass("fixed");
      }
    }
    scroll = jQuery(document).scrollTop();
  });
  /* To prevent from document click */
  jQuery('.we-search input').click(function (e) {
    e.stopPropagation();
  });

  /* Add class on navigtion li if has submenu */
  jQuery('.main-menu > li').each(function () {
    if (jQuery(this).children('.sub-menu').length > 0) {

    } else {
      jQuery(this).removeClass('list-menu');
    }
  });
  jQuery('.top-navigation .top-menu li').each(function () {
    if (jQuery(this).children('.sub-menu').length > 0) {
      jQuery(this).addClass('list-menu');
    } else {
      jQuery(this).removeClass('list-menu');
    }
  });
  /* Add or remove mobile menu class */
  if ($windowWidth <= 991) {
    jQuery('.main-menu').addClass('mobile-menu');
  } else {
    jQuery('.main-menu').removeClass('mobile-menu');
  }

  /* Toggle menu function */
  navigationToggle();
  /* open sub menu on click */
  jQuery('.main-menu > li').click(function (e) {
    e.stopPropagation();
    if(jQuery(this).parents('.main-menu').hasClass('mobile-menu')){
    jQuery('.sub-menu').stop().slideUp();
    jQuery(this).find('.sub-menu').stop().slideToggle();
    if (jQuery(this).hasClass('sub-toggle')) {
      jQuery(this).removeClass('sub-toggle');
    } else {
      jQuery('.main-menu > li').removeClass('sub-toggle');
      jQuery(this).addClass('sub-toggle');
    }
}
  });
  /* To reset search form */
  jQuery(".main-nav .clear").on("click", function () {
    jQuery(".mobile-menu .search-form input[type=text]").val("");
  });

  jQuery('.customer-tabs').removeClass("visibility");
});
/* Window load: End */

/* Toggle menu function */
function navigationToggle() {
  jQuery('.toggle').one("click", function (e) {
    e.stopPropagation();
    jQuery(this).toggleClass('active');
    jQuery("body").toggleClass("scroll-fixed");
    jQuery('.main-menu').stop().slideDown();
    jQuery(".outside-search-form").toggle();
    if (jQuery(this).hasClass('active')) {
      jQuery('.main-menu').addClass("open-menu");
      jQuery(".main-nav").animate({"height": "100vh"}, 300);
    } else {

      jQuery('.main-menu > li').removeClass('sub-toggle');
      setTimeout(function () {
        jQuery('.main-menu').stop().slideUp();
        jQuery('.sub-menu').slideUp();
        jQuery(".main-nav").animate({"height": "69px"}, 500);
      }, 400);
      jQuery('.main-menu').removeClass("open-menu");

      setTimeout(function () {
        jQuery(".main-nav").removeClass("show-mobile-search").removeClass("hide-mobile-search");
      }, 1000);
    }
    setTimeout(function () {
      navigationToggle();
    }, 1000);
  });
}
/*
 * Top navigation search animation 
 */
function searchAnimate() {
  jQuery('.animate.clickable').one("click", function (event) {
    event.stopPropagation();
    setTimeout(function () {
      jQuery('.animate').addClass("clickable");
      searchAnimate();
    }, 1000);
    jQuery(this).removeClass("clickable");
    if (jQuery('.animate').hasClass('active')) {
      return false;
    } else if (jQuery('.animate').hasClass('search')) {
      jQuery('.animate').addClass('active');
      jQuery('.circle').velocity({width: '0', borderRadius: '0', rotateZ: '-45deg'},
      {duration: 250, easing: 'easeOutSine', complete: function () {
          jQuery('.circle').velocity({left: '3px', borderWidth: '1px', top: '5px'}, {duration: 250, easing: 'easeOutSine'});
        }
      });
      jQuery('.line').velocity({rotateZ: '225deg'},
      {duration: 500, easing: 'easeOutSine', complete: function () {
          jQuery('.animate').removeClass('active');
        }
      });
      jQuery('.animate').removeClass('search').addClass('close');
      jQuery(".top-navigation").addClass("hide-top-nav").removeClass("show-top-nav");

    } else if (jQuery('.animate').hasClass('close')) {
      jQuery('.animate').addClass('active');
      jQuery('.circle').velocity('reverse', {duration: 250, easing: 'easeOutSine', complete: function () {
          jQuery('.circle').velocity({width: '15px', borderRadius: '50%', borderWidth: '2px'},
          {duration: 250, easing: 'easeOutSine'});
        }
      });
      jQuery('.line').velocity({rotateZ: '-45deg'},
      {duration: 500, easing: 'easeOutSine', complete: function () {
          jQuery('.animate').removeClass('active');

        }
      });
      jQuery('.animate').addClass('search').removeClass('close');
      /* search form */
      jQuery(".top-navigation").removeClass("hide-top-nav").addClass("show-top-nav");
    }

  });
}

/* Window resize: Start */
jQuery(window).resize(function () {
var $windowWidth = jQuery(window).width();
 if ($windowWidth > 991) {
    jQuery('.platform-link').css("height", "auto");
    var maxHeight = 0;
    jQuery('.platform-link').each(function () {
      if (jQuery(this).outerHeight() > maxHeight) {
        maxHeight = jQuery(this).outerHeight();
      }
    });
    jQuery('.platform-link').css("height", maxHeight + "px");
  } else {
    jQuery('.platform-link').css("height", "auto");
  }
/* Window resize: Start */
jQuery(window).resize(function () {

  var $windowWidth = jQuery(window).width();
  /* to reset naviagtion form mobile and desktop */
  if ($windowWidth <= 991) {
    jQuery('.main-menu').addClass('mobile-menu');
  } else {
      jQuery('.main-menu .sub-menu').attr('style','');
    jQuery(".outside-search-form").css({"display": "none"});
    jQuery(".main-nav").css({"height": "auto"});
    jQuery('.main-menu').removeClass('mobile-menu');
    jQuery('.main-menu').removeClass("open-menu");
    jQuery("body").removeClass("scroll-fixed");
    jQuery(".main-nav").removeClass("show-mobile-search").removeClass("hide-mobile-search");
    jQuery('.toggle').removeClass('active');
    jQuery('.main-menu > li').removeClass('sub-toggle');
  }
});
});
