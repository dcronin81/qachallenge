/*
Project: QA challenge Todo application http://todomvc.com/examples/angular2/
Test Name: hyperlinkTest.js
Test Purpose: Test the functionality of each hyperlink present on the application.
Author: dcronin
Date: 12/18/2016

Change log:

*/

describe('QA Challenge todo list Hyperlink test', function() {
	//Variables
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	var sacconeLink = element(by.css('a[href*="http://github.com/samccone"]'))
	var eberhardtLink = element(by.css('a[href*="http://github.com/colineberhardt"]'))
	var angularLink = element(by.css('a[href*="http://angular.io"]'))
	var todoMVCLink = element(by.css('a[href*="http://todomvc.com"]'))
	//Functions
	 
	 
	// beforeEach
	beforeEach(function() 
	{
    browser.get('http://todomvc.com/examples/angular2/');
    });
	
	//Tests
  it('Test the Sam Saccone hyperlink', function() {

    // click on link
	sacconeLink.click();
	browser. ignoreSynchronization = true

	// verify new url
	expect(browser.getCurrentUrl()).toEqual('https://github.com/samccone');
  });
  
  it('Test the Colin Eberhardt hyperlink', function() {

    // click on link
	eberhardtLink.click();
	browser. ignoreSynchronization = true

	// verify new url
	expect(browser.getCurrentUrl()).toEqual('https://github.com/colineberhardt');
  });
  
    it('Test the Angular2 hyperlink', function() {

    // click on link
	angularLink.click();
	browser. ignoreSynchronization = true

	// verify new url
	expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
  });
  
  it('Test the Angular2 hyperlink', function() {

    // click on link
	todoMVCLink.click();
	browser. ignoreSynchronization = true

	// verify new url
	expect(browser.getCurrentUrl()).toEqual('http://todomvc.com/')
  });
  
});