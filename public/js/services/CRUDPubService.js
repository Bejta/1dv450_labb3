/**
 * Created by Bejta on 18/08/2016.
 */

'use strict';

angular
    .module("myApp")
    .factory('CRUDPubService', CRUDPubService);

function CRUDPubService($q, $http, $rootScope) {

    console.log($rootScope.creator_id);
    return {

        getOwnPubs: function(id){
            return $http.get('https://rubyonrails-api-jb223cp.c9users.io/api/v1/tags?creator_id='+id+'&akey=newtoken');
    }

  };
}