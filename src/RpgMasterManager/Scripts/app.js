(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ]).controller('MainController', ['$scope', function ($scope) {
        $scope.value = "test";
    }])
    ;
})();