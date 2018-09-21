angular.module('e-quip').controller('ItemController', ItemController);

function ItemController($http, $routeParams, AuthFactory) {

   var vm = this;
   var id = $routeParams.id;
   console.log(id);
   console.log('/items/' + id);
   $http.get('/items/' + id).then(function(response) {
      console.log(response);
      vm.item = response.data;
      console.log(vm.isLoggedIn());
   });


   vm.isLoggedIn = function() {
      if (AuthFactory.isLoggedIn) {
         return true;
      } else {
         return false;
      }
   };
   
   vm.addReview = function () {
      console.log("add review");
   };
   
}