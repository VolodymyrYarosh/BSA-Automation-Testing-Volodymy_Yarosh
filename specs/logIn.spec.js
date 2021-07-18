
const { expect } = require('chai');
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

    await browser.waitUntil(
       async function () {
         const url = await browser.getUrl();
         return url === 'http://46.101.234.121/doctors';
       },
      { timeout: 5000 },
    );
    
    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });
  
  xit('should not be able to login with invalid email', async function () {

   await app.authPage.logIn({
      email: 'john_admin451@admin.com',
      password: 'Pa55word'
    })

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 }
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  });
});
