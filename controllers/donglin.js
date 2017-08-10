var donglin = angular.module("donglinCtrls",[])

donglin.controller("donglinCtrl",['$scope','$window',function($scope,$window){
		$scope.contenthide = true;
		$scope.showcontent =function(){
           $scope.contenthide = false;         
        }
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