/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: deleteToDo.js
Test Purpose: Test the functionality of deleting individual todo items.
Author: dcronin
Date: 12/18/2016

Change log:

*/

//build todo list
require('./createToDoList.js');
describe('QA Challenge todo list delete test', function() {
	
	//variables
	var destroyButtons = element.all(by.className("destroy"));
	var todoList = element.all(by.className("view"));
	var firstToDo =  todoList.get(0);
	 
	 
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
  it('delete one item from list', function() {

	browser.actions().mouseMove(firstToDo).perform();
    browser.sleep(100);
	destroyButtons.get(0).click();	
	

    // verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('2');
	expect(todoList.get(8).getText()).toEqual('10');
  });
});