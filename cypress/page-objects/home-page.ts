import BasePage from './base-page';
import NavigationMenu from './navigation-page';
import CalendarPage from './calendar-page';

export default class HomePage extends BasePage {
	public navigationMenu: NavigationMenu = new NavigationMenu();
	public calendar: CalendarPage = new CalendarPage();

	public open() {
		cy.visit(this.homePageUrl);
		return this;
	}
}
