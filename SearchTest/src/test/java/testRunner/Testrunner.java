package testRunner;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	
	@CucumberOptions
	(	features=".//Features/Search.feature",
		strict=true,
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:test-output"}		
		)
	public class Testrunner {

}
