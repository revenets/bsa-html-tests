import { hexToRgb } from "../../helpers";
import { CSS_COLORS } from "../../shared";

describe("Info section test", () => {
	beforeEach(() => {
		const layoutUrl = Cypress.env("LAYOUT_URL");
		cy.visit(layoutUrl);
	});

	it("Info container should have correct width for desktop", () => {
		cy.viewport("macbook-15");
		cy.get(".info__container").then(($info) => {
			const infoSectionWidth = $info[0].offsetWidth;
			expect(infoSectionWidth).to.be.lte(1144);
		});
	});

	it("Info container should have correct width for tablet", () => {
		cy.viewport("ipad-mini");
		cy.get(".info__container").then(($info) => {
			const infoSectionWidth = $info[0].offsetWidth;
			expect(infoSectionWidth).to.be.lte(768);
		});
	});

	it("Info container should have correct width for mobile", () => {
		cy.viewport(393, 768);
		cy.get(".info__container").then(($info) => {
			const infoSectionWidth = $info[0].offsetWidth;
			expect(infoSectionWidth).to.be.lte(393);
		});
	});

	it("Info container has background color and border radius", () => {
		cy.get(".info__container")
			.should("have.css", "border-radius", "25px")
			.and("have.css", "background-image", CSS_COLORS.GRADIENT_PURPLE);
	});

	it("Info container sections should have paddings gte 30px for tablet", () => {
		const minPaddingTablet = 30;

		cy.viewport("ipad-mini");
		cy.get(".info__container").then(($body) => {
			const bodyPadding = window
				.getComputedStyle($body[0])
				.padding.replace(/px/gi, "");
			expect(Number(bodyPadding)).to.be.gte(minPaddingTablet);
		});
	});

	it("Info container sections should have paddings gte 20px for mobile", () => {
		const minPaddingMobile = 20;

		cy.viewport(393, 768);
		cy.get(".info__container").then(($body) => {
			const bodyPadding = window
				.getComputedStyle($body[0])
				.padding.replace(/px/gi, "");
			expect(Number(bodyPadding)).to.be.gte(minPaddingMobile);
		});
	});

	it("Statistics section should have at least 3 items", () => {
		cy.get(".stat__item").should("have.length", 3);
	});

	it("Statistics section item should have all required attributes with color white", () => {
		cy.get(".stat__item-title").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
		cy.get(".stat__item-icon").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
		cy.get(".stat__item-value").should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
	});

	it("Comments section should have at least 3 comment items", () => {
		cy.get(".comment").should("have.length", 3);
	});

	it("Comments section should have all required attributes with color white", () => {
		cy.get(".comment__photo").first().should("be.visible");
		cy.get(".comment__info").first().should("be.visible").and('have.css', 'color', hexToRgb(CSS_COLORS.WHITE));
	});

	it("Comment photo should be rounded and have maximum width and height on desktop", () => {
		cy.get(".comment__photo").should("have.css", "border-radius", "50%");

		cy.get(".comment__photo").then(($photo) => {
			const photoWidth = $photo[0].offsetWidth;
			const photoHeight = $photo[0].offsetHeight;
			expect(photoWidth).to.be.lte(100);
			expect(photoHeight).to.be.lte(100);
		});
	});

	it("Comment photo should be rounded and have maximum width and height on mobile", () => {
		cy.viewport(393, 768);
		cy.get(".comment__photo").then(($photo) => {
			const photoWidth = $photo[0].offsetWidth;
			const photoHeight = $photo[0].offsetHeight;
			expect(photoWidth).to.be.lte(50);
			expect(photoHeight).to.be.lte(50);
		});
	});
});
