const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Math.floor(Math.random() * 10000);

const app = new App();


describe('Profile Info:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

 it('should be able to change phone number', async function () {
   await app.authPage.logIn({
     email: 'john_admin1@admin.com',
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

   await browser.pause(5000); // delete
   
   await app.userProfilePage.editPhone({
     phone: `8000${rundomNumber()}00`,

   });




      
  
                 
   
   
   
   
   
   
   
   await browser.waitUntil(
      async function () {
        const inputPhoneNumber = await $$('a.styles_text__1HrCV');
        const inPhoneNumber = inputPhoneNumber[0];
        const phone = await inPhoneNumber.getText();
        return phone === phoneNumber;
      },
      { timeout: 5000 },
   );
   
    const inputPhoneNumber = await $$('a.styles_text__1HrCV');
        const inPhoneNumber = inputPhoneNumber[0];
        const phone = await inPhoneNumber.getText();
   expect(phone).to.be.eql(phoneNumber);
  });
});
   