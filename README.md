
Approach and Design:

I decided to use the page object model to keep the code organized and easy to maintain. By separating page actions from the test logic, the framework becomes much more scalable.

Technical Choices
Pom structure: I created separate classes for Home, Auth, and Cart pages.
Fixtures:  Instead of hardcoding test data, I moved it into a JSON file (`checkoutData.json`).
Dynamic Users: I used `Date.now()` to generate unique usernames so the tests can run repeatedly without "user already exists" errors.
CI/CD: I set up a GitHub Actions workflow to run the tests automatically on every push.

Setting up and running:

Clone the repo:
   ```bash
   git clone [https://github.com/OsmanEsen/demoblaze-cypress-e2e.git](https://github.com/OsmanEsen/demoblaze-cypress-e2e.git)
   cd demoblaze-cypress-e2e
