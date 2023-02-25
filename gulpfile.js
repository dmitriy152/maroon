const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');

gulp.task('less', function () {
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
  }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('less/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));

/*
const minify = require('gulp-minify');

gulp.task('compress', function() {
  gulp.src('index.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('docs'))
});
gulp.task('default', gulp.series('compress', 'watch'));
*/
/*
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('docs'))
});

gulp.task('watch', function() {
  gulp.watch('index.html', ['minify']);
});

gulp.task('default', gulp.series('minify', 'watch'));
*/