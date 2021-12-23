
(function(){
  'use strict';
  angular.module('firstApp',[])
  .controller('firstController',function($scope,$filter){
    $scope.name="";
    $scope.total=0;
    $scope.imgName="sad";

    $scope.sayHello=function()
    {
      return "Hello you";
    };

    $scope.displayNumeric=function()
    {
      $scope.total=$scope.name.length;
    };

    $scope.upper=function()
    {
      var upCase=$filter('uppercase')
      $scope.name=upCase($scope.name)
    };

    $scope.makeHappy=function() {
      $scope.imgName="happy";
    }
  });
}

)();
