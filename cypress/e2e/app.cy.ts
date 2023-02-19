
describe("homepage", () => {
  it("homepage map exists", () => {
    cy.visit("http://localhost:3000/")
    cy.get("ymaps").should("exist")
  })
  it("homepage universities list exists", () => {
    cy.visit("http://localhost:3000/")
    cy.get(".main__institutes").should("have.length.greaterThan", 0)
    cy.screenshot()
  })
})
