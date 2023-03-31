
const gulp = require('gulp');
const less = require('gulp-less');
var path = require('path');
const sourcemaps=require('gulp-sourcemaps')
const concat=require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport-8-plugin');

import {folder} from "./index.js"
import {viewportBody} from "./index.js"

gulp.task('less', function () {
  var processors = [
    pxtoviewport({
        viewportWidth: viewportBody,
        viewportUnit: 'vw'
    })
];
  return gulp.src(`less/${folder}/*.less`)
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
  }))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});
  
gulp.task('watch', function () {
  gulp.watch('less/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));

