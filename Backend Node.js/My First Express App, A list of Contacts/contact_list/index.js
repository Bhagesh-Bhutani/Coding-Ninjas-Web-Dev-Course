const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'assets')));

const db = require('./config/mongoose');
const Contact = require('./models/contact');

// my custom middlewares

// app.use(function(req,res,next){
//     console.log("Middleware 1");
//     // req.myName = "Bhagesh";
//     // return res.send('middleware 1 response');
//     next();
// });

// app.use(function(req,res,next){
//     console.log("Middleware 2");
//     console.log("From m2 name is", req.myName);
//     req.myName = "fefefeffffff";
//     req.nn = "nn";
//     next();
// });

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
    Contact.find({}, function(err, contacts){
        console.log(contacts);
        return res.render('practice', {
            title: 'Contacts App',
            contact_list: contacts
        });
    });
    // return res.render('practice',{
    //     title: 'Contact List',
    //     contact_list: contactList
    // });
});

app.get('/delete-contact', function(req,res){
    // let delete_index = contactList.findIndex(contact => contact.phone == req.query.phone);
    // if(delete_index != -1){
    //     contactList.splice(delete_index, 1);
    //     return res.redirect('back');
    // }
    // // Item not found
    // res.status(404).send('The requested contact to be deleted was not found.');
    Contact.findByIdAndDelete(req.query.id, function(err, contact){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    });
});

app.post('/create-contact', function(req,res){
    // contactList.push(req.body);
    // return res.redirect('back');
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log("Error ehile creating Document.");
            return;
        }

        console.log("*****" + newContact);
        return res.redirect('back');
    });
});

//after all endpoints, this middleware executes if next called
// app.use(function(req,res,next){
//     console.log("from end midddleware", req.myName, req.nn);
//     next();
// })

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }

    console.log('Server is running at : http://localhost:' + port);
});