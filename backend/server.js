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
app.get('/getuser', (req, res) => {
  UserModel.find()
    .then(user => {
      console.log("Users:", user);
      if (user.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }
      res.json(user);
    })
    .catch(err => {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Default 404 route
app.use((req, res) => res.status(404).send('Not found'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
