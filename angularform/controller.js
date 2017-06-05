var app = angular.module("mainApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/registration", {
        templateUrl : "registration.html"
    })
    .when("/dashboard", {
        templateUrl : "dash.html"
    })
    .otherwise("/", {
        templateUrl : "blue.htm"
    });
});
app.controller("logCtrl",function($scope,$location){
$scope.submit=function(){
    var uname= $scope.username;
    var password= $scope.password;
    if($scope.username=='admin'&& $scope.password=='admin'){
        $location.path('/registration')
    }

};
});