Feature: To validate the search functionality of amazon page
	@sanity
  Scenario: To check the product page using search feature
    Given user need to be in amazon page
    When user will enter product name in search box
      | Product    |
      | iphone     |
      | mac laptop |
    And user clicks search button
    Then user will redirect to product page
