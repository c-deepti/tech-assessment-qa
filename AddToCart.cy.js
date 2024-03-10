

describe('Test', function()
{

it('TestCase 1', function(){

// Navigates to the Website
cy.visit("https://www.harveynorman.com.au/computers-tablets/computers/laptops")

// Select the first product from the grid, click on Find in store
cy.get('.CtaButtons_cta-buttons-row__gqMoi').find('.DlsButton_dls-button__sy9wt.btn-secondary.btn-small.btn-full-width').eq(0).contains('Find in store').click()

//Set the location with Post code
cy.get('.react-autosuggest__input').type('2150')
cy.wait(4000)

//Select the first option in dropdown
cy.get('.react-autosuggest__suggestions-list').find('.react-autosuggest__suggestion.react-autosuggest__suggestion--first').click()
cy.wait(2000)

//Checks if the product is in stock. Select the first address from the list options of addressess
cy.get('.CheckStoreStockStoreListAccordionItem_sf-check-store-stock-store-list-accordion-item-title__3S6Jv').eq(0).click()
cy.wait(1000)

//Click on Add to Cart. Adds the product to shopping cart.
cy.get('.CheckStoreStockStoreListAccordion_sf-check-store-stock-store-list-accordion__IAz25').find('.DlsButton_dls-button__sy9wt.btn-hero.btn-small.btn-full-width').eq(0).click()
cy.wait(3000)

//Enter or identify the Pop up(toast) having the title "Item added to Cart"
cy.get('.Toastify').within(() => {

    //Make the pop up to be on the screen for a longer time than usual as it disappears in 8 secs
    cy.get('.Toastify__toast-body').children().should('be.visible')
    
    //Click on the View cart button
    cy.get('button:contains("View cart")').click()
    
})

//After clicking on the View cart, it navigates to the Cart page(Shopping cart), where you can see the product added.

})
})