angular.module('e-quip', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    
    // use HTML History API
    $locationProvider.html5Mode(true);       
    
    $routeProvider
        .when('/', {
              templateUrl: 'angular-app/home/home.html',
              controller: LoginController,
              controllerAs: 'vm',
              access: {
                  restricted: false
              }
             })
        .when('/items', {
              templateUrl: 'angular-app/item-list/items.html',
              controller: ItemsController,
              controllerAs: 'vm',
              access: {
                  restricted: false
              }
       })
        .when('/items/:id', {
              templateUrl: 'angular-app/item-display/item.html',
              controller: ItemController,
              controllerAs: 'vm',
              access: {
                  restricted: false
              }
       })
        .when('/login', {
              templateUrl: 'angular-app/login/login.html',
              controller: LoginController,
              controllerAs: 'vm'
       })           
        .when('/login/sucess', {
              templateUrl: 'angular-app/login/login-sucess.html',
       })
       .when('/logout', {
              templateUrl: 'angular-app/home/home.html',
              controller: LoginController,
              controllerAs: 'vm',
       })       
        .when('/register', {
              templateUrl: 'angular-app/register/register.html',
              controller: RegisterController,
              controllerAs: 'vm',
              access: {
                  restricted: false
              }
       })
        .when('/register/sucess', {
              templateUrl: 'angular-app/register/register-sucess.html',
       })
       
        .when('/search/:query', {
              templateUrl: 'angular-app/item-list/items.html',
              controller: SearchController,
              controllerAs: 'vm'
       })
       .when('/profile', {
              templateUrl: 'angular-app/profile/profile.html',
              controllerAs: 'vm',
               access: {
                   restricted: true
               }
       })
        .otherwise('/');
    }

// event listener on a change of route
function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
            event.preventDefault();
            $location.path('/');
        }
    })
}

                        