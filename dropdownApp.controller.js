
var app = angular.module('dropdownApp', []);

app.controller('dropdownAppController',function ($scope) {

});
app.directive('dropdown', function($document) {
    return {
        restrict: "C",
        link: function(scope, elem, attr){            
            elem.bind('click', function() {
                elem.toggleClass('dropdown-active');
                elem.addClass('active');
            });
            
            $document.bind('click', function() {
                if(!elem.hasClass('active')) {
                    elem.removeClass('dropdown-active');
                }
                elem.removeClass('active');
            });            
        }
    }
});