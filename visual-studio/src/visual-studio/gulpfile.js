var gulp=require('gulp');
var connect = require('gulp-connect');
var jshint=require('gulp-jshint');
var qunit=require('gulp-qunit');
 

gulp.task('dependencies', function (done) {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/flat-bootstrap/dist/**/*',
        'bower_components/qunit/qunit/*'
    ])
   .pipe(gulp.dest('wwwroot/external/'));
});

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('jshint', function() {
    return gulp.src('wwwroot/scripts/**/*.js')
        .pipe(jshint());
});

gulp.task('test', function() {
    return gulp.src('wwwroot/test-runner.html')
        .pipe(qunit());
});