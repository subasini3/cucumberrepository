package org.tk;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	
	public static void launchChrome()
	{
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
				}

	public static void loadUrl(String url)
	{
		driver.get(url);
			}
	public static void winMax()
	{
		driver.manage().window().maximize();
	}
	public static void printTitle()
	{
		String ti=driver.getTitle();
		System.out.println(ti);
		
	}
	public static void printcurrUrl()
	{
		System.out.println(driver.getCurrentUrl());
		
	}
	public static void fill(WebElement el,String val)
	
	{
		el.sendKeys(val);
	
	}
	
	public  static void btnClk(WebElement el)
	{
		el.click();
	}
	
	public static String getData(int rowNumber,int cellNumber) throws IOException
	{
		File f=new File("C:\\Users\\welcome\\eclipse-workspace\\Framework\\testData\\example1.xlsx");
		FileInputStream fi=new FileInputStream(f);
		Workbook w=new XSSFWorkbook(fi);
		
		Sheet s =w.getSheet("test1");
			
		Row row = s.getRow(rowNumber);
		
				
		Cell cell= row.getCell(cellNumber);
		int cellType=cell.getCellType();
		String value="";
		
		if(cellType==1)
		{
			 value=cell.getStringCellValue();
					
		}
		else if(cellType==0){
			
			if(DateUtil.isCellDateFormatted(cell))
			{
				
			
				Date d=cell.getDateCellValue();
			
					SimpleDateFormat sim=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
			 value=sim.format(d);
					}
		else
		{
			double d=cell.getNumericCellValue();
			long l=(long)d;
		 value=String.valueOf(l);
			
			System.out.println(value);
		}
		
		}
		return value;
		
		
		}
	
public static void closeBrowser()
{
	driver.close();
	
}


public static String titleReturn()
{
	String title=driver.getTitle();
	return title;
	
	
}
public static void printEndTime()
{
	Date d=new Date();
	System.out.println(d);
}
public static void  impwait()
{
	driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	
}

public static void screenshot(String name)throws IOException
{
	TakesScreenshot tk=(TakesScreenshot)driver;
	
File src=tk.getScreenshotAs(OutputType.FILE);
File des=new File("C:\\Users\\welcome\\eclipse-workspace\\CuCu\\target\\screenshot\\"+name+".jpg");
FileUtils.copyFile(src,des);


}



}
