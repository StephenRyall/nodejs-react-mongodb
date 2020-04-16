"use strict";
require("./config/config");
require("./db/mongoose");
const express = require('express')
const app = express()
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require('compression');
const { MongoClient } = require('mongodb');
require('dotenv').config({path: '../.env'})
const jsonfile = require('jsonfile')
const port = process.env.PORT;
const host = process.env.API_HOST;
const store = path.join(__dirname, '/store.json')
const publicPath = path.join(__dirname, "..", "public");
const moviesLocations = require('./routes/moviesInfo');

app.use(cors());
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use('/movies', moviesLocations);

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log(`Running on port: ${port}`));