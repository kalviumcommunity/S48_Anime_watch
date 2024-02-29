//user.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    // password: String,
    favorite_anime_list: Array,
    watchlist: Array
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
