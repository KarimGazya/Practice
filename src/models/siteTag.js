const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteTagSchema = new Schema(
    {
        type: {
            type: String,
            required: True
        },

        historicalPeriod: {
            type: String,
            required: True
        }
    }
);


const SiteTag = mongoose.model('SiteTag', siteTagSchema)
module.exports =  {SiteTag, siteTagSchema};