/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: clearCompletedToDo.js
Test Purpose: Test the functionality of clearing all completed todo items using the clear completed button.
Author: dcronin
Date: 12/18/2016

Change log:

*/

// build todo list
require('./createToDoList.js');
describe('QA Challenge todo list clear completed test', function() { 
	
	//variables
	var checkOffButtons = element.all(by.className("toggle"));
	var selectAllButton = element(by.className("toggle-all"));
	var clearCompletedButton = element(by.className("clear-completed"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
	
  it('clear completed functionality test', function() {

	// check todo count
	expect(todoCount.getText()).toEqual('10 items left');
	
	// Verify clear completed button is not yet present
	expect(clearCompletedButton.isPresent()).toBe(false); 
	
	// Check off 3 items
	browser.actions().mouseMove(todoList.get(0)).perform();
	browser.sleep(100);
	checkOffButtons.get(0).click();
	//checking that the clear completed button is present
	expect(clearCompletedButton.isPresent()).toBe(true);
	browser.actions().mouseMove(todoList.get(1)).perform();
	browser.sleep(100);
	checkOffButtons.get(1).click();
	//checking that the clear completed button is present
	expect(clearCompletedButton.isPresent()).toBe(true);
	browser.actions().mouseMove(todoList.get(2)).perform();
	browser.sleep(100);
	checkOffButtons.get(2).click();
	//checking that the clear completed button is present
	expect(clearCompletedButton.isPresent()).toBe(true);
	expect(todoCount.getText()).toEqual('7 items left');
	
	// click clear completed
	expect(todoList.count()).toEqual(10);
	clearCompletedButton.click();
	// Verify completed itesm were deleted
	expect(todoCount.getText()).toEqual('7 items left');
	expect(todoList.count()).toEqual(7);
	// checking that clear completed button is no logner present
	expect(clearCompletedButton.isPresent()).toBe(false);	 
  });
});