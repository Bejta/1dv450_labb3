/**
 * Created by Bejta on 18/08/2016.
 */

angular
    .module("myApp")
    .factory('TagService', TagService);

TagService.$inject = ['ResourceService', '$q', '$rootScope'];

function TagService(Resource, $q, $rootScope)
{
    var Tag = Resource('tags');

    return {

        /* Gets one specific tag by id
           The same procedure as pubs....
        */
        getTag:function(id) {

            var deferred = $q.defer();
            var promise;
            var obj = {'instanceName' : 'tags', 'id' : id};

            promise = Tag.getSingle(obj);

            promise.success(function(data)
            {
                deferred.resolve(data);
            }).catch(function()
            {
                deferred.reject("Error occurred");
            });
            return deferred.promise;
        },

        //get all tags
        get:function()
        {

            var deferred = $q.defer();

            Tag.getCollection().then(function(data)
            {

                deferred.resolve(data);
            });

            return deferred.promise;
        }

    };
}

