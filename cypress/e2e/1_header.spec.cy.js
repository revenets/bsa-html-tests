import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Header test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Header container should have correct width", () => {
		cy.viewport("macbook-15");
		cy.get(".header__container").then(($header) => {
			const headerWidth = $header[0].offsetWidth;
			expect(headerWidth).to.be.lte(1144);
		});
	});

	it("Header container horizontal paddings should be gte 40px for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".header__container").then(($content) => {
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

	it("Header container should have the same horizontal paddings for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".header__container").then(($content) => {
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

	it("Header container should have the same horizontal paddings for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".header__container").then(($content) => {
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
		cy.get(".menu__link").last().as("subscribeBtn");
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
