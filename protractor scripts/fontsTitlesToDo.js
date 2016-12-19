/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: fontTitleToDo.js
Test Purpose: Test the titles and text have the correct size and fonts.
Author: dcronin
Date: 12/18/2016

Change log:

*/
describe('QA Challenge todo list select all test', function() { 
	//variables
	var title = element(by.css('h1'))
	var todoField = element(by.className("new-todo"));
	var footerLine = element.all(by.css('p'));

	
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
  it('make sure titles, placeholders and text is correct', function() {
	//variables
	  

	// Verify title
    expect(title.getCssValue('font-family')).toBe('"Helvetica Neue", Helvetica, Arial, sans-serif');
	expect(title.getCssValue('font-size')).toBe('100px');
	expect(title.getText()).toEqual('todos');
	
	//Verify todo entry size and font
	expect(todoField.getCssValue('font-family')).toBe('"Helvetica Neue", Helvetica, Arial, sans-serif');
	expect(todoField.getCssValue('font-size')).toBe('24px');
	
	//verify footer size and font
	expect(footerLine.get(0).getCssValue('font-family')).toBe('"Helvetica Neue", Helvetica, Arial, sans-serif');
	expect(footerLine.get(0).getCssValue('font-size')).toBe('10px');
	expect(footerLine.get(0).getText()).toEqual('Double-click to edit a todo');
	expect(footerLine.get(1).getText()).toEqual('Created by Sam Saccone and Colin Eberhardt using Angular2');
	expect(footerLine.get(2).getText()).toEqual('Part of TodoMVC');
   
  });
});