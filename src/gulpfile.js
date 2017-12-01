var gulp = require('gulp');
	sourcemaps = require('gulp-sourcemaps');
	accord = require('gulp-accord');


gulp.task('default', function() {
	gulp.src('./styles/test.styl')
	.pipe(sourcemaps.init())
	.pipe(accord('stylus', {pretty: true}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css'))
});
