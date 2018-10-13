// conf.js
exports.config = {
  directConnect: true,
  framework: 'jasmine2',
  onPrepare: function() {
	  var jasmineReporters = require('jasmine-reporters');
	  jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		    consolidateAll: true,
		    savePath: './',
		    filePrefix: 'xmlresults'
		}));
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
	    browserName: 'chrome'
  },
  
  onPrepare: function () {
	  browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
	  return global.browser.getProcessedConfig().then(function (config) {
      });
  },
  
  plugins: [{
      package: 'jasmine2-protractor-utils',
      disableHTMLReport: false,
      disableScreenshot: false,
      screenshotPath:'./reports/screenshots',
      screenshotOnExpectFailure:true,
      screenshotOnSpecFailure:true,
      clearFoldersBeforeTest: true,
      htmlReportDir: './reports/htmlReports',
      /*failTestOnErrorLog: {
                  failTestOnErrorLogLevel: 900,
                  excludeKeywords: ['keyword1', 'keyword2']
              }*/
    }],
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }  
}