var app = angular.module("nested", []);

app.controller("nestedController1", function ($scope) {
	// body...
	$scope.controller1 = "controller1";

})

app.controller("nestedController2",function ($scope) {
	// body...
	// $scope.controller1 = "controller2";
})