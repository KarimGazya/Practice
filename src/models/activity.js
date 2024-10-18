const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialDiscountSchema = new Schema(
    {
        name: String,
        description: String,
        percentageDiscount: Number
    }
);

const activitySchema = new Schema(
    {
        dateTime: {
            type: Date
        },

        location: {
            type: String
        },

        price: {
            // How to implement price range?
            type: Number
        },

        specialDiscounts:  {
            type: [specialDiscountSchema]
        },

        isBookingOpen: {
            type: Boolean
        },

        category: {
            type: String
        },

        tags: {
            type: [String]
        }
    }
);

module.exports = mongoose.model('Activity', activitySchema);