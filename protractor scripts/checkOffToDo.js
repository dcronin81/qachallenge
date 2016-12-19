/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: checkOffToDo.js
Test Purpose: Test the check off functionality by checking one completed task at a time and verifying data along the way.
Author: dcronin
Date: 12/18/2016

Change log:

*/

//build todo list
require('./createToDoList.js');
describe('QA Challenge todo list check off individual test test', function() { 
	 
	 //variables
	var checkOffButtons = element.all(by.className("toggle"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	var todoItemCounter = 0;
	var todoCheckCounter = 10;
	
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
  it('check off items one at a time', function() {

	
	//check todo count
	expect(todoCount.getText()).toEqual(todoCheckCounter + ' items left');
	
	//Check Off loop checks off all items one at a time and validates.
	while (todoCheckCounter >= 1)
	{
		// hover over todo item
		browser.actions().mouseMove(todoList.get(todoItemCounter)).perform();
		browser.sleep(100);
		//click check off
		checkOffButtons.get(todoItemCounter).click();
		//counter update
		todoCheckCounter--;
		todoItemCounter++;
			if (todoCheckCounter == 1)
			{
				////verify how many todos left to complete
				expect(todoCount.getText()).toEqual('1 item left');
			} else
			{
				//verify how many todos left to complete
				expect(todoCount.getText()).toEqual(todoCheckCounter + ' items left');
			}
			
		
	}

   
  });
});