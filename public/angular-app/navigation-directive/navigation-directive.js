angular.module('e-quip').directive('equipNavigation', equipNavigation);

function equipNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
  };
}