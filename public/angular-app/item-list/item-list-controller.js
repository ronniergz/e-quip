angular.module('e-quip').controller('ItemsController', ItemsController);

function ItemsController ($http) {
      var vm = this;
      vm.title = 'MEAN E-quip App';
      $http.get('/all').then(function(response) {
            console.log(response);
      });
};
