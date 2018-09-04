angular.module('e-quip').controller('RegisterController', RegisterController);

function RegisterController($http, $routeParams) {

   var vm = this;
   // var id = $routeParams.id;
   
   vm.registerUser = function() {
   
      console.log(vm.firstName);
      console.log(vm.lastName);
      console.log(vm.email);
      console.log(vm.password);
      alert("Register new user"); 
   };

}