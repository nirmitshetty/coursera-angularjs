
(function(){
  'use strict';
  angular.module('firstApp',[])
  .controller('ShoppingAddController',ShoppingAddController)
  .controller('ShoppingShowController',ShoppingShowController)
  .service('ShoppingService',ShoppingService)
  .controller('firstController',function($scope,$filter,$timeout){
    $scope.name="";
    $scope.total=0;
    $scope.imgName="sad";
    $scope.counter=0;
    $scope.msg=$filter('uppercase')("this is in lower case");
    $scope.cost=0.45;

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

    $scope.incrementCounter=function()
    {
      $timeout(function(){
        $scope.counter++;
      },2000)

    };

    $scope.items=["one","two","three"]
  });

  ShoppingAddController.$inject=['ShoppingService'];
  function ShoppingAddController(ShoppingService){
    this.name="";
    this.add=function()
    {
      ShoppingService.add(this.name);
    };
  }

  ShoppingShowController.$inject=['ShoppingService'];

  function ShoppingShowController(ShoppingService){

    this.items=ShoppingService.items;

    this.remove=function(index)
    {
      ShoppingService.remove(index);
    };
  }

  function ShoppingService(){
    this.items=[];

    this.add=function(n)
    {
      this.items.push(n);
      //console.log(this.items);
    }

    this.remove=function(i)
    {
      this.items.splice(i,1);
    }
  }
}

)();
