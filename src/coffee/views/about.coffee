class app.views.About extends Backbone.View

	template: 'about'
	el: $('#main__content')
	events:
		'click .btn--close': @closePage

		
	render: ->

		@$el.html app.template.render @template

	closePage: ->

		@el.children.first().addClass('page_animated--reverse')