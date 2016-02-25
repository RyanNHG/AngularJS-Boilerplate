module.exports = ['$scope', '$location', 
function($scope, $location){

    var self = this;

    this.navLinks = {
        left: [
            {
                label: 'Bears',
                path: '/',
                isBrand: true
            },
            {
                label: 'Dashboard',
                path: '/dashboard'
            },
            {
                label: 'Settings',
                path: '/settings'
            }
        ],
        right: [
            {
                label: 'Profile',
                path: '/profile',
            }
        ]
    };

    this.path = $location.path();

    // Update active link on route change
    $scope.$on('$routeChangeSuccess', function(){
        self.path = $location.path();
    });

    //  Go to another page
    this.go = function(path) {
        $location.path(path);
    }

}];