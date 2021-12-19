package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features", glue="org.steps",
dryRun=false, monochrome=true, strict=true, tags="@sanity",
plugin= {"pretty",
		"html:C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\Reports\\HTMLReport",
		"json:C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\Reports\\JSONReport\\jsonreport.json",
		"junit:C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\Reports\\JUNITReport\\junitreport.xml",
		"rerun:C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\FailedScenarios\\failed.txt"})
public class TestRunnerClass {
	@AfterClass
	public static void jvm() {
		JvmReport.jvmReportGenerate("C:\\Users\\Praveen\\eclipse-workspace\\Cucumber7Pm\\Reports\\JSONReport\\jsonreport.json");
	}

}
