//Custom command to validate element's text;
Cypress.Commands.add(
	'validateText',
	{ prevSubject: 'element' },
	(subject, text) => {
		cy.wrap(subject)
			.invoke('text')
			.then((x) => {
				expect(x.trim()).equal(text);
			});
	}
);

//Custom command to validate element's text;
Cypress.Commands.add(
	'validateValue',
	{ prevSubject: 'element' },
	(subject, value) => {
		cy.wrap(subject)
			.invoke('val')
			.then((x) => {
				expect(x.trim()).equal(value);
			});
	}
);
