import { PopupButton } from "./popup-button"

describe("popup button", () => {
  it("popup portal should open", () => {
    cy.mount(<PopupButton onClick={() => 123} isOpen={true} message="btn" />)
    cy.get(".popup-button").should("exist")
  })
})
