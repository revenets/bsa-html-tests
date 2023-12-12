import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Opportunities section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	// Title ----------------------------------------------------------------

	it("Opportunities container should have correct width", () => {
		cy.viewport("macbook-15");
		cy.get(".opportunities__container").then(($intro) => {
			const introWidth = $intro[0].offsetWidth;
			expect(introWidth).to.be.lte(1144);
		});

		cy.viewport("ipad-mini");
		cy.get(".opportunities__container").then(($info) => {
			const infoSectionWidth = $info[0].offsetWidth;
			expect(infoSectionWidth).to.be.lte(768);
		});

		cy.viewport(393, 768);
		cy.get(".opportunities__container").then(($info) => {
			const infoSectionWidth = $info[0].offsetWidth;
			expect(infoSectionWidth).to.be.lte(393);
		});
	});

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

	it("Opportunities title should not be wider then 744px for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".opportunities__title").then(($title) => {
			const titleWidth = $title[0].offsetWidth;
			expect(titleWidth).to.be.lte(744);
		});
	});

	it("Opportunities title should not be wider then 478px for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".opportunities__title").then(($title) => {
			const titleWidth = $title[0].offsetWidth;
			expect(titleWidth).to.be.lte(478);
		});
	});

	it("Opportunities title should not be wider then 312px for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".opportunities__title").then(($title) => {
			const titleWidth = $title[0].offsetWidth;
			expect(titleWidth).to.be.lte(313);
		});
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
			/Explore all opportunities of Bulka Academy/gi
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

	it("Opportunities subtitle should not be wider then 744px for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".opportunities__subtitle").then(($subtitle) => {
			const subtitleWidth = $subtitle[0].offsetWidth;
			expect(subtitleWidth).to.be.lte(744);
		});
	});

	it("Opportunities subtitle should not be wider then 600px for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".opportunities__subtitle").then(($subtitle) => {
			const subtitleWidth = $subtitle[0].offsetWidth;
			expect(subtitleWidth).to.be.lte(600);
		});
	});

	it("Opportunities subtitle should not be wider then 312px for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".opportunities__subtitle").then(($subtitle) => {
			const subtitleWidth = $subtitle[0].offsetWidth;
			expect(subtitleWidth).to.be.lte(313);
		});
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

	it("Opportunity title should contain exact text", () => {
		cy.get(".opportunity__title")
			.eq(0)
			.contains(/group lessons/gi);
		cy.get(".opportunity__title")
			.eq(1)
			.contains(/videos/gi);
		cy.get(".opportunity__title")
			.eq(2)
			.contains(/quizzes/gi);
	});

	it("Opportunity title should have color white", () => {
		cy.get(".opportunity__title").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Opportunity text should have color white", () => {
		cy.get(".opportunity__text").should(
			"have.css",
			"color",
			hexToRgb(CSS_COLORS.WHITE)
		);
	});

	it("Opportunity text horizontal padding or margin check", () => {
		cy.get(".opportunity__text").then(($text) => {
			const computedPadding = Number(
				window.getComputedStyle($text[0]).paddingLeft.replace(/px/g, "")
			);
			const computedMargin = Number(
				window.getComputedStyle($text[0]).marginLeft.replace(/px/g, "")
			);

			const expectedMinValue = 20;
			const expectedMaxValue = 30;

			const hasPaddingOrMargin =
				(computedPadding >= expectedMinValue &&
					computedPadding <= expectedMaxValue) ||
				(computedMargin >= expectedMinValue &&
					computedMargin <= expectedMaxValue);

			expect(hasPaddingOrMargin).to.equal(true);
		});
	});
});
