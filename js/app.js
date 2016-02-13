var $, Backbone, Handlebars, app, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = window.app;

$ = window.jQuery;

_ = window._;

Backbone = window.Backbone;

Handlebars = window.Handlebars;

_.extend(app, Backbone.Events);

$(function() {
  app.initViews();
  return app.initRouting();
});

window.app = {
  collections: {},
  models: {},
  views: {},
  routers: {},
  initViews: function() {
    console.log("Phil App Init()");
    return app.header_view = new app.views.Header();
  },
  initRouting: function() {
    console.log('init routing');
    app.router = new app.routers.Router();
    return Backbone.history.start({
      pushState: true
    });
  }
};


/* 
	README:

	The customer object is always available in templates.
	Feel free to add more helpers.
 */

app.template = {
  engines: [],
  render: function(template_id, object) {
    var obj;
    if (object == null) {
      object = {};
    }
    if (!this.engines[template_id]) {
      this.engines[template_id] = templates[template_id];
    }
    console.log(object);
    obj = $.extend(object);
    return this.engines[template_id](obj);
  },
  block: function(template_id, jquery_container) {
    var $container, content_html;
    content_html = this.render(template_id);
    $container = $(jquery_container);
    $container.html(content_html);
    return true;
  },
  validateExistence: function(template_id) {
    if (templates[template_id] != null) {
      return true;
    } else {
      return false;
    }
  }
};

Handlebars.registerHelper('round', function(context) {
  return Math.round(context);
});

Handlebars.registerHelper('lowercase', function(context) {
  if (context != null) {
    return context.toLowerCase();
  }
});

Handlebars.registerHelper('minus_one', function(context) {
  return parseInt(context) - 1;
});

Handlebars.registerHelper('date', function(context) {
  var date;
  date = new Date(context * 1000);
  return date.toDateString();
});

Handlebars.registerHelper('first', function(context, options) {
  return options.fn(context[0]);
});

Handlebars.registerHelper('matchBetweenThen', function(first, second, content) {
  if (first === second) {
    return content;
  }
});

Handlebars.registerHelper('disabledUnlessOutOfStock', function(context) {
  if (context === "outofstock") {
    return "disabled";
  }
});

Handlebars.registerHelper('cashFormat', function(context) {
  var i;
  if (context != null) {
    context = context.toFixed(2) + "";
    i = context.indexOf('.');
    if (i !== -1 && context.substring(i).length === 2) {
      context = context + "0";
    }
  }
  return context;
});

Handlebars.registerHelper('encode', function(context) {
  return encodeURIComponent(context);
});

Handlebars.registerHelper('emailBody', function(context) {
  var body;
  body = context.replace(/<br \/>/ig, "\n");
  body = body.replace(/\sHi/ig, "Hi");
  body = body.replace(/&amp;/ig, "&");
  body = body.replace(/\n\s{1,30}/ig, "\n");
  body = body.replace(/\&nbsp;/ig, "");
  body = body.replace(/(<([^>]+)>)/ig, "");
  return encodeURIComponent(body);
});

Handlebars.registerHelper('validateProduct', function(id, name, options) {
  if (parseInt(name)) {

  } else if (id === void 0) {

  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('__', function(context) {
  return app.lang[context];
});

app.routers.Router = (function(_super) {
  __extends(Router, _super);

  function Router() {
    return Router.__super__.constructor.apply(this, arguments);
  }

  Router.prototype.titleSuffix = 'Wise';

  Router.prototype.routes = {
    '': 'work',
    'about': 'about'
  };

  Router.prototype.load = function(page) {
    return page.render();
  };

  Router.prototype.work = function() {
    return this.load(new app.views.Home);
  };

  Router.prototype.about = function() {
    return this.load(new app.views.About);
  };

  return Router;

})(Backbone.Router);

$(function() {
  return $(document).on("click", "a", function(e) {
    var href;
    href = $(this).attr("href");
    if ((href != null) && href.substring(0, 3) !== 'tel' && href.substring(0, 4) !== 'http' && href.substring(0, 6) !== 'mailto' && href.substring(0, 6) !== 'intent' && href.substring(0, 11) !== 'frankandoak' && href.substring(0, 7) !== 'twitter') {
      e.preventDefault();
      return app.router.navigate(href, {
        trigger: true
      });
    }
  });
});

app.views.About = (function(_super) {
  __extends(About, _super);

  function About() {
    return About.__super__.constructor.apply(this, arguments);
  }

  About.prototype.template = 'about';

  About.prototype.el = $('#main__content');

  About.prototype.events = {
    'click .btn--close': About.closePage
  };

  About.prototype.render = function() {
    return this.$el.html(app.template.render(this.template));
  };

  About.prototype.closePage = function() {
    return this.el.children.first().addClass('page_animated--reverse');
  };

  return About;

})(Backbone.View);

app.views.Header = (function(_super) {
  __extends(Header, _super);

  function Header() {
    return Header.__super__.constructor.apply(this, arguments);
  }

  Header.prototype.el = $('#main__header');

  Header.prototype.template = 'static_header';

  Header.prototype.events = {
    "click a": "setActive"
  };

  Header.prototype.initialize = function() {
    return this.render();
  };

  Header.prototype.render = function() {
    return this.$el.html(app.template.render(this.template));
  };

  Header.prototype.setActive = function(e) {
    this.$el.find('a').removeClass("active");
    return $(e.currentTarget).addClass("active");
  };

  return Header;

})(Backbone.View);

app.views.Home = (function(_super) {
  __extends(Home, _super);

  function Home() {
    return Home.__super__.constructor.apply(this, arguments);
  }

  Home.prototype.el = $('#main__content');

  Home.prototype.template = 'home';

  Home.prototype.currentPos = 0;

  Home.prototype.nbPhoto = 6;

  Home.prototype.time = 1000 * 0.25;

  Home.prototype.initialize = function() {};

  Home.prototype.bindEvents = function() {
    var self;
    self = this;
    $('.btn--work').on('mouseenter', function(e) {
      self.randomizeBG();
      return self.createInterval();
    });
    return $('.btn--work').on('mouseleave', function(e) {
      return self.killInterval();
    });
  };

  Home.prototype.render = function() {
    this.$el.html(app.template.render(this.template));
    return this.bindEvents();
  };

  Home.prototype.randomizeBG = function(e) {
    var path1, path2;
    if (e == null) {
      e = 1;
    }
    console.log("RDM BG");
    if (e === 1) {
      path1 = '/img/bg/' + this.getBgFile() + '.jpg';
      return $('.bg1').css('background-image', 'url(' + path1 + ')');
    } else {
      path2 = '/img/bg/' + this.getBgFile() + '.jpg';
      return $('.bg2').css('background-image', 'url(' + path2 + ')');
    }
  };

  Home.prototype.showBg = function() {
    if ($('.bg1').attr('style').indexOf('display: none') === 0) {
      console.log('SHOW 1');
      $('.bg1').show();
      $('.bg2').hide();
      return this.randomizeBG(2);
    } else {
      console.log('SHOW 2');
      $('.bg2').show();
      $('.bg1').hide();
      return this.randomizeBG(1);
    }
  };

  Home.prototype.getBgFile = function() {
    if (this.currentPos === this.nbPhoto) {
      this.currentPos = 0;
    }
    this.currentPos = this.currentPos + 1;
    return this.currentPos;
  };

  Home.prototype.createInterval = function() {
    console.log("Create Interval");
    this.randomizeBG(1);
    this.randomizeBG(2);
    return this.interval1 = setInterval((function(_this) {
      return function() {
        return _this.showBg();
      };
    })(this), this.time);
  };

  Home.prototype.killInterval = function() {
    console.log('Kill IT!!!');
    clearInterval(this.interval);
    clearInterval(this.interval1);
    return $('.bg1,.bg2').removeAttr('style');
  };

  return Home;

})(Backbone.View);
