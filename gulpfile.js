var gulp = require('gulp');
var watch = require('gulp-watch');

var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssVars = require('postcss-simple-vars');

gulp.task('watch', function() {
    watch(["style.css", "themes/**/*.css", "game/**/*.css"], function() {
        gulp.start('styles');
    });
});

gulp.task('styles', function() {
    return gulp.src("style.css")
                .pipe(postcss([postcssImport, postcssNested, postcssVars]))
                .pipe(gulp.dest("build/"));
});