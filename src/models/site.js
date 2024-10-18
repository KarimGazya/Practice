const mongoose = require("mongoose");
const {siteTagSchema} = require("siteTag");

const Schema = mongoose.Schema;

const sitePricesSchema = new Schema(
    {
        foreignerPrice: Number,
        nativePrice: Number,
        studentPrice: Number
    }
);

const siteSchema = new Schema(
    {
        description: {
            type: String
        },

        pictures: {
            type: [String]
        },

        location: {
            type: String
        },

        price: {
            // prices vary if foreigner, native or student
            type: sitePricesSchema
        },

        openingHours: {
            type: Date
        },

        tags: {
            type: siteTagSchema
        }
    }
);

module.exports = mongoose.model('Site', siteSchema);