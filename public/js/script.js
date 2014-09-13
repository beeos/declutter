var App = angular.module('App', []);

App.controller('DeclutterCtrl', ['$scope', '$http', function($scope, $http) {

  $http.jsonp('/endpoints/get_all_things.jsonp?callback=JSON_CALLBACK')
    .success(function(data){
        $scope.allThings = data;
    });

  $scope.addNewThing = function() {

    var thing = {
      name : $scope.name,
      description: $scope.description,
    };

    $scope.allThings.push(thing);
    $http.post('/endpoints/add_thing', thing);

  };

}]);
