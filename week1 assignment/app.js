
(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter'];

function LunchCheckController($scope,$filter){
    $scope.msg="";
    $scope.list="";

    $scope.checkLength=function()
    {

        var arr=$scope.list.split(',');
        console.log(arr.length)
        if($scope.list=="")
          $scope.msg="please enter data first";
        else if(arr.length<=3)
          $scope.msg="enjoy";
        else
          $scope.msg="too much";
    };
  };

})();
