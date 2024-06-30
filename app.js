//setup an express app
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express(); //creatign an instance of express

//handlebars - opinionated - it has a specific way of doing things
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname,'./partials')))

//middleware - function that has access to the request (made by a client) and response object
//intermediary
const middleware = function (request, response, next) {
    console.log(request);

    next();
}

//app.use(middleware);

//localhost:5001
//url - endpoint
//route handler
app.get('/', function (request, response) {
    //logic/algorithm
    //response.send('Hello World!');
    response.render('index'); //views
});

//localhost:50001/contact
//route handler
app.get('/contact', function (request, response) {
    response.render('contact', {
        layout: 'contact',
        title: 'Hello this is the contact page',
        people: [
            {
                username: 'riel',
                email: 'riel@gmail.com',
                password: 'sadsad'
            },
            {
                username: 'riel',
                email: 'riel@gmail.com',
                password: 'sadsad'
            },
            {
                username: 'riel',
                email: 'riel@gmail.com',
                password: 'sadsad'
            }
        ]
    }); //views
});

//services endpoint
//processing - accept adn process request body - data submitted by the client
//save data or create data
//app.post('/', function (request, response) {
    //instruction
//});

//put - update a data - edit - id 
//app.put();

//about endpoint

//listens
app.listen(5001, function () {
    console.log('Server listening on PORT 5001');
});