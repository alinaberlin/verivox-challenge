//// <reference types= "Cypress"/>


describe("Verify the Privathaftpflicht calculator", () => {

  before(() => {
    cy.visit("https://www.verivox.de/");
    cy.get("#uc-btn-accept-banner").click({ force: true });
  })
  it("Should display 5 tariff", () => {
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get(".page-navigation-item.icn-shield-outlined > .page-navigation-text")
      .get('[href="/versicherungen/"]')
      .contains("Versicherungen")
      .realHover();
    cy.get(".page-navigation-link").contains("Privathaftpflicht").realHover().click({force:true})
    cy.get("#uc-btn-accept-banner").click({ force: true });
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get('.float-label-select').select("Single ohne Kinder")
    cy.get("[name='age']").type("43")
    cy.get(".page-button").contains("Jetzt vergleichen").click()
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get(".su-calendar-input").type("04.11.1980",{ force: true } )
    cy.get("#prestep_postcode").type("13088", { force: true })
    cy.get('.button').contains("Jetzt vergleichen").wait(400).click({ force: true })
    cy.wait(20000)
    cy.scrollTo(0, 500)
    cy.wrap('.product-container').should('have.length.gte', 5)
  });
  it("Sould display multiple tariff result pages", ()=> {
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get(".page-navigation-item.icn-shield-outlined > .page-navigation-text")
      .get('[href="/versicherungen/"]')
      .contains("Versicherungen")
      .realHover();
    cy.get(".page-navigation-link").contains("Privathaftpflicht").realHover().click({force:true})
    cy.get("#uc-btn-accept-banner").click({ force: true });
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get('.float-label-select').select("Single ohne Kinder")
    cy.get("[name='age']").type("43")
    cy.get(".page-button").contains("Jetzt vergleichen").click()
    //cy.get(".usercentrics-bg").invoke("hide");
    //cy.get(".cmp-container").invoke("hide");
    cy.get(".su-calendar-input").type("04.11.1980",{ force: true } )
    cy.get("#prestep_postcode").type("13088", { force: true })
    cy.scrollTo('bottom')
    cy.get('.button').contains("Jetzt vergleichen").wait(400).click({ force: true })
    cy.wait(20000)
    cy.get('.filtered').contains('Tarife von').should('be.visible')
    cy.scrollTo('bottom')
    cy.get('.more-products-button-wrapper > .button').should('be.visible')
    cy.get('.load-all-button').click()
    cy.scrollTo('bottom')
    cy.get('.more-products-button-wrapper > .button').should('not.be.null')
  })

  it.only("Sould display offer details for a selected tatiff", ()=> {
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get(".page-navigation-item.icn-shield-outlined > .page-navigation-text")
      .get('[href="/versicherungen/"]')
      .contains("Versicherungen")
      .realHover();
    cy.get(".page-navigation-link").contains("Privathaftpflicht").realHover().click({force:true})
    cy.get("#uc-btn-accept-banner").click({ force: true });
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get('.float-label-select').select("Single ohne Kinder")
    cy.get("[name='age']").type("43")
    cy.get(".page-button").contains("Jetzt vergleichen").click()
    cy.get(".usercentrics-bg").invoke("hide");
    cy.get(".cmp-container").invoke("hide");
    cy.get(".su-calendar-input").type("04.11.1980",{ force: true } )
    cy.get("#prestep_postcode").type("13088", { force: true })
    cy.scrollTo('bottom')
    cy.get('.button').contains("Jetzt vergleichen").wait(400).click({ force: true })
    cy.wait(20000)
    cy.get('.product > .product-container > .product-group-action > .cta > .button-toggle').contains('Tarifdetails').first().click()
    cy.get('.navigation > .active').contains('Wich­tigs­te Leis­tun­gen').should('be.visible')
    cy.get('.navigation > :nth-child(2)').contains('All­ge­mein').should('be.visible')
    cy.get('.navigation > :nth-child(3)').contains('Tä­tig­kei­ten und Hob­bys').should('be.visible')
    cy.get('.navigation > :nth-child(4)').contains('Miete & Im­mo­bi­li­en').should('be.visible')
    cy.get('.navigation > :nth-child(5)').contains('Do­kumen­te').should('be.visible')
    cy.get('.product-group-action > .cta > :nth-child(2)').contains('Zum Online-Antrag').should('be.visible')
  })
});
