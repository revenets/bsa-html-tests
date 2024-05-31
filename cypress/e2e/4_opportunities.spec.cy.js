import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Opportunities section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	// Title ----------------------------------------------------------------

	it("Opportunities title should be visible on desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".opportunities__title").should("exist").and("be.visible");
	});

	it("Opportunities title should be visible on tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".opportunities__title").should("exist").and("be.visible");
	});

	it("Opportunities title should be visible on mobile", () => {
		cy.viewport(393, 768);
		cy.get(".opportunities__title").should("exist").and("be.visible");
	});

	it("Opportunities title should have color white", () => {
		cy.get(".opportunities__title").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Opportunities title should contains exact text", () => {
		cy.get(".opportunities__title").contains(
			/Explore all opportunities of Catedemy/gi
		);
	});

	// Subtitle ----------------------------------------------------------------

	it("Opportunities subtitle should be visible on desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".opportunities__subtitle").should("exist").and("be.visible");
	});

	it("Opportunities subtitle should be visible on tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".opportunities__subtitle").should("exist").and("be.visible");
	});

	it("Opportunities subtitle should be visible on mobile", () => {
		cy.viewport(393, 768);
		cy.get(".opportunities__subtitle").should("exist").and("be.visible");
	});

	it("Opportunities subtitle should have color white", () => {
		cy.get(".opportunities__subtitle").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Opportunities subtitle should contains exact text", () => {
		cy.get(".opportunities__subtitle").contains(
			/you can find here tons of useful information and interesting, fun content. All in one place/gi
		);
	});

	// Opportunity item ----------------------------------------------------------------

	it("Opportunity item should have cursor pointer", () => {
		cy.get(".opportunity").should("have.css", "cursor", "pointer");
	});

	it("There should be 3 opportunity items", () => {
		cy.get(".opportunity__title").should("have.length.gte", 3);
	});

	it("Opportunity image should exist and be visible", () => {
		cy.get(".opportunity__image").should("exist").and("be.visible");
	});

	it("First opportunity title should contain exact text", () => {
		cy.get(".opportunity__title")
			.eq(0)
			.contains(/group lessons/gi);
	});

	it("Second opportunity titles should contain exact text", () => {
		cy.get(".opportunity__title")
			.eq(1)
			.contains(/videos/gi);
	});

	it("Third opportunity titles should contain exact text", () => {
		cy.get(".opportunity__title")
			.eq(2)
			.contains(/quizzes/gi);
	});
});
