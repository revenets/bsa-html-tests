import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Subscribe section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Subscribe title text should have color white", () => {
		cy.get(".subscribe__title").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Subscribe subtitle text should have color white", () => {
		cy.get(".subscribe__subtitle").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Subscribe title should have exact text", () => {
		cy.get(".subscribe__title").contains(/You are in great paws!/gi);
	});

	it("Subscribe subtitled should have exact text", () => {
		cy.get(".subscribe__subtitle").contains(
			/Subscribe to get more information about upcoming courses and new videos/gi
		);
	});

	it("Subscribe email input should exist and have exact  placeholder", () => {
		cy.get(".subscribe__email").should("be.visible");
		cy.get(".subscribe__email").should(
			"have.attr",
			"placeholder",
			"Your email address"
		);
	});

	it("Subscribe button should exist and have exact text white text and orange background", () => {
		cy.get(".subscribe__button")
			.should("be.visible")
			.contains(/subscribe/gi);
	});

	it("Subscribe button should have white text", () => {
		cy.get(".subscribe__button").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Subscribe button should have orange background", () => {
		cy.get(".subscribe__button").should(
			"have.css",
			"background-color",
			hexToRgb(CSS_COLORS.MAIN_ORANGE)
		);
	});

	it("Subscribe image should be visible", () => {
		cy.get(".subscribe__image").should("be.visible");
	})
});
