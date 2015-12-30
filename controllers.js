exports.ClozerrHomeController = function($scope, $http){
    //var store = this;
    $scope.products = [];
    $http.get('http://api.clozerr.com/v2/vendor/search/near/?latitude=10&longitude=10&offset=0').success(function(data){

        $scope.products = data;
        //console.log($scope.products);

    });
};

exports.ReviewController = function() {
    this.review = {};

    this.addReview = function(product) {
        product.reviews.push(this.review);

        this.review = {};
    };
};


exports.ProductGalleryController = function() {
    this.current = 0;
    this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
    };
};

exports.ProductTabsController = function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
        this.tab = activeTab;
    };
};


exports.VendorDetailsController = function($scope, $routeParams, $http) {
    var encoded = encodeURIComponent($routeParams.id);
    //console.log(encoded);
    //console.log('api.clozerr.com/v2/vendor/details/get?vendor_id=' + encoded);

    $http.
    get('http://api.clozerr.com/v2/vendor/details/get?vendor_id=' + encoded).
    success(function(data) {
        $scope.vendor = data;
    });

    setTimeout(function() {
        $scope.$emit('VendorDetailsController');
    }, 0);
};




