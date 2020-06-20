import BasePage from './base-page';
import NavigationMenu from './navigation-page';
import EventDetailsCardPage from './event-details-card-page';

export default class EventsPage extends BasePage {
	//page elements locators
	private eventCardLocator: string = '.card > div.card-content';
	private cardTitle: string = 'div.card div.card-content> a';

	public navigationMenu: NavigationMenu = new NavigationMenu();

	public eventCardIsNotDisplayed() {
		cy.get(this.eventCardLocator).should('not.exist');
		return this;
	}

	public eventCardIsDisplayed(title: string) {
		cy.get(this.eventCardLocator).should('exist').should('be.visible');
		cy.contains(this.cardTitle, title).should('exist').should('be.visible');
		return this;
	}

	public validateNumberOfDisplayedCards(numberOfCards: number) {
		cy.get(this.eventCardLocator).should('have.length', numberOfCards);
		return this;
	}

	public clickEventCardWithTitle(title: string) {
		cy.contains(this.cardTitle, title).click();
		return new EventDetailsCardPage();
	}
}
