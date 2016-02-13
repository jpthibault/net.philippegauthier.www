#*******************************************************
# 				Global variables
#*******************************************************
app = window.app
$ = window.jQuery
_ = window._
Backbone = window.Backbone
Handlebars = window.Handlebars


# Giving event capabilities to the app
_.extend app, Backbone.Events

$ ->
	app.initViews()
	app.initRouting()

window.app =
	collections:{}
	models:{}
	views:{}
	routers:{}

	initViews: ->
		console.log "Phil App Init()"
		app.header_view = new app.views.Header()
		# app.footer_view = new app.views.Footer()

	initRouting: ->
		console.log 'init routing'
		app.router = new app.routers.Router()
		Backbone.history.start
			pushState: true





#	app.initViews()
#	app.initRouting()