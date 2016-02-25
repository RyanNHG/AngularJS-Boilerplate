module.exports = ['$scope', '$location', 'BearDataService',
function($scope, $location, BearDataService){

    var self = this;
    this.bears = [];

    this.getBears = function(){
        BearDataService.getBears().then(
            function(res){
                self.bears = (res.data);
            },
            function(err) {
                console.log(err);
            }
        );
    }

    this.getBears();

}];