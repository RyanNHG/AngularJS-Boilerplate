var mongoose = require('mongoose');

module.exports = mongoose.model('Bear', new mongoose.Schema({
    name: String
}));