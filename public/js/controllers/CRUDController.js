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
        var myPromise = crudPubService.getOwnPubs($rootScope.creator_id);

        myPromise.then(function(data)
        {
            vm.name = data.name;
            vm.pubs = data.pubs;
        }).catch(function(error)
        {
            vm.message = error;
        });

        /*crudPubService.getOwnPubs($rootScope.user_id).then(result => {
            return $http.get('http://localhost:3000/api/toilets?appkey=supernyckelen&creator_id='+result.data.id);
        }),
        .then(value => {
            console.log(value.data.pubs);
            this.ownList = value.data.pubs;
        })
        .catch(e => {
            console.log(e);
        } */
    }
    else
    {
        vm.message = "You have to sign in";
    }
    if($rootScope.isLoggedIn)
    {
        vm.deletePub = function(id)
        {
            var deletePromise = pubService.deletePub(id);
            deletePromise.then(function(data)
            {
                vm.message = "The pub has been deleted!!!";
                var myPromise = userService.getUser($rootScope.creator_id);
                myPromise.then(function(data)
                {
                    vm.name = data.name;
                    vm.pubs = data.pubs;
                }).catch(function(error)
                {
                    vm.message = error;
                })
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

