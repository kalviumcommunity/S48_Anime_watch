const mongoose = require("mongoose");
const Joi = require("joi");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favorite_anime_list: Array,
    watchlist: Array
});

const UserModel = mongoose.model("users", userSchema);
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        favorite_anime_list: Joi.array().items(Joi.string()),
        watchlist: Joi.array().items(Joi.string())
    });

module.exports = {
    UserModel,
    schema
};
