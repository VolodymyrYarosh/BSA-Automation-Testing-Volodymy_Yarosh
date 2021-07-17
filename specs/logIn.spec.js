
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
  
    await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/doctors';
       },
      { timeout: 5000 },
    );
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


    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 }
    );
    await browser.reloadSession();
  });
});
