module.exports = (grunt) ->
	# Project configuration.
	grunt.initConfig
		# pkg: grunt.file.readJSON('package.json')
		# uglify:
		# options: banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	  # 	build:
			# src: 'src/<%= pkg.name %>.js'
			# dest: 'build/<%= pkg.name %>.min.js'

		coffee:
			compile:
				options:
					join: true
					bare: true
				files:
					'js/app.js': ['src/coffee/app.coffee','src/coffee/core/**/*', 'src/coffee/router/**/*', 'src/coffee/views/**/*']
		less:
			development:
				options:
					paths: ["assets/css"]
				files:
					"css/master.css": "src/less/master.less"

		connect:
			server:
				options:
					port: 4000
					base: '.'
					open: true
					hostname: 'philgauthier.dev'
					livereload: true
					middleware: (connect, options) ->
						middlewares = []
						middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']))
						options.base.forEach( (base) ->
							middlewares.push(connect.static(base))
						)
						middlewares

		handlebars:
			compile:
				options:
					namespace: "templates",
					processContent: (content, filepath) ->
						content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
						content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
						content
					processName: (filePath) ->
						name = "";
						filePath = filePath.split(".");
						filePath = filePath[0].split("/");
						name += filePath[2];
						i = 3
						while i < filePath.length
							name += '_' + filePath[i]
							i++
						name
				files:
					"js/templates.js": ["src/templates/**/*.hbs"]

		watch:
			css:
				files: ['src/less/**/*']
				tasks: ['less']
				options:
					livereload: true
				
			scripts:
				files: ['src/coffee/**/*']
				tasks: ['coffee']
				options:
					livereload: true

			templates:
				files: ['src/templates/**/*']
				tasks: ['handlebars']
				options:
					livereload: true

		modRewrite = require('connect-modrewrite')

	# Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks 'grunt-contrib-less'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-handlebars'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-connect'
	# Default task(s).

	grunt.registerTask('default', ['coffee','less','handlebars','connect','watch'])
