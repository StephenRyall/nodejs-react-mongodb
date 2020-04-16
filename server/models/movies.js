const mongoose = require("mongoose");
const { Schema } = mongoose;
const MovieSchema = new Schema({
    _id: Number, // The movie id sent back when referenced
    adult: Boolean,  //Title of the film
    backdrop_path: String,
    belongs_to_collection: Object,
    budget: String,    //Description of the film - usually no longer that two sentences
    genres: [Object],   //Name of the director(s) 
    homepage: String,
    id: String,   //All the main actors
    imdb_id: String, //Amount of dollars made (profit) on the film
    original_language: String,   //The type of movie; action, thriller, horror
    original_title: String,
    overview: String,
    popularity: String,
    poster_path: String,
    production_companies: [Object],
    production_countries: [Object],
    release_date: String,
    revenue: Number,
    runtime: Number,
    spoken_languages: [Object],
    status: String,
    tagline: String,
    title: String,
    video: String,
    vote_average: Number,
    vote_count: Number
});

const Movies = mongoose.model("Movies", MovieSchema);

module.exports = { Movies };

