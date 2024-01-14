/*
Part two: API Test
Create an API Test that executes a GET request to: https://swapi.dev/api/people/ and assert that R2-D2’s skin colour is white and blue.

Requirements:
As part of the process here at Raketech, and to ensure that every challenge has equal rights there is a ground rule:
Please do not share it publicly, this is a private project for you and only you.
You can code in a language of your choice (Preferred language Javascript and Tools such as Playwright/Cypress) and use the time you need to complete the exercise. It is up to you to decide the implementation details.
Please upload your code to github and share the project URL with us
Ensure that the code is runnable and the steps to set up the project are included in a readme.
*/

/// <reference types="cypress" />

describe('Star Wars API Test', () => {
  it('should assert R2-D2’s name and skin color', () => {
    cy.request('https://swapi.dev/api/people/')
      .then((response) => {
        // Assert the response status code is 200
        expect(response.status).to.equal(200);

        // Find the character with name "R2-D2" in the results
        const r2d2 = response.body.results.find((character) => character.name === 'R2-D2');

        // Assert that R2-D2 is found in the results
        expect(r2d2).to.exist;

        // Assert R2-D2's skin color is "white, blue"
        const expectedSkinColor = 'white, blue';
        expect(r2d2.skin_color.toLowerCase()).to.equal(expectedSkinColor);
      });
  });
});
