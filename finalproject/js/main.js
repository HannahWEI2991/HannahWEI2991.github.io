(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);



// ranking chart1
var chart = c3.generate({
    bindto: '#chart1',
    data: {
			x:'x',
      columns: [
				['x',2014,2015,2016,2017,2018],
        ['香港大学', 28, 30, 27, 26, 25],
        ['香港中文大学', 46, 51, 44, 46, 49],
				['香港城市大学', 108, 57, 55, 49, 55],
				['香港浸会大学', 318, 281, 278, 299, 277],
				['香港理工大学', 162, 116, 111, 95, 106],
      ]
    },
		axis:{
			y:{
				inverted:true,
				label:"排名",
				max:-50,
				min:400,
			},
		 x:{
			 label:"年份"
		 },
		},
});

//ranking chart3
var chart = c3.generate({
    bindto: '#chart2',
    data: {
			x:'x',
      columns: [
				['x',2014,2015,2016,2017,2018],
        ['香港大学', 3, 2, 2, 5, 2],
        ['香港中文大学', 6, 6, 7, 8, 9],
				['香港城市大学', 11, 9, 8, 10, 21],
				['香港浸会大学', 27, 51, 64, 64, 65],
				['香港理工大学', 45, 27, 29, 27, 31],
      ]
    },
		axis:{
			y:{
				inverted:true,
				label:"排名",
				max:-10,
				min:80,
			},
		 x:{
			 label:"年份"
		 },
		},
});

//ranking chart3
var chart = c3.generate({
    bindto: '#chart3',
    data: {
			type:"bar",
      columns: [
				['香港大学',35,],
				['香港中文大学',20,],
				['香港城市大学',27,],
				['香港浸会大学',51,],
    ]
    },
		axis:{
			y:{
				label:"排名",
				max:0,
				min:600,
			},
		 x:{
			 label:"学校"
		 },
		},
});

//ranking chart4
var chart = c3.generate({
    bindto: '#chart4',
    data: {
			x:'x',
      columns: [
				['x',2014,2015,2016,2017,2018],
        ['香港大学', 43, 44, 43, 40, 36],
        ['香港中文大学', 129, 138, 76, 58, 53],
				['香港城市大学', 192, 201, 119, 119, 110],
				['香港浸会大学', 301, 351, 351, 401, 401],
				['香港理工大学', 225, 201, 192, 182, 159],
      ]
    },
		axis:{
			y:{
				inverted:true,
				label:"排名",
				max:-50,
				min:500,
			},
		 x:{
			 label:"年份"
		 },
		},
});
