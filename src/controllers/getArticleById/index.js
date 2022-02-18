const db = require('../../db')

async function getById(req, res) {
    const id = req.params.id
    try {
        await db.client.connect()
        const response = await db.artCollection.findOne({ "id": parseInt(id) })
        res.json(response)
    } catch (error) {

        res.json(error.message)
    }
}
module.exports = getById