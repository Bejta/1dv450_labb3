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

            //Adds only selected tags
            /*var log = vm.selectedTags();
            var tagArray = [];
            angular.forEach(log, function(value, key)
            {
                this.push({name : value.name});
            }, tagArray);
            var tagArray = [];*/

            var t = {
                pub: {
                    name: vm.name,
                    description: vm.description,
                    rating: vm.rating,
                    position:
                    { address: vm.address }
                }
            };
            var a = JSON.stringify(t);
            console.log($routeParams.id);
            var updatePromise = pubService.updatePub($routeParams.id, a);
            updatePromise.then(function(data)
            {
                vm.message = "The pub has been edited";
            }).catch(function(error){
                vm.message = error;
            })
        };

        /*var tagPromise = tagService.get();

        tagPromise
            .then(function(data)
            {
                vm.tagList = data;
            })
            .catch(function(error)
            {
                vm.message = error;
            });

        vm.selection = [];
        vm.selectedTags = function selectedTags()
        {
            return filterFilter(vm.tagList, { selected: true });
        };*/

    }
    else
    {
        vm.message = "You have to sign in first!";
    }

}
