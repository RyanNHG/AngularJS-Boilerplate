module.exports = function(router) {  

    var Bear = require('./bear');

    //  Bears API
    router.route('/bears')

        //  Gets all bears
        .get(function(req, res) {
            Bear.find(function(err, bears) {

                if(err) res.send(err);

                res.json(bears);

            });
        })

        //  Create a bear with the specified name
        .post(function(req,res) {

            var bear = new Bear();
            bear.name = req.body.name;

            if(req.body.name == null)
            {
                res.json({ message: 'Bear name not provided!' }); 
            }
            else
            {
                bear.save(function(err) {
                    
                    if(err) 
                        res.send(err);

                    res.json({ message: bear.name + ' created!' });       
                });
            }
            
        })

    ;

    router.route('/bears/:bear_id')

        //  Get a bear by ID
        .get(function(req,res){

            Bear.findById(req.params.bear_id, function(err, bear) {

                if(err) res.send(err);

                res.json(bear);

            });

        })

        //  Update a bear by ID
        .put(function(req, res) {

            if(req.body.name == null)
            {
                res.json({ message: 'Bear name not provided!' });
            }
            else
            {
                Bear.findById(req.params.bear_id, function(err, bear){

                    if(err) res.send(err);

                    bear.name = req.body.name;

                    bear.save(function(err) {
                        
                        if(err) 
                            res.send(err);

                        res.json({ message: bear.name + ' updated!' });       
                    });

                });
            }

        })

        .delete(function(req, res){

            Bear.remove(
                {
                    _id: req.params.bear_id
                },
                function(err, bear) {
                    
                    if(err)  
                        res.send(err);

                    res.json({message: 'Bear deleted!'});
                }
            )

        })

    ;

};