angular.module('e-quip').controller('RegisterController', RegisterController);

function RegisterController($http, $location) {
   var vm = this;
   vm.registerUser = function() {
      var user = {
         username : vm.username,
         email : vm.email,
         password : vm.password,
         roles : {
            type: 'user',
         }
         
      };
      
      if (!vm.email || !vm.password) {
         vm.error = 'Please add a username and password.';
      } else {
         if (vm.password !== vm.passwordRepeat) {
            vm.error = 'Passwords do not match.';
         } else {
            $http.post('/users/register', user).then(function(result) {
               console.log(result);
               vm.error = '';
            }).catch(function(error) {
               console.log(error);
            });
            $location.path('/register/sucess');
         }
      }
   };
}