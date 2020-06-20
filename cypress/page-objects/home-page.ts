import BasePage from './base-page';
import NavigationMenu from './navigation-page';
import EventsPage from './events-page';

export default class HomePage extends BasePage {
	public navigationMenu: NavigationMenu = new NavigationMenu();

	public open() {
		cy.visit(this.homePageUrl);
		return this;
	}

	public clickTodaysEvents() {
		this.navigationMenu.clickTodaysEventsLink();
		return new EventsPage();
	}
}
