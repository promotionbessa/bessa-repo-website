var gulp = require('gulp')
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');


gulp.task('scripts', function() {
  return gulp.src(['./_js/jquery.min.js', './_js/materialize.min.js', './_js/bessa-carousel.js' , './_js/init.js','./_js/bessa.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
