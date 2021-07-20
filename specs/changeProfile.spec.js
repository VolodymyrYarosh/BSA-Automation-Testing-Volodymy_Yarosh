const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Math.floor(Math.random() * 10000);

const app = new App();


describe('Profile Info:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

 it('should be able to change phone number', async function () {
   await app.authPage.logIn({
     email: 'john_admin2@admin.com',
     password: 'Pa55word',
   });

    await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/doctors';
       },
      { timeout: 5000 },
    );

    await app.doctorsPage.openMyProfile({
     
    });

      
    await browser.pause(5000);
      
        await app.userProfilePage.editPhone({
          phone: `8000${rundomNumber()}003`,

          
        });

 
      
   
  //  await browser.waitUntil(
  //     async function () {
  //       const inputPhoneNumber = await $$('a.styles_text__1HrCV');
  //       const inPhoneNumber = inputPhoneNumber[0];
  //       const inPhone = await inPhoneNumber.getText();
  //       return inPhone === phone;
  //     },
  //     { timeout: 5000 },
  //  );
   
    // const inputPhoneNumber = await $$('a.styles_text__1HrCV');
    //     const inPhoneNumber = inputPhoneNumber[0];
    //     const phoneNumber = await inPhoneNumber.getText();
    // expect(phoneNumber).to.be.eql(phone);

  });
});
   