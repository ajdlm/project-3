const mongoose = require("mongoose");
const Work = require("../models/Work.js");
const imageSeed = require("./dummyWork.json");

// If deployed, use deployed database;
// otherwise, use local googleBooks database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/galleryDB";

// Connect Mongo database to Mongoose
mongoose.connect(MONGODB_URI);

// Empty the Work collection and re-insert the dummy data
Work.remove({})
  .then(() => Work.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
