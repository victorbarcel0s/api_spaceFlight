const mongoose = require('mongoose')
const { Schema } = mongoose;



const ArtigoSchema = new Schema({
    id: { type: Number, },
    _id: { type: Number, },
    featured: { type: Boolean, },
    url: { type: String, },
    imageUrl: { type: String, },
    newsSite: { type: String, },
    summary: { type: String, },
    publishedAt: { type: String, },
    launches: { type: Array, },
    events: { type: Array, },




})
const Artigo = mongoose.model('Artigo', ArtigoSchema)
module.exports = { Artigo }