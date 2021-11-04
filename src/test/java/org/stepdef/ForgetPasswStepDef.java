package org.stepdef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.tk.BaseClass;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgetPasswStepDef extends BaseClass

{
	@Given("The user should launch the browser")
	public void the_user_should_launch_the_browser() {
	    
	    
	}

	@When("The person should load the url")
	public void the_person_should_load_the_url() {
		
	}

	@When("The user should click the forget password link")
	public void the_user_should_click_the_forget_password_link() {
	  driver.findElement(By.xpath("//a[text()='Forgotten password?']")).click();
	  
	}

	@When("The user should navigate to find your account page")
	public void the_user_should_navigate_to_find_your_account_page() {
	    String current=driver.getCurrentUrl();
	    Assert.assertTrue("verify the fb account page",current.endsWith("screen=0"));
	    System.out.println("Account page verified");
	    
	}

	@When("The user should type the registered mobile number and email id")
	public void the_user_should_type_the_registered_mobile_number_and_email_id() {
	    driver.findElement(By.xpath("//input[@id='identify_email']")).sendKeys("1234567890");
	    
	}

	@When("The user should click the search button")
	public void the_user_should_click_the_search_button() {
		driver.findElement(By.xpath("//button[@id='did_submit']")).click();
	}

	@Then("The user should navigate to reset your password page")
	public void the_user_should_navigate_to_reset_your_password_page() {
	    String current=driver.getCurrentUrl();
	    Assert.assertTrue("verify the reset page",current.contains("recover"));
	    System.out.println(" verified");
	}



}
