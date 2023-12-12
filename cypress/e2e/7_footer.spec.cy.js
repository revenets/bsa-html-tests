import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Footer test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Footer container should have correct width", () => {
		cy.viewport("macbook-15");
		cy.get(".footer__container").then(($header) => {
			const headerWidth = $header[0].offsetWidth;
			expect(headerWidth).to.be.lte(1144);
		});
	});

	it("Footer container horizontal paddings should be gte 40px for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".footer__container").then(($content) => {
			const contentPaddingLeft = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			const contentPaddingRight = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			expect(Number(contentPaddingLeft)).to.be.gte(40);
			expect(Number(contentPaddingRight)).to.be.gte(40);
		});
	});

	it("Footer container should have the same horizontal paddings for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".footer__container").then(($content) => {
			const contentPaddingLeft = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			const contentPaddingRight = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			expect(Number(contentPaddingLeft)).to.be.gte(35);
			expect(Number(contentPaddingLeft)).to.be.lte(45);

			expect(Number(contentPaddingRight)).to.be.gte(35);
			expect(Number(contentPaddingRight)).to.be.lte(45);
		});
	});

	it("Footer container should have the same horizontal paddings for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".footer__container").then(($content) => {
			const contentPaddingLeft = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			const contentPaddingRight = window
				.getComputedStyle($content[0])
				.paddingLeft.replace(/px/gi, "");

			expect(Number(contentPaddingLeft)).to.be.gte(35);
			expect(Number(contentPaddingLeft)).to.be.lte(45);

			expect(Number(contentPaddingRight)).to.be.gte(35);
			expect(Number(contentPaddingRight)).to.be.lte(45);
		});
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
