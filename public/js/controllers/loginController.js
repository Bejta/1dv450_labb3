/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("loginController", loginController);

loginController.$inject = ['$http', '$rootScope', '$location', 'LoginService'];

function loginController($http, $rootScope, $location, loginService)
{

    var vm = this;

    vm.login = function ()
    {
        var loginPromise = loginService.loginUser(vm.name, vm.password);

        loginPromise.then(function(data)
        {
            $rootScope.isLoggedIn = true;
            $rootScope.name=vm.name;
            $location.path('/mypubs');
        }).catch(function(data)
        {
            vm.message = "Wrong credentials";
            $rootScope.isLoggedIn = false;
        })
    }
}