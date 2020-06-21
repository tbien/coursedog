import BasePage from './base-page';

export default class CreateNewEventPage extends BasePage {
	private disabledSubmitButtonLocator = 'button[disabled="disabled"]:contains(Submit)';
	private submitButtonLocator = 'button:contains(Submit)';
	private featuredEventYesLocator = 'div[aria-labelledby="Featured Event-help"] input[aria-label="Answer yes"]';
	private selectRoomButtonLocator = 'button:contains(Select Room)';
	private searchForRoomsButtonLocator = 'button:contains(Search for Available Rooms)';
	private roomsCardLocator = 'button[role="listitem"]';

	public requestNewEventFormIsDisplayed() {
		cy.contains('Request A New Event: Public Form').should('be.visible');
		return this;
	}

	public isSubmitButtonDisabled() {
		cy.get(this.disabledSubmitButtonLocator).should('be.visible');
		return this;
	}

	public setField(fieldsLabel: string, value: string) {
		cy.contains(fieldsLabel).siblings('input').clear().type(value);
		return this;
	}

	public setFeaturedEventYes() {
		cy.get(this.featuredEventYesLocator).click();
		return this;
	}

	public addMeeting() {
		cy.contains('button', 'Add Meeting').click();
		return this;
	}

	public clickSelectRoomButton() {
		cy.get(this.selectRoomButtonLocator).click();
		return this;
	}

	public selectFeatures(feature: string) {
		cy.contains('label', 'Features')
			.siblings('select[multiple]')
			.select(feature);
		return this;
	}

	public searchForAvailableRooms() {
		cy.get(this.searchForRoomsButtonLocator).click();
		return this;
	}

	public availableRoomsAreDisplayed(numberOfRooms: number) {
		cy.get(this.roomsCardLocator).should('have.length', numberOfRooms);
		return this;
	}

	public selectRoom(title: string) {
		cy.contains(this.roomsCardLocator, title).click();
		return this;
	}

	public isRoomSelected(title: string) {
		cy.contains(/^Room$/)
			.parent('label')
			.siblings('div')
			.find('input')
			.validateValue(title);
		return this;
	}

	public clickSubmitButton() {
		cy.server();
		cy.route('POST', '/api/v1/demoschool_ezra/publicEventRequests').as(
			'eventPost'
		);

		cy.get(this.submitButtonLocator).click();

		cy.wait('@eventPost').should((xhr) => {
			expect(xhr.method, 'proper POST request').to.equal('POST');
			expect(xhr.status, 'Successful Post').to.equal(201);
		});
		return this;
	}

	public confirmationMessageIsDisplayed(message: string) {
		cy.contains(message).should('be.visible');
	}
}
