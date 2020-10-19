import EventsPage from './events-page';
import SearchResultsPage from './search-results-page';
import CreateNewEventPage from './create-new-event-page';

export default class NavigationMenu {
	private todaysEventsLocator: string = '[title="Today’s Events"]';
	private upcomingEventsLocator: string = '[title="Upcoming Events"]';
	private searchInputLocator: string = 'input[title="Events search"]';
	private createEventLocator: string = '#requestEventTypeSelect';

	public clickTodaysEventsLink() {
		cy.get(this.todaysEventsLocator).click();
		return new EventsPage();
	}

	public clickUpcomingEventsLink() {
		cy.get(this.upcomingEventsLocator).click();
		return new EventsPage();
	}

	public searchEvent(eventTitle: string) {
		if (eventTitle === null) cy.get(this.searchInputLocator).type('{enter}');
		else cy.get(this.searchInputLocator).type(eventTitle).type('{enter}');
		return new SearchResultsPage();
	}

	public selectCreatePublicEvent() {
		cy.get(this.createEventLocator).select('Public Events');
		return new CreateNewEventPage();
	}
}
