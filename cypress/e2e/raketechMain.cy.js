/*
This is a technical testing Kata that we will use to gain insight and understanding into your approach to software test automation.
We are looking to assess your thought process, problem solving and programming ability, best practices as well as how you create and manage value adding automated tests.

Part one: UI Test
Please automate the following process:
1.Navigate to https://raketech.com/
2.Using the search functionality, look for the Products page (which is located here: https://raketech.com/products/
3.Navigate to: “CasinoGuide” and click on it. (See image below of what information you see)
4.Once you click on “CasinoGuide” you should find these icons appear: 
5.Click on the “Website” Icon to launch the “CasinoGuide” page, which is located here: “https://www.casinoguide.se/”

Requirements:
As part of the process here at Raketech, and to ensure that every challenge has equal rights there is a ground rule:
Please do not share it publicly, this is a private project for you and only you.
You can code in a language of your choice (Preferred language Javascript and Tools such as Playwright/Cypress) and use the time you need to complete the exercise. It is up to you to decide the implementation details.
Please upload your code to github and share the project URL with us
Ensure that the code is runnable and the steps to set up the project are included in a readme.
*/

/// <reference types="Cypress" />

describe('Visit Raketech Website', () => {
  beforeEach(() => {
    cy.visit('https://raketech.com/');
  });

  it('Navigate to CasinoGuide and click on the Website Icon to launch the CasinoGuide page', () => {
    cy.get('#search-btn').click();
    cy.get('input[name="s"]').wait(1000).type('Products page{enter}');
    cy.get('.title').contains('Products').click();
    cy.get('.team-member-image-inner').eq(0).click();
    cy.wait(3000);
    cy.get('.team-desc > .bottom_meta > [href="https://www.casinoguide.se"] > .icon-default-style').click();
  });
});