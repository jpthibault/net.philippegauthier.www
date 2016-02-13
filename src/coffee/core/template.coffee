# m.frankandoak.com
# (c) Frank & Oak

# The Template Object aka The Barber

### 
	README:

	The customer object is always available in templates.
	Feel free to add more helpers.
###


app.template = 
	engines: []
	render: (template_id,object = {}) ->
		if not @engines[template_id]
			@engines[template_id] = templates[template_id]
		console.log object
		obj = $.extend object

		@engines[template_id] obj



	block: (template_id, jquery_container) ->
		content_html = @render template_id
		$container = $ jquery_container
		$container.html content_html
		true

	validateExistence: (template_id) ->
		if templates[template_id]?
			true
		else
			false



Handlebars.registerHelper 'round', (context) ->
	Math.round context
	
	
	
Handlebars.registerHelper 'lowercase', (context) ->
	if context?
		context.toLowerCase()


Handlebars.registerHelper 'minus_one', (context) ->
	parseInt(context)-1
	


Handlebars.registerHelper 'date', (context) ->
	date = new Date(context*1000)
	date.toDateString()



Handlebars.registerHelper 'first', (context, options) ->
	options.fn(context[0])
	


Handlebars.registerHelper 'matchBetweenThen', (first, second, content) ->
	content if first == second
	

	
Handlebars.registerHelper 'disabledUnlessOutOfStock', (context) ->
	"disabled" unless context != "outofstock"
	
	
Handlebars.registerHelper 'cashFormat', (context) ->
	if context?
		context = context.toFixed(2) + ""
		i = context.indexOf('.')
		context = context + "0" if i != -1 && context.substring(i).length == 2

	context


Handlebars.registerHelper 'encode', (context) ->
	encodeURIComponent context

Handlebars.registerHelper 'emailBody', (context) ->
	body = context.replace /<br \/>/ig, "\n"
	body = body.replace /\sHi/ig, "Hi"
	body = body.replace /&amp;/ig, "&"
	body = body.replace /\n\s{1,30}/ig, "\n"
	body = body.replace /\&nbsp;/ig, ""
	body = body.replace /(<([^>]+)>)/ig, ""

	encodeURIComponent body

Handlebars.registerHelper 'validateProduct', (id, name, options) ->
	if parseInt(name)
		return
	else if id is undefined
		return
	else
		options.fn(this)

	
Handlebars.registerHelper '__', (context) ->
	return app.lang[context]
