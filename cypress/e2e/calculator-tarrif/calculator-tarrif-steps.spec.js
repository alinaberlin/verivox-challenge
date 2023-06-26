/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';


const removeBg = () => {
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
}

Given("that I can open www.verivox.de", () => {
    cy.visit("https://www.verivox.de/")
    cy.get("#uc-btn-accept-banner").click({ force: true });
    removeBg()
})

When("I navigate to Versicherungen And select Privathaftpflicht", () => {
    removeBg()
    cy.get(".page-navigation-item.icn-shield-outlined > .page-navigation-text")
      .get('[href="/versicherungen/"]')
      .contains("Versicherungen")
      .realHover();
    cy.get(".page-navigation-link").contains("Privathaftpflicht").realHover().click({force:true})
})

Given("I enter my age And Single ohne Kinder", () => {
    removeBg()
    cy.get('.float-label-select').select("Single ohne Kinder")
    cy.get("[name='age']").type("43")
})

Then("I go to the Privathaftpflicht personal information page", () => {
    cy.get(".page-button").contains("Jetzt vergleichen").click()
})

Then("I enter my birthdate", () => {
    cy.get(".su-calendar-input").type("04.11.1980",{ force: true } )
})

Then("I enter my zip code", () => {
    removeBg()
    cy.get("#prestep_postcode").type("13088", { force: true })
})

Then("I click the Jetzt vergleichen button", () => {
    cy.scrollTo(0, 500)
    cy.get('.button').contains("Jetzt vergleichen").wait(400).click({ force: true })
    cy.wait(20000)
})

Then("I should see a page that lists the available tariffs for my selection", () => {
    cy.scrollTo(0, 500)
    cy.wrap('.product-container').should('have.length.gte', 5)
})

Then("I should see the total number of available tariffs listed above all the result list", () => {
    cy.get('.filtered').contains('Tarife von').should('be.visible')
})

When("I scroll to the end of the result list page", () => {
    cy.scrollTo('bottom')
})

Then("I should see only the first 20 tariffs displayed", () => {
    cy.get('.more-products-button-wrapper > .button').should('be.visible')
})

When("I click on the button load all", () => {
    cy.get('.load-all-button').click()
})


Then("I should see all tariffs displayed", () => {
    cy.scrollTo('bottom')
    cy.get('.more-products-button-wrapper > .button').should('be.null')
})

Then("I should see the tariff price of the first tariff", () => {
    
})

When("I open tariff details", () => {
    cy.get('.product > .product-container > .product-group-action > .cta > .button-toggle').contains('Tarifdetails').first().click()
})

Then("I see tariff details sections: “Weitere Leistungen”, “Allgemein“, „ Tätigkeiten und Hobbys“", () => {
    cy.get('.navigation > .active').contains('Wich­tigs­te Leis­tun­gen').should('be.visible')
    cy.get('.navigation > :nth-child(2)').contains('All­ge­mein').should('be.visible')
    cy.get('.navigation > :nth-child(3)').contains('Tä­tig­kei­ten und Hob­bys').should('be.visible')
})

Then("I see tariff details sections: “Miete & Immobilien” And “Dokumente”", () => {
    cy.get('.navigation > :nth-child(4)').contains('Miete & Im­mo­bi­li­en').should('be.visible')
    cy.get('.navigation > :nth-child(5)').contains('Do­kumen­te').should('be.visible')
})

Then("I see the ZUM ONLINE-ANTRAG button", () => {
    cy.get('.product-group-action > .cta > :nth-child(2)').contains('Zum Online-Antrag').should('be.visible')
})





