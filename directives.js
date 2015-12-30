exports.vendorDescription = function() {
        return {
            restrict: 'E',
            templateUrl: "vendor-description.html",
            controller: 'VendorDetailsController'
        };
};

exports.productReviews = function() {
        return {
            restrict: 'E',
            controller: 'ProductReviewsController',
            templateUrl: "product-reviews.html"
        };
};

exports.vendorLocation = function() {
        return {
            restrict:"E",
            templateUrl: "vendor-location.html"
        };
};

exports.vendorTabs = function() {
        return {
            restrict: "E",
            templateUrl: "vendor-tabs.html",
            controller: 'VendorTabsController',
            controllerAs: "tab"
        };
};

exports.productGallery = function() {
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controller: 'ProductGalleryController',
            controllerAs: "gallery"
        };
};

exports.websiteHeader = function() {
        return {
            restrict: "E",
            templateUrl: "website-header.html"
        }
};


exports.vendorDetails = function() {
    return {
        restrict: "E",
        controller: "VendorDetailsController",
        templateUrl: "vendor-details.html"
    };
};


exports.clozerrHome = function(){
    return {
        restrict: "E",
        controller:"ClozerrHomeController",
        templateUrl: "clozerr-home.html"
    };
};


exports.vendorRewards = function(){
    return {
        restrict: "E",
        templateUrl: "vendor-rewards.html"
    };
};
