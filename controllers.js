exports.WebsiteHeaderController = function($scope,$rootScope,$http){
    //console.log("Value of $response "+ $response.res);
    //$rootScope.response = {};
    //console.log($scope.response);
    $scope.response = {};

    $http.
        get('http://api.clozerr.com/v2/auth/login/facebook/?token=CAAJJHUzbXhsBAPe3kgz5UbPhvtzGxyIpVETCRYZAUKRhJqoGDEl8sZCLb6AmsQNZC9KtYVOs0m5b25jcZAI6SkSCdlDdGQZAM8k1iIA1MpZCk4rboced31uh0zZCJxoEKNI81QuaU7EiSe9hE7ZA5uYn8Fox5JSpyobaxhVVWsG6v0nUVst2EZCJV')
        .success(function (data){
            $scope.response = data;
            $rootScope.userToken = data.token;
            //console.log("Value of $rootScope.response is: "+ $rootScope.response);
        });
};

exports.ClozerrHomeController = function($scope, $rootScope, $http){
    //var store = this;
    var encode = encodeURIComponent($rootScope.userToken);
    $scope.products = [];
    $http.get('http://api.clozerr.com/v2/vendor/search/near/?clozerr_token='+encode+'&latitude=10&longitude=10&offset=0').success(function(data){

        $scope.products = data;
        //$rootScope.vendorId = data[0]._id;
        //console.log(data[0]._id);

    });
};

exports.VendorDetailsController = function($scope, $rootScope,$routeParams, $http) {
    //console.log($routeParams.id);
    var encode = encodeURIComponent($routeParams.id);
    //var vendorId = encodeURIComponent($routeParams.vendorId);
    //console.log(encoded);
    //console.log('api.clozerr.com/v2/vendor/details/get?vendor_id=' + encoded);
    $scope.vendor = {};

    $http.
    get('http://api.clozerr.com/v2/vendor/details/get?vendor_id=' + encode).
    success(function(data) {
        $scope.vendor = data;
        $rootScope.vendorId = data._id;
        //console.log("vendorId from VendorDetailsController is "+data._id);
    });

    //setTimeout(function() {
    //$scope.$emit('VendorDetailsController');
    //}, 0);
};

exports.ProductReviewsController = function() {
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

exports.VendorTabsController = function() {
    this.tab = 0;

    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
        this.tab = activeTab;
    };
};
exports.VendorOffersController = function ($scope, $rootScope, $routeParams, $http) {
    //$scope.userToke = $rootScope.userToken;
    //$scope.vendorI = $rootScope.vendorId;
    //console.log("userToken from VendorRewardsController " + $rootScope.userToken);
    //console.log("vendorId from VendorRewardsController " + $rootScope.vendorId);
    //console.log("LOL");
    var encodedUserToken = encodeURIComponent($rootScope.userToken);
    //console.log(encodedUserToken);
    var encodedVendorId =  encodeURIComponent($routeParams.id);
    $scope.uri='http://api.clozerr.com/v2/vendor/offers/rewardspage?access_token='+ encodedUserToken +'&vendor_id='+ encodedVendorId;
    //console.log($scope.uri);

    $http.
    get($scope.uri).
    success(function(data){
        $scope.data = data;
        //console.log($scope.data);



    });
};

exports.CheckInController = function( $scope, $http, $rootScope, $timeout){

    $scope.checkIn = function(data, offer){

        //console.log(data);
        console.log(offer);

        $scope.uri = 'http://api.clozerr.com/v2/offers/checkin/create/?access_token='+$rootScope.userToken+'&vendor_id='+data._id+'&offer_id='+offer._id;

        //console.log($scope.uri);

        $http.
        get($scope.uri).
        success(function(data) {

            //console.log('Data after put request success is: ');
            //$scope.data = data;
            console.log($scope.data);

            $timeout(function() {
                $scope.data = {};
            }, 5000);
        });
    };
};










