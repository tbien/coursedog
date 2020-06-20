import { url } from '../config';

export default class BasePage {
	public homePageUrl: string = url;

	logInfo(message: string) {
		cy.log(message);
		return this;
	}

	setDesktop() {
		this.logInfo(`set screen resolution 1980x1080`);
		cy.viewport(1980, 1080);
		return this;
	}

	setDate(date: string) {
        this.logInfo(`set date as ${date}`);
		const now = new Date(date).getTime();
		cy.clock(now);
		return this;
	}
}
