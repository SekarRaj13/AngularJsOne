var app = angular.module("nested", []);

app.controller("nestedController1", function ($scope) {
	// body...
	this.controller1 = "controller1";

})

app.controller("nestedController2",function ($scope) {
	// body...
	 this.controller1 = "controller2";
})