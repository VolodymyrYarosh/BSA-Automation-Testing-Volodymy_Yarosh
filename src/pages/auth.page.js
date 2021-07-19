const { Button, Input } = require('../elements');

class AuthPage {
  constructor() {
    this.usernameField = new Input('input[name="name"]');
    this.surnameField = new Input('input[name="surname"]');
    this.birthDateField = new Input('input[name="birthdate"]');
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');
    this.retryPasswordField = new Input('input[name="retypePassword"]');
    this.phoneField = new Input('input[name="phone"]');

    this.genderDdl = new Button('div.selectStyles__control', 0);
    this.statusDdl = new Button('div.selectStyles__control', 1);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.submitButton = new Button('button');
    this.profileButton = new Button('a.link_link__3zEN3', 3);
    this.editProfileButton = new Button('button.styles_btn___s1BB', 1);
    this.editButton = new Button('button.styles_btn___s1BB', 4);
  }

  async changeProfile({ email, password, phone }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.submitButton.click();
    await this.profileButton.click();
    await this.editProfileButton.click();
    await this.phoneField.setValue(phone);
    await this.editButton.click();
    }

  
  async logIn({ email, password }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.submitButton.click();
  }
    
  async register({ name, surname, birthDate, email, password, phone, status, gender }) {
    await this.usernameField.setValue(name);
    await this.surnameField.setValue(surname);
    await this.birthDateField.setValue(birthDate);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.retryPasswordField.setValue(password);
    await this.phoneField.setValue(phone);

    await this.genderDdl.click();
    await this.ddlOption.clickByText(gender);

    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);

    await this.submitButton.click();
  }
}

module.exports = { AuthPage };
