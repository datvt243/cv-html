var app = app || {};
var spBreak = 920;

app.init = function () {
  app.personalSkills();
  app.progressBar();
  app.backToTop();
  app.wow();
  app.activeMenu();
  app.toggleNavi();
  app.anchorLink();
};

app.isMobile = function () {
  return window.matchMedia('(max-width: ' + spBreak + 'px)').matches;
};

app.wow = function () {
  if ($('.wow').length) {
    new WOW().init();
  }
};

app.anchorLink = function () {
  var link = $('a[href^="#"]');

  if (link.length) {
    link.click(function (e) {
      e.preventDefault();

      if ($($(this).attr('href')).length) {
        var target = $($(this).attr('href')).offset();
        $('html,body').animate(
          {
            scrollTop: target.top
          },
          400
        );
      }
    });
  }
};

app.personalSkills = function () {
  var skill = $('.js-progress-circle');

  if (skill.length) {
    skill.find('.js-loader').each(function () {
      var sefl = $(this);
      var svg =
        '<svg viewBox="-10 -10 220 220"><circle cx="0" cy="0" fill="#26262d" r="100" stroke="#eecd10" stroke-width="20" transform="translate(100, 100)"></circle></svg>';

      sefl
        .append(svg, svg)
        .find('>svg')
        .last()
        .find('>circle')
        .attr(
          'stroke-dashoffset',
          -Math.round(
            (parseInt(sefl.data('percent').replace('%', '')) * 629) / 100
          )
        );
    });
  }
};

app.progressBar = function () {
  var progressbar = $('.js-progress-bar');

  if (progressbar.length) {
    progressbar.each(function () {
      var sefl = $(this);
      var bar = sefl.find('.js-bar');
      bar.css('width', bar.data('width'));
    });
  }
};

app.backToTop = function () {
  var btnTop = $('.js-totop');

  btnTop.click(function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  btnTopFade();

  $(window).on('load scroll resize', function () {
    btnTopFade();
  });

  function btnTopFade () {
    if ($(window).scrollTop() > $(window).height() * 0.2) {
      if (!btnTop.is(':visible')) {
        btnTop.css('opacity', 0).show();
        btnTop.animate(
          {
            opacity: 1
          },
          400
        );
      }
    } else {
      if (btnTop.is(':visible') && !btnTop.is(':animated')) {
        btnTop.animate(
          {
            opacity: 0
          },
          400,
          function () {
            btnTop.css('opacity', 1).hide();
          }
        );
      }
    }
  }
};

app.activeMenu = function () {
  var onScroll = function () {
    var scrollPos = $(document).scrollTop();
    $('.js-navi a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.js-navi ul li a').removeClass('is-active');
        currLink.addClass('is-active');
      } else {
        currLink.removeClass('is-active');
      }
    });
  };

  $(window).on('load scroll', function () {
    onScroll();
  });
};

app.toggleNavi = function () {
  var navBtn = $('.navbar-toggler');
  var navCollapse = $('.navbar-collapse');

  var funcInit = function () {
    if (navBtn.length) {
      funcClickHamburger();
    }
    funcClose();
  };

  var funcClickHamburger = function () {
    navBtn.off('click.btn').on('click.btn', function () {
      navCollapse.slideToggle();

      /* Add CSS - overflow: auto */
      if (navCollapse.hasClass('is-active')) {
        navCollapse.removeClass('is-active');
      } else {
        setTimeout(function () {
          navCollapse.addClass('is-active');
        }, 410);
      }

      $(this)
        .find('.toggler-btn')
        .toggleClass('is-active');
      $('body').toggleClass('is-toggle-nav');

      /* Fixed Body */
      if ($('body.is-toggle-nav').length) {
        offsetY = window.pageYOffset;
        app.stickBody();
      } else {
        app.unStickBody();
      }
    });
  };

  var funcClose = function () {
    $('.nav-link').on('click.btn', function () {
      if (app.isMobile()) {
        setTimeout(function () {
          navCollapse.slideUp();
          navCollapse.removeClass('is-active');
          $('.toggler-btn').removeClass('is-active');
          $('.navbar-toggler').removeClass('is-active');
          $('body').removeClass('is-toggle-nav');
        }, 500);
      }
    });
  };

  funcInit();
};

$(function () {
  app.init();
});
