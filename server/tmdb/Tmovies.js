require("../db/mongoose");
const _ = require("lodash");
const fetch = require("node-fetch");
const moment = require("moment");

class Tmdb {
    constructor(url, token) {
        this.baseEndPoint = url + "/3/movie"; //not sure what the 3 signifies 
        this.bearerToken = token;
    }

    call(_id) {
        return fetch(this.baseEndPoint + "/" + _id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.bearerToken,
                "Content-type": "application/json",
                "Accept": "application/json",
                "Accept-Charset": "utf-8"
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if (data.error) {
                    throw data.error;
                }
                return data
            })
    }

    getMovieByID(_id) {
        return this.call(_id)
            .then(result => {
                return result
            })
    }
}

module.exports = Tmdb;
