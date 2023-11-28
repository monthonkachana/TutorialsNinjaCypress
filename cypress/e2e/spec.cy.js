
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test 
  return false
})

it('DEMO', function () {
  cy.visit('https://inderpsingh.blogspot.com/p/demo-web-page-for-testing.html')
  cy.get("#my_name").type("max")
  cy.get("#my_number").select("Two")
  cy.get("#my_colors").select(17)
})