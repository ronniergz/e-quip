
angular.module('e-quip', ['ngRoute']).config(config);

     
function config($routeProvider) {
      $routeProvider
            .when('/', {
                  templateUrl: 'angular-app/item-list/items.html',
                  controller: ItemsController,
                  controllerAs: 'vm'
           })
            .when('/:id', {
                  templateUrl: 'angular-app/item-display/item.html',
                  controller: ItemController,
                  controllerAs: 'vm'
           });           
            
}


                        