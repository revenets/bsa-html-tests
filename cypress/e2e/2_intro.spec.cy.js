import { CSS_COLORS } from "../../shared";
import { hexToRgb } from "../../helpers";

describe("Intro test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Intro container should have correct width", () => {
		cy.viewport("macbook-15");
		cy.get(".intro__container").then(($intro) => {
			const introWidth = $intro[0].offsetWidth;
			expect(introWidth).to.be.lte(1250);
		});
	});

	it("Intro content container should have exact background and border-radius", () => {
		cy.get(".intro__content")
			.should("have.css", "border-radius", "25px")
			.and("have.css", "background-image", CSS_COLORS.GRADIENT_PURPLE);
	});

	it("Intro content container should have exact paddings for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".intro__content").then(($content) => {
			const contentPadding = window
				.getComputedStyle($content[0])
				.padding.replace(/px/gi, "");
			expect(Number(contentPadding)).to.be.gte(45);
			expect(Number(contentPadding)).to.be.lte(55);
		});
	});

	it("Intro content container should have exact paddings for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".intro__content").then(($content) => {
			const contentPadding = window
				.getComputedStyle($content[0])
				.padding.replace(/px/gi, "");
			expect(Number(contentPadding)).to.be.gte(25);
			expect(Number(contentPadding)).to.be.lte(35);
		});
	});

	it("Intro content container should have exact paddings for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".intro__content").then(($content) => {
			const contentPadding = window
				.getComputedStyle($content[0])
				.padding.replace(/px/gi, "");
			expect(Number(contentPadding)).to.be.gte(15);
			expect(Number(contentPadding)).to.be.lte(25);
		});
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
			/Let's study, watch cool content and just have some fun together/gi
		);
	});

	it("Intro content subtitle image should be shown only for desktop and tablet resolution", () => {
		cy.viewport("macbook-15");
		cy.get(".intro__subtitle-image").should("be.visible");

		cy.viewport("ipad-mini");
		cy.get(".intro__subtitle-image").should("be.visible");

		cy.viewport(393, 768);
		cy.get(".intro__subtitle-image").should("not.be.visible");
	});

	it("Intro content two buttons should exist", () => {
		cy.get(".intro__button").should("be.visible");
		cy.get(".intro__button").should("have.length", 2);
	});

	it("Intro content Subscribe button should have exact styles", () => {
		cy.get(".intro__button")
			.first()
			.as("subscribe-btn")
			.contains(/subscribe/gi);
		cy.get("@subscribe-btn")
			.should(
				"have.css",
				"background-color",
				hexToRgb(CSS_COLORS.MAIN_ORANGE)
			)
			.and("have.css", "color", hexToRgb(CSS_COLORS.WHITE));
	});

	it("Intro content Watch intro button should have exact styles", () => {
		cy.get(".intro__button")
			.last()
			.as("watch-btn")
			.contains(/watch intro/gi);
		cy.get("@watch-btn")
			.should(
				"have.css",
				"border-color",
				hexToRgb(CSS_COLORS.MAIN_ORANGE)
			)
			.and("have.css", "color", hexToRgb(CSS_COLORS.MAIN_ORANGE));
	});
});
