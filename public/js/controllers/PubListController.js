/**
 * Created by Bejta on 17/08/2016.
 */

// register the controller to the module
angular
    .module("myApp")
    .controller("PubListController", PubListController); // registrera med namn, funktion

// inject the service
PubListController.$inject = ['$routeParams','PubService'];

function PubListController($routeParams,pubService) {
    var vm = this;

    pubService.getPubByTag($routeParams.id).then(function(data) {

        vm.PubsByTag = data.data;
    });

    pubService.get().then(function(data) {
        console.log(data);
        vm.pubsList = data;
    });
}