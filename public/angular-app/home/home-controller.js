angular.module('e-quip')
   .controller('HomeController', HomeController)
   .service('selection', function(){
      let selection;
      this.set = function(category){
            selection = category;
            return;
      };
      this.get = function() {
            return selection;
      };
   });
   
function HomeController($http) {
      var vm = this;
      
      vm.getCategory = function(selection) {
         selection.set(selection);
      };
      
      
}