(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BuyingListShowController', BuyingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {

  this.items=ShoppingListService.shopItems;
  this.buyItem = function (name,qty,index) {
    ShoppingListService.addItem(name, qty);
    ShoppingListService.removeItem(index);
  }
}


BuyingListShowController.$inject = ['ShoppingListService'];
function BuyingListShowController(ShoppingListService) {

  this.items = ShoppingListService.boughtItems;
}


function ShoppingListService() {

  // List of shopping items
  this.shopItems = [{"name":"apple","quantity":1},{"name":"milk","quantity":2},{"name":"cake","quantity":3},{"name":"pizza","quantity":4},{"name":"chocolate","quantity":5}];
  this.boughtItems=[]

  this.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    this.boughtItems.push(item);
  };

  this.removeItem = function (itemIndex) {
    this.shopItems.splice(itemIndex, 1);
  };

}

})();
