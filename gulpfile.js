const gulp = require('gulp')
const stylus = require('gulp-stylus')

gulp.task('default', function () {
    gulp.src(['lib/assets/style/index.styl'])
        .pipe(stylus({
          compress: true
        }))
        .pipe(gulp.dest('build'))
})