/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: selectAllToDo.js
Test Purpose: Test the functionality of select all toggle button and verify data.
Author: dcronin
Date: 12/18/2016

Change log:

*/

// build todo list
require('./createToDoList.js');
describe('QA Challenge todo list select all test', function() { 
	//variables
	var checkOffButtons = element.all(by.className("toggle"));
	var selectAllButton = element(by.className("toggle-all"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
	
  it('select all functionality test', function() {

	//check todo count
	expect(todoCount.getText()).toEqual('10 items left');
	
	// Check off all items
	selectAllButton.click();
	expect(todoCount.getText()).toEqual('0 items left');
	
	// Un check off one item and validate count
	browser.actions().mouseMove(todoList.get(0)).perform();
	browser.sleep(100);
	checkOffButtons.get(0).click();
	expect(todoCount.getText()).toEqual('1 item left');
	
	// Check off all items
	selectAllButton.click();
	expect(todoCount.getText()).toEqual('0 items left');
	
	// Un check off all items
	selectAllButton.click();
	expect(todoCount.getText()).toEqual('10 items left');
   
  });
});