this["templates"] = this["templates"] || {};

this["templates"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page--about page__animated\">\n<div class=\"btn--close \">\n<a href=\"#\" class=\"hidden-xs\">\n<img src=\"/img/x.svg\">\n</a>\n</div>\n<div class=\"row centered-v\">\n\n<div class=\"col-sm-6 centered-h main col-sm-push-3\">\n<p>I’m an Art director/Graphic designer from Montreal, Canada.</p>\n<p>I specialise in brand identities, print and web design.</p>\n<p>I’ve got over 8 years of experience.</p>\n<p>I’m currently available for selective projects and collaborations.</p>\n<p>Feel free to <a href=\"mailto:phil@philippegauthier.net\">drop me a line</a>.</p>\n<hr class=\"visible-xs\">\n</div>\n<div class=\"col-sm-3 col-sm-pull-6 side\">\n<ul>\n<li><a href=\"https://dribbble.com/philgauthier\">Dribbble</a></li>\n<li><a href=\"http://shitifind.com/\">Tumblr</a></li>\n<li><a href=\"https://twitter.com/philgauthier\">Twitter</a></li>\n<li><a href=\"https://ca.linkedin.com/in/philgauthier\">LinkedIn</a></li>\n</ul>\n\n<h3>Friends<br>\n& collaborators<br>—</h3>\n<ul>\n<li><a href=\"https://deuxhuithuit.com\">Deux Huit Huit</a></li>\n<li><a href=\"http://cpen10.com/\">Charlène Sepentzis</a></li>\n<li><a href=\"http://folio.jimmifrancoeur.com/\">Jimmi Francoeur</a></li>\n<li><a href=\"http://xavierblais.com/\">Xavier Blais</a></li>\n<li><a href=\"http://www.maybejefflee.com/\">Jeff Lee</a></li>\n</ul>\n\n</div>\n</div>\n</div>\n";
  });

this["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page--work\">\n<div class=\"centered hidden-xs\">\n<a href=\"https://www.behance.net/philgauthier\" class=\"btn--work\">\n<span>Work</span>\n<img class=\"centered-v\" src=\"/img/Arrow.svg\">\n</a>\n</div>\n<div class=\"bg1\"></div>\n<div class=\"bg2\"></div>\n</div>\n";
  });

this["templates"]["static_header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n<div class=\"col-sm-4\">\n<h1>Philippe Gauthier</h1><br>\n<h2>Art Director</h2>\n</div>\n<div class=\"col-sm-4 links\">\n<a href=\"https://www.behance.net/philgauthier\" class=\"visible-xs\">Work</a>\n<a href=\"/about\">About</a>\n</div>\n<div class=\"col-sm-4 mailto\">\n<a href=\"mailto:phil@philippegauthier.net\">Hello!</a>\n</div>\n</div>\n";
  });