const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './public/views');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', {
		title: 'This is App',
	});
});

app.get('/auth/google', function(req, res) {
	res.render('logged', {
		title: 'Welcome in App',
	});
});

app.listen(9000);
app.use(function(req, res, next) {
	res.status(404).send('Invalid URL');
});
