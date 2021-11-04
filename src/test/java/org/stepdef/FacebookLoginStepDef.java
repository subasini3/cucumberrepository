package org.stepdef;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.tk.BaseClass;
import org.tk.FBLoginPagePojo;

import io.cucumber.java.en.*;

public class FacebookLoginStepDef extends BaseClass{

@Given("The user should launch the chrome browser")
public void the_user_should_launch_the_chrome_browser() {
	launchChrome();
}

@When("The person should type the url")
public void the_person_should_type_the_url() {
  
	loadUrl("https://www.facebook.com/");
}

@When("The user should maximize the window")
public void the_user_should_maximize_the_window() {
	winMax();
	
}

@When("The user should type the invalid username and invalid password")
public void the_user_should_type_the_invalid_username_and_invalid_password() throws IOException {
	FBLoginPagePojo f= new FBLoginPagePojo();
	fill(f.getTxtFrom(),getData(0,1));
	fill(f.getPassW(),getData(0,1));
    
}

@When("The user should click the login button")
public void the_user_should_click_the_login_button() throws InterruptedException {
	FBLoginPagePojo f= new FBLoginPagePojo();
	btnClk(f.getBtnL());
	Thread.sleep(3000);
	
}
@Then("The user should navigate to incorrect credential page")
public void the_user_should_navigate_to_incorrect_credential_page() {
    String currentUrl=driver.getCurrentUrl();
    Assert.assertTrue("verify the page",currentUrl.contains("privacy"));
    System.out.println("the test case is passed");
   
    
}
    @When("The user should get the title of the incorrect credential page")
    public void the_user_should_get_the_title_of_the_incorrect_credential_page() {
        printTitle();
    
}

    @When("The user should type the invalid username{string} and valid password{string}")
    public void the_user_should_type_the_invalid_username_and_valid_password(String s1, String s2) {
    	FBLoginPagePojo f= new FBLoginPagePojo();
    	fill(f.getTxtFrom(),s1);
    	fill(f.getPassW(),s2);
        
    	
    }

    @When("The user should get the cuurent url of the incorrect credential page")
    public void the_user_should_get_the_cuurent_url_of_the_incorrect_credential_page() {
       printcurrUrl();
       
    }
    @When("The user should type the invalid username and invalid passwords")
    public void the_user_should_type_the_invalid_username_and_invalid_passwords(io.cucumber.datatable.DataTable d) {
    	
    	List<Map<String,String>> mp=d.asMaps();
    	
    	
    	FBLoginPagePojo f= new FBLoginPagePojo();
    	fill(f.getTxtFrom(),mp.get(0).get("user"));
    	fill(f.getPassW(),mp.get(2).get("pass"));
    }


}
