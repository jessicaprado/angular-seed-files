var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false},{relative: true});
 
  return 
  	target
  		.pipe(inject(sources))
    	.pipe(gulp.dest('./app'));
});