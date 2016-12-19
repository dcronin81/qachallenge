//build todo list
require('./createToDoList.js');
describe('QA Challenge todo quick regression of functionality', function() {

	//variables
	var destroyButtons = element.all(by.className("destroy"));
	var todoList = element.all(by.className("view"));
	var firstToDo =  todoList.get(0);
	var checkOffButtons = element.all(by.className("toggle"));
	var todoList = element.all(by.className("view"));
	var todoCount = element(by.className("todo-count"));
	var selectAllButton = element(by.className("toggle-all"));
	var clearCompletedButton = element(by.className("clear-completed"));
	var editingBoxs = element.all(by.className("editing"));
	var editingFields = element.all(by.className("edit"));
	var ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	 
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
  it('quick regression to show full functionality', function() {
	//verify there are 10 items
	expect(todoCount.getText()).toEqual('10 items left');
	expect(todoList.count()).toEqual(10);
	expect(clearCompletedButton.isPresent()).toBe(false);
	
	//delete one todo item
	browser.actions().mouseMove(firstToDo).perform();
    browser.sleep(100);
	destroyButtons.get(0).click();	
	
    // verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('2');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('9 items left');
	
	// edit one todo item
	browser.actions().mouseMove(todoList.get(0)).perform();
	browser.sleep(100);
	browser.actions().doubleClick(todoList.get(0)).perform();
	editingBoxs.get(0).click();
	editingFields.get(0).sendKeys(ctrlA);
	editingFields.get(0).sendKeys('edit');
	enter.perform();
	
	// verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('edit');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('9 items left');
	
	// check off one item
	checkOffButtons.get(0).click();
	
	// verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('edit');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('8 items left');
	expect(clearCompletedButton.isPresent()).toBe(true);
	
	// click the select all button
	selectAllButton.click();
	
	// verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('edit');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('0 items left');
	
	// uncheck one item
	checkOffButtons.get(0).click();
	// verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('edit');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('1 item left');
	
	// click the select all button
	selectAllButton.click();
	
	// verify data is correct
    expect(todoList.count()).toEqual(9);
    expect(todoList.get(0).getText()).toEqual('edit');
	expect(todoList.get(8).getText()).toEqual('10');
	expect(todoCount.getText()).toEqual('0 items left');
	
	// select the clear completed button
	clearCompletedButton.click();
	
	//verify data is correct
	expect(todoList.count()).toEqual(0);
	expect(clearCompletedButton.isPresent()).toBe(false);
	expect(todoCount.isPresent()).toBe(false);
  });
});

