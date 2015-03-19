module.exports = function(config){
	
	config.set({
		
		autoWatch: false,
		
		basePath: './',
		
		frameworks: ['jasmine'],
		
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/flat-bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-ui/build/angular-ui.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'app/**/*.js'
		],
		
		port: 8081,
		
		browsers: [
			'Chrome'
			//'PhantomJS'
		],
		
		plugins: [
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-jasmine'
		],
		
		singleRun: false,
		
		colors: true,
		
		logLevel: config.LOG_INFO
		
		
		
		
		
	});
	
	
	
	
	
};