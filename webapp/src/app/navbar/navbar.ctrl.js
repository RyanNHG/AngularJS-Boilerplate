module.exports = ['$scope', '$location', 'BearDataService',
function($scope, $location, BearDataService){

    var self = this;

    this.enableColorChange = true;

    this.navLinks = {
        left: [
            {
                label: 'Bears',
                path: '/',
                isBrand: true
            },
            {
                label: 'Dashboard',
                path: '/dashboard',
                icon: 'dashboard'
            },
            {
                label: 'Settings',
                path: '/settings',
                icon: 'settings'
            }
        ],
        right: [
            {
                label: 'Profile',
                path: '/profile',
                icon: 'face'
            }
        ]
    };

    this.path = $location.path();

    // Update active link on route change
    $scope.$on('$routeChangeSuccess', function(){
        self.path = $location.path();
        self.getNavColor();
    });

    //  Go to another page
    this.go = function(path) {
        $location.path(path);
    };

    //  Do cool stuff with the nav color
    this.getNavColor = function() {
        var path = this.path;

        if(this.enableColorChange)
            this.navColor = (path == '/profile') ? 'red' :
                (path == '/dashboard') ? 'green' :
                (path == '/settings') ? 'purple': 
                (path == '/') ? 'blue' : 'gray';
        else this.navColor = 'blue';
    };

    this.getNavColor();

}];