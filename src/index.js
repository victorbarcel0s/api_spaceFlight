const express = require('express')
const getAll = require('./controllers/getArticles')
const getById = require('./controllers/getArticleById')
const deleteById = require('./controllers/deleteArticleById')


const postArticles = require('./controllers/postArticles')
const app = express()
const port = 5000
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/get/articles', getAll)
app.get('/get/articles/:id', getById)
app.delete('/delete/articles/:id', deleteById)
app.post('/post/articles', postArticles)

app.listen(port, () => console.log(`App listening on port ${port}!`))