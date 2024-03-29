require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const Joi = require('joi');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const { UserModel, LoginModel, addLogin, SignupModel, addSignup,createUser } = require('./model/user'); // Import UserModel and loginSchema
const { ListModel, ListSchema, addList} = require('./model/List')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
const secretKey = process.env.JWT_SECRET
mongoose.connect("mongodb+srv://Rajkumar:Rajkumar%402005@atlascluster.qafd72h.mongodb.net/From_Laughter_to_Tears");

app.use('/', routes);

app.get('/', (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res)=>{
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
      username: req.body.username,
      email: req.body.email,
      favorite_anime_list: req.body.favorite_anime_list,
      watchlist: req.body.watchlist
  }, { new: true })
  .then(updatedUser => res.json(updatedUser))
  .catch(err => res.status(500).json(err));
});

app.delete('/deleteUser/:id',  (req,res) =>{
  const id= req.params.id;
  UserModel.findByIdAndDelete({ _id : id })
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

app.post("/createUser", async (req, res) => {
  try {
    const { username, email, favorite_anime_list, watchlist } = req.body;

    // Validate request body using Joi
    const { error } = createUser.validate({  username, email, favorite_anime_list, watchlist});
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if the username already exists
    const userCheck = await UserModel.findOne({ username });
    if (userCheck) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Create a new user
    const newUser = new UserModel({
      username,
      email,
      favorite_anime_list,
      watchlist,
    });
    await newUser.save();

    res.json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
});

app.get('/api/users', async (req,res)=>{
    SignupModel.find()
    .then(item => res.json(item))
    .catch(err=>res.json(err))
})

app.get('/api/lists', async (req,res)=>{
  ListModel.find()
  .then(item => res.json(item))
  .catch(err=>res.json(err))
})

app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate request body using Joi
    const { error } = addSignup.validate({ username, email, password });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if the username already exists
    const signcheck = await SignupModel.findOne({ username });
    if (signcheck) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Create a new user
    const List = new SignupModel({
      username,
      email,
      password,
    });
    await List.save();

    res.json({
      success: true,
      message: "User created successfully",
      user: List,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
});

app.post("/api/addlist", async (req, res) => {
  try {
    const { Watchlist, Favouriteanime,createdby} = req.body;

    // Validate request body using Joi
    const { error } = addList.validate({ Watchlist, Favouriteanime , createdby});
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Create a new user
    const List = new ListModel({
      Watchlist,
      Favouriteanime,
      createdby
    });
    await List.save();

    res.json({
      success: true,
      message: "User created successfully",
      user: List,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error creating list:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the List",
    });
  }

});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Validate request body
    const { error } = addLogin.validate({ username, password });
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    // Find user by username in signup database
    const user = await SignupModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }  
    const token = jwt.sign({ username: user.username }, secretKey)
    // Set cookie with token
    res.cookie("token", token, { httpOnly: true });


    // Set cookie and respond
    res.cookie("username", username);
    res.json({ success: true, message: "Login successful", username,token });
    console.log("login success", username);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
