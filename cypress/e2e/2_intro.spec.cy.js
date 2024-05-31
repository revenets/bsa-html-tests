import { CSS_COLORS } from "../../shared";
import { hexToRgb } from "../../helpers";

describe("Intro test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Intro should have a main image", () => {
		cy.get(".intro__image").should("exist");
	});

	it("Intro content section title should have white color", () => {
		cy.get(".intro__title")
			.should("be.visible")
			.and("have.css", "color", hexToRgb(CSS_COLORS.WHITE));
	});

	it("Intro content section should have exact title", () => {
		cy.get(".intro__title").contains(/Your puRRRfect educator/gi);
	});

	it("Intro content subtitle text should have white color", () => {
		cy.get(".intro__subtitle-text")
			.should("be.visible")
			.and("have.css", "color", hexToRgb(CSS_COLORS.WHITE));
	});

	it("Intro content subtitle text should exist", () => {
		cy.get(".intro__subtitle-text").contains(
			/study, watch cool content and just have some fun together/gi
		);
	});

	it("Intro content subtitle image should be shown only for desktop and tablet resolution", () => {
		cy.viewport("macbook-15");
		cy.get(".intro__subtitle-image").should("be.visible");

		cy.viewport("ipad-mini");
		cy.get(".intro__subtitle-image").should("be.visible");
	});

	it("Intro content subtitle image should not be shown for mobile devices", () => {
		cy.viewport(393, 768);
		cy.get(".intro__subtitle-image").should("not.be.visible");
	});

	it("Intro content two buttons should exist", () => {
		cy.get(".intro__button").should("be.visible");
		cy.get(".intro__button").should("have.length", 2);
	});

	it("Intro content Subscribe button should exist", () => {
		cy.get(".intro__button")
			.first()
			.as("subscribe-btn")
			.contains(/subscribe/gi);
	});

	it("Intro content Watch intro button should exist", () => {
		cy.get(".intro__button")
			.last()
			.as("watch-btn")
			.contains(/watch intro/gi);
	});
});
