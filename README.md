[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# Modern testing for Raketech.
This is a technical repository with a challenge that contains problem-solving, programming ability, and best practices.
This repository contains a technical challenge involving front-end automation. Using the Java Script language and the Cypress framework.
Site: https://raketech.com/

### Suggested IDEs by [Cypress documentation](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins):
- VsCode (Best option to work with Cypress and it's free). 
- Intellij (Alternative solution, also free)

### Official framework links:
- [Cypress website](https://www.cypress.io/).
- The API documentation is available [here](https://docs.cypress.io/api/api/table-of-contents.html).
---

## Dependencies
### NodeJS setup:
You need to install the Node.js as the main dependency to use Cypress in this project.
You can click in [here](https://nodejs.org/en/) to download the latest stable Node version.

Open a terminal or command prompt.
Navigate to the root directory of your Node.js project (where your package.json file is located).
Run the following command:
> ```bash
>  npm install
> ```

This will read the package.json file and install all the dependencies specified in the dependencies and devDependencies sections.
Optionally, you can also run npm ci instead of npm install for a clean install using the exact versions specified in the package-lock.json file.
Wait for the command to complete. npm will download and install the dependencies into a node_modules folder in your project.
This command is crucial when setting up a new project or when someone else shares their project with you, as it installs all the necessary packages and dependencies specified in the project's package.json file.

After that, you can clone this repository in your local machine.
> ```bash
>  git clone git@github.com:rcardosopereira/raketechJS.git
> ```
Check your current version. The version of this project is:
-NPM Version 10.2.3
-NODE Version v21.2.0

---

## Running the tests
### Cypress run
Cypress give us the ability to run all tests without a test runner interface.
To do this, just run the following command:
> ```bash
> npm run test
> ```

### Cypress test runner interface:
To open the Cypress and run the tests separately, run:
> ```bash
> npm run cypress:open 
> ```
click on E2E Testing
And run with Electron (v114) first.

If you want to run the tests in another one, just add browser and the name of the browser in the command. More info in [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).

### Issue:
An unknown error was found in the application https://www.casinoguide.se/

The following error originated from your application code, not from Cypress.
  > Minified React error #418; visit https://reactjs.org/docs/error-decoder.html?invariant=418 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.
Because this error occurred during a before each hook we are skipping the remaining tests in the current suite: Visit www.casinoguide.se

The palliative solution:
Inside the [folder]: ../cypress/support/ 
access the *e2e.js* file and uncomment lines 19 and 25.

### Reference: 
https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
           

### Project Structure
1. API.cy.js: the solution to the API challenge was created;
2. Cassino.cy.js: a solution was created to perform some validations in the casinoguide.se application;
3. raketechMain.cy.js: the solution for the UI test challenge was created;
4. raketechMain2.cy.js: the solution to the UI test challenge was created, implementing the cypress cy.window() function for the casinoguide.se application to display within the cypress panel as well.
5. raketechMain2Full.cy.js: there´s a complete final version of Raketech site and Cassino site as well.

### Docker
To run the test in the Docker, please run the command below:
> ```bash
> docker run -it raketech
> ```

To create or update your Docker image, run the command below:
> ```bash
> docker build -t <image_name> .
> ```

### This will install Cypress locally as a dev dependency for your project.
> ```bash
>  npm install cypress --save-dev
> ```


### Support
Please, if you have some questions, feel free to write me. My e-mail is rcardosopereira@gmail.com
Thank you very much ;-)
