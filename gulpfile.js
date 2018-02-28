var gulp = require('gulp')
var concat = require('gulp-concat');
var imageop = require('gulp-image-optimization');


gulp.task('scripts', function() {
  return gulp.src(['./_js/jquery.min.js', './_js/materialize.min.js', './_js/bessa-carousel.js' , './_js/init.js','./_js/bessa.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('imagesitri', function(cb) {
    gulp.src(['img/residence/itri/**/*.png','img/residence/itri/**/*.jpg','img/residence/itri/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./img/residence/itri')).on('end', cb).on('error', cb);
});

gulp.task('imagesgarden', function(cb) {
    gulp.src(['img/residence/garden/**/*.png','img/residence/garden/**/*.jpg','img/residence/garden/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./img/residence/garden')).on('end', cb).on('error', cb);
});
gulp.task('imageshomepage', function(cb) {
    gulp.src(['img/homepage/**/*.png','img/homepage/**/*.jpg','img/homepage/garden/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 10,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./img/homepage/')).on('end', cb).on('error', cb);
});
gulp.task('imagehero', function(cb) {
    gulp.src('img/Final.jpg').pipe(imageop({
        optimizationLevel: 10,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./img/')).on('end', cb).on('error', cb);
});
