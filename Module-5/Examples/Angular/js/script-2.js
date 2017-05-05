var module = angular.module('listApp', []);
var controller = module.controller('listController', initController);
function initController($scope) {    
    $scope.itemss = ['First Item'];
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.itemss.push($scope.newItem);
            $scope.newItem = undefined;
        }        
    }
}