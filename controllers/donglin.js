var donglin = angular.module("donglinCtrls",[])

donglin.controller("donglinCtrl",['$scope','$window',function($scope,$window){
		//$scope.contenthide = true;
    $scope.sidehide = false;
    $scope.showcontent =function(){
           $scope.contenthide = false;
           if(document.body.clientWidth < 780){
              $scope.sidehide = true;
           }
        }
    
		$scope.showsidebar = function(){
          if($scope.sidehide == true){
            $scope.sidehide = false;
          }
          else if($scope.sidehide == false){
            $scope.sidehide = true;
          }
          
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