class app.views.Home extends Backbone.View

	el: $('#main__content')

	template: 'home'
	currentPos: 0



	nbPhoto: 6 # the number of picture you have in the folder /img/bg/
	time: 1000*0.25 # the speed of the animation. 1000 = 1 sec * the actual speed you want


	initialize: ->
		

	bindEvents: ->
		self = @
		$('.btn--work').on 'mouseenter', (e) ->
			self.randomizeBG()
			self.createInterval()

		$('.btn--work').on 'mouseleave', (e) ->
			self.killInterval()
	
	render: ->
		@$el.html app.template.render @template

		@bindEvents()


	randomizeBG: (e = 1) ->
		console.log "RDM BG"
		if e is 1
			path1 = '/img/bg/'+@getBgFile()+'.jpg'
			$('.bg1').css 'background-image', 'url('+path1+')'
		else
			path2 = '/img/bg/'+@getBgFile()+'.jpg'
			$('.bg2').css 'background-image', 'url('+path2+')'

	showBg: ->
		if $('.bg1').attr('style').indexOf('display: none') is 0
			console.log 'SHOW 1'
			$('.bg1').show()
			$('.bg2').hide()
			@randomizeBG(2)
		else
			console.log 'SHOW 2'
			$('.bg2').show()
			$('.bg1').hide()
			@randomizeBG(1)

	getBgFile: ->
		# Math.floor((Math.random()*@nbPhoto)+1)
		if @currentPos is @nbPhoto
			@currentPos = 0

		@currentPos = @currentPos + 1

		return @currentPos


	createInterval: ->
		console.log "Create Interval"

		# $('.page--work').addClass 'animated'
		# @interval = setInterval =>
		# 	@randomizeBG()
		# ,@time
		@randomizeBG(1)
		@randomizeBG(2)
		@interval1 = setInterval =>
			@showBg()
		,@time

	killInterval: ->
		console.log 'Kill IT!!!'
		# $('.page--work').removeClass 'animated'
		clearInterval(@interval)
		clearInterval(@interval1)
		$('.bg1,.bg2').removeAttr 'style'