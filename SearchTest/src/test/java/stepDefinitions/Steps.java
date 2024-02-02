package stepDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import pageObjects.searchPage;


public class Steps {
	
	public WebDriver driver;
	public searchPage sp;
	public WebElement element;

	@Given("User launch Chrome browser")
	public void user_launch_Chrome_browser() {
		driver = new ChromeDriver();
		sp = new searchPage(driver);
		driver.manage().window().maximize();
	    
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String string) throws InterruptedException {
		driver.get(string);
		Thread.sleep(10000);
	    
	}

	@When("enter valid keyword as {string} in search text field")
	public void enter_valid_keyword_as_in_search_text_field(String string) throws InterruptedException {
		sp.enterSearchText(string);
		Thread.sleep(10000);	
	    
	}

	
	@When("Click on Search by className {string}and Select from list by {string} and verify keyword as {string}")
	public void click_on_Search_by_className_and_Select_from_list_by_and_verify_keyword_as(String string, String string2, String string3) throws InterruptedException {
		WebElement element=driver.findElement(By.className(string));
		
		Boolean assertTrue = element.getText().contains(string3);
        if (assertTrue == true) {
            System.out.print("Yes");
        } else {
            System.out.print("No");
        }   
		Thread.sleep(10000);
		java.util.List<WebElement> elements = element.findElements(By.className(string2));
		elements.get(0).click();
	    
	}
	


	@Then("search results are displayed")
	public void search_results_are_displayed() {
	    //Search results are displayed as expected
	    
	}


	
	

	

}
