const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name: "Bhagesh Bhutani",
        phone: "1111111111"
    },
    {
        name: "Rohit",
        phone: "1234567890"
    },
    {
        name: "Atul",
        phone: "2222222222"
    }
];

app.get('/', function(req,res){
    return res.render('home', {
        title: 'This is backend sent title'
    });
});

app.get('/practice', (req,res) => {
    return res.render('practice',{
        title: 'Contact List',
        contact_list: contactList
    });
});

app.post('/create-contact', function(req,res){
    contactList.push(req.body);
    return res.redirect('back');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }

    console.log('Server is running at : http://localhost:' + port);
});