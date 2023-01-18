/* eslint-disable */
/*
Template: Soft-Tech - IT Solutions and Services Company HTML5 Template
Author: creativetechsolution
Design and Developed by: creativetechsolution.in

NOTE: This file contains all scripts for the actual Template.

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document)
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };


/*************************
         Sticky
*************************/
POTENZA.isSticky = function () {
  $(window).on('scroll',function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header").removeClass("sticky-top");
        }else{
            $(".header").addClass("sticky-top");
        }
    });
};

/*************************
    Secondary Sticky
*************************/
POTENZA.secondarySticky = function () {
  $(window).on('scroll',function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".header-inner-nav").removeClass("page-menu-top");
        }else{
            $(".header-inner-nav").addClass("page-menu-top");
        }
        if( $('div').hasClass('header-inner-nav') ) {
          var div_height = 90 + $('.header-inner-nav').height();
          $('.is-sticky').css('top',div_height);
        } else{
          $('.is-sticky').css('top','80px');
        }
    });

	$( document ).on( 'click', '.header-inner-nav .nav-item a', function(){
		$('.header-inner-nav .nav-item a').removeClass('active');
		$(this).addClass('active');
    });
	$( document ).on( 'click', '.header-inner-nav .nav-item a', function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-120
        }, 1000);
        return false;
    });
};

/*************************
    Menu
*************************/
POTENZA.dropdownmenu = function () {
  if ($('.navbar').exists()) {
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
      return false;
    });
  }
};

/*************************
     Back to top
*************************/
  POTENZA.goToTop = function () {
    var $goToTop = $('#back-to-top');
    $goToTop.hide();
    $window.scroll(function () {
      if ($window.scrollTop() > 100) $goToTop.fadeIn();
      else $goToTop.fadeOut();
    });
    $goToTop.on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }


/****************************************************
     POTENZA Window load and functions
****************************************************/

  //Document ready functions
  $document.ready(function () {
    POTENZA.isSticky(),
    POTENZA.secondarySticky(),
    POTENZA.dropdownmenu(),
    POTENZA.goToTop()
  });

})(jQuery);



