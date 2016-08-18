/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .service('LoginService', LoginService);

LoginService.$inject = ['$http', '$q', '$rootScope'];

function LoginService ($http, $q, $rootScope)
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

        return $http(request)
            .success(function(data)
            {
                $rootScope.token = data.jwt;
                $rootScope.creator_id = data.user_id;
                $rootScope.creator_name = data.name;
            });
    }

}