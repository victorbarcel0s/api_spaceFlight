const db = require('../../db')
const models = require('../../models')

async function deleteArticle(req, res) {
    const id = req.params.id

    try {

        await db.client.connect()
        const verify = await db.artCollection.findOne({ '_id': parseInt(id) })
        if (verify == null) {

            res.status(404).json("Article not found")
        } else {
            await db.artCollection.deleteOne({ '_id': parseInt(id) })
            console.log("Deleted Succesfully")

            res.status(200).json("Deleted succesfully")
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
}
module.exports = deleteArticle