package org.steps;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition3 extends BaseClass{
	@Given("user need to be in amazon page")
	public void user_need_to_be_in_amazon_page() {
	   
	    
	}

	@When("user will enter product name in search box")
	public void user_will_enter_product_name_in_search_box(io.cucumber.datatable.DataTable d) {
		launchUrl("https://www.amazon.in/");
	    maxWindow();
		List<Map<String, String>> m = d.asMaps();
	    WebElement searchBox = driver.findElement(By.id("twotabsearchtextbox"));
	    fillTextBox(searchBox, m.get(1).get("Product"));
	}

	@When("user clicks search button")
	public void user_clicks_search_button() {
	    WebElement searchBtn = driver.findElement(By.xpath("//input[@type='submit']"));
	    btnClick(searchBtn);
	}

	@Then("user will redirect to product page")
	public void user_will_redirect_to_product_page() {
	    System.out.println("User is in products page");
	}

}
