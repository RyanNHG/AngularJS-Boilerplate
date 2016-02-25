var angular = require('angular');

angular.module('app', [
    require('./navbar'),
    require('./pages'),
    require('angular-route'),
    require('./bear-data-service')
])
    .config(require('./app.router'))
;