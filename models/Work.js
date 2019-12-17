const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  name: {
    type: String,
    unique: true
  },

  isPaint: {
    type: Boolean,
  },

  series: {
    type: String
  },

  imageUrls: {
    type: Array
  },

  price: {
    type: Number
  },

  description: {
    type: String
  }
});

const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
