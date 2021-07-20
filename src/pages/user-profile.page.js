const { Button, Input } = require('../elements');

class UserProfilePage {
    constructor() {
        this.editProfileButton = new Button('button.styles_btn___s1BB', 1);
        this.phoneField = new Input('input[name="phone"]');
        this.editButton = new Button('button.styles_btn___s1BB', 4);
    
    }
    async editPhone({ phone }) {
        await this.editProfileButton.click();
        await this.phoneField.setValue(phone);
        await this.editButton.click();
    }
}

module.exports = { UserProfilePage };