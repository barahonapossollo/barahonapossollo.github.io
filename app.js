var app = angular.module('myApp', []);

app.config(function($locationProvider) {
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
})

// new instance (object)
.factory('testFactory', function($http){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        },
        all: function(){
          return $http.get('Gallery.json');
        }
    }
})

// singleton
// .service('testService', function(){
//     this.sayHello= function(text){
//         return "Service says \"Hello " + text + "\"";
//     };
//     this.sayGoodbye = function(text){
//         return "Service says \"Goodbye " + text + "\"";
//     };
// })

.controller('GalleryCtrl', function($scope, $location, testFactory) {

  $scope.param = "Locally Hello";
  $scope.paramValue = $location.search();
  $scope.paramValue = $location.absUrl();
  console.log(`hello guys how are you ${$scope.param}`);
  // console.log(`hello guys how are you ${testService.sayHello("World")}`);
  // ['editors'];
  // console.log($location.search());

  // $locationProvider.html5Mode(true);
// $location.absUrl();

    // $scope.fromService = testService.sayHello("World");
    $scope.fromFactory = testFactory.sayHello("World");
    testFactory.all().then(function(result) {
                console.log(Date());
                // console.log(result.data);
                $scope.Gallery = result.data.results;

              });;
    // console.log(Gallery);

})
