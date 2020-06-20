import EventsPage from "./events-page";

export default class SearchResultsPage {
	//locators
    private searchResultsCardLocator: string = '#search-results div.card';
    private searchInputLocator: string = '#search-input';
    private organizationDropdownLocator: string = '#main-content #orgSelect';
    
    public eventCard: EventsPage = new EventsPage()

	public searchResultsPhraseIsVisible(phrase: string) {
        cy.contains(`Search results for "${phrase}"`).should('be.visible');
        return this;
    }
    
    public searchResultsCardsAreVisible(numberOfCards: number) {
        cy.get(this.searchResultsCardLocator).should('have.length', numberOfCards);
        return this;
    }

    public clearSearchInput() {
        cy.get(this.searchInputLocator).clear().type('{enter}');
        return this;
    }

    public selectOrganization(organization: string) {
        cy.get(this.organizationDropdownLocator).select(organization);
    }
}
