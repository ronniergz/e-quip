angular.module('e-quip')
      .controller('ItemsController', ItemsController)
      .controller('SearchController', SearchController);
      
function ItemsController ($http) {
      var vm = this;
      console.log("Made it to items controller");

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
};

      
function SearchController ($http, $window, $routeParams) {
      var vm = this;
      let query = $routeParams.query; 
      
      $http.get('/search?q=' + query).then(function(response) {
            vm.items = response.data;
            console.log("Made it to items controller");
            console.log(vm.items);
      });
      
      
      vm.formInput = function() {
            query = vm.text;
            let address = '#!/search/' + query;
            $window.location.href = address;
      };
      
      // Sorting function
      vm.orderByMe = function(propertyName, order) {
            vm.myOrderBy = propertyName;
            (order === 'ascending' ?  vm.reverse = false : vm.reverse = true);
            console.log("sort by: " + vm.myOrderBy + ", reverse? :" + vm.reverse);                      
      };
}