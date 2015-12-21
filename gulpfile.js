var sass = require('gulp-sass');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build:scss', function () {
  return gulp.src('scss/**')
  .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browser: ['20%']
	}))
	.pipe(gulp.dest('css'));
});


gulp.task('watch', function () {
  gulp.watch('scss/**', ['build:scss']);
});
