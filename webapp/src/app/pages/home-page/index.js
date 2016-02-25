require('angular').module(module.exports = 'HomePageComponent', [
    require('./bear-panel')
])
    
    .component('homePage', {
        templateUrl: 'app/pages/home-page/home-page.tpl.html',
        controller: require('./home-page.ctrl')
    })

;