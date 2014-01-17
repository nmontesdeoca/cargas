angular.module('CarGas', ['ngRoute', 'Controllers', 'Providers'])
.config(['$routeProvider', '$httpProvider', '$utilProvider', function ($routeProvider, $httpProvider, $utilProvider) {

    $httpProvider.responseInterceptors.push($utilProvider.interceptor);

    $routeProvider
    .when('/login', {
        templateUrl: '/app/views/User/login.html',
        controller: 'User.Login'
    })
    .when('/account', {
        templateUrl: '/app/views/User/account.html',
        controller: 'User.Account'
    })
    .when('/refuel', {
        templateUrl: '/app/views/Refuel/form.html',
        controller: 'Refuel.Add',
        resolve: {
            loggedin: $utilProvider.checkLoggedIn
        }
    })
    .when('/refuel/:index', {
        templateUrl: '/app/views/Refuel/form.html',
        controller: 'Refuel.Edit',
        resolve: {
            loggedin: $utilProvider.checkLoggedIn
        }
    })
    .when('/refuels', {
        templateUrl: '/app/views/Refuel/list.html',
        controller: 'Refuel.List',
        resolve: {
            loggedin: $utilProvider.checkLoggedIn
        }
    })
    .otherwise({
        redirectTo: '/refuels'
    });


}]);

angular.module('Controllers', []);
angular.module('Providers', []);