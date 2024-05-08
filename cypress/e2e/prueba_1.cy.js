describe('template spec', () => {
  it('passes', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/')
    // eslint-disable-next-line no-undef
    cy.get('#nombre').type('Johnny Depp')
    // eslint-disable-next-line no-undef
    cy.get('#correo').type('johnny@example.com')
    // eslint-disable-next-line no-undef
    cy.get('#teléfono').type('+523512345678')
    // eslint-disable-next-line no-undef
    cy.get('#password').type('Password123')
    // eslint-disable-next-line no-undef
    cy.get('#confirmPassword').type('Password123')
    // eslint-disable-next-line no-undef
    cy.get('button[type="submit"]').click()
  })

  
})