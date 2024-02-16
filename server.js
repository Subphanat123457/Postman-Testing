const express = require('express')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(3000, () => {
    console.log('http://localhost:3000')
})

// Select * from books where id = 1?
app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
})

// Select * from books
const books = require('./db')
app.get('/books', (req, res) => {
    res.json(books)
})

// Insert into books (id,name) values ("3","Crazy horse")
app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})