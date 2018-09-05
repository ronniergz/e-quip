angular.module('e-quip').controller('RegisterController', RegisterController);

function RegisterController($http, $location) {
   var vm = this;
   vm.registerUser = function() {
      $http.post('/users/new', { 
         firstName : vm.firstName,
         lastName : vm.lastName,
         email : vm.email,
         password : vm.password
      });
      $location.path('/register/sucess');
   };
}