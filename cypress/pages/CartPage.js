class CartPage {
    addToCart() {
        cy.get('.btn-success').contains('Add to cart').click();
    }
    clickPlaceOrder() {
        cy.get('.btn-success').contains('Place Order').click();
        cy.wait(1000);
    }
    fillCheckoutForm(userData) {
        cy.get('#name').type(userData.name, { force: true });
        cy.get('#country').type(userData.country, { force: true });
        cy.get('#city').type(userData.city, { force: true });
        cy.get('#card').type(userData.card, { force: true });
        cy.get('#month').type(userData.month, { force: true });
        cy.get('#year').type(userData.year, { force: true });
    }
    submitPurchase() {
        cy.contains('button', 'Purchase').click();
    }
    verifyPurchaseSuccess() {
        cy.get('.sweet-alert').should('be.visible');
        cy.get('h2').should('contain', 'Thank you for your purchase!');
       // cy.get('.confirm').click();
    }
}
export default new CartPage();