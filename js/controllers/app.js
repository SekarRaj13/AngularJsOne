var module = angular.module("myApp",[]);
	module.controller("myController",main);

	function main($scope) {

		$scope.updateTime = function(){

			var getDateTime = new Date();
			$scope.time = getDateTime.toTimeString();
			$scope.userName;
			console.log($scope.userName);
			console.log(typeof($scope.userName));
		}
	}