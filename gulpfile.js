/**
 * Created by Muralidharan on 12/10/2016.
 */
"use strict";

var gulp = require('gulp');

gulp.task('copy:libs', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ]).pipe(gulp.dest('lib/'))
});

gulp.task('copy:bootstrap', function(){
    return gulp.src([
        'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'node_modules/moment/min/moment.min.js'
    ]).pipe(gulp.dest('lib/ng2-bootstrap'))
});

gulp.task('copy:angular', function () {
    return gulp.src([
        'node_modules/@angular/**/*.js'
    ]).pipe(gulp.dest('lib/@angular'))
});

gulp.task('copy:angular-material', function () {
    return gulp.src([
        'node_modules/@angular/material/**/*.js',
        'node_modules/@angular/material/**/*.scss',
        'node_modules/@angular/material/**/*.css'
    ]).pipe(gulp.dest('@angular/material'))
});

gulp.task('copy:angular2inmemorywebapi', function () {
    return gulp.src([
        'node_modules/angular2-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest('lib/angular2-in-memory-web-api'))
});

gulp.task('copy:rxjs', function () {
    return gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest('lib/rxjs'))
});

gulp.task('copy:fontawesome', function () {
    return gulp.src([
        'node_modules/angular2-fontawesome/**/*.js'
    ]).pipe(gulp.dest('lib/angular2-fontawesome'))
});


gulp.task('default', ['copy:angular','copy:angular-material','copy:rxjs','copy:bootstrap', 'copy:fontawesome', 'copy:angular2inmemorywebapi','copy:libs']);