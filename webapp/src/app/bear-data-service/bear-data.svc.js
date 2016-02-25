module.exports = ['$http', function($http) {

    var _url = 'http://localhost:8080';

    var _getBears = function(){
        $http.get(_url + '/api/bears').then(
            function(res){
                console.log(res.data);
            },
            function(err) {
                console.log(err);
            }
        );
    };

    var _getBearById = function(id){
        $http.get(_url + '/api/bears/' + id).then(
            function(res){
                console.log(res.data);
            },
            function(err) {
                console.log(err);
            }
        );
    };

    var _createBear = function(name) {

        if(name == null) return;

        return $http.post(_url + '/api/bears', {name: name});
    };

    return {
        getBears: _getBears,
        getBearById: _getBearById,
        createBear: _createBear
    };

}];