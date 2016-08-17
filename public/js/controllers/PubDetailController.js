/**
 * Created by Bejta on 17/08/2016.
 */

angular
    .module("myApp")
    .controller("PubDetailController", PubDetailController);

// Dependency injections, routeParams give us the /:id
PubDetailController.$inject = ['$routeParams', 'PubService'];

function PubDetailController($routeParams, pubService)
{

    var vm = this;

    var pubPromise = pubService.getPub($routeParams.id);
    pubPromise.then(function(data)
    {
        vm.name = data.name;
        vm.description = data.description;
        vm.rating=data.rating;
    }).catch(function(error)
    {
        // Something went wrong!
        vm.message = error;
        console.log("Error: " +error);
    })
}
