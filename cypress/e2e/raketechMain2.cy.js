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
        cy.get('.team-desc > .bottom_meta > [href="https://www.casinoguide.se"] > .icon-default-style').click();
        
        cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(true);
            cy.visit('https://www.casinoguide.se');
        });
    });
});