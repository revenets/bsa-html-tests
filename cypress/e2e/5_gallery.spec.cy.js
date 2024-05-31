import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Gallery section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	// Title ----------------------------------------------------------------

	it("Gallery title should be visible on desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".gallery__title").should("exist").and("be.visible");
	});

	it("Gallery title should be visible on tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".gallery__title").should("exist").and("be.visible");
	});

	it("Gallery title should be visible on mobile", () => {
		cy.viewport(393, 768);
		cy.get(".gallery__title").should("exist").and("be.visible");
	});

	it("Gallery title text should be white", () => {
		cy.get(".gallery__title").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Gallery title should contains exact text", () => {
		cy.get(".gallery__title").contains(/Enjoy Our Gallery/gi);
	});

	// Subtitle ----------------------------------------------------------------

	it("Gallery subtitle should be visible on desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".gallery__subtitle").should("exist").and("be.visible");
	});

	it("Gallery subtitle should be visible on tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".gallery__subtitle").should("exist").and("be.visible");
	});

	it("Gallery subtitle should be visible on mobile", () => {
		cy.viewport(393, 768);
		cy.get(".gallery__subtitle").should("exist").and("be.visible");
	});

	it("Gallery subtitle text should be white", () => {
		cy.get(".gallery__subtitle").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Gallery subtitle should contains exact text", () => {
		cy.get(".gallery__subtitle").contains(
			/Do not be shy to review and like my photos/gi
		);
	});

	// Photos ----------------------------------------------------------------

	it("There should be at least 5 photos in gallery", () => {
		cy.get(".photo").should("have.length.gte", 5);
	});
});
