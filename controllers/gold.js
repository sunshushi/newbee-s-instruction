var gold = angular.module("goldCtrls",[])

gold.controller("goldCtrl",['$scope',function($scope){
	$scope.init = function(){
          $scope.pageClass = 'ng-enter';
        }
        $scope.hide = function(url){
          $scope.pageClass = 'ng-leave';
          setTimeout(function(){
            $window.location="#/" + url;
          },700)
      }
}])