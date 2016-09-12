/* import gulp-module */
var gulp       = require('gulp'),
	webserver  = require('gulp-webserver'),
	config     = require('./config.json');

/* default [ clean, script, style, watch ] */
gulp.task('default',['server']);

/* server */
gulp.task('server',function(){
	gulp.src(config.path.dist) 
		.pipe(webserver(config.path.dist));
});
