var module = angular.module("myApp",[]);
	module.controller("myController",main);

	function main($scope) {

		$scope.updateTime = function(){

			var getDateTime = new Date();
			$scope.time = getDateTime.toTimeString();
			console.log(typeof($scope.time));
		}
		

	}
	console.log(angular);