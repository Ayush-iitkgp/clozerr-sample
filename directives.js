exports.productDescription = function() {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
};

exports.productReviews = function() {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
};

exports.productSpecs = function() {
        return {
            restrict:"A",
            templateUrl: "product-specs.html"
        };
};

exports.productTabs = function() {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: 'ProductTabsController',
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
