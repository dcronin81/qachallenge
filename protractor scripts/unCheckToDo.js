/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: unCheck.js
Test Purpose: Test the uncheck functionality by unchecking one completed task at a time and verifying data along the way.
Author: dcronin
Date: 12/18/2016

Change log:

*/


require('./createToDoList.js');
describe('QA Challenge todo list un check off individual test test', function() { 

	//variables
	var checkOffButtons = element.all(by.className("toggle"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	var selectAllButton = element(by.className("toggle-all"));
	var todoItemCounter = 0;
	var todoCheckCounter = 0;
	 
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
	
  it('uncheck off items one at a time', function() {

	
	//click the selectAllButton
	selectAllButton.click();
	
	//check todo count
	expect(todoCount.getText()).toEqual(todoCheckCounter + ' items left');
	
	//Check Off loop checks off all items one at a time and validates.
	while (todoCheckCounter <= 9)
	{
		// hover over todo item
		browser.actions().mouseMove(todoList.get(todoItemCounter)).perform();
		browser.sleep(100);
		//click check off
		checkOffButtons.get(todoItemCounter).click();
		//counter update
		todoCheckCounter++;
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