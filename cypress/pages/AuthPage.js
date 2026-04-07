class AuthPage {
    fillSignUp(username, password) {
        cy.get('#sign-username').type(username, { force: true });
        cy.get('#sign-password').type(password, { force: true });
        cy.get('button[onclick="register()"]').click();
    }
    fillLogin(username, password) {
        cy.get('#loginusername').type(username, { force: true });
        cy.get('#loginpassword').type(password, { force: true });
        cy.get('button[onclick="logIn()"]').click();
    }
    verifySuccessfulLogin(username) {
        cy.get('#nameofuser', { timeout: 10000 }).should('contain', username);
    }
}
export default new AuthPage();