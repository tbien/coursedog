declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command to validate element's text.
		 * @example cy.get('#id').validateText('No events today');
		 */
		validateText(text: string): Chainable<Element>;
	}
}
