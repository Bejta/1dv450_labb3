/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .factory('UserService', UserService);

UserService.$inject = ['ResourceService', '$q', '$rootScope'];

function UserService(Resource, $q, $rootScope)
{

    var User = Resource('users');

    return {


        //Get information about one specific creator
        getUser:function(id)
        {

            var deferred = $q.defer();
            var promise;
            var obj = {'instanceName' : 'users', 'id' : id};

            promise = User.getSingle(obj);

            promise.success(function(data)
            {
                deferred.resolve(data);
            }).catch(function()
            {
                deferred.reject("Error while trying to get creator. Try again!");
            });

            return deferred.promise;
        },

        getCreatorByName:function(name)
        {

            var url;
            url = API.url +"creators"+"/";

            var req = {
                method: 'GET',
                url: url,
                headers: {
                    'Accept': API.format
                },
                params: {
                    'name' : name,
                    'akey': API.key
                }
            };

            return $http(req).success(function(response)
            {
                return response;
            });

        },

        //All creators....Don't know if I need this tho.
        get:function()
        {

            var deferred = $q.defer();

            User.getCollection().then(function(data)
            {
                deferred.resolve(data);
            });

            return deferred.promise;
        }

    };
}
