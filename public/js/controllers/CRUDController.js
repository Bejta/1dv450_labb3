/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("CRUDController", CRUDController);

CRUDController.$inject = ['$http', '$rootScope', '$routeParams', 'CRUDPubService', 'PubService'];

function CRUDController($http, $rootScope, $routeParams, crudPubService, pubService)
{

    //Checks if user is logged in
    var vm = this;
    vm.isLoggedIn = $rootScope.isLoggedIn;

    if($rootScope.isLoggedIn)
    {

        crudPubService.getOwnPubs($rootScope.id).then(function(data) {

            vm.myPubsList = data.data;
        });
    }
    else
    {
        vm.message = "You have to sign in";
    }
    if($rootScope.isLoggedIn)
    {
        vm.deletePub = function(id)
        {
            console.log(id);
            var deletePromise = crudPubService.deletePub(id);
            deletePromise.then(function(data)
            {
                vm.message = "The pub has been deleted!!!";

            }).catch(function(error)
            {
                vm.message = error;
            })
        }
    }
    else
    {
        vm.message = "You have to sign in";
    }

}
