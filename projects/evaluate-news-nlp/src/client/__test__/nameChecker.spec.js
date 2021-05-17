import { checkForUrl } from '../js/urlChecker';

describe('test checkForUrl method', () => {
  test('test if checkForUrl is defined', () => {
    expect(checkForUrl).toBeDefined();
  });

  test('test if checkForUrl return true for url', () => {
    const url = 'https://jamesclear.com/five-step-creative-process';
    expect(checkForUrl(url)).toBeTruthy();
  });

  test('test if checkForUrl return false for not url', () => {
    const url = 'Not url';
    expect(checkForUrl(url)).toBeFalsy();
  });
});