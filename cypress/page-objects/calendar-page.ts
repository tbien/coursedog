import EventsPage from './events-page';

export default class CalendarPage {
	private dayLocator = '.vc-weeks div';

	public selectDay(day: number) {
		cy.contains(this.dayLocator, day).click();
		return new EventsPage();
	}
}
