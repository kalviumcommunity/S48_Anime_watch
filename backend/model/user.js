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
    password: {
        type: String,
        required: true
    },
    favorite_anime_list: Array,
    watchlist: Array
});

const UserModel = mongoose.model("users", userSchema);

const registrationSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    favorite_anime_list: Joi.array().items(Joi.string()),
    watchlist: Joi.array().items(Joi.string())
});

const SignSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  });

  const addSignup = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  
const SignupModel = mongoose.model("Signup", SignSchema);

const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  const addLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  
const LoginModel = mongoose.model("Login", LoginSchema);

module.exports = {
    UserModel,
    registrationSchema,
    SignupModel,
    addSignup,
    LoginModel,
    addLogin
};
