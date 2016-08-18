/**
 * Created by Bejta on 17/08/2016.
 */

angular
    .module("myApp")
    .factory('ResourceService', ResourceService);

ResourceService.$inject = ['$http', '$rootScope', 'API'];

function ResourceService($http, $rootScope, API)
{

    return function (collectionName)
    {

        var Resource = function(data)
        {
            angular.extend(this, data);
        };

        //get function for one single object
        Resource.getSingle = function(obj)
        {
            var url;
            url = API.url +obj.instanceName +"/" + obj.id;

            var req = {
                method: 'GET',
                url: url,
                headers: {
                    'Accept': API.format
                },
                params: {
                    'limit' : API.limit,
                    'akey': API.key
                }
            };

            return $http(req).success(function(response)
            {
                return response;
            });
        };

        //get function for all data
        Resource.getCollection = function()
        {

            var req = {
                method: 'GET',
                url: API.url +collectionName,
                headers: {
                    'Accept': API.format
                },
                params: {
                    'limit' : API.limit,
                    'akey': API.key
                }
            };

            return $http(req).then(function(response)
            {
                var result = [];

                angular.forEach(response.data, function(value, key)
                {
                    result[key] = new Resource(value);
                });

                return result;
            });
        };


         //post funktnion som addar datat till api

         Resource.create = function(obj, attr)
         {
             var url;
             url = API.url +obj.instanceName;

             var req = {
                 method: 'POST',
                 url: url,
                 headers: {
                 'Accept': API.format,
                 'akey': API.key,
                     'Authorization': $sessionStorage.jwt,
             },
             data : attr
             };

             return $http(req).success(function(response)
             {
             return response;
             });
         };

         //Delete function, deletes data from API
         Resource.delete = function(obj)
         {
             var url;
             url = API.url +obj.instanceName +"/" + obj.id;

             var req = {
                 method: 'DELETE',
                 url: url,
                 headers: {
                 'Accept': API.format,
                     'Authorization': $sessionStorage.jwt,
             }
         };

             return $http(req).success(function(response)
             {
             return response;
             });
         };


         //Put function updates data to API
         Resource.update = function(obj, attr)
         {
             var url;
             url = API.url +obj.instanceName +"/" + obj.id;

             /*var req = {
                 method: "PUT",
                 url :"http://localhost:3000/api/toilets/"+id+"?appkey=supernyckelen",
                 headers: {"Authorization": $sessionStorage.jwt},
                 data: data
             }; */
             var req = {
                 method: 'PUT',
                 url: url,
                 headers: {
                 'Accept': API.format,
                 'akey': API.key,
                 'Authorization': $sessionStorage.jwt,
             },
             data: attr
             };

             return $http(req).success(function(response)
             {
                 return response;
             });
         };

        return Resource;
    }
}
