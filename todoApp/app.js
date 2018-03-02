var app = angular.module("todoApp", []);

app.controller("todoCtrl", function () {

	this.edittodo = false;

	this.datas = [
			"javascript",
			"php",
			"angular"
	];

	this.todoData = function(){

		this.datas.push(this.todo);
		this.todo = "";
	}

	this.editTodo = function(){

		this.edittodo = !this.edittodo;
	}

	this.deleteTodo = function(index){

		this.datas.splice(index, 1);

	}

})