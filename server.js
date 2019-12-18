const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const transactionRoutes = require("./controllers/transactionRoutes.js");
const session = require("express-session");
const mongoSessionStore = require('connect-mongo');
const MongoStore = mongoSessionStore(session);
const sess = {
  name: 'builderbook.sid',
  secret: sessionSecret,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60, // save session 14 days
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
  },
};
// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));

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
