var gulp=require('gulp');
var connect = require('gulp-connect');
var jshint=require('gulp-jshint');
var qunit=require('gulp-qunit');
 
gulp.task('webserver', function() {
  connect.server();
});

gulp.task('jshint', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(jshint());
});

gulp.task('test', function() {
    return gulp.src('./test-runner.html')
        .pipe(qunit());
});