module.exports = function(config){
	
	config.set({
		
		autoWatch: false,
		
		basePath: './',
		
		frameworks: ['jasmine'],
		
		preprocessors: {
		  'app/**/*.html': ['ng-html2js']
		},
		
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/flat-bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-ui/build/angular-ui.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'app/**/*.html',
			'app/**/*.js'
		],
		
		ngHtml2JsPreprocessor: {
		  moduleName: 'ngBankingViews'
		},
		
		port: 8082,
		
		browsers: [
			'Chrome'
			//'PhantomJS'
		],
		
		plugins: [
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-ng-html2js-preprocessor',
			'karma-jasmine'
		],
		
		singleRun: false,
		
		colors: true,
		
		logLevel: config.LOG_INFO
		
		
		
		
		
	});
	
	
	
	
	
};