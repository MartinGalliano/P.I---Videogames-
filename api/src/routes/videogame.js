require('dotenv').config();
const { Router } =require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
const { v4: uuidv4 } = require("uuid");

const router = Router();

router.get('/:id', async function (req, res) {
    const {id} = req.params;

    try { 
        if (id.includes("-")) {
            const gameDB = await Videogame.findOne(
                { where: 
                    {id},
                    include: [Genre]
                }
            )
            let X = gameDB
            const information = {
                id: X.id,
                name: X.name,
                image: X.image,
                rating: X.rating,
                description: X.description,
                released: X.released,
                platforms: X.platforms,
                genres: X.genres.map(p => p.name).join(', ')
            }
            return res.json(information)

        } else {
            const gameAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                    
            let X = gameAPI.data;
            const information = {
                name: X.name,
                image: X.background_image,
                rating: X.rating,
                genres: X.genres && X.genres.map((p) =>
                    p.name).filter(p => p != null).join(', '),
                description: X.description_raw,
                released: X.released,
                platforms: X.platforms && X.platforms.map((p) =>
                    p.platform.name).filter(p => p != null).join(', ')
            }
            return res.json(information)
        }

    } catch (err) {
        res.status(404).json({ error: "ID not found" })
    }
})

// //Recibe la data colectada desde el formulario por el body
// // Creo el videojuego en la db

router.post('/', async (req, res) => {
    console.log(req.body)
    const { name, description, image, released, rating, platforms, genres } = req.body;
  
    if (platforms) {
        var platformString = platforms.join(', ')
        console.log(platformString)
    }

   
  
    let gameCreated = await Videogame.create({
        id: uuidv4(),
        name,
        description,
        image, 
        released,
        rating,
        platforms: platformString
    })
    console.log(gameCreated)

    genres.forEach(async (G) => {
        let genresGame = await Genre.findOne({ where: { name: G } })
        //console.log(genresGame)
        await gameCreated.addGenre(genresGame)
    })
    res.send('Videogame created successfully!')

});


module.exports = router;