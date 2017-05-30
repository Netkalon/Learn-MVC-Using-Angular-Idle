uiroute.controller('CarController', function ($scope, $scope, Idle, Keepalive, $uibModal) {

    $scope.CarList = ['Audi', 'BMW', 'Bugatti', 'Jaguar'];

    function closeModals() {
        if ($scope.warning) {
            $scope.warning.close();
            $scope.warning = null;
        }

        if ($scope.timedout) {
            $scope.timedout.close();
            $scope.timedout = null;
        }
    }


    $scope.$on('IdleStart', function () {
        closeModals();

debugger
        $scope.warning = $uibModal.open({
            templateUrl: 'warning-dialog.html',
            windowClass: 'modal-danger'
        });
    });

    $scope.$on('IdleEnd', function () {
        closeModals();
    });

    $scope.$on('IdleTimeout', function () {
        closeModals();
        $scope.timedout = $uibModal.open({
            templateUrl: 'timedout-dialog.html',
            windowClass: 'modal-danger'
        });

    });
});

