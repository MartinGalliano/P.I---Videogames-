// RENDERIZO LA RUTA GENRES
require('dotenv').config();
const {Router} = require('express');
const axios = require('axios');
const {API_KEY} = process.env;
const {Genre} = require('../db');

const router = Router();

// Obtengo los genres desde la API y los guardo en la DB
//localhost:3001/genres
//-------GET a /genres-------//
router.get('/', async function(req, res) {

    try {
        const genresAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        genresAPI.data.results.forEach(p => {
            Genre.findOrCreate(
                {where: 
                    {name: p.name}
                }
            )
        })
        const genresDB = await Genre.findAll()
        res.json(genresDB)
    } catch (error) {
        res.status(404).json({ error: "Genre not found" })
    }
})
 
module.exports = router;