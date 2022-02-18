const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://0.tcp.ngrok.io:11779')
const artCollection = client.db("Desafio").collection("artigos")

module.exports = {
    artCollection, client
}