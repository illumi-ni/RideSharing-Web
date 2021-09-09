const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const {By, Key} = require('selenium-webdriver');
 
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
 
    Given('I visit customer register page', async () => {
        driver.manage().window().maximize();
        await driver.get("http://localhost:3000/register");
      });

    When('I should provide customer details to register and click register button', async () => {
        await driver.findElement(By.name("name")).sendKeys("Ujjwal Lamichhane");
        await driver.findElement(By.name("email")).sendKeys("ujjwal@gmail.com");
        await driver.findElement(By.name("contact")).sendKeys("9847121245");
        await driver.findElement(By.name("male")).click();
        await driver.findElement(By.name("register")).sendKeys("register", Key.RETURN);  
      });
      Then('I should see Registered successfully message on screen', async () => {
        driver.switchTo().alert().accept();        
      });