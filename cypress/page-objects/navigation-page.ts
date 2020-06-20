import EventsPage from './events-page';
import SearchResultsPage from './search-results-page';

export default class NavigationMenu {
	private todaysEventsLocator: string = '[title="Today’s Events"]';
	private upcomingEventsLocator: string = '[title="Upcoming Events"]';
	private searchInputLocator: string = 'input[title="Events search"]';

	public clickTodaysEventsLink() {
		cy.get(this.todaysEventsLocator).click();
		return new EventsPage();
	}

	public clickUpcomingEventsLink() {
		cy.get(this.upcomingEventsLocator).click();
		return new EventsPage();
	}

	public searchEvent(eventTitle: string) {
		cy.get(this.searchInputLocator).type(eventTitle).type('{enter}');
		return new SearchResultsPage();
	}
}
