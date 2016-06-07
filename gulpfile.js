var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['./assets/scss/**/*.scss', './app/views/**/*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});


gulp.task('libs', function () {
    gulp.src(['./assets/bower/jquery/dist/jquery.min.js',
              './assets/bower/bootstrap/dist/js/bootstrap.min.js'
              ])
      .pipe(concat('libs.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js'))
});


gulp.task('app', function () {
    gulp.src(['./assets/js/**/*.js'
    ])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./js/'))
});



gulp.task('watch', function () {
    gulp.watch('./assets/js/**/*', ['app']);
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
   
});

gulp.task('default', ['libs', 'watch']);

