var calcApp = angular.module("calcApp", []);

calcApp.controller("calcController", function () {
	// body...
	
	this.buttonClicked = function(button){

		this.seletedOption = button;
	}

	this.computeResult = function(){
		var number1 = parseInt(this.input1);
		var number2 = parseInt(this.input2);

		if (this.seletedOption === "+") {
			this.result = number1 + number2;
		} else if (this.seletedOption === "-") {
			this.result = number1 - number2;
		} else if (this.seletedOption === "*") {
			this.result = number1 * number2;
		} else if (this.seletedOption === "/") {
			this.result = number1 / number2;
		}
 
	}

})