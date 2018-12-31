const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
    catagory: {
        type: String,
        required: true,
    },
    spaceName: {
        type:String
    },
    image: {
        type: String
    },
    capacity: {
        type:Number
    },
    booked: {
        type:Boolean
    },
    price: {
        hourly: {
            type: Number
        },
        daily: {
            type: Number
        },
        monthly: {
            type: Number
        }
    }
})

module.exports = mongoose.model('Space', workspaceSchema)