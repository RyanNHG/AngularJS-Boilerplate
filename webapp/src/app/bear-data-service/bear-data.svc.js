module.exports = ['$http', function($http) {

    var _url = 'http://localhost:8080';

    var _getBears = function(){
        return $http.get(_url + '/api/bears');
    };

    var _getBearById = function(id){
        return $http.get(_url + '/api/bears/' + id);
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