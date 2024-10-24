const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: True
        }
    }
);

module.exports = mongoose.model('Category', categorySchema);