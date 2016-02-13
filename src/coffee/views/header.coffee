class app.views.Header extends Backbone.View

	el: $('#main__header')
	template:'static_header'
	events:
		"click a": "setActive"

	initialize: ->
		@render()

	render: ->

		@$el.html app.template.render @template

	setActive: (e) ->

		@$el.find('a').removeClass "active"
		$(e.currentTarget).addClass "active"
