
<<<<<<< HEAD
const { expect } = require('chai');
const rundomNumber = () => Math.floor(Math.random() * 1000);
const { App } = require('../src/pages');

const app = new App();

describe('LogIn:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  xit('should be able to login', async function () {
    await app.authPage.logIn({
      email: 'john_admin1@admin.com',
      password: 'Pa55word'
    })

=======
const rundomNumber = () => Math.floor(Math.random() * 1000);

describe('Login:', function () {

  it('should be able to login', async function () {

    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
  
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
    await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/doctors';
       },
      { timeout: 5000 },
    );
<<<<<<< HEAD
    
    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
  
  xit('should not be able to login with invalid email', async function () {

   await app.authPage.logIn({
      email: 'john_admin451@admin.com',
      password: 'Pa55word'
    })
=======
    await browser.reloadSession();
  });

  
  it('should not be able to login with invalid email', async function () {

    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin${rundomNumber()}@admin.com`);
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('a55word');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 }
    );
<<<<<<< HEAD

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  });
});
=======
    await browser.reloadSession();
  });
});
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
