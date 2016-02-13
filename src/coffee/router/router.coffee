class app.routers.Router extends Backbone.Router
	titleSuffix: 'Wise'
 
	routes:

		'':'work'
		'about': 'about'

	load: (page) ->
		page.render()


	work: ->
		@load new app.views.Home


	about: ->
		@load new app.views.About



$ ->

	# The router's navigate function is called on every 'a' tag click that has a non absolute href
	$(document).on "click","a", (e) ->
		href = $(this).attr "href"
		if href? && href.substring(0,3) != 'tel' && href.substring(0,4) != 'http' && href.substring(0,6) != 'mailto' && href.substring(0,6) != 'intent' && href.substring(0,11) != 'frankandoak' && href.substring(0,7) != 'twitter'
			e.preventDefault()
			app.router.navigate href,
				trigger:true
