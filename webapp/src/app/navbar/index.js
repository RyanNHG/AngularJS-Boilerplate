require('angular').module(module.exports = 'navbar', ['BearDataService'])

    .component('navbar', {
        templateUrl: 'app/navbar/navbar.tpl.html',
        controller: require('./navbar.ctrl')
    })
    
;