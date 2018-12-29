var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');

gulp.task('webpack', function(){
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'webpack'
  ]))
  .pipe(browserSync.stream())
})
gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

gulp.task('browser-sync', function(){
  browserSync.init({
    proxy: {
      target: 'localhost:5000',
      ws: true
    },
    serverStatice: ['.', './public'],
    // server: './public',
    // notify: false,
    open: false
  })
})

gulp.task('sass:minify', function () {
  return gulp.src('./public/css/*.css')
  .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
});

gulp.task('default', ['sass', 'webpack', 'browser-sync'], function(){
  gulp.watch('./assets/scss/**/*', ['sass'])
  gulp.watch('./assets/js/**/*', ['webpack'])
})

gulp.task('production', ['sass:minify'])
