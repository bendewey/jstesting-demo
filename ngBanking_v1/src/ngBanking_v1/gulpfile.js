var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var protractor = require('gulp-protractor').protractor;
var webdriver = require('gulp-protractor').webdriver_standalone;
var webdriver_update = require('gulp-protractor').webdriver_update;


gulp.task('dependencies', function (done) {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/flat-bootstrap/dist/**/*',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-ui/build/*',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ])
   .pipe(gulp.dest('wwwroot/external/'));
});

gulp.task('webserver', function () {
    connect.server({
        root:'wwwroot'
    });
});

gulp.task('test', function (done) {
  karma.start({
      configFile: __dirname + '/karma.conf.js',
      browsers: ['PhantomJS'],
      singleRun: true
  }, done);
});


// Setting up the test task
gulp.task('webdriverUpdate', function () {
    webdriver_update();
});

// Setting up the test task
gulp.task('protractor', function () {
    gulp.src(['tests\**\*.ui-test.js']).pipe(protractor({
        configFile: 'tests/conf.js'
    }));
});