Feature: Search

  Scenario: Search apartments with 2 rooms and with 169000-169000 price
    Given I open search page
    When I close web push
    And I choose Продаж квартири type of property
    And I check Secondary checkbox
    And I check Inspected checkbox
    And I fill City field with Вінниця value
    And I choose Вінниця city from dropdown
    And I fill Price From field with 169000 value
    And I fill Price To field with 169000 value
    And I choose 2 rooms
    Then I wait for Продаж квартири filter
    And I wait for Вінниця filter
    And I wait for ціна від: 169000 filter
    And I wait for ціна до: 169000 filter
    And I wait for Кімнат від: 2 filter
    And I wait for Кімнат до: 2 filter
    And I wait for Вторинна filter
