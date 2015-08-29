var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname+'/public'));

// send our index.html file to the user for the home page
app.get('*',function(req,res){
    console.log('opened');
    res.sendFile(path.join(__dirname + '/cat.jpg'));
});
// start the server
app.listen(1337);
console.log('1337 is the magic port!');
