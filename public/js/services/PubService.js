/**
 * Created by Bejta on 17/08/2016.
 */
'use strict';

angular
    .module("myApp")
    .factory('PubService', PubService);

PubService.$inject = ['ResourceService', '$q', '$rootScope'];

function PubService(Resource, $q, $rootScope)
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

        /*
         //Skapar en plats
         createPlace:function(address, tagArray)
         {

         var deferred = $q.defer();
         var promise;
         var obj = {'instanceName' : 'places'};
         var attr = { "place":
         {
         "address": address,
         "tag_ids": tagArray
         }
         }

         promise = Place.create(obj, attr);

         promise.success(function(data)
         {
         deferred.resolve(data);
         }).catch(function(){
         deferred.reject("Something went wrong, try again");
         });

         return deferred.promise;
         }, */

        //hämtar en vald plats
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

        /*
         //Uppdaterar en vald plats
         updatePlace:function(id, address, tagArray)
         {

         var deferred = $q.defer();
         var promise;
         var obj = {'instanceName' : 'places', 'id' : id};
         var attr = { "place":
         {
         "address": address,
         "tag_ids": tagArray
         }
         }

         promise = Place.update(obj, attr);

         promise.success(function(data)
         {
         deferred.resolve(data);
         }).catch(function(){
         deferred.reject("Something went wrong, try again");
         });

         return deferred.promise;
         }, */

         //delete Pub
         deletePub:function(id){

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

