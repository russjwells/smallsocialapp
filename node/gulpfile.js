var gulp = require('gulp')


//require the other gulp files
var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
	require('./gulp/' + task)
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])