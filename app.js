(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$scope', '$http', function($scope, $http){
    //var store = this;
    $scope.products = [];
    $http.get('http://api.clozerr.com/v2/vendor/search/near/?latitude=10&longitude=10&offset=0').success(function(data){

      $scope.products = data;
      //console.log($scope.products);

    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();