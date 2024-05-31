import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Header test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Header should have a logo", () => {
		cy.get(".header__logo").should("be.visible");
	});

	it("Header menu should be shown for desktop screen", () => {
		cy.viewport("macbook-15");
		cy.get(".menu__link").should("be.visible");
	});

	it("Header menu should have menu links", () => {
		cy.viewport("macbook-15");
		cy.get(".menu__link").should("be.visible");
		cy.get(".menu__link").should("have.length.gte", 5);
	});

	it("All links should have cursor:pointer on hover", () => {
		cy.viewport("macbook-15");
		cy.get(".menu__link")
			.should("have.css", "cursor", "pointer")
			.and("have.css", "color", hexToRgb(CSS_COLORS.WHITE));
	});

	it("Last link in header nav should be subscribe button with styles", () => {
		cy.viewport("macbook-15");
		cy.get(".menu__link").eq(4).as("subscribeBtn");
		cy.get("@subscribeBtn").contains(/subscribe/gi);
		cy.get("@subscribeBtn")
			.should("have.css", "color", hexToRgb(CSS_COLORS.WHITE))
			.and(
				"have.css",
				"background-color",
				hexToRgb(CSS_COLORS.MAIN_ORANGE)
			);
	});

	it("Open menu button should be shown for tablet and mobile screens and hidden for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".menu__button").should("not.be.visible");

		cy.viewport("ipad-mini");
		cy.get(".menu__button").should("be.visible");

		cy.viewport(393, 768);
		cy.get(".menu__button").should("be.visible");
	});
});
