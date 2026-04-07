import homePage from '../pages/HomePage';
import authPage from '../pages/AuthPage';
import cartPage from '../pages/CartPage';

describe('Demoblaze E-Commerce Smoke Test Suite', () => {
    
    // Generate a unique username for each test run to avoid conflicts
    const username = 'qa_user_' + Date.now();
    const password = 'password123';

    before(() => {
        // Globally catch window alerts to handle delayed API responses seamlessly
        cy.on('window:alert', (text) => {
            expect(text).to.be.oneOf([
                'Sign up successful.',
                'This user already exist.',
                'Product added',
                'Product added.'
            ]);
        });
    });

    beforeEach(() => {
        // Visit the homepage before each test to ensure a clean state
        homePage.visit();
    });

    // --- TEST 1: User Registration ---
    it('Test 1: Should successfully sign up a new user', () => {
        homePage.clickSignUp();
        authPage.fillSignUp(username, password);
        // Wait for the API to process the registration request
        cy.wait(2000); 
    });

    // --- TEST 2: User Authentication ---
    it('Test 2: Should successfully log in with the created user', () => {
        homePage.clickLogin();
        authPage.fillLogin(username, password);
        // Wait for the API to process the login request
        cy.wait(2000); 
        
        // Assert that the user is successfully logged in
        authPage.verifySuccessfulLogin(username);
    });

    // --- TEST 3: End-to-End Purchase Flow ---
    it('Test 3: Should add a laptop to the cart and complete the purchase', () => {
        // Authenticate the user before proceeding with the purchase
        homePage.clickLogin();
        authPage.fillLogin(username, password);
        cy.wait(2000);

        // Category and Product selection
        homePage.selectCategory('Laptops');
        homePage.selectProduct('Sony vaio i5');
        
        // Add the selected item to the cart
        cartPage.addToCart();

        // Navigate to the cart and finalize the order
        homePage.goToCart();
        cartPage.clickPlaceOrder();
        
        // Fetch data from the fixture file and fill the form
        cy.fixture('checkoutData').then((data) => {
            cartPage.fillCheckoutForm(data);
        });
        
        cartPage.submitPurchase();

        // Assert the final success message modal
        cartPage.verifyPurchaseSuccess();
    });
});