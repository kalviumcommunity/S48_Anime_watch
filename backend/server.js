const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/user');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Rajkumar:Rajkumar%402005@atlascluster.qafd72h.mongodb.net/From_Laughter_to_Tears");

// Routes
app.use('/', routes);

// Additional route
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

// app.put('/updateUser/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndUpdate(id, {
//       username: req.body.username,
//       email: req.body.email,
//       favorite_anime_list: req.body.favorite_anime_list,
//       watchlist: req.body.watchlist
//   }, { new: true })
//   .then(updatedUser => res.json(updatedUser))
//   .catch(err => res.status(500).json(err));
// });

// app.delete('/deleteUser/:id',  (req,res) =>{
//   const id= req.params.id;
//   UserModel.findByIdAndDelete({ _id : id })
//   .then(res => res.json(res))
//   .catch(err => res.json(err))
// })

app.post("/createUser",(req, res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Default 404 route
app.use((req, res) => res.status(404).send('Not found'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
