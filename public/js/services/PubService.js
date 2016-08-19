/**
 * Created by Bejta on 17/08/2016.
 */
'use strict';

angular
    .module("myApp")
    .factory('PubService', PubService);

PubService.$inject = ['$http','ResourceService', '$q', '$rootScope', 'API'];

function PubService($http ,Resource, $q, $rootScope, API)
{

    var Pub = Resource('pubs');

    return {

        get:function()
        {

            var deferred = $q.defer();

            Pub.getCollection().then(function(data)
            {
                deferred.resolve(data);
            });
            return deferred.promise;
        },

        deletePub: function(id){
            console.log("testtest");
            var req = {
                method: "DELETE",
                url : 'https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs/'+id,
                headers : { 'Authorization': $rootScope.jwt},
                params: { 'akey': API.key }
            };
            return $http(req);
        },

         //creates Pub
         createPub:function(t)
         {
         var deferred = $q.defer();
         var promise;

             var req = {
                 method: "POST",
                 url :"https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs",
                 headers : { 'Authorization': $rootScope.token, 'Accept': "application/json"},
                 params: { 'akey': API.key },
                 data: t
             };

             return $http(req);
         },

        getPub:function(id)
        {

            var deferred = $q.defer();
            var promise;
            var obj = {'instanceName' : 'pubs', 'id' : id};

            promise = Pub.getSingle(obj);

            promise.success(function(data)
            {
                deferred.resolve(data);
            }).catch(function()
            {
                deferred.reject("Something went wrong, try again");
            });

            return deferred.promise;
        },


         updatePub:function(id, data)
         {
             var deferred = $q.defer();
             var promise;
             var req = {
             method: "PUT",
             url :"https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs/" + id,
             headers : { 'Authorization': $rootScope.token, 'Accept': "application/json"},
             params: { 'akey': API.key },
             data: data
         };

         return $http(req);
         },

         //delete Pub
         deletePubAlt:function(id){

             var deferred = $q.defer();
             var promise;
             var obj = {'instanceName' : 'pubs', 'id' : id};

             promise = Pub.delete(obj);

             promise.success(function(data)
             {
             deferred.resolve(data);
             }).catch(function(){
             deferred.reject("Error occurred, please try again");
         });

         return deferred.promise;
         }

    };
}

