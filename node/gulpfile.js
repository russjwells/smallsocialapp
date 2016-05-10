var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

//require the other gulp files
var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
	require('./gulp/' + task)
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])

