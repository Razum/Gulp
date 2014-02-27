var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util');;

gulp.task('build', function(){
    gulp.src('public/javascripts/App/*.js')
        .pipe(uglify({}))
        .pipe(concat('build.min.js'))
        .pipe(gulp.dest('public/javascripts/'))
});

gulp.task("watch", function () {
    watch({ glob: 'public/coffee/**/*.coffee'})
        .pipe(plumber())
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task("default", function () {});
