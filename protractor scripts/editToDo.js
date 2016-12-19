/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: editToDo.js
Test Purpose: Test the functionality of editing a todo item.
Author: dcronin
Date: 12/18/2016

Change log:

*/

// build todo list
require('./createToDoList.js');
describe('QA Challenge todo list edit test', function() { 
	 	//variables
	var checkOffButtons = element.all(by.className("toggle"));
	var selectAllButton = element(by.className("toggle-all"));
	var clearCompletedButton = element(by.className("clear-completed"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	var editingBoxs = element.all(by.className("editing"));
	var editingFields = element.all(by.className("edit"));
	var ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
	
  it('edit todo items functionality test', function() {

	// edit the first todo
	expect(todoList.get(0).getText()).toEqual('1');
	browser.actions().mouseMove(todoList.get(0)).perform();
	browser.sleep(100);
	browser.actions().doubleClick(todoList.get(0)).perform();
	editingBoxs.get(0).click();
	editingFields.get(0).sendKeys(ctrlA);
	editingFields.get(0).sendKeys('edit');
	enter.perform();
	
	//Verify it was edited
	expect(todoList.get(0).getText()).toEqual('edit');
   
  });
});