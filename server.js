require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const transactionRoutes = require("./controllers/transactionRoutes.js");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

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

// Require and use the database routes
const dbRoutes = require("./controllers/dbRoutes.js");

app.use(session({
  secret: 'anystringoftext',
  cookie: {},
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(dbRoutes);

// Require and use the route for sending emails
// from the Contact page
const messageRoute = require("./controllers/messageRoute.js");
app.use(messageRoute);

// Use the following get/post routes for completed transactions
app.get("/api/transactions", transactionRoutes.getTransactions);
app.post("/api/transactions", transactionRoutes.postTransaction);

// Send every request to the React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
