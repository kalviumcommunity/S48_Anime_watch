const mongoose = require("mongoose");
const Joi = require("joi");

const ListSchema = new mongoose.Schema({
    Watchlist: String,
    Favouriteanime: String,
    createdby: String
  });



const addList = Joi.object({
    Watchlist: Joi.string().required(),
    Favouriteanime: Joi.string().required(),
    createdby:Joi.string().required()
  });

const ListModel = mongoose.model("Watchlist", ListSchema);

module.exports = {
    ListModel,
    ListSchema,
    addList
};