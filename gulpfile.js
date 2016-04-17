var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');//文件更名
var version='2.0.0';

gulp.task('build', function () {
    return gulp.src('./js/jquery-confirm.js')
        .pipe(rename({ suffix: ''+'.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['build']);