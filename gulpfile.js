var gulp = require('gulp');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var css = require('gulp-css');

gulp.task('sass', function(){
    return gulp
        .src('app/schedulingTools/layout/assets/style/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/schedulingTools/layout/assets/style/css'))
})

gulp.task('watch', function () {
    gulp.watch('app/schedulingTools/layout/assets/style/scss/style.scss', ['sass']);
})