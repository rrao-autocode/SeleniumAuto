package pageObjects;

import java.util.concurrent.TimeUnit;

import org.checkerframework.checker.calledmethods.qual.EnsuresCalledMethods.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class searchPage {
	
	public WebDriver sdriver;
	
	@FindBy(name = "q")
	@CacheLookup
	WebElement gSearch;
	
	@FindBy(className = "aajZCb")
	@CacheLookup
	WebElement bSearch;
	


	public searchPage (WebDriver wdriver)
	{ 
		sdriver = wdriver;
		PageFactory.initElements(wdriver, this);
	}
	


	public void enterSearchText(String sText)
	{
		gSearch.clear();
		gSearch.sendKeys(sText);
	}
	
	public void clickSearch(By bSearch) {
		WebElement element=sdriver.findElement(bSearch);
		
	}

}
