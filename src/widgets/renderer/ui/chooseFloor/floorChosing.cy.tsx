import { FloorChosing } from "./floorChosing"

describe("floorChosing", () => {
  it("floorChosing mounts without elements", () => {
    cy.mount(<FloorChosing actions={[]} />)
    cy.get(".floors-container")
  })
  it("floorChosing mounts with 1 element", () => {
    cy.mount(<FloorChosing actions={[{ label: "1", onClick: () => void 0 }]} />)
    cy.get(".floors-container").click().should("contain.text", "1")
    cy.get(".floor").should("have.css", "border-radius", "8px")
  })
  it("floorChosing mounts with 2 elementы", () => {
    cy.mount(
      <FloorChosing
        actions={[
          { label: "1", onClick: () => void 0 },
          { label: "2", onClick: () => void 0 },
        ]}
      />,
    )
    cy.get(".floors-container")
      .click()
      .should("contain.text", "1")
      .should("contain.text", "2")
    cy.get(".floor:first-child()").should(
      "have.css",
      "border-radius",
      "8px 8px 0px 0px",
    )
    cy.get(".floor:last-child()").should(
      "have.css",
      "border-radius",
      "0px 0px 8px 8px",
    )
  })
})
