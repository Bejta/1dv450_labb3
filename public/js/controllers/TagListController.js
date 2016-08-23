/**
 * Created by Bejta on 23/08/2016.
 */

// register the controller to the module
angular
    .module("myApp")
    .controller("TagListController", TagListController); // registrera med namn, funktion

// inject the service
TagListController.$inject = ['TagService'];

function TagListController(tagService) {
    var vm = this;

    tagService.get().then(function(data) {
        console.log(data);
        vm.tagsList = data;
    });
}
