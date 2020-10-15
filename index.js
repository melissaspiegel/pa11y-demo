var AxeBuilder =require('@axe-core/webdriverjs');
var WebDriver = require('selenium-webdriver');

var driver = new WebDriver.Builder()
.forBrowser('chrome')
.build();

driver.get('https://indeeddev.wpengine.com/hire/featured-employer/').then(function () {
  new AxeBuilder(driver).analyze(function (err, results) {
    if (err) {
      // Handle error somehow
    }
    console.log(results);
  });
});