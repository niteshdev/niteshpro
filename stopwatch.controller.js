var app=angular.module('stopWatchApp', []);

app.directive('stopwatch', function($timeout) {
    return {
        restrict: 'E',
        template: '<div class="mainBody">'+
                '<div class="timer">{{hours|numberpad:2}}:{{minutes|numberpad:2}}:{{seconds|numberpad:2}}:{{miliseconds|numberpad:2}}</div>'+
                '<button class="btn btn-success" ng-click="start()" ng-disabled="button">START</button>'+
                '<button class="btn btn-danger"  ng-click="stop()" ng-disabled="!button">STOP</button>'+
                '<button class="btn btn-primary" ng-click="reset()" ng-disabled="button">RESET</button>'+
                ' </div>    ' ,
        link: function($scope) {
            var timeoutId;
            $scope.hours=0;
            $scope.seconds = 0;
            $scope.minutes = 0;
            $scope.miliseconds=0;
            $scope.button = false;

            function updateTimer(){
                $scope.miliseconds++;
                if ($scope.miliseconds === 100) {
                    $scope.miliseconds = 0;
                    $scope.seconds++;
                }
                if ($scope.seconds === 60) {
                    $scope.seconds = 0;
                    $scope.minutes++;
                }
                if ($scope.minutes === 60) {
                    $scope.minutes = 0;
                    $scope.hours++;
                }
            };
            $scope.stop = function() {
                $timeout.cancel(timeoutId);
                $scope.button = false;
            };
            $scope.start = function() {
                timer();
                $scope.button = true;
            };
            $scope.reset = function() {
                $scope.hours=0;
                $scope.seconds = 0;
                $scope.minutes = 0;
                $scope.miliseconds = 0;
            };
            function timer() {
                timeoutId = $timeout(function() {
                    updateTimer();
                    timer();
                }, 10);
            };        
        },        
    };
});

app.filter('numberpad', function() {
    return function(input, places) {
        var out = "";
        if (places){
            var placesLength = parseInt(places, 10);
            var inputLength = input.toString().length;
    
            for(var i=0; i<(placesLength-inputLength); i++){
                out='0'+out;
            }
            out=out+input;
        }
        return out;
    };
}); 