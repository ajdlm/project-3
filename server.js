const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const Work = require("./models/Work.js");
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use deployed database;
// otherwise, use local googleBooks database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/galleryDB";

// Connect Mongo database to Mongoose
mongoose.connect(MONGODB_URI);

// Require database routes
const dbRoutes = require("./controllers/dbRoutes.js");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
