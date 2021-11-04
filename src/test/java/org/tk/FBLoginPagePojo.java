package org.tk;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import org.openqa.selenium.support.PageFactory;

public class FBLoginPagePojo extends BaseClass {
	public FBLoginPagePojo()
	{
		PageFactory.initElements(driver, this);
		
	}
	@CacheLookup
	@FindBys({
		
		@FindBy(id="email"),
		@FindBy(xpath="//input[@type='text']")
		
	})
	private WebElement txtFrom;
	@CacheLookup
	@FindAll({
		@FindBy(id="pass"),
		@FindBy(name="pass"),
		@FindBy(xpath="//input[@type='passworsystem']")
		
	})
	
	private WebElement passW;
	@CacheLookup
	@FindBy(xpath="//button[@name='login']")
	private WebElement btnL;

	public WebElement getTxtFrom() {
		return txtFrom;
	}

	public WebElement getPassW() {
		return passW;
	}

	public WebElement getBtnL() {
		return btnL;
	}
	
	
	

}
