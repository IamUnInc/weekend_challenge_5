var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cat', {
      templateUrl: '/views/partials/cat.html',
      controller: "catController"
    })
    .when('/barnyard', {
      templateUrl: '/views/partials/barnyard.html',
      controller: "barnyardController"
    })
    .when('/smallfurry', {
      templateUrl: '/views/partials/smallfurry.html',
      controller: "smallfurryController"
    })
    .when('/bird', {
      templateUrl: '/views/partials/bird.html',
      controller: "birdController"
    })
    .when('/dog', {
      templateUrl: '/views/partials/dog.html',
      controller: "dogController"
    })
    .when('/horse', {
      templateUrl: '/views/partials/horse.html',
      controller: "horseController"
    })
    .when('/pig', {
      templateUrl: '/views/partials/pig.html',
      controller: "pigController"
    })
    .when('/reptile', {
      templateUrl: '/views/partials/reptile.html',
      controller: "reptileController"
    })
    .when('/favorite', {
      templateUrl: '/views/partials/favorites.html',
      controller: "favoriteController"
    })
    .otherwise({
      redirectTo: '/index.html'
    })


}]);

myApp.controller('favoriteController', ['$scope', '$http', function ($scope, $http){
console.log("favoriteController loaded");

$http({
  method: 'GET',
  url: '/pets'
}).then(function (response){
  console.log('response object', response);
  $scope.favpets = response.data;
  $scope.count = response.data.length;
  console.log($scope.count);
});
}]);

var thePet = {};

myApp.controller('postFavController', ['$scope', '$http', function ($scope, $http){
console.log("postFavController loaded");

$scope.postAPet = function() {
console.log("this is the pet in the post controller: ", $scope.pet);
$http({
  method: 'POST',
  url: '/pets',
  data: $scope.pet
}).then(function (response){
  console.log('response object', response);


});
}
}]);

myApp.controller("catController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;
      thePet = response.data.petfinder.pet;
      console.log($scope.pet);

    });
  }
  $scope.getRandomPet();


}]);

myApp.controller("barnyardController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("smallfurryController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("birdController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=bird';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("dogController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("horseController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=horse';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("pigController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);

myApp.controller("reptileController", ["$scope", "$http", function($scope, $http) {
  var key = 'e616a1ebff6541c0c0f9d091ea19f72d';
  var baseURL = 'http://api.petfinder.com/';


  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=reptile';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });
  }
  $scope.getRandomPet();
}]);
