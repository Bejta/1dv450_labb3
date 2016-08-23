/**
 * Created by Bejta on 23/08/2016.
 */

angular
    .module('myDirective', [])
    .directive('mydirective', function()
        {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    tags: '@'
                },
                template: htmlTemplate,

                link: function(scope)
                {
                    scope.getTags()
                        .success(function() {   })
                        .error(function() { });
                },
                controller: ['$scope', '$http', 'API', function($scope, $http, API)
                {

                    $scope.getTags = function()
                    {
                        var req = {
                            method: 'GET',
                            url: "https://rubyonrails-api-jb223cp.c9users.io/api/v1/tags",
                            headers: {
                                'Accept': 'application/json'
                            },
                            params: {
                                "akey"   : API.key
                            }
                        };

                        return $http(req).success(function(tags)
                        {
                            $scope.tags = tags;
                        }).error(function(error)
                        {
                            //console.log(error);
                        });
                    }

                }]
            }
        }
    );


var htmlTemplate  =  '<tr data-ng-repeat="tag in tags">';
htmlTemplate      += '<td>{{tag.name}}</td>';
htmlTemplate      += '<td><a data-ng-href="/tags/{{tag.id}}">Show pubs with this tag</a></td>';
htmlTemplate      += '</tr>';
