/**
 * Created by Bejta on 18/08/2016.
 */

'use strict';

angular
    .module("myApp")
    .factory('CRUDPubService', CRUDPubService);

function CRUDPubService($q, $http, $rootScope) {

    return {

        getOwnPubs: function(id){
            //console.log(a);
            return $http.get('https://rubyonrails-api-jb223cp.c9users.io/api/v1/pubs?creator_id='+$rootScope.id+'&akey=newtoken');
    }

  };
}