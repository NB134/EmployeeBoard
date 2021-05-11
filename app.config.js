angular.module("EmpForm").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/empData/empData.template.html",
        controller : "DataCtrl"
    })
    .when("/form", {
        templateUrl : "/empForm/empForm.template.html",
        controller : "FormCtrl"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    }); 
});


