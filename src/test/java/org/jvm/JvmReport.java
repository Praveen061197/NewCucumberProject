package org.jvm;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void jvmReportGenerate(String json) {
		File f = new File("C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\Reports\\JVMReport");
		Configuration c = new Configuration(f, "fb application");
		c.addClassifications("Browser", "Chrome");
		c.addClassifications("Platform", "Windows");
		List<String> l = new LinkedList<String>();
		l.add(json);
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();
	}

}
