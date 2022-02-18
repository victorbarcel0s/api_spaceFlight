const db = require('../../db')
const models = require('../../models')

async function postArticles(req, res) {
    try {

        const artigo = new models.Artigo(req.body)
        artigo._id = artigo.id
        await db.client.connect()
        const verify = await db.artCollection.findOne({ '_id': artigo._id })
        if (verify == null) {
            await db.artCollection.insertOne(artigo)
            console.log("Created Succesfully")
            res.status(200).json("Created Succesfully")
        } else {
            await db.artCollection.updateOne({ '_id': artigo._id }, { $set: artigo })
            console.log("Updated Succesfully")

            res.status(200).json("Updated succesfully")
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}
module.exports = postArticles