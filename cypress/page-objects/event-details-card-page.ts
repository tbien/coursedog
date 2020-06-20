export default class EventDetailsCardPage {
	//locators
	private addToCalendarLocator: string = 'article div > button';
	private addToGoogleCalendarLocator: string = 'article div > a > button';
	private address: string = 'article p.text-grey-darker';
	private eventType: string = 'Event Type';
    private organizationLocator: string = 'article label:contains(Organized by) ~ div a';
    private upcomingEvents: string = 'aside .card';

	public addToCalendarLinkIsVisible() {
		cy.get(this.addToCalendarLocator).should('be.visible');
		return this;
	}

	public addToGoogleCalendarLinkIsVisible() {
		cy.get(this.addToGoogleCalendarLocator).should('be.visible');
		return this;
	}

	public addressIsVisible(address: string) {
		cy.contains(this.address, address).should('be.visible');
		return this;
	}

	public eventTypeIsVisible(eventType: string) {
		cy.get('article')
			.contains(this.eventType)
			.siblings()
			.find('a')
			.validateText(eventType);
		return this;
	}

	public organizationIsVisible(organization: string) {
		cy.get(this.organizationLocator).validateText(organization);
		//i will leave this comment to compare locator with cypress finding mechanism
		//cy.get('article').contains(this.organization).siblings().find('a').validateText(organization)
		return this;
	}

	public upcomingEventsCardsAreVisible(numberOfMeetings: number) {
		cy.get(this.upcomingEvents).should('have.length', numberOfMeetings);
	}
}
