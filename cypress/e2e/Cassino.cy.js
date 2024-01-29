/// <reference types="Cypress" />

describe('Visit www.casinoguide.se', () => {
    beforeEach(() => {
        cy.visit('https://www.casinoguide.se/');
        //HAVE A LOOK E2E.JS: returning false here prevents Cypress from failing the test when an uncaught exception occurs
    });

    it('should validate the presence of "Casino Online"', () => {
        cy.get('body').should('include.text', 'Casino Online');
        cy.get('.MuiBox-root.mui-19wexfc').should('include.text', 'Casino Online');
        cy.get(':nth-child(1) > .MuiContainer-root > p').should('include.text', 'Vi på CasinoGuide har jämfört och granskat online casinon sedan 2003. Vår passion är att erbjuda dig vägledning inom casinobranchen. Med hälp av våra uppdaterade recensioner, guider och nyhetsartiklar får du full koll på vad som är på gång. Utforska dagens vassaste casinon i vår topplista nedan!');
        cy.title().should('not.be.empty');
        cy.title().should('include', 'Casino Online 🎖️ Jämför Alla Online Casinon - Lista 2024');
    });
});
