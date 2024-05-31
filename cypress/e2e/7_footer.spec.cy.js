import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Footer test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

    it("Footer should have at least 3 social media links", () => {
        cy.get(".social__link").should("have.length.gte", 3);
    })

    it("Footer should have at least 4 navigation links", () => {
        cy.get(".footer__link").should("have.length.gte", 4);
    })

    it("Footer navigation links text should be white", () => {
        cy.get(".footer__link").should("have.css", "color", hexToRgb(CSS_COLORS.WHITE));
    })
});
