angular.module('e-quip').controller('ItemController', ItemController);

function ItemController($http, $routeParams) {
   console.log("Made it to ItemController");
   var vm = this;
   var id = $routeParams._id;
   console.log(id);
   console.log('/items/' + id);
   $http.get('/items/' + id).then(function(response) {
      console.log(response);
      vm.item = response.data;
      console.log(vm.item.desc);
      
   });

};