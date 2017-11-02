angular.module('e-quip').controller('ItemsController', ItemsController);

function ItemsController ($http) {
      var vm = this;
      vm.title = 'MEAN E-quip App';
      $http.get('/items').then(function(response) {
            console.log(response);
            vm.items = response.data;
            console.log(vm.items);
      });
}
