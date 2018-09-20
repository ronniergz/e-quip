angular.module('e-quip').controller('LoginController', LoginController);

function LoginController($http, $location, $window, AuthFactory, jwtHelper) {
   var vm = this;
   vm.loginError = false;
   
   vm.isLoggedIn = function() {
      if (AuthFactory.isLoggedIn) {
         return true;
      } else {
         return false;
      }
   };
   
   
   vm.login = function() {
      if (vm.username && vm.password) {
         $http.post('/users/login', { 
            username : vm.username,
            password : vm.password
         }).then(function(response) {
            if (response.data.success) {
               $window.sessionStorage.token = response.data.token;
               AuthFactory.isLoggedIn = true;
               $location.path('/login/sucess');
            }
            console.log(response);
         }).catch(function(error) {
            vm.loginError = true;
            console.log(error);
         });
      }
   };
   
   vm.logout = function() {
      AuthFactory.isLoggedIn = false;
      delete $window.sessionStorage.token;
      $location.path('/');
   };
   
   vm.alert = function() {
      alert(vm.loggedInUser);
   };

   vm.testForm = function() {
      if (vm.testFormInput) {
         vm.textReceived = vm.testFormInput;
      }
      console.log(vm.textReceived);
   };
   
   vm.getUser = function() {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      vm.user = decodedToken.username;
      return vm.user;
   };
}