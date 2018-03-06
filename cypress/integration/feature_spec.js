describe('Negotiator', function () {
  const visitApp = () => cy.visit('http://localhost:8080/')

  const enterEmployerMaxOfferedSalary = (maxOfferedSalary) => {
    cy.get('#moneyInput').type(maxOfferedSalary)
    cy.get('button:first').click()
  }

  const enterEmployeeMinExpectedSalary = (minExpectedSalary) => {
    cy.get('#moneyInput').type(minExpectedSalary)
    cy.get('button:first').click()
  }

  const goToEmployerTab = () => cy.contains('Employee').click()

  const checkSuccess = () => cy.contains('SUCCESS!')

  const checkFailure = () => cy.contains('FAILURE!')

  it('Negotiation is successful', function () {
    visitApp()
    enterEmployerMaxOfferedSalary(30000)
    goToEmployerTab()
    enterEmployeeMinExpectedSalary(20000)
    checkSuccess()
  })

  it('Negotiation is unsuccessful', function () {
    visitApp()
    enterEmployerMaxOfferedSalary(30000)
    goToEmployerTab()
    enterEmployeeMinExpectedSalary(40000)
    checkFailure()
  })
})
