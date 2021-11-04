package org.stepdef;





import java.io.IOException;
import java.util.Date;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.tk.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;




public class HooksClass extends BaseClass  {

	@Before(order=1)
	public void beforeScenario()
	{
		System.out.println("Scenario start");
		launchChrome();
		loadUrl("https://www.facebook.com");
		winMax();
		
	}
	@After(order=1)
	public void afterScenario() {
		closeBrowser();
		System.out.println("Scenario ends");
		
	}
	
	@Before(order=2)
	public void startTime() {
	
		System.out.println(new Date());
		
	}
	@After(order=2)
	public void endTime() {
	
	Date d= new Date();
	System.out.println(d);
		
	}
	@Before(order=3)
	public void bfreSce() {
	
		System.out.println("bfr test");
		
	}
	@After(order=3)
public void aftrSce(Scenario s)throws IOException {
		
		//String name=s.getName();
		//String fileName=name.replace(" ", "_");
		//screenshot(fileName);
		
	if(s.isFailed())
	{
		TakesScreenshot tk=(TakesScreenshot)driver;
		byte[] screenshotaAs=tk.getScreenshotAs(OutputType.BYTES);
		s.embed(screenshotaAs, "image/jpg");
	}

	System.out.println("aftr test");
	
	
	
	}
	
	
	
}

