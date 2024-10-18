const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteTagSchema = new Schema(
    {
        type: {
            type: String,
        },

        historicalPeriod: {
            type: String,
        }
    }
);


const SiteTag = mongoose.model('SiteTag', siteTagSchema)
module.exports =  {SiteTag, siteTagSchema};