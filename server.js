const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const transactionRoutes = require("./controllers/transactionRoutes.js");
const cookieParser = require('cookie-parser');
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

// Require database routes
const dbRoutes = require("./controllers/dbRoutes.js");

app.use(cookieParser())
app.use(session({
  secret: 'anystringoftext',
  HttpOnly: true,
  SameSite: true,
  resave: true,
  cookie: {secure: true},
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  autoRemove: 'native'
}));
app.use(dbRoutes);

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
