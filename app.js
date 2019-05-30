const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/resources'));


app.get('/', function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, '/views')});
});


app.listen(3000, function(){
	console.log("listening to port 3000");
})