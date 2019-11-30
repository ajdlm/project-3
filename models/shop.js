const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    department: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});
const shop = mongoose.model("shop", shopSchema);

module.exports = shop;