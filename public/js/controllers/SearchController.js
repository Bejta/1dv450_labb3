/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .controller("SearchController", SearchController);

SearchController.$inject = ['$http','API'];

function SearchController($http, API)
{

    var vm = this;

    //search API
    vm.search = function ()
    {
        var url = "https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs";
        var config = {
            headers: {
                "Accept" : "application/json"
            },
            params: {

                "search" : vm.criteria,
                "akey"   : API.key
            }
        };

        var promise = $http.get(url, config);
        promise.success(function(data, status, headers, config)
        {
            vm.pubList = data;
        });
        promise.error(function(data, status, headers, config)
        {
            vm.message = "Error occurred! Try again.";
        });
    };
}