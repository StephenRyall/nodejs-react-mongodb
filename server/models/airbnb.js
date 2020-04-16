const mongoose = require("mongoose");
const { Schema } = mongoose;
const AirBnbSchema = new Schema({
   _id: String,
   listing_url: String,
   name: String,
   summary: String,
   space: String,
   description: String,
   neighborhood_overview: String,
   notes: String,
   transit: String,
   access: String,
   interaction: String,
   house_rules: String,
   property_type: String,
   room_type: String,
   bed_type: String,
   minimum_nights: String,
   maximum_nights: String,
   cancellation_policy: String,
   last_scraped: Date,
   calendar_last_scraped: Date,
   first_review: Date,
   last_review: Date,
   accommodates: Number,
   bedrooms: Number,
   beds: Number
});

const listingsAndReviews = mongoose.model("listingsAndReviews", AirBnbSchema);

module.exports = { listingsAndReviews };