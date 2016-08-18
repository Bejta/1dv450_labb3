/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("TagController", TagController);

TagController.$inject = ['$routeParams', 'TagService'];

function TagController($routeParams, tagService)
{

    var vm = this;

    var tagPromise = tagService.getTag($routeParams.id);
    tagPromise.then(function(data)
    {
        vm.name = data.name;
        vm.pubs = data.pubs;

    }).catch(function(error)
    {
        vm.message = error;
    })
}
