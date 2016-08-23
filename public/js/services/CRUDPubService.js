/**
 * Created by Bejta on 18/08/2016.
 */

'use strict';

angular
    .module("myApp")
    .factory('CRUDPubService', CRUDPubService, 'API');

function CRUDPubService($q, $http, $rootScope, API) {

    return {

        getOwnPubs: function(id){
                return $http.get('https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs?creator_id='+$rootScope.id+'&akey=newtoken');
          },
        deletePub: function(id){
            console.log($rootScope.token);
            var req = {
                method: "delete",
                url : 'https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs/'+id,
                headers : { 'Authorization': $rootScope.token, 'Accept': "application/json"},
                params: { 'akey': API.key }
            }
            return $http(req);
        }
  };
}