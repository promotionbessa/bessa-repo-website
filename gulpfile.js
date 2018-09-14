var gulp = require('gulp')
var concat = require('gulp-concat');
gulp.task('scripts', function() {
  return gulp.src(['./_js/jquery.min.js', './_js/materialize.min.js', './_js/bessa-carousel.js' , './_js/init.js','./_js/bessa.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
gulp.task('default', ['scripts']);

gulp.task('landing', function() {
  return gulp.src(['./_js/landing.js'])
    .pipe(concat('landing.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('landingfusion', function() {
  return gulp.src(['./_js/landing/jquery.min.js',"./_js/landing/jquery.scrolly.min.js","./_js/landing/jquery.dropotron.min.js","./_js/landing/jquery.scrollex.min.js","./_js/landing/browser.min.js","./_js/landing/breakpoints.min.js","./_js/landing/util.js","./_js/landing/main.js"])
    .pipe(concat('landingfusion.js'))
    .pipe(gulp.dest('./js/'));
});
gulp.task('default', ['scripts']);
