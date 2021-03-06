// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var clickButton = element(by.id('gobutton'));
  var result = element(by.binding('latest'));
  var rest = require('./../../../../../node/node_modules/restler');
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  
  it('should have a title', function() {
	rest.post("http://restapi.demoqa.com/customer/register",{
	data: {"LastName":"Pentapati","UserName":"James007","Email":"AbramPentapati@gmail.com","FirstName":"Abram123","Password":"123456"}})
	.on('complete', function(data, response) {
  if (response.statusCode == 200) {
	  
  }
  });
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  
  it('should read value to input field',function(){
	 firstNumber.sendKeys(4);
	 expect(firstNumber.getAttribute('value')).toEqual('4');
  });
  
  it('should add one and two', function() {
	firstNumber.sendKeys(1);
	secondNumber.sendKeys(2);
	
	clickButton.click();
	expect(result.getText()).toEqual('3');
  });
});