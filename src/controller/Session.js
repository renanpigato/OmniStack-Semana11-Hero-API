const crypto = require('crypto');
const conn   = require('../database/connection.js');

module.exports = {

    async create (req, res) {

        const id = req.body.id;
        const ongs = await conn('ongs')
            .where('id', id)
            .select("name")
            .first()
        ;

        if(!ongs) {
            return res.status(400).json({ error: "Not found ong" })
        }

        return res.json(ongs);
    },
};
