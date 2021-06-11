const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){
    return res.render('home', {
        title: 'This is backend sent title'
    });
});

app.get('/practice', (req,res) => {
    return res.render('playground',{
        title: 'play title'
    });
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }

    console.log('Server is running at : http://localhost:' + port);
});