$(document).ready(init);

var max = 0;

function init() {
  var ie = ace.edit('iedit');
  ie.renderer.setShowGutter(false);
  ie.setTheme('ace/theme/eclipse');
  ie.setHighlightActiveLine(false);
  ie.setShowPrintMargin(false);
  ie.getSession().setMode('ace/mode/n1ql');
  ie.getSession().setUseWrapMode(true);
  ie.setDisplayIndentGuides(false);

  var re = ace.edit('redit');
  re.renderer.setShowGutter(false);
  re.setTheme('ace/theme/eclipse');
  re.setHighlightActiveLine(false);
  re.setShowPrintMargin(false);
  re.getSession().setMode('ace/mode/json');
  re.getSession().setUseWrapMode(false);
  re.setReadOnly(false);
  re.setDisplayIndentGuides(true);
  re.setShowFoldWidgets(true);

  if ($('#max').length > 0)
    max = $('#max').val();
  if (max < 1)
    max = guessmax();

  $('#run').click(run);
  $('#index').click(index);
  $('#prev').click(prev).addClass('enabled');
  $('#next').click(next).addClass('enabled');

  if ('onhashchange' in window)
    $(window).bind('hashchange', change);

  load(getLocation());
}

function load(n) {
  if (n < 1 || n > max)
    return;

  setLocation(n);
  updateNav(n);

  var slide = slideUrl(n);

  $.get(slide, function (data, status) {
    if (status != 'success')
      return;
    $('#content').html(data);

    var sample = $('#example').text();
    var ie = ace.edit('iedit');
    ie.setValue(sample);
    ie.navigateFileStart();

    var re = ace.edit('redit');
    re.setValue("  ");
    re.navigateFileStart();

    ie.focus();
  });
}

var iret = 1;
function index() {
  if (isIndex()) {
    load(iret);
    return;
  }

  iret = getLocation();
  $.getJSON('index.json', function (data, status) {
    if (status != 'success')
      return;

    var sorted = {};
    $.each(data, function (title, nloc) {
      sorted[nloc] = title;
    });

    var div = $(document.createElement('ul'));
    div.attr('id', 'toc');
    for (var i = 1; sorted[i] != undefined; i++) {
      html = '<li'
      if (iret == i)
        html += ' class="cloc"'
      html += '><a onclick="javascript:load(' + i + ');">' + sorted[i] + '</a></li>'
      $(html).appendTo(div);
    }

    setLocation('index');
    $('#content').empty();
    div.appendTo('#content');
    $('#content').focus();
  });
}

function run() {
  var re = ace.edit('redit');
  re.setValue("Running..");
  re.navigateFileEnd();

  var url = '/query';
  var ie = ace.edit('iedit');
  var query = 'statement=' + encodeURIComponent(ie.getValue()) + '&creds=[{"user":"Administrator","pass":"password"}]';
  $.post(url, query, ran).fail(failed);
}

function failed(data) {
  var msg = data.status + ': ' + data.statusText + '\n\n';
  msg += data.responseText + '\n';
  var re = ace.edit('redit');
  re.setValue(msg);
  re.navigateFileStart();
}

function ran(data) {
  var content = undefined;
  try
  {
    var json = (typeof data == 'string' ? $.parseJSON(data) : data);
    for (var key in json) {
      if (json.hasOwnProperty(key) && key != 'results' && key != 'error') {
        delete json[key];
      }
    }
    content = JSON.stringify(json, null, 2);
  } catch (e) {
    content = data;
  }

  var re = ace.edit('redit');
  re.setValue(content);
  re.navigateFileStart();
}

function slideUrl(n) {
  // note - .md is preprocessed into .html
  return 'slide-' + n + '.html';
}

function updateNav(n) {
  if (n == 1) {
    $('#prev').removeClass('enabled').addClass('disabled');
  } else {
    $('#prev').removeClass('disabled').addClass('enabled');
  }
  if (n == max) {
    $('#next').removeClass('enabled').addClass('disabled');
  } else {
    $('#next').removeClass('disabled').addClass('enabled');
  }
}

function setLocation(n) {
  window.location.hash = '#' + n;
}

function getLocation() {
  var h = window.location.hash;
  if (!h || h.length < 2)
    return 1;
  var n = parseInt(h.substr(1));
  if (n >= 1 && n <= max)
    return n;
  return 1;
}

function isIndex() {
  var h = window.location.hash;
  return (h == "#index");
}


function next() {
  var n = getLocation();
  if (n < max)
    load(n + 1);
}

function prev() {
  var n = getLocation();
  if (n > 1)
    load(n - 1);
}

function change() {
  if (isIndex())
    return;
  var n = getLocation();
  load(n);
}

function guessmax() {
  var http = new XMLHttpRequest();
  var n = 1;
  while (true) {
    try {
      http.open('HEAD', slideUrl(n), false);
      http.send();
      if (http.status >= 400)
        break;
      n = n + 1;
    } catch (e) {
      break;
    }
  }
  return n - 1;
}
jQuery.fn.sameHeight = function () {
  /* Same Height Function*/
  var maxHeight = 0;
  return this.each(function (index, elem) {
    jQuery(elem).height('auto');
    var boxHeight = jQuery(elem).height();
    maxHeight = Math.max(maxHeight, boxHeight);
  }).height(maxHeight);
};


jQuery(document).ready(function () {
  jQuery("#index a, #next a, #prev a").on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: (jQuery('#all').offset().top) - 80
    }, 800);
  });
  jQuery('#index a').click(function () {
    setTimeout(function () {
      jQuery('#toc li >  a > b').parent('a').css('font-weight', '700');
    }, 500);
  });
//

  jQuery(document).on("click", ".query .block-views .full-view", function () {
    if (jQuery(".query").hasClass("bottom-expand")) {
      jQuery(".query").toggleClass("full-bottom");
      if (jQuery(".query").hasClass("full-bottom")) {
        jQuery(".query .col-two").css({"height": "954px"});
        jQuery(".query .col-two:eq(0)").css({"width": "81px"});
        jQuery(".query .col-two:eq(1)").css({"width": "calc(100% - 81px)"});
        jQuery(".query #input, .query .result-container").removeAttr("style");
        jQuery(".query .hamburger-btn").addClass("show");
        jQuery(".query .col-two:nth-child(1) #info").addClass("hide");
        jQuery(".query").css({"margin-top":"128px"});
        jQuery(".third-level-banner").hide();
      } else {
        jQuery(".query .col-two").removeAttr("style");
        jQuery(".query .col-two").css({"width": "100%"});
        jQuery(".query .hamburger-btn").removeClass("show");
        jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
        jQuery(".query").removeAttr("style");
        jQuery(".third-level-banner").show();
      }
    } else {
      jQuery(".query").toggleClass("full-view");
      if (jQuery(".query").hasClass("full-view")) {
        jQuery(".query").removeClass("full-expand bottom-expand");
        jQuery(".query .col-two").css("height", "954px");
        jQuery(".query #input, .query .result-container").removeAttr("style");
        jQuery(".query .col-two:eq(0)").css({"width": "81px"});
        jQuery(".query .col-two:eq(1)").css({"width": "calc(100% - 81px)"});
        jQuery(".query .hamburger-btn").addClass("show");
        jQuery(".query .col-two:nth-child(1) #info").addClass("hide");
        jQuery(".query").css({"margin-top":"128px"});
        jQuery(".third-level-banner").hide();
      } else {
        jQuery(".query").addClass("full-expand");
        jQuery(".query .col-two").css({"width": "50%"});
        jQuery(".query .hamburger-btn").removeClass("show");
        jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
        jQuery(".query").removeAttr("style");
        jQuery(".third-level-banner").show();
      }
    }
  });

  jQuery(".query .hamburger-btn").click(function () {
    if (jQuery(".query").hasClass("full-view")) {
      jQuery(".query").removeClass("full-view");
      jQuery(".query").addClass("full-expand");
      jQuery(".query .col-two").removeAttr("style");
      jQuery(".query.bottom-expand .col-two").css("height", "954px");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    } else {
      jQuery(".query").removeClass("full-bottom");
      jQuery(".query .col-two").removeAttr("style");
      jQuery(".query.bottom-expand .col-two").css("width", "100%");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    }
  });
  jQuery(".query .block-views .default-view").click(function () {
    if (jQuery(".query").hasClass("full-view")) {
      jQuery(".query").removeClass("full-view full-bottom");
      jQuery(".query").addClass("full-expand");
      jQuery(".query .col-two").removeAttr("style");
      jQuery(".query .col-two").css("height", "954px");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    } else if (jQuery(".query").hasClass("bottom-expand")) {
      jQuery(".query").removeClass("bottom-expand full-bottom");
      jQuery(".query .col-two").removeAttr("style");
      jQuery(".query .col-two").css("height", "954px");
      jQuery(".query #input, .query .result-container").removeAttr("style");
      jQuery(".query").addClass("full-expand");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    }
  });
  jQuery(".query .block-views .bottom-view").click(function () {
    if (!jQuery(".query").hasClass("bottom-expand")) {
      jQuery(".query").addClass("bottom-expand");
      jQuery(".query").removeClass("full-expand full-view");
      jQuery(".query.bottom-expand .col-two").removeAttr("style");
      jQuery(".query.bottom-expand .col-two").css("width", "100%");
      jQuery(".query.bottom-expand #input, .query.bottom-expand .result-container").removeAttr("style");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    } else if (jQuery(".query").hasClass("bottom-expand full-bottom")) {
      jQuery(".query").removeClass("full-bottom");
      jQuery(".query.bottom-expand .col-two").removeAttr("style");
      jQuery(".query.bottom-expand .col-two").css("width", "100%");
      jQuery(".query .hamburger-btn").removeClass("show");
      jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      jQuery(".query").removeAttr("style");
      jQuery(".third-level-banner").show();
    }
  });
  var $winWidth = jQuery(window).width();
  if ($winWidth >= 992) {
    /* 
     * Bottom view
     */
    /* editor */
    jQuery(".query.bottom-expand #input").resizable({
      resizeHeight: false,
      resizeWidth: true
    });

    /*
     Full view
     */
    jQuery(".query .index-block").resizable({
      resizeHeight: true,
      resizeWidth: true
    });
    jQuery(".query .index-block").on("resize", function () {
      var $width = jQuery(this).width();
      var $height = jQuery(this).height();
      var $winWidth = jQuery(window).width();
      var $containerWidth = jQuery("#all").width();
      var $containerHeight = jQuery("#all").height();
      jQuery(".query .query-block").css({"width": ($containerWidth - ($width + 2)) + "px"});
      if ($width < 430 && $width >= 82) {
        jQuery(".query .hamburger-btn").addClass("show");
        jQuery(".query .col-two:nth-child(1) #info").addClass("hide");
        jQuery(".query .index-block .switch-to-full").removeClass("exit-full");
      } else if ($width <= 81) {
        jQuery(".query .index-block .switch-to-full").addClass("exit-full");
      } else if ($width === $winWidth) {
        jQuery(".query .col-two").css("width", "100%");
      } else {
        jQuery(".query .hamburger-btn").removeClass("show");
        jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
        jQuery(".query .index-block .switch-to-full").removeClass("exit-full");
      }

      var $height = jQuery(this).height();
      var $containerHeight = jQuery("#all").height();
      jQuery(".query .query-block").css({"height": ($containerHeight - $height) + "px"});
      if($containerHeight === $height){
        jQuery(".query .col-two").css("height", "100%");
      }
    });
    /* editor */
    jQuery(".query.full-expand #input, .query.full-view #input").resizable({
      resizeWidth: false
    });
    jQuery(".query #input").on("resize", function () {
      /* Resize Height */
      var $height = jQuery(this).height();
      var $containerHeight = jQuery("#try").innerHeight();
      jQuery(".query.full-expand .result-container, .query.full-view .result-container").css({"height": (($containerHeight - 91) - $height) + "px"});
      /* Resize Width */
      var $width = jQuery(this).width();
      var $containerHeight = jQuery("#try").width();
      jQuery(".query.bottom-expand .result-container").css({"width": (($containerHeight - 30) - $width) + "px"});
    });
  }
  
  jQuery(".query .index-block").append("<span class='switch-to-full'></span>");
  jQuery(document).on("click", ".query .index-block .switch-to-full", function () {
    if (jQuery(".query").hasClass("bottom-expand")) {
      jQuery(".query").toggleClass("full-bottom");
      if (jQuery(".query").hasClass("full-bottom")) {
        jQuery(".query .col-two").css("height", "954px");
        jQuery(".query #input, .query .result-container").removeAttr("style");
        jQuery(".query .col-two:eq(0)").css({"width": "81px"});
        jQuery(".query .col-two:eq(1)").css({"width": "calc(100% - 81px)"});
        jQuery(".query .hamburger-btn").addClass("show");
        jQuery(".query .col-two:nth-child(1) #info").addClass("hide");
      } else {
        jQuery(".query .col-two").removeAttr("style");
        jQuery(".query .col-two").css({"width": "100%"});
        jQuery(".query .hamburger-btn").removeClass("show");
        jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      }
    } else {
      jQuery(".query").toggleClass("full-view");
      if (jQuery(".query").hasClass("full-view")) {
        jQuery(".query").removeClass("full-expand bottom-expand");
        jQuery(".query .col-two").css("height", "954px");
        jQuery(".query #input, .query .result-container").removeAttr("style");
        jQuery(".query .col-two:eq(0)").css({"width": "81px"});
        jQuery(".query .col-two:eq(1)").css({"width": "calc(100% - 81px)"});
        jQuery(".query .hamburger-btn").addClass("show");
        jQuery(".query .col-two:nth-child(1) #info").addClass("hide");
      } else {
        jQuery(".query").addClass("full-expand");
        jQuery(".query").removeClass("bottom-full");
        jQuery(".query .col-two").css({"width": "50%"});
        jQuery(".query .hamburger-btn").removeClass("show");
        jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
      }
    }
  });
  jQuery(document).on("click", ".query .index-block .switch-to-full.exit-full", function () {
    jQuery(".query").addClass("full-expand full-view");
    jQuery(".query").removeClass("full-view");
    jQuery(".query .col-two").css({"width": "50%"});
    jQuery(".query .hamburger-btn").removeClass("show");
    jQuery(".query .col-two:nth-child(1) #info").removeClass("hide");
    jQuery(this).removeClass("exit-full");
    jQuery(".query").removeAttr("style");
    jQuery(".third-level-banner").show();
  });
});

jQuery(window).on('load resize', function () {
  var $windowWidth = jQuery(window).width();
  if ($windowWidth > 991) {
    jQuery(".query.full-expand .col-two").sameHeight();
  } else {
    jQuery(".query .col-two").css('height', 'auto');
    jQuery(".query").removeClass("bottom-expand full-view full-bottom");
    jQuery(".query .col-two:eq(0) .hamburger-btn").removeClass("show");
    jQuery(".query .col-two:eq(0) #info").removeClass("hide");
    jQuery(".query .col-two:eq(0)").removeAttr("style");
  

  }
});