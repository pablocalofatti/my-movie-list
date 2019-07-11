const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vidSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('vids', vidSchema);