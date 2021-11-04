package org.tk;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;



public class JvmReport {

	public static void generateJvmReport(String jsonPath)
	{
		File f=new File(System.getProperty("user.dir")+"\\target\\Reports");
		Configuration con=new Configuration(f,"Facebook apllication");
		con.addClassifications("Browser", "Chrome");
		con.addClassifications("Browser Version", "95");
		con.addClassifications("Platformname", "Windows");
		con.addClassifications("Platformversion", "Windows10");
		con.addClassifications("Sprint", "23");
		
		List<String> li=new ArrayList<String>();
		li.add(jsonPath);
		
		ReportBuilder r=new ReportBuilder(li,con);
		r.generateReports();
		
		
	}
}
