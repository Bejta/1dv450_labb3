/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("UserListController", UserListController);

UserListController.$inject = ['UserService'];

function UserListController(userService)
{

    var vm = this;

    /** Get creators form API
        An idea is to use ID with creator id that I already have, and then filter pubs list. */

    var userPromise = userService.get();
    userPromise
        .then(function(data)
        {
            vm.userList = data;
        })
        .catch(function(error)
        {
            vm.message = error;
        });
}
