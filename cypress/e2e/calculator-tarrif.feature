Feature: AS A Verivox user I WANT TO use the Privathaftpflicht calculator And tariff search pages SO THAT I can select the best available tariff based on price


    Scenario: Verify the Privathaftpflicht calculator
        Given that I can open www.verivox.de
        When I navigate to Versicherungen And select Privathaftpflicht
        And I enter my age And Single ohne Kinder
        Then I go to the Privathaftpflicht personal information page
        And I enter my birthdate
        And I enter my zip code
        And I click the Jetzt vergleichen button
        Then I should see a page that lists the available tariffs for my selection


    Scenario: Load multiple tariff result pages
        Given that I can open www.verivox.de
        When I navigate to Versicherungen And select Privathaftpflicht
        And I enter my age And Single ohne Kinder
        Then I go to the Privathaftpflicht personal information page
        And I enter my birthdate
        And I enter my zip code
        And I click the Jetzt vergleichen button
        Then I should see the total number of available tariffs listed above all the result list
        When I scroll to the end of the result list page
        Then I should see only the first 20 tariffs displayed
        When I click on the button load all
        Then I should see all tariffs displayed


    Scenario: Verify offer details for a selected tariff
        Given that I can open www.verivox.de
        When I navigate to Versicherungen And select Privathaftpflicht
        And I enter my age And Single ohne Kinder
        Then I go to the Privathaftpflicht personal information page
        And I enter my birthdate
        And I enter my zip code
        And I click the Jetzt vergleichen button
        Then I should see the tariff price of the first tariff
        When I open tariff details
        Then I see tariff details sections: “Weitere Leistungen”, “Allgemein“, „ Tätigkeiten und Hobbys“
        And I see tariff details sections: “Miete & Immobilien” And “Dokumente”
        And I see the ZUM ONLINE-ANTRAG button