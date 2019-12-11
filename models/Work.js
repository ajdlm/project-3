const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  name: {
    type: String,
    unique: true
  },

  series: {
    type: String
  },

  imageUrls: [
    {
      type: String/*,
      unique: true*/
    }
  ],

  price: {
    type: Number
  },

  description: {
    type: String,
  }
});

const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
