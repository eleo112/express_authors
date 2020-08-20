const express = require('express');
const port = 3000;
const app = express();

const name = ["Lawrence Nowell, UK", "William Shakespeare, UK", "Charles Dickens, US", "Oscar Wilde, UK"];
const books = ["Beowulf"];
//       "Hamlet", "Othello", "Romeo and Juliet", "Macbeth",
//       "Oliver Twist", "A Christmas Carol",
//       "The Picture of Dorian Gray", "The Importance of Being Earnest"

app.get('/', (req, res) => {
    res.send('<h1>Authors API</h1>');
});


app.get('/authors/:name', (req, res) => {
    console.log('GET /authors/:name');
    res.send(`${name[req.params.name -1]}`);
});

// app.get('/authors/:name', (req, res) => {
//     res.send(`${name[1]}`);
// });
// app.get('/authors/:name', (req, res) => {
//     res.send(`${req.params.name[2]}`);
// });

app.get('/authors/:books/books', (req, res) => {
    console.log('GET /authors/:books/books');
    res.send(`${books[req.params.books -1]}`);
});

app.get('*', (req, res) => {
    res.send('Page not found <a href="/">Homepage Authors API</a>');
});


app.listen(port, () => {
    console.log(`Server running: ${port}`);
});