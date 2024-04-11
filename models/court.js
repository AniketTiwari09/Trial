const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courtSchema = new Schema({
   // bookingId: {type: Schema.Types.ObjectId, ref: 'Booking'},
    //userId: {type: Schema.Types.ObjectId, ref: 'User'}
    name: {type: String, required: [true, 'Name is required']},
    status: {type: String, required: [true, 'Status is required'], enum: { values: ['Available', 'Unavailable'], message: '{VALUE} is not supported as Status. The accepted values are Available, Unavailable' }},
    image: {type: String, required: [true, 'Image is required']}
});

//collection name is courts in the database
module.exports = mongoose.model('Court',courtSchema);