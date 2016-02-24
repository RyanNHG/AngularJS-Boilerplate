module.exports = function(router) {
    
    var mongoose = require('mongoose');

    //  Connect to mongo test database
    var url = 'mongodb://localhost:27017/test';
    mongoose.connect(url);

    router.get('/', function(req,res) {
        res.json({ message: 'hooray! welcome to the api!' });   
    });
    
    require('./bears/api')(router);
};