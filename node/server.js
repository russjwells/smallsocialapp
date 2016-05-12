var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

//app.get('/', function (req, res) {
//	res.sendfile('layouts/posts.html')
//})
app.use(require('./auth'))
app.use('/api/posts', require('./controllers/api/posts'))
app.use( require('./controllers/static'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

app.listen(3000, function () {
	console.log('Welcome to SSAPP Server listening on', 3000)
})