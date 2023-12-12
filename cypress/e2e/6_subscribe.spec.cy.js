import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Subscribe section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Subscribe container should have correct width for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".subscribe__container").then(($body) => {
			const bodyWidth = $body[0].offsetWidth;
			expect(bodyWidth).to.be.lte(1144);
		});
	});

	it("Subscribe container should have correct width for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".subscribe__container").then(($body) => {
			const bodyWidth = $body[0].offsetWidth;
			expect(bodyWidth).to.be.lte(768);
		});
	});

	it("Subscribe container should have correct width for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".subscribe__container").then(($body) => {
			const bodyWidth = $body[0].offsetWidth;
			expect(bodyWidth).to.be.lte(393);
		});
	});

	it("Subscribe container has background color and border radius", () => {
		cy.get(".info__body")
			.should("have.css", "background-image", CSS_COLORS.GRADIENT_PURPLE)
			.and("have.css", "border-radius", "25px");
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
