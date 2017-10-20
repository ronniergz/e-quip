angular.module('e-quip').controller('ItemController', ItemController);

function ItemController($http, $routeParams) {
   var vm = this;
   var id = $routeParams.id;
   $http.get('/api/items/' + id).then(function(response) {
      vm.item = response.data;
   });
   
};