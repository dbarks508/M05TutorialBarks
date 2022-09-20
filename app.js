const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', { root:__dirname });

    const blogs = [
        {title: 'Yoshi finds eggs', snippit: 'peanut butter jelly time'},
        {title: 'Dylan finds stars', snippit: 'peanut butter jelly time'},
        {title: 'How to defeat bowser', snippit: 'peanut butter jelly time'},
    ];

    res.render('index', { title: 'Home' , blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root:__dirname });
    res.render('about', { title: 'About' });
});

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create',(req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});