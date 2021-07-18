const { expect } = require('chai');
<<<<<<< HEAD
const rundomNumber = () => Math.floor(Math.random() * 10000);
const { App } = require('../src/pages');

const app = new App();


=======

const rundomNumber = () => Math.floor(Math.random()*10000);
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
describe('Profile Info:', function () {

  it('should be able to change phone number', async function () {

    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
<<<<<<< HEAD
    const submitButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
    await submitButton.waitForDisplayed({ timeout: 5000 });
    await submitButton.click();
 
    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
=======
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');
  //  await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
    await browser.pause(5000);
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
   
    const pagesSection = await $$('a.link_link__3zEN3');
    const myProfile = pagesSection[3];
    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click();
<<<<<<< HEAD
      
      await browser.waitUntil(
      async function () {
        const editButton = await $$('button.styles_btn___s1BB');
         const eButton = editButton[1];
       
              
        return browser.waitForExist(eButton) == 'true'
      },
      { timeout: 5000 },
    );

    await eButton.waitForDisplayed({ timeout: 5000 });
    await eButton.click();
    
=======
    await browser.pause(5000);

    const editButton = await $$('button.styles_btn___s1BB');
    const eButton = editButton[1];
    await eButton.waitForDisplayed({ timeout: 5000 });
    await eButton.click();
   await browser.pause(5000);

    const phoneField = await $('input[name="phone"]');
    const phoneNumber = (`8000${rundomNumber()}00`);
   // await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue(phoneNumber);
   await browser.pause(5000);
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2

    const editButtonConfirm = await $$('button.styles_btn___s1BB');
    const eButtonConf = editButtonConfirm[4];
    await eButtonConf.waitForDisplayed({ timeout: 5000 });
    await eButtonConf.click();
<<<<<<< HEAD

=======
  await browser.pause(5000);


    
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
    await browser.waitUntil(
      async function () {
        const inputPhoneNumber = await $$('a.styles_text__1HrCV');
        const inPhoneNumber = inputPhoneNumber[0];
        const phone = await inPhoneNumber.getText();
        return phone === phoneNumber;
      },
      { timeout: 5000 },
      );
<<<<<<< HEAD

    const inputPhoneNumber = await $$('a.styles_text__1HrCV');
    const inPhoneNumber = inputPhoneNumber[0];
    const phone = await inPhoneNumber.getText();
    expect(phone).to.be.eql(phoneNumber);
  });
});
=======
      await browser.reloadSession();
  });
});
>>>>>>> 9eb8f4cd5d1d7885b3ec7861cb6a6bb427ad07b2
