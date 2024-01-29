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

        // Use cy.window() para realizar a navegação na segunda instância
        cy.window().then((win) => {
            cy.visit('https://www.casinoguide.se', () => {
            });
        });
    });

});

describe('Visit CasinoGuide Website', () => {
    beforeEach(() => {
        cy.visit('https://www.casinoguide.se/');
    });

    it('should validate the presence of "Casino Online"', () => {
        cy.get('body').should('include.text', 'Casino Online');
        cy.get('.MuiBox-root.mui-19wexfc').should('include.text', 'Casino Online');
        cy.get(':nth-child(1) > .MuiContainer-root > p').should('include.text', 'Vi på CasinoGuide har jämfört och granskat online casinon sedan 2003. Vår passion är att erbjuda dig vägledning inom casinobranchen. Med hälp av våra uppdaterade recensioner, guider och nyhetsartiklar får du full koll på vad som är på gång. Utforska dagens vassaste casinon i vår topplista nedan!');
        cy.title().should('not.be.empty');
        cy.title().should('include', 'Casino Online 🎖️ Jämför Alla Online Casinon - Lista 2024');
    });
});

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
            cy.visit('https://www.casinoguide.se', () => {

                cy.contains('body', 'Casino Online').should('exist');
                cy.contains('.MuiBox-root.mui-19wexfc', 'Casino Online').should('exist');
                cy.contains(':nth-child(1) > .MuiContainer-root > p', 'Vi på CasinoGuide har jämfört och granskat online casinon sedan 2003.').should('exist');

                // Use cy.title() directly for title assertions
                cy.title().should('not.be.empty');
                cy.title().should('include', 'Casino Online 🎖️ Jämför Alla Online Casinon - Lista 2024');
            });
        });
    });
});
