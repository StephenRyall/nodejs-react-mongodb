require("../db/mongoose");
const { Router } = require("express");
const _ = require("lodash");
const moment = require("moment");
const router = Router();
const { Movies } = require('../models/movies');
const OmdbInfo = require('../omdb/moviesInfo');
const Tmdb = require('../tmdb/Tmovies');

router.post("/addMovie", async (req, res) => {
    try {
        let response = req.body;
        const insertMovie = new Movies(response)
        await insertMovie.save();
        res.status(201).send({ message: 'the movie was created!' });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/all", async (req, res) => {
    try {

        let allMovies = await Movies.find({});
        res.status(201).send(allMovies);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/omdbSingle", async (req, res) => {
    try {
        const movieInfo = new OmdbInfo(process.env.OMDB_INFO, process.env.OMDB_API_KEY);
        let singleMovie = await movieInfo.getAllOpenSourceMovies("The Godfather");
        res.status(200).send(singleMovie);
    } catch (e) {
        console.log("e", e)
        res.status(400).send(e);
    }
});

router.get("/tmdbSingle", async (req, res) => {
    try {
        const movieInfo = new Tmdb(process.env.TMDB_URL, process.env.TMDB_API_TOKEN);
        let singleMovie = await movieInfo.getMovieByID(1);
        console.log("outer ==> ", singleMovie)
        res.status(200).send(singleMovie);
    } catch (e) {
        console.log("e", e)
        res.status(400).send(e);
    }
});

router.get("/getSingleMovie/:reqTitle", async (req, res) => {
    try {
        let { reqTitle } = req.params;
        const mongoMovie = await Movies.find({ "title": reqTitle });
        if (mongoMovie.length == 0) {
            res.status(400).send({ message: "Movie does not exist!" })
        }
        else {
            res.status(200).send(...mongoMovie);
        }
    } catch (error) {
        res.status(400).send(error)
    }
})















// router.get("/pumpIntoMongo", async (req, res) => {
//     try {
//         const movieInfo = new Tmdb(process.env.TMDB_URL, process.env.TMDB_API_TOKEN);
//         let pumpArray = [];
//         for (let i = 100000; i <= 200000; i++) {
//             let singleMovie = await movieInfo.getMovieByID(i);
//             if (singleMovie.status_code == 34) {
//                 continue
//             }
//             else {
//                 const insertMovie = new Movies({
//                     _id: i,
//                     adult: singleMovie.adult,
//                     backdrop_path: singleMovie.backdrop_path,
//                     belongs_to_collection: singleMovie.belongs_to_collection,
//                     budget: singleMovie.budget,
//                     genres: singleMovie.genres,
//                     homepage: singleMovie.homepage,
//                     id: singleMovie.id,
//                     imdb_id: singleMovie.imdb_id,
//                     original_language: singleMovie.original_language,
//                     original_title: singleMovie.original_title,
//                     overview: singleMovie.overview,
//                     popularity: singleMovie.popularity,
//                     poster_path: singleMovie.poster_path,
//                     production_companies: singleMovie.production_companies,
//                     production_countries: singleMovie.production_countries,
//                     release_date: singleMovie.release_date,
//                     revenue: singleMovie.revenue,
//                     runtime: singleMovie.runtime,
//                     spoken_languages: singleMovie.spoken_languages,
//                     status: singleMovie.status,
//                     tagline: singleMovie.tagline,
//                     title: singleMovie.title,
//                     video: singleMovie.video,
//                     vote_average: singleMovie.vote_average,
//                     vote_count: singleMovie.vote_count,
//                 })
//                 await insertMovie.save();
//             }
//         }
//         res.status(200).send({ message: "operation was successfull ...... " });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

module.exports = router;