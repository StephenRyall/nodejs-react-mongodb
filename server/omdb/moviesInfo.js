require("../db/mongoose");
const _ = require("lodash");
const fetch = require("node-fetch");
const moment = require("moment");

class OmdbInfo {
    constructor(url, apiKey) {
        this.baseEndPoint = url + "/?" + apiKey;
    }

    call(params) {
        return fetch(this.baseEndPoint + params, {
            method: "GET"
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                if (data.error) throw data.error;
                return data
            })
    }

    getAllOpenSourceMovies(title) {
        let combineKey = "&t=" + title.replace(/\s/g, '+');
        this.call(combineKey)
            .then(result => {
                return result
            })
    }
}

module.exports = OmdbInfo;
