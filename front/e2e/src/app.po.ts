import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTerminalText(): Promise<string> {
    return element(by.css('fsdk-root pre')).getText() as Promise<string>;
  }
}
