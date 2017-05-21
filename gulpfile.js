var gulp = require('gulp');
var inject = require('gulp-inject');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var css = require('gulp-css');

 
gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false},{relative: true});
 
  return 
  	target
  		.pipe(inject(sources))
    	.pipe(gulp.dest('./app'));
});

gulp.task('sass', function(){
    return gulp
        .src('app/schedulingTools/layout/assets/style/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/schedulingTools/layout/assets/style/css'))
})

gulp.task('watch', function () {
    gulp.watch('app/schedulingTools/layout/assets/style/scss/style.scss', ['sass']);
})

