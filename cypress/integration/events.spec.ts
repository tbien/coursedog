import HomePage from '../page-objects/home-page';

describe('Events test', () => {
	var homePage = new HomePage();

	beforeEach(() => {
		homePage.setDesktop().open();
	});

	it('should check there are no any planned events for 2020-06-16', () => {
		homePage
			.setDate('2020-06-16')
			.navigationMenu.clickTodaysEventsLink()
			.notificationIsDisplayed('No events today')
			.eventCardIsNotDisplayed();
	});

	it('should check there is one planned event for 2020-06-18 and 3 upcoming events for entire week', () => {
		homePage
			.setDate('2020-06-18')
			.navigationMenu.clickTodaysEventsLink()
			.eventCardIsDisplayed('QA Recruitment Task Start')
			.navigationMenu.clickUpcomingEventsLink()
			.validateNumberOfDisplayedCards(3);
	});

	it('should check meeting card details', () => {
		homePage
			.setDate('2020-06-18')
			.navigationMenu.clickUpcomingEventsLink()
			.clickEventCardWithTitle('QA Task Submission')
			.addToCalendarLinkIsVisible()
			.addToGoogleCalendarLinkIsVisible()
			.addressIsVisible('Your Office')
			.eventTypeIsVisible('QA Recruitment')
			.organizationIsVisible('Coursedog Team')
			.upcomingEventsCardsAreVisible(2);
	});

	it('should check search input functionality', () => {
		homePage
			.setDate('2020-06-18')
			.navigationMenu.searchEvent('Finale')
			.searchResultsCardsAreVisible(1)
			.showingNumberOfResultsInformationIsCorrect(1)
			.eventCard.eventCardIsDisplayed('QA Recruitment Finale');
	});

	it('should check filtering by organization', () => {
		homePage
			.setDate('2020-06-18')
			.navigationMenu.searchEvent(' ')
			.selectOrganization('Coursedog Team')
			.showingNumberOfResultsInformationIsCorrect(5)
			.eventCard.validateNumberOfDisplayedCards(5);
	});

	it('should check events by selecting date in the calendar', () => {
		homePage
			.setDate('2020-06-18')
			.calendar.selectDay(18)
			.eventCardIsDisplayed('QA Recruitment Task Start')
			.validateNumberOfDisplayedCards(1)
			.calendar.selectDay(19)
			.notificationIsDisplayed('No events found')
			.eventCardIsNotDisplayed();
	});
});
