
it("homepage map exists", () => {
  cy.visit("http://localhost:3000/")
  cy.get("ymaps").should("exist")
})
