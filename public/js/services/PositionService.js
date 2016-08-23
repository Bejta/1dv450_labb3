/**
 * Created by Bejta on 19/08/2016.
 */

angular
    .module("myApp")
    .factory('UserService', UserService);

UserService.$inject = ['$http','ResourceService', 'API'];

function UserService(http, Resource, API )
{

    var Position = Resource('positions');

    return {
        getPositions:function()
        {

            var url;
            url = API.url +"creators";

            var req = {
                method: 'GET',
                url: url,
                headers: {
                    'Accept': API.format
                },
                params: {
                    'akey': API.key
                }
            };

            return $http(req).success(function(response)
            {
                return response;
            });

        }
    };
}

