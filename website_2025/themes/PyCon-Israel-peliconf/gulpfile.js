'use strict';

var gulp = require('gulp');
var log = require('fancy-log');
//var compass = require('gulp-compass');
var sassc = require('sass');
var do_sass = require('gulp-sass')(sassc);
var sourcemaps = require('gulp-sourcemaps');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify');

var paths = {
    'css': 'static/css/',
    'js': 'js/',
    'sass': 'sass/',
};

var patterns = {
    'sass': [
        paths.sass + '*.scss',
        paths.sass + '_*.scss',
        paths.sass + '**/*.scss'
    ],
    'js': [
        paths.js + '*.js',
        paths.js + '**/*.js',
        '!' + paths.js + '*.min.js',
        '!' + paths.js + '**/*.min.js'
    ],
    'css': [
        paths.css + 'screen.css'
    ],
};

gulp.task('jslint', function(done) {
    gulp.src(patterns.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    done();
});

gulp.task('jscompress', function(done) {
    gulp.src(patterns.js)
        .pipe(minify({
            noSource: true,
            mangle: true
        }))
        .pipe(gulp.dest('static/js/'))
    done();
});

gulp.task('scsslint', function(done) {
    gulp.src(patterns.sass)
        .pipe(scsslint({
            'config': './scss-lint.yml',
        }))
        .on('error', function(error) {
            log.error(error);
        });
    done();
});

gulp.task('do_sass', function(done) {
    gulp.src(patterns.sass)
	.pipe(sourcemaps.init())
        .pipe(
	    do_sass({
		style: 'compressed',
		/* Compass! comments: false, */
		/* Compass -> gulp-sourcemaps! sourcemap:true, */
		/* Compass! force: true, */
		/* Compass -> dest below! css: paths.css, */
		/* Compass! sass: paths.sass */
            }).on('error', do_sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(paths.css));
    done();
});

gulp.task('build', gulp.series(
    'jslint',
//    'scsslint',
    'jscompress',
    'do_sass',
));

gulp.task('default', gulp.series('build'));
