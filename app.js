(function() {
    var app = angular.module('gemStore', []);


    app.controller('TabController', function() {
        this.tab = 1;

        this.setTab = function(tab) {
            this.tab = tab;
        };

        this.isSet = function(tab) {
            return (this.tab === tab);
        };
    });

    
})();
