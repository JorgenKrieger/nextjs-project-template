describe('Check if CyPress works', () => {
  it('Homepage loaded', () => {
    cy.visit('http://localhost:3000')
  })
})