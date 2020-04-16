var mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

const mongodb_uri = process.env.MONGODB_URI;
const password = mongodb_uri.split(":")[2].split("@")[0];
const encoded_mongodb_uri = mongodb_uri.replace(
    password,
    encodeURIComponent(password)
);
mongoose.connect(encoded_mongodb_uri);



const db = mongoose.connection;
db.on("error", () => console.log("connection error"));
db.once("open", function() {
    console.log("Connected to DB");
});
module.exports = { mongoose };