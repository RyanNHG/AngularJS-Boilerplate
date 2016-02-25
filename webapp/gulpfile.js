var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

var paths = {
    html: './src/**/*.html',
    js: './src/app/**/*.js',
    sass: './src/sass/*.scss'
};

gulp.task('browserify', function() {

    return browserify('./src/app/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/static'));

});

gulp.task('copyHTML', function() {

    gulp.src(paths.html)
        .pipe(gulp.dest('dist'))

});

gulp.task('sass', function () {
  gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/static'));
});

gulp.task('watch', function() {

    gulp.watch(paths.html, ['copyHTML']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['browserify']);

});

gulp.task('default', ['watch', 'browserify', 'sass', 'copyHTML']);
