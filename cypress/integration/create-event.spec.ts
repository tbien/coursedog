import HomePage from '../page-objects/home-page';

describe('Create event test', () => {
	var homePage = new HomePage();
	var startDate: string = '2020-08-01';
	var endDate: string = '2020-08-02';

	beforeEach(() => {
		homePage.setDesktop().open();
	});

	it('should check event creation', () => {
		homePage.navigationMenu
			.selectCreatePublicEvent()
			.requestNewEventFormIsDisplayed()
			.isSubmitButtonDisabled()
			.setField('Email Address', 'tomasz.b@gmail.com')
			.setField('Event Name', 'Tomasz B')
			.setField('Start date', startDate)
			.setField('End date', endDate)
			.setFeaturedEventYes()
			.addMeeting()
			.setField('Start Date', startDate)
			.setField('End Date', endDate)
			.setField('Start Time', '13:00')
			.setField('End Time', '14:00')
			.clickSelectRoomButton()
			.selectFeatures('microphone')
			.searchForAvailableRooms()
			.availableRoomsAreDisplayed(4)
			.setField('Room name', 'Online')
			.searchForAvailableRooms()
			.availableRoomsAreDisplayed(1)
			.selectRoom('Online Chat')
			.isRoomSelected('Online Chat')
			.clickSubmitButton()
			.confirmationMessageIsDisplayed('Your event request has been submitted!');
	});
});
