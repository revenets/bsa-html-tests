import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Info section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Statistics section should have at least 3 items", () => {
		cy.get(".stat__item").should("have.length", 3);
	});

	it("Statistics section item should have title with all required attributes with color white", () => {
		cy.get(".stat__item-title").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
	});

	it("Statistics section item should have icon with all required attributes with color white", () => {
		cy.get(".stat__item-icon").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
	});

	it("Statistics section item should have value with all required attributes with color white", () => {
		cy.get(".stat__item-value").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
	});

	it("Comments section should have at least 3 comment items", () => {
		cy.get(".comment").should("have.length", 3);
	});

	it("Comments section should have all required attributes", () => {
		cy.get(".comment__photo").first().should("be.visible");
		cy.get(".comment__info").first().should("be.visible");
	});
});
