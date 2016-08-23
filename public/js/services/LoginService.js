/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .service('LoginService', LoginService);

LoginService.$inject = ['$http', '$q', '$rootScope','API'];

function LoginService ($http, $q, $rootScope, API)
{


    this.loginUser = function (name, password)
    {

        var request = {
            url: "https://rubyonrails-api-jb223cp.c9users.io/knock/auth_token",
            method: "POST",
            headers: {
                "Accept" : "application/json"
            },
            data: {"auth":{ "name" : name, "password" : password}
            }
        }

        var request2 = {
            url: "https://rubyonrails-api-jb223cp.c9users.io/api/v1/creators",
            method: "GET",
            headers: {
                'Accept': "application/json"
            },
            params: {
                'name' : name,
                'akey': API.key
            }
        }


        return $http(request)
            .success(function(data)
            {
                $rootScope.token = data.jwt;
                $rootScope.id = 2;

                $rootScope.name = name;

                $rootScope.creator_name = data.name;
            });
    }

}