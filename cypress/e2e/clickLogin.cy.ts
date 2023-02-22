describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://walt-qa.lean-tech.io');
    cy.get('button').click()
  });
  /*it('Reload page', () => {
    cy.reload();
  });*/
});
