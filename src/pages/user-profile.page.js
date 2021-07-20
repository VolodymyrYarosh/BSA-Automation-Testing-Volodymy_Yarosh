const { Button, Input } = require('../elements');

class UserProfilePage {
    constructor() {
        this.editProfileButton = new Button('button.styles_btn___s1BB', 1);
        this.phoneField = new Input('input[name="phone"]');
        this.editButton = new Button('button.styles_btn___s1BB', 4);

       // this.inputPhoneNumber = new Field ('a.styles_text__1HrCV', 0);
    
    }
    async editPhone({ phone }) {
        await this.editProfileButton.click();
        await this.phoneField.setValue(phone);
        await this.editButton.click();

       // await this.inputPhoneNumber.getText();
    }
}

module.exports = { UserProfilePage };