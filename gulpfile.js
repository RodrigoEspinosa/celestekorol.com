'use strict';

var gulp = require('gulp'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		sourcemaps = require('gulp-sourcemaps');

var PATHS = {
	// sass: ['./scss/*.scss'],
	js: [
		'public/js/jquery.min.js',
		'public/js/jquery.poptrox.min.js',
		'public/js/jquery.scrolly.min.js',
		'public/js/jquery.scrollex.js',
		'public/js/skel.min.js',
		'public/js/n33_formerize.js',
		'public/js/init.js'
	]
	// html: ['./www/templates/*.html', './www/templates/**/*.html']
};

//
// var gulp = require('gulp'),
// 		jshint = require('gulp-jshint'),
// 		jshintReporter = require('jshint-stylish'),
// 		watch = require('gulp-watch');

gulp.task('js', function (done) {
	gulp.src(PATHS.js)
		// .pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(uglify({mangle: true}))
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/js'))
		.on('end', done);
});

// gulp.task('css', function (done) {
// 	gulp.src(PATHS.js)
// 		.pipe(sourcemaps.init())
// 		.pipe(concat('app.js'))
// 		.pipe(uglify({mangle: true}))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('./public/js'))
// 		.on('end', done);
// });
