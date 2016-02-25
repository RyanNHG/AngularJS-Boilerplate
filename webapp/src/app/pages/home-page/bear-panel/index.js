require('angular').module(module.exports = 'BearPanelComponent', [])

    .component('bearPanel', {
        templateUrl: 'app/pages/home-page/bear-panel/bear-panel.tpl.html',
        controller: require('./bear-panel.ctrl.js'),
        bindings: {
            bear: '<'
        }
    })

;