const db = require('../../db')

async function getAll(req, res) {

    try {
        await db.client.connect()
        const response = await db.artCollection.find().toArray()
        res.json(response)
    } catch (error) {

        res.json(error.message)
    }
}
module.exports = getAll