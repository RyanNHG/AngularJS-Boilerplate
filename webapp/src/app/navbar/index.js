require('angular').module(module.exports = 'NavbarComponent', ['BearDataService'])

    .component('navbar', {
        templateUrl: 'app/navbar/navbar.tpl.html',
        controller: require('./navbar.ctrl')
    })
    
;