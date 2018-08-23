angular.module('e-quip', ['ngRoute'])

     
.config(function($routeProvider, $locationProvider) {
   
      $routeProvider
            .when('/', {
                  templateUrl: 'angular-app/home/home.html'
                 })
           .when('/test', {
                 templateUrl: 'angular-app/test.html'
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
           
            .otherwise('/');
           
      // use HTML History API
      $locationProvider.html5Mode(true);
      
});


                        