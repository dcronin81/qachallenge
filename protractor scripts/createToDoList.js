/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: createToDoList.js
Test Purpose: This test is made to be included in other tests to provide a pre made todo list.
Author: dcronin
Date: 12/18/2016

Change log:

*/
describe('QA Challenge todo list add test', function() {
	//Variables
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	var inputToDoField = element(by.className("new-todo"));
	
	//Functions
	//adds 1 item to the todo list
	 function addToDo(a) 
	 {
		inputToDoField.sendKeys(a);
		enter.perform();
     }
	 
	 //adds a list of todos of sequential numbers
	 function createToDoList(a)
	 {
		 var c = 1;
		 while (c <= a)
		 {
			 addToDo(c);
			 c++;
		 }
	 }
	 
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
  it('Add 10 todos', function() {

	createToDoList(10);
	
  });
});