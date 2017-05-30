var uiroute = angular
       .module('uiroute', ['ui.router', 'ngIdle', 'ui.bootstrap'])
        .config(['KeepaliveProvider', 'IdleProvider', function (KeepaliveProvider, IdleProvider) {
            IdleProvider.idle(2);
            IdleProvider.timeout(5);
            KeepaliveProvider.interval(10);
        }])
        .run(['Idle', function(Idle) {
            Idle.watch();
}]);