var angular = require('angular');

angular.module('app', [
    require('./navbar'),
    require('angular-route'),
    require('./bear-data-service')
])
    .config(require('./app.router'))
;