const { expect } = require('chai');

const rundomNumber = () => Math.floor(Math.random()*10000);
describe('editDoctor:', function () {

  it('should be able to Change Doctors specialty and clinic', async function () {

    await browser.setWindowSize(1366, 768);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
    await emailField.setValue('john_admin2@admin.com');
    await passwordField.setValue('Pa55word');
    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
    await browser.pause(5000);
   
    const pagesSection = await $$('a.link_link__3zEN3');
    const myProfile = pagesSection[3];
    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click();
    await browser.pause(5000);


    // my Profile
    const selectSpecialty = await $$('div.selectStyles__control');
    const specialty = selectSpecialty[0];
    const dantistOption = await $('div.selectStyles__option=dentist');
    const editButtonConfirmSpecialty = await $$('button.styles_btn___s1BB');
    const eButtonConfSpecialty = editButtonConfirmSpecialty[2];
    await specialty.waitForDisplayed({ timeout: 5000 });
    await specialty.click();
    await dantistOption.click();
  //  await browser.pause(5000);
    await eButtonConfSpecialty.waitForDisplayed({ timeout: 5000 });
    await eButtonConfSpecialty.click();
    await browser.pause(5000);

    // clinic
    const selectClinic = await $$('div.selectStyles__control');
    const clinic = selectClinic[1];
    const clinicOption = await $('#react-select-3-option-5');
    const editButtonConfirmClinic = await $$('button.styles_btn___s1BB');
    const eButtonConfClinic = editButtonConfirmClinic[3];
    await clinic.waitForDisplayed({ timeout: 5000 });
    await clinic.click();
    await clinicOption.click();
    await browser.pause(5000);
    await eButtonConfClinic.waitForDisplayed({ timeout: 5000 });
    await eButtonConfClinic.click();
    await browser.pause(5000);

   
//

 
    await browser.reloadSession();
  });
});
