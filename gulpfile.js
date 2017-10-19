var gulp = require('gulp')
var concat = require('gulp-concat');
var imageop = require('gulp-image-optimization');


gulp.task('scripts', function() {
  return gulp.src(['./_js/jquery.min.js', './_js/materialize.min.js', './_js/bessa-carousel.js' , './_js/init.js','./_js/bessa.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('images', function(cb) {
    gulp.src(["_img/avancement/**/*.png","_img/avancement/**/*.jpg","_img/avancement/**/*.gif","_img/avancement/**/*.jpeg"]).pipe(imageop({
        optimizationLevel: 8,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest("img/avancement")).on("end", cb).on("error", cb);
});
