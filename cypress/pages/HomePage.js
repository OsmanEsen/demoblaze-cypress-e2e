class HomePage {
    visit() { 
        cy.visit('https://www.demoblaze.com'); 
    }
    clickSignUp() { 
        cy.get('#signin2').click(); 
        cy.wait(1000);
    }
    clickLogin() { 
        cy.get('#login2').click(); 
        cy.wait(1000);
    }
    goToCart() { 
        cy.get('#cartur').click(); 
        cy.wait(1500);
    }
    selectCategory(category) { 
        cy.contains(category).click(); 
        cy.wait(1500); 
    }
    selectProduct(productName) { 
        cy.contains(productName).click(); 
        cy.wait(1500); 
    }
}
export default new HomePage();