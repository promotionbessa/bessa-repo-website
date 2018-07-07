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
gulp.task('default', ['scripts']);
