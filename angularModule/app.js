var app = angular.module("myApp",["helloApp", "ngTagsInput"]);

app.controller("tagCtrl", function () {

	this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];

})
