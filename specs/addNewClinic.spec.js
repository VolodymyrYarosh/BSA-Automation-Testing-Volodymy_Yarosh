// const { expect } = require('chai');

// const rundomNumber = () => Math.floor(Math.random()*10000);
// describe('addNewClinic:', function () {

//  xit('should be able to add New clinic', async function () {

//     await browser.setWindowSize(1366, 768);
//     await browser.url('/sign-in');

//     const emailField = await $('input[name="email"]');
//     const passwordField = await $('input[name="password"]');
//     const signInButton = await $('button');
//     await emailField.setValue('john_admin2@admin.com');
//     await passwordField.setValue('Pa55word');
//     await signInButton.waitForDisplayed({ timeout: 5000 });
//     await signInButton.click();
//     await browser.pause(5000);
//    // page clinic
//     const pagesSection = await $$('a.link_link__3zEN3');
//     const pageClinics = pagesSection[2];
//     await pageClinics.waitForDisplayed({ timeout: 5000 });
//     await pageClinics.click();
//     await browser.pause(5000);


//     // add clinic

//     const addClinicButton = await $$('button.styles_btn___s1BB')
//     const addButton = addClinicButton[1];
//     await addButton.waitForDisplayed({ timeout: 5000 });
//     await addButton.click();
//     await browser.pause(5000);

//     // clinic form
//     const clinicNameField = await $('input[name="name"]');
//     await clinicNameField.setValue(`Western Memorial${rundomNumber()}`);
//     await browser.pause(5000);

//     const clinicAddressField = await $('input[name="address"]');
//     await clinicAddressField.setValue(`Brookfield Ave${rundomNumber()}`);
//     await browser.pause(5000);

//     const addClinikStatus = await $$('div.selectStyles__value-container');
//     const clinikStatusField = addClinikStatus[0];
//     await clinikStatusField.click();
//     await browser.pause(5000);
    
//     const statusOption = await $$('div.selectStyles__option');
//     const option = statusOption[0];
//     await option.click();
//     await browser.pause(5000);

//     const addClinikCity = await $$('div.selectStyles__value-container');
//     const clinikCityField = addClinikCity[1];
//     await clinikCityField.click();
//     await browser.pause(5000);

//     const cityOption = await $$('div.selectStyles__option');
//     const city = cityOption[6];
//     await city.click();
//     await browser.pause(5000);

//     const addClinic = await $$('button.styles_btn___s1BB');
//     const add = addClinic[2]
//     await add.click();
//     await browser.pause(5000);

//    // 
 
//     await browser.reloadSession();
//   });
// });