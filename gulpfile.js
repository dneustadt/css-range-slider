var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default;

var sassConfig = {
    inputDirectory: 'src/*.scss',
    outputDirectory: 'dist',
    options: {
        outputStyle: 'expanded'
    }
};

var buildCss = function() {
    return gulp
        .src(sassConfig.inputDirectory)
        .pipe(sass(sassConfig.options).on('error', sass.logError))
        .pipe(gulp.dest(sassConfig.outputDirectory))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(gulp.dest(sassConfig.outputDirectory));
};

var jsFiles = [
        'src/range-slider-events.js'
    ],
    jsDest = 'dist';

var buildScripts = function() {
    return gulp
        .src(jsFiles)
        .pipe(concat('range-slider-events.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('range-slider-events.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
};

gulp.task('default', gulp.series(gulp.parallel(buildCss, buildScripts)));

gulp.task('watch', function() {
    gulp.watch('css/src/*.scss', gulp.series(gulp.parallel(buildCss, buildScripts)));
});