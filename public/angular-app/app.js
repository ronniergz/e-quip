angular.module('e-quip', ['ngRoute'])

     
.config(function($routeProvider, $locationProvider) {
   
      $routeProvider
            .when('/', {
                  templateUrl: 'angular-app/home/home.html'
                 })
            .when('/items', {
                  templateUrl: 'angular-app/item-list/items.html',
                  controller: ItemsController,
                  controllerAs: 'vm'
           })
            .when('/items/:id', {
                  templateUrl: 'angular-app/item-display/item.html',
                  controller: ItemController,
                  controllerAs: 'vm'
           })
            .when('/login', {
                  templateUrl: 'angular-app/login/login.html',
           })           
            .when('/register', {
                  templateUrl: 'angular-app/register/register.html',
                  controller: RegisterController,
                  controllerAs: 'vm'
           })
            .when('/register/sucess', {
                  templateUrl: 'angular-app/register/register-sucess.html',
           })
           
            .when('/search/:query', {
                  templateUrl: 'angular-app/item-list/items.html',
                  controller: SearchController,
                  controllerAs: 'vm'
           })
            .otherwise('/');
           
      // use HTML History API
      $locationProvider.html5Mode(true);

      
      
});


                        