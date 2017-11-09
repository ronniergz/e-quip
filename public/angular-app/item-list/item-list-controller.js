angular.module('e-quip').controller('ItemsController', ItemsController);

function ItemsController ($http) {
      var vm = this;
      $http.get('/items').then(function(response) {
            vm.items = response.data;
            console.log(vm.items);
            
      });

      // Sorting function
      vm.orderByMe = function(propertyName, order) {
            vm.myOrderBy = propertyName;
            (order === 'ascending' ?  vm.reverse = false : vm.reverse = true);
            console.log("sort by: " + vm.myOrderBy + ", reverse? :" + vm.reverse);                      
      };
            
      
}
