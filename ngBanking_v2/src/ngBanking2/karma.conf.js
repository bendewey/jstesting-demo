module.exports = function(config){
	
	config.set({
		
		autoWatch: false,
		
		basePath: './',
		
		frameworks: ['jasmine'],
		
		preprocessors: {
		  'wwwroot/app/**/*.html': ['ng-html2js']
		},
		
		files: [
			'wwwroot/external/angular.js',
			'wwwroot/external/angular-route.js',
			'wwwroot/external/angular-mocks.js',
            'wwwroot/external/jquery.js',
            'wwwroot/external/js/bootstrap.js',
            'wwwroot/external/angular-ui.js',
            'wwwroot/external/ui-bootstrap-tpls.js',
			'wwwroot/app/**/*.html',
			'wwwroot/app/**/*.js'
		],
		
		ngHtml2JsPreprocessor: {
		    moduleName: 'ngBankingViews',
		    stripPrefix: 'wwwroot/'
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