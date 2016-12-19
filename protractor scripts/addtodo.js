/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: addToDo.js
Test Purpose: Test the functionality of adding individual todo items.
Author: dcronin
Date: 12/18/2016

Change log:

*/
describe('QA Challenge todo list add test', function() {
	//Variables
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	var inputToDoField = element(by.className("new-todo"));
	var todoList = element.all(by.className("view"));
	
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
	
	// verify data is correct
    expect(todoList.count()).toEqual(10);
    expect(todoList.get(0).getText()).toEqual('1');
	expect(todoList.get(9).getText()).toEqual('10');
  });
});
