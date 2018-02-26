var app1 = angular.module("helloApp", []);
app1.controller("helloCtrl", function () {
	this.message = "from hello controller";
});