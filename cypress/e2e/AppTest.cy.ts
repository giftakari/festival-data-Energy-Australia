describe('The home page', () => {
  it('Successfully renders', () => {
    cy.visit('http://localhost:4200/').wait(1000);
    cy.get('body > app-root > div:nth-child(1) > h3')
      .should('exist')
      .should('contain', 'Trainerella');
  });
  it('Check the body of the page', () => {
    cy.get('body > app-root > div:nth-child(2) > h3')
      .should('exist')
      .should('contain', 'LOL-palooza');
  });
  it('Checks if class of rendered list', () => {
    cy.get('body > app-root > div:nth-child(2) > ul:nth-child(2) > li').should(
      'have.class',
      'collection-item'
    );
  });
});
