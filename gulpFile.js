const gulp = require('gulp');
const sass = require('gulp-sass');
const options = require('./gulp.config');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(options.path)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(options.output));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(options.output, ['sass']);
});