/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("PubEditController", PubEditController);

PubEditController.$inject = ['$routeParams', '$rootScope', 'PubService', 'TagService', 'filterFilter'];

function PubEditController($routeParams, $rootScope, pubService, tagService, filterFilter)
{

    var vm = this;
    vm.isLoggedIn = $rootScope.isLoggedIn;

    if ($rootScope.isLoggedIn)
    {

        vm.updatePub = function()
        {

                var upd = vm.selectedTags();
                var tagArray = [];

                angular.forEach(upd, function(value, key)
                {
                    this.push(value.id);
                }, tagArray);

                var updatePromise = pubService.updatePub($routeParams.id, vm.name,vm.description,vm.rating,vm.address, tagArray);
                updatePromise.then(function(data)
                {
                    vm.message = "The pub has been edited";
                }).catch(function(error){
                    vm.message = error;
                })

        };

        var tagPromise = tagService.get();

        tagPromise
            .then(function(data)
            {
                vm.tagList = data;
            })
            .catch(function(error)
            {
                vm.message = error;
            });



        //tagar i checkbox
        vm.selection = [];
        vm.selectedTags = function selectedTags()
        {
            return filterFilter(vm.tagList, { selected: true });
        };

    }
    else
    {
        vm.message = "You have to sign in first!";
    }

}
