/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("PubCreateController", PubCreateController);

PubCreateController.$inject = ['$routeParams', '$rootScope', 'PubService', 'TagService', 'filterFilter'];

function PubCreateController($routeParams, $rootScope, pubService, tagService, filterFilter)
{

    var vm = this;
    vm.isLoggedIn = $rootScope.isLoggedIn;

    if ($rootScope.isLoggedIn)
    {

        //add new pub
        vm.createPub = function()
        {

            //Adds only selected tags
            var log = vm.selectedTags();// checkbox
            var tagArray = [];

            //tags in array
            angular.forEach(log, function(value, key)
            {
                this.push(value.id);
            }, tagArray);

            //adds one pub with parameters from view
            var createPromise = pubService.createPub(vm.name, vm.description,vm.rating,vm.address, tagArray);
            createPromise.then(function(data)
            {
                vm.message = "The pub has been added";
            }).catch(function(error)
            {
                vm.message = error;
            })
        };

        //get all tags
        var tagPromise = tagService.get();

        tagPromise.then(function(data)
        {
            vm.tagList = data;
        })
            .catch(function(error)
            {
                vm.message = error;
            });

        //put tags in checkboxes so they can be added
        vm.selection = [];
        vm.selectedTags = function selectedTags()
        {
            return filterFilter(vm.tagList, { selected: true });
        };

    }
    else
    {
        vm.message = "You have to sign in first";
    }

}
