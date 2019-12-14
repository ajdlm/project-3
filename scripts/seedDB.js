const mongoose = require("mongoose");
const Work = require("../models/Work.js");
const array = require("./dummyWork.json");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/galleryDB";

// Connect Mongo database to Mongoose
mongoose.connect(MONGODB_URI);

// This file empties the Books collection and inserts the books below
const imageSeed = array;

Work.remove({})
  .then(() => db.Work.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
