var nanwang = angular.module("nanwangCtrls",[])

nanwang.controller("nanwangCtrl",['$scope','$window',function($scope,$window){
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