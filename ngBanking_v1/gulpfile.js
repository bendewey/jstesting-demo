var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('karma').server;
var protractor = require('gulp-protractor').protractor;
var webdriver = require('gulp-protractor').webdriver_standalone;
var webdriver_update = require('gulp-protractor').webdriver_update;


gulp.task('webserver', function () {
    connect.server();
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
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