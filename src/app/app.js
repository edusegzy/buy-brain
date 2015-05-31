angular.module('targetApp', [])
    .controller('upcController', function($scope) {
        $scope.zipCode = '';
        $scope.distance = 1;
        $scope.upcList = [];
        $scope.message = 'Search not yet begun';

        $scope.reset = function() {
            $scope.zipCode = '';
            $scope.distance = 1;
            $scope.upcList = [];
            $scope.message = 'Search not yet begun';
        };

        $scope.find = function() {
            $scope.message = 'Search completed';
        };
    });
