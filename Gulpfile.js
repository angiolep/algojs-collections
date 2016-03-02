'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jsdoc = require('gulp-jsdoc3');




gulp.task('lint', function() {
  gulp.src(['lib/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});




gulp.task('pre-test', function () {
  return gulp.src(['lib/*.js'])
      // Covering files
      .pipe(istanbul())
      // Force `require` to return covered files
      .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['test/*.js'])
      .pipe(mocha({
        ui: 'bdd',
        reporter: 'spec'
      }))
      // Creating the reports after tests ran
      .pipe(istanbul.writeReports())
      // Enforce a coverage of at least 90%
      .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});



gulp.task('doc', function (cb) {
  gulp.src(['README.md', './lib/**/*.js'], {read: false})
      .pipe(jsdoc(cb));
});


//gulp.task('default', ['lint', 'test']);
