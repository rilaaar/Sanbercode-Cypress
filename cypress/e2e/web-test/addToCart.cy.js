import saucedemoPage from "../../support/pageObject/saucedemoPage"

describe('Saucedemo Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('')
    cy.intercept('POST', 'https://events.backtrace.io/api/unique-events/submit', (req) => {
      req.reply({ statusCode: 200 }); // Stub a successful response
    });
    cy.loginSaucedemo('standard_user','secret_sauce')
    cy.get('[data-test="title"]').should('contain.text','Products')
  })

  it.skip('login success', () => {                        // cara lama harus login dulu
  //  cy.config("defaultCommandTimeout", 15000);
    cy.loginSaucedemo('standard_user','secret_sauce')
    cy.get('[data-test="title"]').should('contain.text','Products')

    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    saucedemoPage.addBackpack()
    saucedemoPage.verifyCart('1')

    //cy.get('[data-test="shopping-cart-link"]').should('contain.text','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain.text','1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    
    //cy.get('[data-test="shopping-cart-link"]').should('contain.text','2')
    saucedemoPage.verifyCart('2')
    cy.wait(500)
    cy.url().should('include','/cart.html')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text','Sauce Labs Bike Light')
  })

  it('Verify to successfully add to cart', () => {                        // cara 1 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain.text','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain.text','1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain.text','2')
    cy.url().should('include','/cart.html')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text','Sauce Labs Bike Light')
  }) 

  it('Verify to successfully add to cart (POM)', () => {                        // cara 2
    saucedemoPage.addBackpack()
    saucedemoPage.verifyCart('1')
    saucedemoPage.clickRemoveBackpack()
    saucedemoPage.verifyCart('')
    saucedemoPage.addBikeLight()
    saucedemoPage.addTShirt()
    saucedemoPage.clickCart()
    saucedemoPage.verifyCart('2')
    saucedemoPage.VerifyURLCart()
    saucedemoPage.verifyCartList()
  })
  it('Verify to successfully add to cart', () => {                        // cara 3
    cy.get(saucedemoPage.backpack).click()
    cy.get(saucedemoPage.cart).should('contain.text','1')
    cy.get(saucedemoPage.removeBackpack).click()
    cy.get(saucedemoPage.cart).should('not.contain.text','1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get(saucedemoPage.cart).click()
    cy.get(saucedemoPage.cart).should('contain.text','2')
    cy.url().should('include','/cart.html')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text','Sauce Labs Bike Light')
  })
})